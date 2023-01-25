import { tokenGenerator } from "../../api/api.js";

export default () => {
  const container = document.createElement("div");

  const generateTokenTemplate = `
    <section class='generate-token'>
      <h1> Generate Token </h1>
      
      <form class='generate-token-form'>

        <section class='generate-token-email'> 
          <input id='inputEmail' class='generate-token-email-input' placeholder='Insert your email'>
          <p id='emailConfirmation'></p>
        </section>
        
        <section class='generate-token-button'> 
          <button id='submitEmail'>Generate</button>
        </section>
        
      </form>

      <a class='generate-token-back-to-login' href='#login'>Back to login</a>
    </section>
  `;

  container.innerHTML = generateTokenTemplate;

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
