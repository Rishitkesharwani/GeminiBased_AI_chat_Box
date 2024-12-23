import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow CORS for all origins

# Set Gemini API key from environment
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

@app.route('/process-query', methods=['POST'])
def process_query():
    # Get the request JSON
    data = request.get_json()
    query = data.get('query', '')

    if not query:
        return jsonify({'error': 'Query is missing'}), 400

    try:
        # Log the query for debugging
        print("Received query:", query)

        # Gemini API call setup
        headers = {
            'Content-Type': 'application/json'
        }

        # Prepare the payload for the API request
        payload = {
            "contents": [{"parts": [{"text": query}]}]
        }

        # Send the request to the Gemini API
        response = requests.post(
            GEMINI_API_URL,
            headers=headers,
            params={'key': GEMINI_API_KEY},
            json=payload
        )

        # Log the full response from Gemini for debugging
        print("Gemini API Response:", response.json())  # Log the complete response

        # Handle the response
        if response.status_code == 200:
            # Extract the response text from the correct structure
            candidates = response.json().get('candidates', [])
            if candidates:
                result = candidates[0].get('content', {}).get('parts', [{}])[0].get('text', '')
                print("Gemini Response:", result)

                # Log the final response to be sent to the frontend
                print("Sending response to frontend:", result)
                return jsonify({'response': result})
            else:
                return jsonify({'error': 'No candidates found in the Gemini response'}), 500
        else:
            print("Gemini API Error:", response.status_code, response.text)
            return jsonify({'error': 'Failed to process query with Gemini'}), response.status_code
    except Exception as e:
        print("Error during Gemini API call:", str(e))
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
