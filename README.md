# GeminiBased_AI_chat_Box

## Project Structure

llm-auto-browsing-copilot/
│
├── frontend/
│   ├── llm-copilot/          # React app for the frontend
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/   # React components
│   │   │   │   ├── InputBox.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── ResultCard.jsx
│   │   │   ├── App.js
│   │   │   ├── index.js
│   │   │   ├── styles.css
│   │   ├── package.json
│
├── backend/
│   ├── app.py                # Python Flask app
│   ├── requirements.txt      # Backend dependencies
│   ├── .env                  # Environment variables


## Getting Started

### 1. Set up the Frontend (React)

Navigate to the frontend directory:
   - cd frontend
 Install package
-npx create-react-app llm-copilot
- cd llm-copilot

# Run the frontend part
- npm start
  
# Make Directory For Backend 
- cd
- mkdir backend
- cd backend

# Create the virtual enviornment 
- python -m venv venv

# Activate the Environment 
- .venv\Scripts\activate

#  Install Package for the Backend 
-pip install flask openai flask-cors python-dotenv

# Run Backend by
- Python App.py (Make sure Virtual Environment is activated while doing this)
