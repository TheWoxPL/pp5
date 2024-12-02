import { Customer } from './models/customer';
// import { Supplier } from './models/supplier';

let customers: Customer[] = [];

function editForm(number: number): void {
  showForm(customers[number]);
  (document.querySelector(".client-id") as HTMLInputElement).value = number.toString();
}

function showForm(customer: Customer | null = null): void {
  const mainForm = document.querySelector(".main-form") as HTMLElement;
  mainForm.style.display = "block";

  const customerList = document.querySelector(".customer-list") as HTMLElement;
  customerList.style.display = "none";

  if (customer) {
    (document.getElementById('firmName') as HTMLInputElement).value = customer.firmName;
    (document.getElementById('nip') as HTMLInputElement).value = customer.nip;
    (document.getElementById('miasto') as HTMLInputElement).value = customer.miasto;
    (document.getElementById('ulica') as HTMLInputElement).value = customer.ulica;
    (document.getElementById('numerDomu') as HTMLInputElement).value = customer.numerDomu;
    (document.getElementById('numerMieszkania') as HTMLInputElement).value = customer.numerMieszkania;
    (document.getElementById('kodPocztowy') as HTMLInputElement).value = customer.kodPocztowy;
    (document.getElementById('branza') as HTMLInputElement).value = customer.branza;
    (document.getElementById('uwagi') as HTMLInputElement).value = customer.uwagi;
    (document.getElementById('aktywny') as HTMLInputElement).checked = customer.aktywny;

    setFormDisabled(false);
  }
}

function setFormDisabled(disabled: boolean): void {
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
    (document.getElementById(field) as HTMLInputElement).disabled = disabled;
  });
}

function showList(): void {
  const mainForm = document.querySelector(".main-form") as HTMLElement;
  mainForm.style.display = "none";

  const customerList = document.querySelector(".customer-list") as HTMLElement;
  customerList.style.display = "block";
}

function saveFormData(event: Event): void {
  event.preventDefault();

  const formData = new Customer();
  formData.firmName = (document.getElementById('firmName') as HTMLInputElement).value;
  formData.nip = (document.getElementById('nip') as HTMLInputElement).value;
  formData.miasto = (document.getElementById('miasto') as HTMLInputElement).value;
  formData.ulica = (document.getElementById('ulica') as HTMLInputElement).value;
  formData.numerDomu = (document.getElementById('numerDomu') as HTMLInputElement).value;
  formData.numerMieszkania = (document.getElementById('numerMieszkania') as HTMLInputElement).value || 'Brak';
  formData.kodPocztowy = (document.getElementById('kodPocztowy') as HTMLInputElement).value;
  formData.branza = (document.getElementById('branza') as HTMLInputElement).value;
  formData.uwagi = (document.getElementById('uwagi') as HTMLInputElement).value || 'Brak';
  formData.aktywny = (document.getElementById('aktywny') as HTMLInputElement).checked;

  if (!formData.firmName || !formData.nip || !formData.miasto || !formData.ulica || !formData.numerDomu || !formData.kodPocztowy || !formData.branza) {
    window.alert("Błędne dane");
    return;
  }

  const clientId = (document.querySelector(".client-id") as HTMLInputElement).value;
  if (clientId === "none") {
    customers.push(formData);
  } else {
    customers[parseInt(clientId, 10)] = formData;
  }

  showList();
  updateCustomerList();
}

function updateCustomerList(): void {
  const customerList = document.querySelector(".customer-list") as HTMLElement;
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

function insertData(): void {
  const formData = new Customer();
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
  document.querySelector(".main-form")?.addEventListener("submit", saveFormData);
});
