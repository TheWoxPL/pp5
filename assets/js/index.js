"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./models/customer");
// import { Supplier } from './models/supplier';
let customers = [];
function editForm(number) {
    showForm(customers[number]);
    document.querySelector(".client-id").value = number.toString();
}
function showForm(customer = null) {
    const mainForm = document.querySelector(".main-form");
    mainForm.style.display = "block";
    const customerList = document.querySelector(".customer-list");
    customerList.style.display = "none";
    if (customer) {
        document.getElementById('firmName').value = customer.firmName;
        document.getElementById('nip').value = customer.nip;
        document.getElementById('miasto').value = customer.miasto;
        document.getElementById('ulica').value = customer.ulica;
        document.getElementById('numerDomu').value = customer.numerDomu;
        document.getElementById('numerMieszkania').value = customer.numerMieszkania;
        document.getElementById('kodPocztowy').value = customer.kodPocztowy;
        document.getElementById('branza').value = customer.branza;
        document.getElementById('uwagi').value = customer.uwagi;
        document.getElementById('aktywny').checked = customer.aktywny;
        setFormDisabled(false);
    }
}
function setFormDisabled(disabled) {
    const formFields = [
        'firmName',
        'nip',
        'miasto',
        'ulica',
        'numerDomu',
        'numerMieszkania',
        'kodPocztowy',
        'branza',
        'uwagi',
        'aktywny'
    ];
    formFields.forEach(field => {
        document.getElementById(field).disabled = disabled;
    });
}
function showList() {
    const mainForm = document.querySelector(".main-form");
    mainForm.style.display = "none";
    const customerList = document.querySelector(".customer-list");
    customerList.style.display = "block";
}
function saveFormData(event) {
    event.preventDefault();
    const formData = new customer_1.Customer();
    formData.firmName = document.getElementById('firmName').value;
    formData.nip = document.getElementById('nip').value;
    formData.miasto = document.getElementById('miasto').value;
    formData.ulica = document.getElementById('ulica').value;
    formData.numerDomu = document.getElementById('numerDomu').value;
    formData.numerMieszkania = document.getElementById('numerMieszkania').value || 'Brak';
    formData.kodPocztowy = document.getElementById('kodPocztowy').value;
    formData.branza = document.getElementById('branza').value;
    formData.uwagi = document.getElementById('uwagi').value || 'Brak';
    formData.aktywny = document.getElementById('aktywny').checked;
    if (!formData.firmName || !formData.nip || !formData.miasto || !formData.ulica || !formData.numerDomu || !formData.kodPocztowy || !formData.branza) {
        window.alert("Błędne dane");
        return;
    }
    const clientId = document.querySelector(".client-id").value;
    if (clientId === "none") {
        customers.push(formData);
    }
    else {
        customers[parseInt(clientId, 10)] = formData;
    }
    // showList();
    // showForm()
    updateCustomerList();
}
function updateCustomerList() {
    const customerList = document.querySelector(".customer-list");
    customerList.innerHTML = '<button type="button" class="btn btn-primary" onclick="showForm()">Pokaż formularz</button><br>';
    customers.forEach((customer, index) => {
        const aktywny = customer.aktywny ? "Tak" : "Nie";
        customerList.innerHTML += `
      <b>--------------------------------------</b>
      <ul>
        <li>Dane: ${customer.getData()}</li>
        <li>Adres: ${customer.getAddress()}</li>
        <li>Aktywny: ${aktywny}</li>
        <button onclick="editForm(${index})">Edytuj</button>
      </ul>
      <b>--------------------------------------</b>
      <br>
    `;
    });
}
function insertData() {
    const formData = new customer_1.Customer();
    formData.firmName = "Przykładowa Firma";
    formData.nip = "1234567890";
    formData.miasto = "Warszawa";
    formData.ulica = "Przykładowa";
    formData.numerDomu = "10";
    formData.numerMieszkania = "5";
    formData.kodPocztowy = "00-000";
    formData.branza = "IT";
    formData.uwagi = "To są przykładowe uwagi";
    formData.aktywny = true;
    customers.push(formData);
    updateCustomerList();
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.querySelector(".main-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", saveFormData);
});
