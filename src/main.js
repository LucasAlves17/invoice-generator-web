import login from "./pages/login/login.js";
import generateToken from "./pages/generateToken/generateToken.js";
import invoices from "./pages/invoices/invoices.js";
import invoice from "./pages/invoice/invoice.js";
import createInvoice from "./pages/createInvoice/createInvoice.js";
import header from "./pages/header/header.js";

const main = document.querySelector("#root");

const init = () => {
  console.log("oi");
  switch (window.location.hash) {
    case "":
      main.appendChild(login());
      break;
    case "#login":
      main.appendChild(login());
      break;
    case "#generate-token":
      main.appendChild(generateToken());
      break;
    case "#invoice":
      main.appendChild(header());
      main.appendChild(invoice());
      break;
    case "#invoices":
      main.appendChild(header());
      main.appendChild(invoices());
      break;
    case "#create-invoice":
      main.appendChild(header());
      main.appendChild(createInvoice());
      break;
    case "#logout":
      main.appendChild(login());
      break;
    default:
      main.appendChild(login());
  }
};

window.addEventListener("load", () => {
  init();
});

window.addEventListener("hashchange", () => {
  main.innerHTML = "";
  init();
});
