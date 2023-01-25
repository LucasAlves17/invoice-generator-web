export default () => {
  const container = document.createElement("div");

  const invoice = `
    <p> Invoice </p>
`;

  container.innerHTML = invoice;

  return container;
};
