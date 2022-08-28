const form = document.getElementById("signupForm");

const submitFun = async (e) => {
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let data = await axios.post("http://localhost:3000/signup", {
    name,
    email,
    password,
  });
};

form.addEventListener("submit", submitFun);
