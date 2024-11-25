"use strict";
function editForm(number) {
    showForm(customers[number]);
    document.querySelector(".client-id").value = number;
}
function showForm(customer) {
    const mainForm = document.querySelector(".main-form");
    mainForm.style.display = "block";
    const customerList = document.querySelector(".customer-list");
    customerList.style.display = "none";
    if (customer != null) {
        document.getElementById('firmName').value = customer.firmName;
        document.getElementById('nip').value = customer.nip;
        document.getElementById('miasto').value = customer.miasto;
        document.getElementById('ulica').value = customer.ulica;
        document.getElementById('numerDomu').value = customer.numerDomu;
        document.getElementById('numerMieszkania').value = customer.numerMieszkania;
        document.getElementById('kodPocztowy').value - customer.kodPocztowy;
        document.getElementById('branza').value = customer.branza;
        document.getElementById('uwagi').value = customer.uwagi;
        // document.getElementById('aktywny').c
        document.getElementById('firmName').disabled = false;
        document.getElementById('nip').disabled = false;
        document.getElementById('miasto').disabled = false;
        document.getElementById('ulica').disabled = false;
        document.getElementById('numerDomu').disabled = false;
        document.getElementById('numerMieszkania').disabled = false;
        document.getElementById('kodPocztowy').disabled = false;
        document.getElementById('branza').disabled = false;
        document.getElementById('uwagi').disabled = false;
        document.getElementById('aktywny').disabled = false;
        document.getElementById('check').disabled = false;
    }
}
function showList() {
    const mainForm = document.querySelector(".main-form");
    mainForm.style.display = "none";
    const customerList = document.querySelector(".customer-list");
    customerList.style.display = "block";
}
let customers = [];
let customer = new customer;
showForm();
function saveFormData(event) {
    event.preventDefault();
    const customer = new Customer();
    const formData = {
        firmName: document.getElementById('firmName').value,
        nip: document.getElementById('nip').value,
        miasto: document.getElementById('miasto').value,
        ulica: document.getElementById('ulica').value,
        numerDomu: document.getElementById('numerDomu').value,
        numerMieszkania: document.getElementById('numerMieszkania').value || 'Brak',
        kodPocztowy: document.getElementById('kodPocztowy').value,
        branza: document.getElementById('branza').value,
        uwagi: document.getElementById('uwagi').value || 'Brak',
        aktywny: document.getElementById('aktywny').checked
    };
    customer.firmName = formData.firmName;
    customer.nip = formData.nip;
    customer.miasto = formData.miasto;
    customer.ulica = formData.ulica;
    customer.numerDomu = formData.numerDomu;
    customer.numerMieszkania = formData.numerMieszkania;
    customer.kodPocztowy = formData.kodPocztowy;
    customer.branza = formData.branza;
    customer.uwagi = formData.uwagi;
    customer.aktywny = formData.aktywny;
    if (formData.firmName == "" ||
        formData.nip == "" ||
        formData.miasto == "" ||
        formData.ulica == "" ||
        formData.numerDomu == "" ||
        formData.numerMieszkania == "" ||
        formData.kodPocztowy == "" ||
        formData.branza == "" ||
        formData.uwagi == "" ||
        formData.aktywny == "") {
        window.alert("Bledne dane");
        return 0;
    }
    const clientId = document.querySelector(".client-id").value;
    if (clientId == "none") {
        customers.push(customer);
    }
    else {
        customers[clientId] = formData;
        clientId.value = "none";
    }
    document.querySelector(".customer-list").innerHTML = `
    <button type="button" class="btn btn-primary" onclick="showForm()">Pokaz formularz</button>
    <br>
    `;
    let counter = 0;
    customers.forEach(el => {
        let aktywny = (el.aktywny) ? "Tak" : "Nie";
        document.querySelector(".customer-list").innerHTML += `
      <b>--------------------------------------</b>
      <ul>
        <li>Dane: ${el.getData()} </li>
        <li>Address: ${el.getAddress()}</li>
       </ul>
      <b>--------------------------------------</b>
      <br>

      `;
        counter++;
    });
    console.log(customers);
}
// <li>Nazwa firmy: ${el.firmName}</li>
// <li>NIP: ${el.nip}</li>
// <li>Miasto: ${el.miasto}</li>
//       <li>Ulica:${el.ulica} </li>
//       <li>Numer domu: ${el.getAddress()}</li>
//       <li>Numer mieszkania: ${el.numerMieszkania}</li>
//       <li>Kod pocztowy: ${el.kodPocztowy}</li>
// <li>Uwagi: ${el.branza}</li>
//       <li>Branża: ${el.uwagi}</li>
//       <li>Firma aktywna? ${aktywny}</li>
//       <button onclick="editForm(${counter})">Edytuj</button>
function insertData() {
    // Wstawianie przykładowych danych do formularza
    document.getElementById('firmName').value = "Przykładowa Firma";
    document.getElementById('nip').value = "1234567890";
    document.getElementById('miasto').value = "Warszawa";
    document.getElementById('ulica').value = "Przykładowa";
    document.getElementById('numerDomu').value = "10";
    document.getElementById('numerMieszkania').value = "5";
    document.getElementById('kodPocztowy').value = "00-000";
    document.getElementById('branza').value = "it";
    document.getElementById('uwagi').value = "To są przykładowe uwagi";
    document.getElementById('aktywny').checked = true;
    // Zablokowanie edytowalności pól
    document.getElementById('firmName').disabled = true;
    document.getElementById('nip').disabled = true;
    document.getElementById('miasto').disabled = true;
    document.getElementById('ulica').disabled = true;
    document.getElementById('numerDomu').disabled = true;
    document.getElementById('numerMieszkania').disabled = true;
    document.getElementById('kodPocztowy').disabled = true;
    document.getElementById('branza').disabled = true;
    document.getElementById('uwagi').disabled = true;
    document.getElementById('aktywny').disabled = true;
    document.getElementById('check').disabled = true;
}
