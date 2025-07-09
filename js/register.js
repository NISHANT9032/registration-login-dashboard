function showError(element, message) {
  const errorEl = document.getElementById("errorMsg");
  errorEl.textContent = message;
  element.classList.add("shake");
  setTimeout(() => element.classList.remove("shake"), 300);
}
 
function togglePassword(id = "password") {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}


document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const get = id => document.getElementById(id).value.trim();

  const name = get("fullname");
  const email = get("email");
  const password = get("password");
  const confirm = get("confirmPassword");
  const phone = get("phone");
  const gender = document.querySelector("input[name='gender']:checked")?.value;
  const dob = get("dob");
  const address = get("address");
  const city = get("city");
  const terms = document.getElementById("terms").checked;
  const profilePic = document.getElementById("profilePic").files[0];
  const skills = [...document.querySelectorAll("input[type='checkbox']:checked")].map(cb => cb.value);
   if (skills.length === 0) return showError(document.getElementById("city"), "Select at least one skill");

  const age = new Date().getFullYear() - new Date(dob).getFullYear();

  if (name.length < 3 || /\d/.test(name) || /(.)\1\1/.test(name)) return showError(document.getElementById("fullname"), "Invalid full name");
  if (!/^\S+@\S+\.\S+$/.test(email)) return showError(document.getElementById("email"), "Invalid email format");
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[a-z]/.test(password)) return showError(document.getElementById("password"), "Weak password");
  if (password !== confirm) return showError(document.getElementById("confirmPassword"), "Passwords do not match");
  if (!/^\d{10}$/.test(phone)) return showError(document.getElementById("phone"), "Phone must be 10 digits");
  if (!gender) return showError(document.getElementById("phone"), "Please select gender");
  if (age < 18) return showError(document.getElementById("dob"), "You must be 18+");
  if (address.length < 10) return showError(document.getElementById("address"), "Address too short");
  if (!city) return showError(document.getElementById("city"), "Please select city");
  if (skills.length === 0) return showError(document.getElementById("city"), "Select at least one skill");
  if (!terms) return showError(document.getElementById("terms"), "Accept the terms to proceed");

  const user = { name, email, password, phone, gender, dob, address, city, skills };

  if (profilePic) {
    const reader = new FileReader();
    reader.onload = function () {
      user.profilePic = reader.result;
      localStorage.setItem("user", JSON.stringify(user));
      alert("Registration successful!");
      window.location.href = "login.html";
    };
    reader.readAsDataURL(profilePic);
  } else {
    user.profilePic = "";
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    window.location.href = "login.html";
  }
});
