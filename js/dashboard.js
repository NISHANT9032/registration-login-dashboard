if (localStorage.getItem("session") !== "true") {
  alert("Unauthorized access. Please login first.");
  window.location.href = "login.html";
}

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  document.getElementById("userInfo").innerHTML = `
    ${user.profilePic ? `<img src="${user.profilePic}" width="100" style="border-radius: 50%; margin-bottom: 10px;" />` : ""}
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Gender:</strong> ${user.gender}</p>
    <p><strong>City:</strong> ${user.city}</p>
    <p><strong>Skills:</strong> ${user.skills.filter(skill => skill && skill !== "on").join(", ")}</p>


  `;
}

function logout() {
  localStorage.removeItem("session");
  window.location.href = "login.html";
}
