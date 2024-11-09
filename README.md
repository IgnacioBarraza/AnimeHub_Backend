Here’s a revised `README.md` with the backend focus on managing user preferences for Anime Hub:

---

# Anime Hub Backend

The backend API for [Anime Hub](https://github.com/IgnacioBarraza/AnimeHub), a platform connecting anime and manga fans with their favorite series. This backend manages user accounts, preferences, and interactions, supporting user-specific data like favorite and followed anime/manga. The anime and manga data itself is retrieved directly on the frontend from the AniList and MangaDex APIs.

## 📋 Table of Contents
- [Anime Hub Backend](#anime-hub-backend)
  - [📋 Table of Contents](#-table-of-contents)
  - [📚 Project Information](#-project-information)
  - [🚀 Installation](#-installation)
  - [🛠 Environment Variables](#-environment-variables)
  - [🔌 Endpoints](#-endpoints)
    - [🔑 **Auth**](#-auth)
  - [🛠 Technologies Used](#-technologies-used)
  - [🤝 Contributing](#-contributing)
  - [📜 License](#-license)

---

## 📚 Project Information

The Anime Hub backend is responsible for storing user preferences, such as favorite anime/manga, following lists, and user reviews. This allows users to personalize their Anime Hub experience, maintaining their preferences across devices. All anime and manga data is fetched from AniList and MangaDex on the frontend, keeping this backend lightweight and focused on user data.

## 🚀 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/IgnacioBarraza/AnimeHub.git
   cd AnimeHub
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory:
     ```plaintext
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Run the Project**
   - For development:
     ```bash
     npm run dev
     ```
   - To build and start the project:
     ```bash
     npm run build
     npm start
     ```

---

## 🛠 Environment Variables

| Variable           | Description                          |
|--------------------|--------------------------------------|
| `PORT`             | Port for the server (default: 5000) |
| `MONGO_URI`        | MongoDB connection string           |
| `NODE_ENV`        | If it's dev or production instance           |

---

## 🔌 Endpoints

### 🔑 **Auth**
| Method | Endpoint           | Description                   |
|--------|---------------------|-------------------------------|
| `POST` | `/auth/register`   | Register a new user           |
| `POST` | `/auth/login`      | User login and JWT generation |

<!-- ### 👤 **User Preferences**
| Method | Endpoint                       | Description                                         |
|--------|--------------------------------|-----------------------------------------------------|
| `GET`  | `/preferences/favorites`       | Retrieve user's favorite anime and manga            |
| `POST` | `/preferences/favorites`       | Add to user's favorites                             |
| `DELETE` | `/preferences/favorites/:id` | Remove from user's favorites by anime/manga ID      |
| `GET`  | `/preferences/following`       | Retrieve user's followed anime and manga            |
| `POST` | `/preferences/following`       | Add to user's following list                        |
| `DELETE` | `/preferences/following/:id` | Remove from user's following list by anime/manga ID | -->

<!-- ### 📝 **Reviews**
| Method | Endpoint               | Description                     |
|--------|-------------------------|---------------------------------|
| `POST` | `/reviews`             | Add a review for anime or manga |
| `GET`  | `/reviews/:id`         | Fetch reviews for specific item |
| `DELETE` | `/reviews/:reviewId` | Delete a review by review ID    |

> **Note:** Some endpoints may require JWT authentication. -->

---

## 🛠 Technologies Used

- **Node.js** - Server runtime
- **Express** - API framework
- **TypeScript** - Typed JavaScript
- **MongoDB** - NoSQL database for user preferences and reviews
- **JWT** - JSON Web Tokens for authentication

---

## 🤝 Contributing

1. Fork this repository.
2. Create a new branch (`feature/YourFeatureName`).
3. Commit changes.
4. Open a Pull Request for review.

---

## 📜 License

This project is licensed under the MIT License.

--- 

This setup focuses on user-specific data, making it simple for others to understand the backend’s responsibilities within the Anime Hub project. Let me know if you'd like more details on any part!