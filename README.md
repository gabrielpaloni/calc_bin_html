# 💻 Binary Operations Calculator

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![UI](https://img.shields.io/badge/UI-Custom_CSS-264de4?style=for-the-badge&logo=css3)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

A specialized tool designed for performing arithmetic operations directly in base 2. This calculator features a modern, fluid interface with real-time visual feedback, making binary math accessible and intuitive.

---

## 📘 Overview

**Objective:**
To provide an efficient way to perform binary addition and multiplication, validating inputs in real-time to ensure mathematical accuracy within the binary system.

### 🎯 Key Features
* **Binary Addition:** Accurate summing of two binary strings with automated base conversion logic.
* **Binary Multiplication:** Seamless multiplication of binary values.
* **Input Validation:** Built-in Regex (Regular Expressions) to detect and alert users of invalid (non-binary) characters.
* **Dynamic UX:** Interactive form focus system that highlights the active operation using smooth opacity transitions.

---

## 🛠️ Technical Details

This project demonstrates clean coding practices and efficient logic handling:
* **Mathematical Engine:** Utilizes `parseInt(value, 2)` for binary-to-decimal conversion and `.toString(2)` for returning results to binary format.
* **Validation Logic:** Implements the `isBinary` helper function using the `/^[01]+$/` regular expression to ensure data integrity.
* **Event-Driven UI:** Uses `DOMContentLoaded` and event listeners to manage a highly responsive user interface without page reloads.

### Technologies Used
* **JavaScript (ES6+):** For arithmetic logic and DOM manipulation.
* **HTML5 & CSS3:** For the semantic structure and advanced "Gooey" background animation.
* **SVG Filters:** Integrated filters for fluid visual transitions.

---

## 🚀 How to Run
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/gabrielpaloni/aps.git](https://github.com/gabrielpaloni/aps.git)
    ```
2.  **Execution:**
    Open the `index.html` file in your preferred web browser. No server setup is required as it runs entirely client-side.

---

## 👨‍💻 Author
**Gabriel Paloni**
*Computer Science Student in Campinas, Brazil.*
This calculator is a key component of my **Programming Logic** portfolio, showcasing my ability to handle low-level data types and user-centric web design.

---
<p align="center">
  <i>"In binary, 1 + 1 is not 2, it's 10. Logic changes everything."</i>
</p>
