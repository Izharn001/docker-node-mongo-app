# 🚀 Docker Node.js + MongoDB App

## 📌 Overview

This project is a **multi-container application** built using Docker and Docker Compose.

It includes:

* A **Node.js (Express) backend API**
* A **MongoDB database**
* A **CI pipeline using GitHub Actions**

The goal of this project was to gain hands-on experience with containerisation, service communication, and CI/CD workflows in a DevOps environment.

---

## 🧱 Tech Stack

* Node.js
* Express
* MongoDB
* Docker
* Docker Compose
* GitHub Actions (CI/CD)

---

## ⚙️ Features

* REST API with GET and POST endpoints
* MongoDB integration using Mongoose
* Persistent storage using Docker volumes
* Environment variable configuration via `.env`
* Multi-container orchestration with Docker Compose
* Automated Docker image build and push using CI/CD

---

## 📁 Project Structure

```
docker-node-mongo-app/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── docker-compose.yml
├── .github/workflows/
├── .env
└── README.md
```

---

## 🚀 How to Run

### 1. Clone the repository

```
git clone https://github.com/izharn001/docker-node-mongo-app.git
cd docker-node-mongo-app
```

### 2. Start the application

```
docker compose up --build
```

---

## 🌐 API Endpoints

### GET /

Returns a message confirming the API is running.

---

### GET /messages

Returns all saved messages.

---

### POST /messages

Create a new message:

```json
{
  "text": "hello"
}
```

---

## 🧪 Testing (Windows CMD)

### Create a message

```
curl -X POST http://localhost:3000/messages -H "Content-Type: application/json" -d "{\"text\":\"hello\"}"
```

### Retrieve messages

```
curl http://localhost:3000/messages
```

---

## 💾 Persistence

MongoDB data is stored using a Docker volume:

```
mongo-data
```

This ensures data persists even after containers are restarted.

---

## 🔐 Environment Variables

The application uses a `.env` file:

```
MONGO_URI=mongodb://mongo:27017/mydb
```

---

## 🔄 CI/CD Pipeline

This project includes a CI pipeline using GitHub Actions that:

* Builds the Docker image
* Authenticates with Docker Hub
* Pushes the image to Docker Hub

The pipeline is triggered on every push to the `main` branch.

---

## 🧠 Key Learnings

* Docker containerisation
* Multi-container architecture using Docker Compose
* Container networking (service-to-service communication)
* Persistent storage using volumes
* CI/CD automation with GitHub Actions

---

## 🚀 Future Improvements

* Add frontend service
* Implement authentication
* Deploy to cloud (AWS / Kubernetes)

---

## 👨‍💻 Author

Built by Izharn Mohammed as part of a DevOps learning journey.
