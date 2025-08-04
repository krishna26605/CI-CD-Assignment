# 🚀 Simple Node.js App with CI/CD using GitHub Actions & Docker

This is a simple Node.js application built with Express, containerized using Docker, and deployed via GitHub Actions to Docker Hub. It's developed as part of a DevOps CI/CD assignment.

---

## 📁 Project Structure
├── app.js # Main Express app
├── package.json # Project metadata and dependencies
├── Dockerfile # Docker container configuration
└── .github/workflows/
└── deploy.yml # GitHub Actions CI/CD pipeline



---

## 🛠 Tech Stack

- **Node.js + Express** – Backend Web Server
- **Docker** – Containerization
- **GitHub Actions** – CI/CD automation
- **Docker Hub** – Container Registry

---

## ✅ Features

- Simple REST API with 3 routes:
  - `/` → Welcome message
  - `/about` → About information
  - `/status` → Health status and uptime
- Containerized with Docker
- CI/CD pipeline to automatically build and push image on every push to `main`
- Ready for deployment (optionally to Kubernetes)

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/krishnanikam/simple-node-app.git
cd simple-node-app
npm install
npm start
