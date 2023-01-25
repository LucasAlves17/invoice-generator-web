export default () => {
  const container = document.createElement("div");

  const createInvoice = `
    <p> Create Invoice </p>
`;

  container.innerHTML = createInvoice;

  return container;
};
