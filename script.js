const form = document.getElementById("signupForm");

const submitFun = async (e) => {
  e.preventDefault()
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let data = await axios.post("http://localhost:3000/signup", {
    name,
    email,
    password,
  })
  .then(function(res) {
    location.replace("http://127.0.0.1:5500/login.html")
  })
};

form.addEventListener("submit", submitFun);
