const infoForm = document.getElementById('infoForm');
const infoTableBody = document.getElementById('infoTableBody');
const editForm = document.getElementById('editForm');
const editfNameInput = document.getElementById('editfName');
const editlNameInput = document.getElementById('editlName');
const editPhnoInput = document.getElementById('editPhno');
const editEmailInput = document.getElementById('editEmail');

//////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    loadDataFromLocalStorage();
});

//////////////////////////////////////////////
function addField() {
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastName');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const emailIdInput = document.getElementById('emailId');
    console.log(firstNameInput);

    const fname = firstNameInput.value.trim();
    const lname = lastNameInput.value.trim();
    const phno = phoneNumberInput.value.trim();
    const email = emailIdInput.value.trim();

    if (fname !== '' && lname !== '' && phno !== '' && email !== '') {
        const newRow = infoTableBody.insertRow();
        newRow.innerHTML = `
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${phno}</td>
            <td>${email}</td>
            <td>
                <button onclick="editTable(this)">Edit</button>
                <button onclick="deleteEmployee(this)">Delete</button>
            </td>
        `;

        firstNameInput.value = '';
        lastNameInput.value = '';
        phoneNumberInput.value = '';
        emailIdInput.value = '';
    }
    saveDataToLocalStorage();
}

function editTable(button) {
    const row = button.closest('tr');
    const cells = row.cells;

    editfNameInput.value = cells[0].innerText;
    editlNameInput.value = cells[1].innerText;
    editPhnoInput.value = cells[2].innerText;
    editEmailInput.value = cells[3].innerText;

    editForm.style.display = 'block';
    row.style.display = 'none';

    editForm._editedRow = row;
}
function saveEdit() {
    const updatedFName = editfNameInput.value.trim();
    const updatedLName = editlNameInput.value;
    const updatedPhno = editPhnoInput.value.trim();
    const updatedEmail = editEmailInput.value.trim();

    const editedRow = editForm._editedRow;

    editedRow.cells[0].innerText = updatedFName;
    editedRow.cells[1].innerText = updatedLName;
    editedRow.cells[2].innerText = updatedPhno;
    editedRow.cells[3].innerText = updatedEmail;

    
    editedRow.style.display = 'table-row';
    editForm.style.display = 'none';

    
    editfNameInput.value = '';
    editlNameInput.value = '';
    editPhnoInput.value = '';
    editEmailInput.value = '';

    saveDataToLocalStorage();
}
function deleteEmployee(button) {
    const row = button.closest('tr');
    row.parentNode.removeChild(row);

    saveDataToLocalStorage();
}

//////////////////////////////////////

function saveDataToLocalStorage() {
    const data = [];
    const rows = infoTableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        data.push({
            firstName: cells[0].innerText,
            lastName: cells[1].innerText,
            phoneNumber: cells[2].innerText,
            email: cells[3].innerText,
        });
    }

    localStorage.setItem('employeeData', JSON.stringify(data));
}

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('employeeData');

    if (storedData) {
        const data = JSON.parse(storedData);

        // Populate the table with data from localStorage
        data.forEach(employee => {
            const newRow = infoTableBody.insertRow();
            newRow.innerHTML = `
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.phoneNumber}</td>
                <td>${employee.email}</td>
                <td>
                    <button onclick="editTable(this)">Edit</button>
                    <button onclick="deleteEmployee(this)">Delete</button>
                </td>
            `;
        });
    }
}

