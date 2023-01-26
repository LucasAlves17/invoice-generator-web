import { createInvoice } from "../../api/api.js";

export default () => {
  const container = document.createElement("div");

  const createInvoiceTemplate = `
    <a class='create-invoice-back' href='#invoices'>Back</a>

    <form id="createInvoiceForm" class='create-invoice-form'>
      <section class='create-invoice-inputs'> 

        <section class='create-invoice-input'>
          <label for="number">Number:</label>
          <input type="number" id="number" name="number" required>
        </section>

        <section class='create-invoice-input'>
          <label for="date">Date:</label>
          <input type="date" id="date" name="date" required>
        </section>

        <section class='create-invoice-input'>
          <label for="company">Company:</label>
          <input type="text" id="company" name="company" required>
        </section>

        <section class='create-invoice-input'>
          <label for="charge_for">Charge For:</label>
          <input type="text" id="charge_for" name="charge_for" required>
        </section>

        <section class='create-invoice-input'>
          <label for="total_in_cents">Total:</label>
          <input type="number" min="0.00" max="100000.00" step="0.01" id="total_in_cents" name="total_in_cents" required>
        </section>
        
        <section class='create-invoice-input'>
          <label for="emails">Emails:</label>
          <input type="text" id='emails' name="emails" placeholder='Add more emails separating with comma' required>
        </section>
      </section>
      
      <input class='create-token-submit-input' type="submit" value="Create Invoice">
    </form>
  `;

  container.innerHTML = createInvoiceTemplate;

  const createInvoiceForm = container.querySelector("#createInvoiceForm");

  createInvoiceForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(createInvoiceForm);
    const invoice = {};

    for (const [key, value] of formData.entries()) {
      switch (key) {
        case "emails":
          invoice[key] = value.split(",");
          break;
        case "total_in_cents":
          invoice[key] = Math.trunc(value * 100);
          break;
        default:
          invoice[key] = value;
      }
    }

    const response = await createInvoice(invoice);
    if (response.status === 201) {
      alert("The invoice was created and sent to the filled emails.");
      window.location.hash = `#invoices/${response.body.id}`;
    } else {
      alert(response.body.errors);
    }
  });

  return container;
};
