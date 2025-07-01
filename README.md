# 🏗️ Real Trust Web App

A fullstack project built using **Next.js**, **Express.js**, **MongoDB**, and **Tailwind CSS**.  
It includes a responsive landing page, admin dashboard, image cropping, and live API integration.

---

## 🚀 Features

### 🌐 Landing Page
- ✅ View “Our Projects” (from MongoDB)
- ✅ View “Happy Clients” (client feedback)
- ✅ Contact form (name, email, city, mobile)
- ✅ Newsletter subscription (email)

### 🔐 Admin Dashboard
- 🔧 Manage Projects (add, crop image, view)
- 🔧 Manage Clients (add, crop image, view)
- 📩 View Contact Form Submissions
- 📨 View Newsletter Subscribers

### 🖼️ Image Upload + Cropping
- Images uploaded from admin
- Cropped to **450x350px** using `sharp`
- Stored in `/uploads` and served via Express

---

## 🛠️ Tech Stack

| Layer        | Tech               |
|--------------|--------------------|
| Frontend     | Next.js 15, Tailwind CSS |
| Backend      | Express.js + Node.js |
| Database     | MongoDB Atlas      |
| Image Upload | Multer + Sharp     |
| Hosting      | Vercel (client) + Render (server) |

---

## 🔧 Local Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/real-trust-web-app.git
cd real-trust-web-app

