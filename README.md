# 🚀 Registration-Login-Dashboard Web App

A frontend-only mini project built using **HTML**, **CSS**, and **JavaScript** to simulate registration, login, and dashboard functionality using **browser's `localStorage`**.

## 🌐 Live Demo
🔗 [Click to open live site](https://NISHANT9032.github.io/registration-login-dashboard/register.html)


---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure and input types  
- **CSS3** – Layout, Flexbox, animations, responsiveness  
- **JavaScript** – DOM manipulation, input validation, localStorage  
- **localStorage** – Storing user data and session  
- **Git + GitHub** – Version control & repository management  
- **GitHub Pages** – Live hosting for static web apps

---

## ✅ Validations Implemented

| Field              | Validation                                                                 |
|-------------------|----------------------------------------------------------------------------|
| Full Name         | Required, ≥3 chars, no digits, no 3 repeating characters (e.g. aaa)        |
| Email             | Required, valid email format (Regex)                                       |
| Password          | ≥8 chars, must include uppercase, lowercase, digit                         |
| Confirm Password  | Must match password                                                        |
| Phone             | Exactly 10 digits                                                          |
| Gender            | Required                                                                   |
| DOB               | Must be ≥18 years old                                                      |
| Address           | Minimum 10 characters                                                      |
| City              | Required (dropdown)                                                        |
| Skills            | At least one checkbox selected                                             |
| Terms Checkbox    | Must be checked                                                            |
| Profile Picture   | Optional, uploaded and stored as base64 string in localStorage             |

---

## 🎯 Features

- ✅ Animated field validation (shake & fade-in errors)  
- ✅ Profile picture upload (displayed on dashboard)  
- ✅ Session-based login & logout  
- ✅ Protected dashboard route  
- ✅ Responsive, minimal UI with clean structure  
- ✅ Hosted via GitHub Pages

---

## ▶️ How to Run the Project

### 💻 Local Setup

```bash
git clone https://github.com/NISHANT9032/registration-login-dashboard.git
cd registration-login-dashboard
```

Then open `register.html` in your browser.

### 🌐 Live Version

Enable GitHub Pages in your repo:
- Go to **Settings → Pages**
- Source: `main`, Folder: `/ (root)` → Save

Access your site at:
```
https://NISHANT9032.github.io/registration-login-dashboard/register.html
```

---

## 📁 Folder Structure

```
registration-login-dashboard/
├── css/
│   └── style.css
├── js/
│   ├── register.js
│   ├── login.js
│   └── dashboard.js
├── register.html
├── login.html
├── dashboard.html
└── README.md
```

---

## 🙋‍♂️ Author

**Nishant Pandey**    
💼 [GitHub Profile](https://github.com/NISHANT9032)
