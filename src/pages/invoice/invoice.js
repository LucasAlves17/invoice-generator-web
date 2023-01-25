import { getInvoice, editInvoiceEmails } from "../../api/api.js";
import { jsPDF } from "../../../node_modules/jspdf/dist/jspdf.es.js";

export default () => {
  const id = window.location.hash.substring("#invoices/".length);

  const container = document.createElement("div");

  const loadInvoice = async () => {
    const invoiceResponse = await getInvoice(id);

    const invoice = invoiceResponse.body;

    const invoiceTemplate = `
      <a href='#invoices'>Back</a>

      <div>
        <p>Invoice number: ${invoice.number}</p>
        <p>Company: ${invoice.company}</p>
        <p>Date: ${invoice.date}</p>
        <p>Charge for: ${invoice.charge_for}</p>
        <p>Total: ${invoice.total_in_cents / 100}</p>
        <p>Emails sent: ${invoice.emails}</p>
      </div>

      <div>
        <input id='inputEmails' class='invoice-input-emails' placeholder='Add more emails separating with comma' >
        <p id='emailsSent'></p>

        <button id='buttonSend'>Send</button>
        <button id='buttonDownloadPdf'>Download PDF</button>
      </div>
    `;

    container.innerHTML = invoiceTemplate;

    const inputEmails = container.querySelector("#inputEmails");
    const buttonSend = container.querySelector("#buttonSend");
    const emailsSent = container.querySelector("#emailsSent");

    buttonSend.addEventListener("click", async (e) => {
      e.preventDefault();
      const emails = inputEmails.value.split(",");

      const response = await editInvoiceEmails(id, emails);
      if (response.status === 200) {
        emailsSent.innerHTML = "Emails have been sent";
      } else {
        emailsSent.innerHTML = response.body.errors;
      }
    });

    const buttonDownloadPdf = container.querySelector("#buttonDownloadPdf");

    buttonDownloadPdf.addEventListener("click", (e) => {
      e.preventDefault();

      const doc = new jsPDF();

      doc.text(`Invoice number: ${invoice.number}`, 10, 10);
      doc.text(`Date: ${invoice.date}`, 10, 20);
      doc.text(`Company: ${invoice.company}`, 10, 30);
      doc.text(`Charge for: ${invoice.charge_for}`, 10, 40);
      doc.text(`Total: ${invoice.total_in_cents / 100}`, 10, 50);
      doc.save("invoice.pdf");
    });
  };

  loadInvoice();

  return container;
};
