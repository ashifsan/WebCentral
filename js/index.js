const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener('click', () => {
  // Show loader on button click
  loginBtn.classList.add("loading");
  // Hide loader after success/failure - here it will hide after 2seconds
  setTimeout(() => loginBtn.classList.remove("loading"), 2000);
});

const loginBtn1 = document.getElementById("login-btn1");

loginBtn1.addEventListener('click', () => {
  // Show loader on button click
  loginBtn1.classList.add("loading");
  // Hide loader after success/failure - here it will hide after 2seconds
  setTimeout(() => loginBtn1.classList.remove("loading"), 2000);
});

