const infoForm = document.getElementById('infoForm');
const infoTableBody = document.getElementById('infoTableBody');
const editForm = document.getElementById('editForm');
const editfNameInput = document.getElementById('editfName');
const editlNameInput = document.getElementById('editlName');
const editPhnoInput = document.getElementById('editPhno');
const editEmailInput = document.getElementById('editEmail');

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
}
function deleteEmployee(button) {
    const row = button.closest('tr');
    row.parentNode.removeChild(row);
}
