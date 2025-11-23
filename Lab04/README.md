## 🧠 JavaScript Console Quiz Game

A simple and interactive Quiz Game built entirely using vanilla JavaScript, designed to run inside the browser console.
This project asks multiple-choice questions, checks user input, and calculates the final score.

---

## 📌 Project Overview

This quiz game runs inside the browser’s console using JavaScript prompts and alerts.
It asks a list of predefined questions, compares user answers, handles cancellation, and displays the final score.

The design focuses on:

Basic input/output using prompt() and alert()

Case-insensitive answer comparison using toLowerCase() and trim()

Looping through an array of question objects

Score tracking and feedback

All logic is implemented inside a single JavaScript file:
📄 lab4.js → 

lab4

---

## ✨ Features
✔ Predefined Questions

Stored in a structured array of objects:

{
  question: "What is the capital of India?",
  answer: "new delhi"
}

✔ Answer Validation

Converts user input to lowercase

Removes extra spaces

Ensures accurate comparison

✔ Score Tracking

Each correct answer increments the score.

✔ Exit Detection

If the user presses Cancel, the quiz stops safely.

✔ Final Score Summary

Displayed using a friendly alert message.

---

## 🧩 How It Works

The core logic is handled by:

🔹 The quizQuestions array

Contains all questions and their correct answers.

🔹 The runQuiz() function

Loops through questions

Prompts the user

Compares answers

Shows feedback

Displays final score

At the end of the file, the quiz runs automatically:

runQuiz();

---

## 🚀 How to Run the Quiz

Follow these simple steps:

1. Open your browser (Chrome recommended)

Right-click → Inspect → Console Tab

2. Load the script

You can do ANY of the following:

👉 Option A: Open the HTML file containing this script

Just include:

<script src="lab4.js"></script>

👉 Option B: Copy & Paste

Open lab4.js, copy all code, paste it directly into the DevTools console, and press Enter.

👉 Option C: Run using a local HTML shell

Create a simple HTML file:

<!DOCTYPE html>
<html>
<body>
<script src="lab4.js"></script>
</body>
</html>


Open it in your browser.

📁 File Used in This Project
File	Description
lab4.js	Main quiz logic, including questions, loop, and scoring system 

lab4

---

## 🔧 Tech Stack

JavaScript (ES6)

Browser Console

No external libraries required

---

## 📚 Learning Outcomes

This project helps practice:

JavaScript basics

Loops

Arrays and objects

Input handling

String manipulation

Conditional logic

Browser alerts & prompts

---

## 📬 Author


Name: Sansar Kumar

Roll No.: 2501350055

Course: B.Tech CSE (Full Stack Development)

Section: B

Subject: Web Development

#Lab Assignment-04 --- Prompt Quizzer - Quiz Game
