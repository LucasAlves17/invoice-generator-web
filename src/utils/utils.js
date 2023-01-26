function createQueryParams(params) {
  return Object.keys(params)
    .map((key) => `${key}=${encodeURI(params[key])}`)
    .join("&");
}

function formatDate(inputDate) {
  const date = inputDate.split("T")[0];

  const dateValues = date.split("-");
  const day = dateValues[2];
  const month = dateValues[1];
  const year = dateValues[0];

  return `${day}/${month}/${year}`;
}

export { createQueryParams, formatDate };
