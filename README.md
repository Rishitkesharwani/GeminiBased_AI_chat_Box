# GeminiBased_AI_chat_Box

## Project Structure

GeminiBased_AI_chat_Box/ │ ├── frontend/ │ ├── llm-copilot/ # React app for the frontend │ │ ├── public/ │ │ ├── src/ │ │ │ ├── components/ # React components │ │ │ │ ├── InputBox.jsx │ │ │ │ ├── Navbar.jsx │ │ │ │ ├── ResultCard.jsx │ │ │ ├── App.js │ │ │ ├── index.js │ │ │ ├── styles.css │ │ ├── package.json │ ├── backend/ │ ├── app.py # Python Flask app │ ├── requirements.txt # Backend dependencies │ ├── .env # Environment variables │ └── README.md


## Getting Started

### 1. Set up the Frontend (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
npx create-react-app llm-copilot
cd llm-copilot
npm start

npm install axios react-router-dom
npm start

cd ..
mkdir backend
cd backend

python -m venv venv

.venv\Scripts\activate
pip install flask openai flask-cors python-dotenv



