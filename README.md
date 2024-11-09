# Anime Hub Backend 🌌

![AnimeHub Banner](public/anime_hub.jpg)

> Your personalized gateway to the anime world! Anime Hub Backend provides a seamless, data-driven foundation for your anime and manga experience on [Anime Hub](https://github.com/IgnacioBarraza/AnimeHub). 

Powered by **Node.js**, **Express**, **TypeScript**, and **MongoDB**, the backend handles user preferences, reviews, and custom lists so you can focus on following and favoriting the anime and manga you love!

---

## 📋 Table of Contents
- [Anime Hub Backend 🌌](#anime-hub-backend-)
  - [📋 Table of Contents](#-table-of-contents)
  - [📚 Project Overview](#-project-overview)
    - [🔥 Anime and Manga Highlights](#-anime-and-manga-highlights)
  - [🚀 Installation and Setup](#-installation-and-setup)
  - [🛠 Environment Variables](#-environment-variables)
  - [🌐 Endpoints and Usage](#-endpoints-and-usage)
    - [🔑 **Authentication Endpoints**](#-authentication-endpoints)
  - [💻 Technologies Used](#-technologies-used)
  - [🤝 Contributing](#-contributing)
  - [📜 License](#-license)

---

## 📚 Project Overview

Anime Hub is designed for the ultimate anime enthusiast. While the frontend retrieves detailed data directly from **AniList** and **MangaDex**, the backend handles:
- User preferences (e.g., favorite anime/manga, following lists)
- User reviews and personalized feedback on titles
- User authentication and profiles

### 🔥 Anime and Manga Highlights
*Imagine diving into fan favorites like "Attack on Titan," "My Hero Academia," or classic manga series like "Naruto" and "One Piece," all curated and personalized in your Anime Hub account!*

![Favorites](assets/favorites.png)

*The backend helps manage your collection and tracks your most-watched titles.*

---

## 🚀 Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/IgnacioBarraza/AnimeHub.git
   cd AnimeHub
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Create a `.env` file in the root directory:
     ```plaintext
     PORT=port_of_preference
     MONGO_URI=your_mongodb_connection_string
     NODE_ENV=development
     ```
   
4. **Running the Project**
   - **Development Mode**:
     ```bash
     npm run dev
     ```
   - **Production Build**:
     ```bash
     npm run build
     npm start
     ```

---

## 🛠 Environment Variables

| Variable           | Description                                     |
|--------------------|-------------------------------------------------|
| `PORT`             | Port for the server (default: 5000)            |
| `MONGO_URI`        | MongoDB connection string                      |
| `NODE_ENV`         | Sets the environment mode (e.g., `development`) | 

---

## 🌐 Endpoints and Usage

### 🔑 **Authentication Endpoints**
| Method | Endpoint           | Description                                 |
|--------|---------------------|---------------------------------------------|
| `POST` | `/auth/register`   | Register a new user account                |
| `POST` | `/auth/login`      | User login with JWT generation             |

<!-- ### ❤️ **User Preferences Endpoints**
Personalize your Anime Hub experience! Save and manage favorites, follow series, and revisit reviews.
| Method | Endpoint                       | Description                                         |
|--------|--------------------------------|-----------------------------------------------------|
| `GET`  | `/preferences/favorites`       | View user’s favorite anime and manga                |
| `POST` | `/preferences/favorites`       | Add a title to the user’s favorite list             |
| `DELETE` | `/preferences/favorites/:id` | Remove a title from favorites by ID                 |
| `GET`  | `/preferences/following`       | View followed anime/manga series                    |
| `POST` | `/preferences/following`       | Add a series to the user’s following list           |
| `DELETE` | `/preferences/following/:id` | Remove a title from following list by ID            |

### 📝 **Reviews Endpoints**
| Method | Endpoint               | Description                                |
|--------|-------------------------|--------------------------------------------|
| `POST` | `/reviews`             | Add a user review for an anime or manga    |
| `GET`  | `/reviews/:id`         | Retrieve reviews for a specific title      |
| `DELETE` | `/reviews/:reviewId` | Delete a user’s review by review ID        |

*For instance, post your thoughts on the latest season of **Demon Slayer** or comment on a recent manga arc of **Chainsaw Man**!*  

> **Note**: Some endpoints require authentication with JWT.   -->

---

## 💻 Technologies Used

| Technology   | Purpose                                     |
|--------------|---------------------------------------------|
| **Node.js**  | Server runtime                              |
| **Express**  | Web framework for API development           |
| **TypeScript** | Enhanced JavaScript with static typing    |
| **MongoDB**  | NoSQL database for user preferences         |
| **JWT**      | JSON Web Tokens for secure user sessions    |

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`feature/YourFeatureName`)
3. Commit your changes
4. Open a Pull Request for review

All contributions are welcome! Whether you want to enhance functionality or add new features, join us in making Anime Hub better for fans worldwide.

---

## 📜 License

This project is licensed under the MIT License.

---

For additional details, usage, or community support, feel free to visit the [Anime Hub GitHub repository](https://github.com/IgnacioBarraza/AnimeHub). We look forward to seeing how you customize your anime and manga experience with Anime Hub!