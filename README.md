# 🎓 Student MVC REST API

A professional RESTful API built with **Node.js, Express.js, MongoDB, Mongoose, and MVC architecture**.

This project was built as a practical learning project to understand how a real-world Node.js backend can be structured using **Models, Controllers, Routes, Middleware, Validation, Error Handling, and Environment Variables**.

---

## 🚀 Features

- ✅ MVC Architecture
- ✅ RESTful API
- ✅ Create Student
- ✅ Get All Students
- ✅ Get Student by ID
- ✅ Update Student
- ✅ Delete Student
- ✅ Mongoose Schema & Model
- ✅ Data Validation
- ✅ Validation Middleware
- ✅ Request Logger Middleware
- ✅ Centralized Error Handling
- ✅ HTTP Status Codes
- ✅ Environment Variables with `.env`
- ✅ MongoDB Database Integration
- ✅ Postman API Testing

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JavaScript**
- **Postman**
- **Git & GitHub**

---

## 📁 Project Structure

```text
student-mvc-api
│
├── controllers
│   └── studentController.js
│
├── middleware
│   ├── logger.js
│   ├── validateStudent.js
│   └── validateStudentUpdate.js
│
├── models
│   └── Student.js
│
├── routes
│   └── studentRoutes.js
│
├── utils
│   └── errorHandler.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🔄 MVC Architecture

The application follows this basic flow:

```text
Client
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Model
   ↓
MongoDB
```

### Model

Handles the database structure and Mongoose interaction.

### Controller

Contains the application logic for student operations.

### Route

Defines the API endpoints and connects requests to controllers.

### Middleware

Performs tasks such as logging and request validation before the controller executes.

### Utils

Contains reusable utility functions such as centralized error handling.

---

## 📌 API Endpoints

### Get All Students

```http
GET /students
```

Returns all students.

---

### Create Student

```http
POST /students
```

Example request:

```json
{
  "name": "Ahmed",
  "age": 21,
  "department": "Computer Science"
}
```

---

### Get Student by ID

```http
GET /students/:id
```

---

### Update Student

```http
PUT /students/:id
```

Example:

```json
{
  "age": 22
}
```

---

### Delete Student

```http
DELETE /students/:id
```

---

## ✅ Validation

The project validates student data using Mongoose and custom middleware.

Example invalid data:

```json
{
  "name": "",
  "age": -10,
  "department": ""
}
```

The API returns:

```text
400 Bad Request
```

---

## ⚠️ Error Handling

The project handles different API situations using appropriate HTTP status codes.

| Status Code | Meaning                            |
| ----------- | ---------------------------------- |
| 200         | Successful request                 |
| 201         | Resource created                   |
| 400         | Invalid request / validation error |
| 404         | Student not found                  |
| 500         | Unexpected server error            |

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

The `.env` file is intentionally excluded from GitHub using `.gitignore`.

**Never expose your database credentials publicly.**

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/junaidmukhtar152/student-mvc-api.git
```

Move into the project:

```bash
cd student-mvc-api
```

Install dependencies:

```bash
npm install
```

Create your `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the server:

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

---

## 🧪 Testing

The API was tested using **Postman**.

Tested operations include:

- GET all students
- POST student
- GET student by ID
- PUT student
- DELETE student
- Validation errors
- Invalid update requests
- Student not found errors

---

## 🎯 Learning Goals

This project helped me strengthen my understanding of:

- Node.js backend development
- Express.js
- MVC architecture
- REST APIs
- MongoDB
- Mongoose
- CRUD operations
- Middleware
- Validation
- Error handling
- Environment variables
- API testing
- Git and GitHub

---

## 👨‍💻 Author

**Junaid Mukhtar**

BS Software Engineering Student
GC University Faisalabad

GitHub: [@junaidmukhtar152](https://github.com/junaidmukhtar152)

---

## ⭐ If You Find This Project Useful

Feel free to explore the code, learn from it, and give the repository a star.
