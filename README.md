# 🤝 Sahayogi Sauda

**Live Demo**: [https://sahayogi-sauda-frontend.vercel.app/](https://sahayogi-sauda-frontend-guup.vercel.app/)

---

## 💡 Inspiration & Problem Statement

India's vibrant street food scene is powered by millions of dedicated vendors. However, behind every delicious plate lies a daily struggle: sourcing raw materials. Vendors operate in a fragmented and inefficient supply chain, often forced to buy small quantities at high retail prices. This lack of a structured system eats into their profits and limits their potential for growth.

This project was built for the **Web Hackathon** to address this real-world challenge:

> "In India, street food vendors have a problem with bringing in raw materials from trusted and cheap vendors."

---

## ✨ Our Solution

**Sahayogi Sauda** (meaning *"Collaborative Deals"*) is a hyper-local, web-based platform designed to empower vendors. Our solution focuses on a specific, high-impact niche: **group buying**.

By allowing vendors in the same market area to pool their daily requirements for perishable goods (like onions, potatoes, etc.), they can place bulk orders directly with suppliers. This collective bargaining power unlocks significant cost savings, ensures better quality, and builds a stronger, more resilient local community.

---

## 🚀 Key Features

### 🔹 For Vendors
- **Join & Create Deals**: Browse active group deals in your market or create a new one.
- **Real-Time Progress**: Watch the deal's progress bar fill as other vendors join.
- **Live Order Tracking**: Track your deals from 'Active' to 'Confirmed' in the **My Deals** section.
- **Automatic Updates**: Dashboard auto-refreshes every 10 seconds.
- **Archive Functionality**: Clean up by archiving fulfilled orders.

### 🔹 For Suppliers
- **Fulfillment Dashboard**: View a list of ready-to-fulfill group deals.
- **One-Click Confirmation**: Accept deals and notify vendors instantly.
- **Accepted Orders Log**: Maintain a history of confirmed and fulfilled deals.

---

## 🛠️ Tech Stack

| Tech Area  | Stack Used                 |
|------------|----------------------------|
| **Frontend** | React (Vite)              |
| **Backend**  | Node.js + Express         |
| **Database** | MongoDB Atlas             |
| **Styling**  | Tailwind CSS              |
| **Deployment** | Vercel (Frontend) & Render (Backend) |

---

## 🔗 GitHub Repositories

- **Frontend**: [sahayogi-sauda-frontend](https://github.com/pratyushpanda91/sahayogi-sauda-frontend)
- **Backend**: [sahayogi-sauda-backend](https://github.com/pratyushpanda91/sahayogi-sauda-backend)

---



## ⚙️ Local Setup and Installation

### 1. Backend Setup

```bash
# Navigate to project root
cd sahayogi-sauda-backend

# Install dependencies
npm install

# Create a .env file and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret

# Start the server
npm start



# The backend runs on: http://localhost:5002
```
### 2. Frontend Setup
```bash
Copy
Edit
# Navigate to client folder
cd sahayogi-sauda-frontend

# Install dependencies
npm install

# Create a .env file and add:
VITE_API_URL=http://localhost:5002/api

# Start the dev server
npm run dev

```
###☁️ Deployment
## Backend: Hosted on Render as a web service, connected to the backend GitHub repo.

## Frontend: Hosted on Vercel, connected to the frontend GitHub repo.

Environment variables on both platforms are configured to connect backend and frontend.

👨‍💻 Author
Pratyush Panda
