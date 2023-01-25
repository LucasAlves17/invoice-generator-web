export default () => {
  if (localStorage.getItem("Authorization")) {
    validateToken(localStorage.getItem("Authorization"));
  } else {
    window.location.hash = "#login";
  }

  const container = document.createElement("div");

  const header = `
    <h1>Invoice Generator</h1>
    <a id='logoutSubmit' href='#login'>
      <span><ion-icon name='log-out-outline'></ion-icon></span>
      <span>Sair</span>
    </a>
`;

  container.innerHTML = header;

  const logoutSubmit = container.querySelector("#logoutSubmit");

  logoutSubmit.addEventListener("click", async (e) => {
    localStorage.setItem("Authorization", "");
  });

  async function validateToken(email) {
    const response = await login(email);
    if (response.status !== 200) {
      localStorage.setItem("Authorization", "");
      window.location.hash = "#login";
    }
  }

  return container;
};
