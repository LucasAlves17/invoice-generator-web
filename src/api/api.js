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

async function getAllInvoices(filters) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: email }),
  });

  return { status: response.status, body: await response.json() };
}
async function getInvoice(id) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: email }),
  });

  return { status: response.status, body: await response.json() };
}
async function editInvoiceEmails(emails) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: email }),
  });

  return { status: response.status, body: await response.json() };
}
async function createInvoice(invoice) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: email }),
  });

  return { status: response.status, body: await response.json() };
}

export {
  login,
  tokenGenerator,
  getAllInvoices,
  getInvoice,
  editInvoiceEmails,
  createInvoice,
};
