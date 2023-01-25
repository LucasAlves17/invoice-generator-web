export default () => {
  const container = document.createElement("div");

  const invoices = `
    <p> Invoices </p>
`;

  container.innerHTML = invoices;

  return container;
};
