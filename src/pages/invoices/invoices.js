import { getAllInvoices } from "../../api/api.js";

export default () => {
  const container = document.createElement("div");

  const header = `
    <a id='createInvoice' href='#create-invoice'>New invoice</a>

    <form id="invoiceFilters">
      <label for="number">Number:</label>
      <input type="text" id="number" name="number">
      
      <label for="date">Date:</label>
      <input type="date" id="date" name="date">
      
      <input type="submit" value="Filter">
    </form>

    <div id='bodyInvoiceList'></div>
  `;

  container.innerHTML = header;

  const invoiceFilters = container.querySelector("#invoiceFilters");

  invoiceFilters.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(invoiceFilters);
    const filters = {};

    for (const [key, value] of formData.entries()) {
      if (value) filters[key] = value;
    }

    await showInvoices(filters);
  });

  const showInvoices = async (filters = {}) => {
    const invoiceList = await getAllInvoices(filters);

    const invoiceTemplate = invoiceList.body.map(
      (invoice) => `
      <div class='main-invoice-list' data-invoice-id=${invoice.id}>
        <p>${invoice.number}</p>
        <p>${invoice.company}</p>
        <p>${invoice.date}</p>
      </div>
    `
    );

    container.querySelector("#bodyInvoiceList").innerHTML = invoiceTemplate;

    const invoices = container.querySelectorAll(".main-invoice-list");

    invoices.forEach((invoice) => {
      invoice.addEventListener("click", async (e) => {
        window.location.hash = `#invoices/${invoice.dataset.invoiceId}`;
      });
    });
  };

  showInvoices();

  return container;
};
