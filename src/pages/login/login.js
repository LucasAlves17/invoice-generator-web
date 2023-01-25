import { login } from "../../api/api.js";

export default () => {
  const container = document.createElement("div");

  const tokenLoginTemplate = `
    <section class='signup'>
      <h1> Welcome to the Invoice Generator, please enter a token </h1>
    
      <form class='login-form'>
        <input id='inputToken' class='login-input-token' placeholder='Insert your token'>
        <p id='invalidToken'></p>
        <a id='submitToken' href='#invoices'>Login</a>
        <p class='login-generate-new-token'>Don't have an account or forgot your token? <a href='#generate-token'>Generate a new one </a></p>
      </form>
    </section>
  `;

  container.innerHTML = tokenLoginTemplate;

  const inputToken = container.querySelector("#inputToken");
  const invalidToken = container.querySelector("#invalidToken");
  const submitToken = container.querySelector("#submitToken");

  submitToken.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await login(inputToken.value);
    if (response.status === 200) {
      localStorage.setItem("Authorization", inputToken.value);
      window.location.hash = "#invoices";
    } else {
      invalidToken.innerHTML = response.body.errors;
    }
  });

  return container;
};
