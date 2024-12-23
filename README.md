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

1. Navigate to the frontend directory:
   ```bash
   - cd frontend
2. npx create-react-app llm-copilot
- cd llm-copilot
- npm start

# 3. cd ..
- mkdir backend
- cd backend

# 4. python -m venv venv

# 5. .venv\Scripts\activate

# 6. pip install flask openai flask-cors python-dotenv
