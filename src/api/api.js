const API_BASE_URL = "http://localhost:3000/api";

async function login(email) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: email }),
  });

  return { status: response.status, body: await response.json() };
}

async function tokenGenerator(email) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });

  return { status: response.status, body: await response.json() };
}

async function getAllInvoices(filters = {}) {
  const params = createQueryParams(filters);

  const response = await fetch(`${API_BASE_URL}/invoices?${params}`, {
    method: "GET",
    mode: "cors",
    headers: { Authorization: localStorage.getItem("Authorization") },
  });

  return { status: response.status, body: await response.json() };
}

async function getInvoice(id) {
  const response = await fetch(`${API_BASE_URL}/invoices/${id}`, {
    method: "GET",
    mode: "cors",
    headers: { Authorization: localStorage.getItem("Authorization") },
  });

  return { status: response.status, body: await response.json() };
}

async function editInvoiceEmails(id, emails) {
  const response = await fetch(`${API_BASE_URL}/invoices/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
    body: JSON.stringify({ emails: emails }),
  });

  return { status: response.status, body: await response.json() };
}
async function createInvoice(invoice) {
  const response = await fetch(`${API_BASE_URL}/invoices`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
    body: JSON.stringify(invoice),
  });

  return { status: response.status, body: await response.json() };
}

function createQueryParams(params) {
  return Object.keys(params)
    .map((key) => `${key}=${encodeURI(params[key])}`)
    .join("&");
}

export {
  login,
  tokenGenerator,
  getAllInvoices,
  getInvoice,
  editInvoiceEmails,
  createInvoice,
};
