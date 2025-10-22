# 🚀 Gurekam's Portfolio

Welcome to the repository for **Gurekam Singh Bedi's** personal portfolio!  
This project showcases my skills, projects, and professional experience in a clean, modern, and interactive format.

---

## 📚 Table of Contents
- [🚀 Gurekam's Portfolio](#-gurekams-portfolio)
  - [📚 Table of Contents](#-table-of-contents)
  - [📌 Project Overview](#-project-overview)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [📁 Folder Structure](#-folder-structure)
- [🔮 Future Scope](#-future-scope)
  - [1. Add Container Existence Check](#1-add-container-existence-check)

---

<img width="1782" height="958" alt="image" src="https://github.com/user-attachments/assets/f9e5fd7e-6654-48b5-b1a2-5518e14d3d2b" />

## 📌 Project Overview

This portfolio is designed to highlight my professional journey, technical expertise, and personal projects.  
It serves as a platform to connect with potential employers, collaborators, and peers.

---

## 🛠️ Technologies Used

- ⚛️ **Frontend**: React + Vite
- 🎨 **Styling**: Tailwind CSS + Radix UI
- 🧰 **Tooling**: TypeScript, ESLint, React Query, React Router
- 🗂️ **Version Control**: Git + GitHub
- 🌐 **Hosting**: GitHub Pages

---

## 📁 Folder Structure

```plaintext
Gurekam-Portfolio/
│
├── public/                # 🖼️ Static assets (images, icons, etc.)
│   ├── favicon.ico        # 🌟 Site favicon
│
├── src/                   # 🧠 Source code
│   ├── components/        # 🧩 Reusable UI components
│   ├── pages/             # 📄 Main route pages
│   ├── styles/            # 🎨 Global and scoped styles
│   ├── App.tsx            # 🚦 Root App component
│   └── main.tsx           # 🔌 Entry point for React DOM
│
├── docs/                  # 📦 GitHub Pages build output
├── .gitignore             # 🙈 Git ignored files
├── package.json           # 📦 Project metadata & scripts
├── vite.config.ts         # ⚙️ Vite configuration
└── README.md              # 📘 You're here!

```

# 🔮 Future Scope

## 1. Add Container Existence Check
Enhance the **Run Container** stage to automatically detect if a container with the same name already exists.  
If found, stop and remove it before launching a new one to ensure a clean and consistent deployment.

**Example Script:**
```bash
if docker ps -a --format '{{.Names}}' | grep -Eq '^test-portfolio$'; then
  docker stop test-portfolio || true
  docker rm test-portfolio || true
fi
docker run -d -p 3000:80 --name test-portfolio gurekam22/gportfolio:latest
```
