document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const tableBody = document.querySelector('#userTable tbody');

    const newRow = document.createElement('tr');

    const rowCount = tableBody.children.length + 1; // Номер користувача
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById('userForm').reset();
});
