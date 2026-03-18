# 💰 Finance Tracker App

A simple and intuitive **Finance Tracker** web application to manage your income, expenses, and budget efficiently. This app helps users keep track of their financial activities and maintain better control over their spending.

🔗 **Live Demo:**
https://vercel.com/raufur-swes-projects/finance-tracer/756jJZKEeUV2TgzRfayRSLTBbtka

---

## 🚀 Features

* 🔐 **Authentication System**

  * User Sign Up & Login
  * Persistent login using Redux Persist

* 💵 **Income & Expense Tracking**

  * Add income and expenses easily
  * Categorize transactions

* 📊 **Real-time Balance Calculation**

  * Automatically updates total balance
  * Tracks remaining budget dynamically

* 📁 **Category Management**

  * Predefined categories
  * Easily extendable for future categories

* 📋 **Transaction History**

  * View all expenses in a table format
  * Scrollable UI for better usability

* 📈 **Budget Tracker (Progress System)**

  * Visual tracking of spending vs balance
  * Percentage-based usage (e.g., 20%, 50%, etc.)

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **State Management:** Redux Toolkit
* **Persistence:** Redux Persist
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

---

## 📂 Project Structure

```
src/
│── components/       # Reusable UI components
│── pages/            # Page components (Home, Login, Signup)
│── redux/            # Redux slices & store
│── features/         # Feature-based logic (budget, auth)
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

---

## 🧠 How It Works

* User authentication data is stored using **Redux Persist**
* Expenses and categories are managed via **Redux slices**
* UI updates automatically based on global state
* Budget tracker calculates percentage based on:

  ```
  (Total Expenses / Total Balance) * 100
  ```

---

## ⚠️ Known Issues

* After signup, user may be redirected directly to home (can be improved with proper auth flow)
* Login validation may show "user not found" issue (needs fix in auth logic)

---

## 🔮 Future Improvements

* ✅ Edit & delete transactions
* 📊 Charts & analytics (Pie / Bar charts)
* 🌙 Dark mode support
* ☁️ Backend integration (Firebase / Node.js)
* 🔔 Notifications for budget limits

---

## 🙌 Contribution

Feel free to fork this project and submit pull requests. Contributions are always welcome!

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

Developed by **Raufur** 🚀
Learning and building step by step 💪
