import { getAllInvoices } from "../../api/api.js";
import { formatDate } from "../../utils/utils.js";

export default () => {
  const container = document.createElement("div");

  const header = `
    <section class='invoices-header'>
      <a id='createInvoice' href='#create-invoice'>New invoice</a>

      <form id="invoiceFilters" class='invoices-form'>
        <label for="number">Number:</label>
        <input type="text" id="number" name="number">
        
        <label for="date">Date:</label>
        <input type="date" id="date" name="date">
        
        <input type="submit" value="Filter">
      </form>
    </section>

    <div id='bodyInvoiceList' class='invoices-body'></div>
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

    const invoiceTemplate = invoiceList.body
      .map(
        (invoice) => `
          <div class='invoices-item' data-invoice-id=${invoice.id}>
            <p class='invoices-attribute'>Invoice number: ${invoice.number}</p>
            <p class='invoices-attribute'>Company: ${invoice.company}</p>
            <p class='invoices-attribute'>Date: ${formatDate(invoice.date)}</p>
          </div>
        `
      )
      .join("");

    container.querySelector("#bodyInvoiceList").innerHTML = invoiceTemplate;

    const invoices = container.querySelectorAll(".invoices-item");

    invoices.forEach((invoice) => {
      invoice.addEventListener("click", async (e) => {
        window.location.hash = `#invoices/${invoice.dataset.invoiceId}`;
      });
    });
  };

  showInvoices();

  return container;
};
