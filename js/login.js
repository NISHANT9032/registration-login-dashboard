function showLoginError(message) {
  const error = document.getElementById("error");
  const form = document.getElementById("loginForm");
  error.textContent = message;
  form.classList.add("shake");
  setTimeout(() => form.classList.remove("shake"), 300);
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("session", "true");
    window.location.href = "dashboard.html";
  } else {
    showLoginError("Invalid email or password");
  }
});
