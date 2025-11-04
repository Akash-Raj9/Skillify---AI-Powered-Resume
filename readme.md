# Skillify — AI Powered Resume Builder

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
---

## 🚀 About Skillify

Skillify is an **AI-powered resume builder** that helps users create customized, professional resumes. It uses AI to suggest or generate content, format sections, and ensure your resume looks polished and up-to-date.

---

## 🔧 Tech Stack

| Layer        | Technologies               |
|--------------|-----------------------------|
| Frontend     | React, Tailwind CSS         |
| Backend      | Node.js, Express            |
| Database     | MongoDB                     |
| Authentication | JWT  |
| AI / Content | (using OpenAI Gemini 2.5 GPT model) |

---

## 📂 Folder Structure

Skillify---AI-Powered-Resume
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── styles/
│ └── package.json
├── server/ # Backend server
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── package.json
├── README.md
└── .gitignore

yaml
Copy code

---

## ✨ Features

- User authentication (signup / login)  
- Create / Edit Resume sections (Education, Skills, Experience, Projects…)  
- AI-powered content suggestions (e.g. rewording bullets, generating summary text)  
- Download / Export resume (PDF / DOCX)  
- Preview in different styles / templates  
- Responsive design (works on mobile / desktop)

---

## 💿 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Akash-Raj9/Skillify---AI-Powered-Resume.git
   cd Skillify---AI-Powered-Resume
Backend

bash
Copy code
cd server
npm install
# configure your environment variables (e.g. DB connection, JWT secrets, AI API key)
npm run dev   # or `node index.js` 
Frontend

bash
Copy code
cd ../client
npm install
npm start
Visit in browser


🌍 Deployment / Live Demo
Skillify Live Demo

🛣️ Future Roadmap
Add more resume templates

Integration with LinkedIn / GitHub profile import

Version history / Multiple resumes per user

More AI-features: tonal adjustment, keyword optimization for ATS

Team / Collaboration features

👤 Author
Akash Raj
GitHub • LinkedIn • Portfolio