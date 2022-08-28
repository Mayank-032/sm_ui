const form = document.getElementById("signupForm");

const submitFun = async (e) => {
    e.preventDefault();
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let data = await axios.post("http://localhost:3000/signin", {
    email,
    password,
  })
  .then(function(res) {
    location.replace("dashboard.html")
  })
};

form.addEventListener("submit", submitFun);
