// Show/Hide password functionality
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.querySelector("input[type='password']");
  
  // Create toggle icon
  const toggle = document.createElement("span");
  toggle.innerHTML = "👁️";
  toggle.style.cssText = "position:absolute;right:15px;top:50%;transform:translateY(-50%);cursor:pointer;color:#b3b3b3;";
  passwordInput.parentElement.style.position = "relative";
  passwordInput.parentElement.appendChild(toggle);

  toggle.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    toggle.innerHTML = type === "password" ? "👁️" : "🙈";
  });

  // Fake Sign In
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.querySelector("input[type='text']").value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      alert("Please enter both email and password.");
      return;
    }
  })});
   