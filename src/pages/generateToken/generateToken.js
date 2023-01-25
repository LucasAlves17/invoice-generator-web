import { tokenGenerator } from "../../api/api.js";

export default () => {
  const container = document.createElement("div");

  const generateToken = `
    <p> Generate Token </p>

    <form class='generate-token-form'>
      <input id='inputEmail' class='generate-token-input-email' placeholder='Insert your email'>
      <p id='emailConfirmation'></p>
      <a id='submitEmail' href='#login'>Generate</a>
    </form>
  `;

  container.innerHTML = generateToken;

  const inputEmail = container.querySelector("#inputEmail");
  const emailConfirmation = container.querySelector("#emailConfirmation");
  const submitEmail = container.querySelector("#submitEmail");

  submitEmail.addEventListener("click", async (e) => {
    e.preventDefault();
    const response = await tokenGenerator(inputEmail.value);
    if (response.status === 201) {
      emailConfirmation.innerHTML = response.body.message;
    } else {
      emailConfirmation.innerHTML = response.body.errors;
    }
  });

  return container;
};
