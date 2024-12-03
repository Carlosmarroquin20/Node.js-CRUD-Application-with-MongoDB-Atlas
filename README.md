# Node.js CRUD Application with MongoDB Atlas

This is a basic Node.js application demonstrating CRUD operations (Create, Read, Update, Delete) with a `reviews` collection. The project uses MongoDB Atlas as the database, and Express for building RESTful APIs. It's an excellent starting point for learning how to integrate MongoDB with Node.js.

## 🚀 Features
- REST API for managing reviews
- MongoDB Atlas integration
- Environment variables for secure configuration
- Basic CRUD operations
- Easy-to-understand structure for beginners

## 🛠️ Technologies Used
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## 📂 Project Structure
```
Node.js-CRUD-Application-with-MongoDB-Atlas/
│
├── .env               # Environment variables (not included in the repo)
├── .gitignore         # Files and directories to ignore in Git
├── package.json       # Dependencies and project metadata
├── server.js          # Main server file
└── models/
    └── review.js      # Mongoose schema for reviews
```

## ⚙️ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Carlosmarroquin20/Node.js-CRUD-Application-with-MongoDB-Atlas.git
   cd Node.js-CRUD-Application-with-MongoDB-Atlas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=4000
   MONGODB_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/<your-database>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The API will run on `http://localhost:4000`.

## 📋 API Endpoints

### 1. **Create a Review**
   - **Endpoint:** `POST /reviews`
   - **Body Example (JSON):**
     ```json
     {
       "user": "User123",
       "rating": 5,
       "comment": "Great product!"
     }
     ```

### 2. **Get All Reviews**
   - **Endpoint:** `GET /reviews`

### 3. **Get a Review by ID**
   - **Endpoint:** `GET /reviews/:id`

### 4. **Update a Review**
   - **Endpoint:** `PUT /reviews/:id`
   - **Body Example (JSON):**
     ```json
     {
       "rating": 4,
       "comment": "Updated: Good product"
     }
     ```

### 5. **Delete a Review**
   - **Endpoint:** `DELETE /reviews/:id`

## 🤝 Contributing
Feel free to fork this repository and contribute! Suggestions, bug reports, and pull requests are welcome.

## 📝 License
This project is licensed under the MIT License.

---

**Created by:** Carlos Emanuel ([GitHub Profile](https://github.com/Carlosmarroquin20))

