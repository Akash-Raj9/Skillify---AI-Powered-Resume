# 🧠 Skillify – AI Powered Resume Builder

<p align="center">
  <a href="https://skillify-ai-powered-resume-w5ac.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Skillify-purple?style=for-the-badge&logo=vercel&logoColor=white" alt="Skillify Live Demo"/>
  </a>
</p>

**Skillify** is an intelligent, modern resume builder powered by **AI**. It helps users craft professional resumes with smart content suggestions, ATS-friendly formatting, and seamless PDF downloads — all within a beautifully responsive interface.

---

## 🚀 Features

### 👩‍💼 User Side
- 🔑 Secure Login & Signup (JWT authentication)  
- 🧠 AI-powered resume content generation (summaries, skills, descriptions)  
- 📝 Interactive resume editor with live preview  
- 💾 Save, edit, and manage multiple resumes  
- 📥 Download resumes in PDF format (via **ImageKit**)  
- 📱 Fully responsive UI for mobile and desktop  

### 🛠️ Admin Side
- 📊 View and manage user accounts  
- 📂 Manage templates, user feedback, and resume data  
- 🔐 Secure admin authentication  

---

## 🧩 Tech Stack

| Layer        | Technologies                        |
|--------------|-----------------------------------|
| Frontend     | React.js, Tailwind CSS             |
| Backend      | Node.js, Express.js                |
| Database     | MongoDB                            |
| Authentication | JWT (JSON Web Tokens)             |
| File Handling | ImageKit (for PDF generation/downloads) |
| AI Integration | OpenAI API / LangChain (for text generation) |
| Deployment   | Vercel (Frontend), Render (Backend) |

---

## ⚡ Installation

### Prerequisites
- Node.js & npm installed  
- MongoDB Atlas or local MongoDB setup  
- ImageKit account (for resume download)  
- OpenAI API Key (for AI generation features)

### Steps

Clone the repository  
```bash
git clone https://github.com/Akash-Raj9/Skillify---AI-Powered-Resume.git
Enter the project directory

cd Skillify---AI-Powered-Resume


Install backend dependencies

cd server
npm install


Install frontend dependencies

cd ../client
npm install


Run backend server

cd ../server
npm run dev


Run frontend in development mode

cd ../client
npm start


Open your browser and visit http://localhost:3000

🌍 Deployment

Frontend deployed on Vercel → https://skillify-ai-powered-resume-w5ac.vercel.app/

Backend deployed on Render or preferred cloud service.

📁 Project Structure
Skillify---AI-Powered-Resume/
├── client/             # React frontend source code
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── styles/
├── server/             # Node.js + Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── config/
├── README.md
└── .env                # Environment variables (DB, JWT, API keys)

/assets/screenshots/dashboard.png
/assets/screenshots/resume-builder.png
/assets/screenshots/ai-suggestions.png

🧭 Future Enhancements

✨ Add multiple resume templates

🤖 Improve AI for better job-tailored suggestions

📊 Add analytics dashboard for user activity

🗂️ Allow importing data from LinkedIn / GitHub

💬 Add feedback & version history for resumes

👨‍💻 Author

Akash Raj
🚀 B.Tech CSE Student || Full Stack Developer
GitHub: Akash-Raj9

LinkedIn: linkedin.com/in/akash-raj

<p align="center">Made with ❤️, ☕, and 💡 by <b>Akash Raj</b></p>
🙏 Acknowledgements

MongoDB Atlas
 – Cloud Database

Vercel
 – Frontend Hosting

Render
 – Backend Hosting

ImageKit
 – Resume Image & PDF Handling

OpenAI
 – AI Text Generation

Tailwind CSS
 – Modern UI Styling