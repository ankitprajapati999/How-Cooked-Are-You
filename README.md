# 🧠 How Cooked Are You? – Fun Quiz Project

A small web-based quiz project built while learning JavaScript and frontend basics.
The idea is simple: answer a set of chaotic questions and find out **how cooked you are**.

This project was mainly created as a **learning exercise** to practice working with JavaScript logic, DOM manipulation, browser storage, and multi-page interaction in a simple frontend environment.

---

## 🚀 Features

* Interactive quiz with multiple choice questions
* Score calculation based on selected answers
* Result page with custom messages depending on the score
* Local leaderboard stored in the browser using `localStorage`
* Share button to copy your result text
* Multi-page flow (`landing → quiz → results`)
* Simple but clean UI using HTML and CSS

---

## 🛠️ Tech Stack

* **HTML5** – Page structure
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Logic, scoring, and leaderboard
* **localStorage API** – Browser-side leaderboard persistence

No frameworks were used. The goal was to understand **core frontend fundamentals**.

---

## 📂 Project Structure

```
project-root
│
├── land.html
├── quiz.html
├── results.html
│
├── css
│   ├── land.css
│   ├── quiz.css
│   └── results.css
│
├── js
│   ├── quiz.js
│   ├── results.js
│   └── leaderboard.js
│
└── LICENSE
```

---

## 🎮 How It Works

1. User enters the quiz page.
2. Questions and options are presented.
3. Each selected option contributes to a **score value**.
4. After completion the user is redirected to the **results page**.
5. The score is passed using **URL parameters**.
6. The result page:

   * Shows the score
   * Displays a “cook level” message
   * Stores the score in the **leaderboard**
7. Leaderboard data is stored in **browser localStorage**.

---

## 📊 Leaderboard System

Scores are stored as objects:

```javascript
{
  username: "playerName",
  score: 120
}
```

The leaderboard is:

* saved in `localStorage`
* sorted by score
* rendered dynamically in the results page

Since it uses browser storage, each user has **their own local leaderboard**.

---

## 🎯 Purpose of This Project

This project was built as a **small experimental learning project** to practice:

* JavaScript logic
* DOM manipulation
* handling URL parameters
* working with browser storage
* dynamic UI rendering

Think of it as a **mini playground for frontend fundamentals**.

---

## ⚡ Future Improvements

Possible upgrades:

* Global leaderboard using a backend
* Animations and UI polish
* More questions and dynamic question loading
* Social sharing links
* Player avatars or badges

---

## 📜 License

This project is released under the MIT License.

---

## ✨ Author

Created by **Ankit Prajapati**
as a small experimental project while learning frontend development.
