
# Online Auction Backend

This is the backend for the Online Auction project, built using the **MERN stack**. It provides APIs for user authentication, auction creation, bidding, and more. The backend is developed with **Node.js**, **Express**, and **MongoDB**, utilizing **Mongoose** for database interaction.

---

## Features
- User authentication (register/login).
- CRUD operations for auctions and bids.
- Secure payment integration with **Paymob**.
- RESTful API design.
- Scalable and modular architecture.

---

## Prerequisites
- **Node.js**: Install from [nodejs.org](https://nodejs.org).
- **MongoDB**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud) or a local MongoDB server.
- **Git**: For version control.

---

## Installation
1. **Clone the repository**:

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory:
     ```plaintext
     MONGO_URI=<your-mongodb-connection-string>
     PORT=3000
     PAYMOB_API_KEY=<your-paymob-api-key>
     ```
   - Replace `<your-mongodb-connection-string>` with your MongoDB connection string.
   - Replace `<your-paymob-api-key>` with your Paymob API key.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## Folder Structure
```plaintext
online-auction-backend/
├── config/
│   └── db.js           # Database connection
├── controllers/
│   └── userController.js # Handles user-related logic
├── middlewares/
│   └── authMiddleware.js # Handles authentication
├── models/
│   └── User.js          # Mongoose schema for users
├── routes/
│   └── userRoutes.js    # API routes for users
├── .env                # Environment variables
├── .gitignore          # Ignored files/folders
├── package.json        # Project dependencies
├── server.js           # Entry point of the app
```

---

## API Endpoints
### **User Routes**
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Authenticate a user.

### **Auction Routes**
- `POST /api/auctions`: Create a new auction.
- `GET /api/auctions`: List all auctions.
- `PUT /api/auctions/:id`: Update an auction.
- `DELETE /api/auctions/:id`: Delete an auction.

---

## Technologies Used
- **Node.js**: JavaScript runtime.
- **Express**: Backend framework.
- **MongoDB**: Database for storing data.
- **Mongoose**: MongoDB object modeling library.
- **Dotenv**: For managing environment variables.
- **Paymob**: Payment gateway integration.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Contact
For any questions or suggestions, please contact:
- **Email**: youssef.hussain9000@gmail.com
- **GitHub**: [youssefescobar](https://github.com/youssefescobar)
```
