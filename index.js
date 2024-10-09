function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.forEach((employee, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${employee.name} - ${employee.address} - ${employee.role} - ₹${employee.salary} 
                        <button onclick="removeEmployee(${index})">Remove</button>`;
        employeeList.appendChild(li);
    });
}

console.log("Js");

// Function to add an employee
async function addEmployee() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const role = document.getElementById("role").value;
    const salary = document.getElementById("salary").value;
    const validate = await validateform(name, address, role, salary);
    console.log(validate);

    if (name && address && role && salary && validate) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];

        employees.push({ name, address, role, salary });

        localStorage.setItem("employees", JSON.stringify(employees));

        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("role").value = "";
        document.getElementById("salary").value = "";

        displayEmployees();
    }
}

function removeEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
}

window.onload = displayEmployees;

function validateform(name, address, role, salary) {
    // const name =  document.getElementById("name").value;
    const error = document.getElementById("error-msg");
    const error1 = document.getElementById("error-msg1");
    const error2 = document.getElementById("error-msg2");
    const error3 = document.getElementById("error-msg3");
 
    console.log(name, "name", address, role, salary);

    if (!/^[a-zA-Z]/.test(name)) {
        error.textContent = "";
        error.textContent = "only letters are allowed";
        return false;
    } else if (name.length < 3) {
        error.textContent = "name must be 3 content long";
        return false;
    } else if (name.length > 20) {
        error.textContent = "name must not exceed 20 character";
        return false;
    } else if (!/^[a-zA-Z]/.test(address)) {
        error.textContent = "";
        error1.textContent = "only letters are allowed";
        return false;
    } else if (address.length < 3) {
        error1.textContent = "address must be 3 content long";
        return false;
    } else if (address.length > 20) {
        error1.textContent = "address must not exceed 20 character";
        return false;
    } else if (!/^[a-zA-Z]/.test(role)) {
        error1.textContent = "";

        error2.textContent = "only letters are allowed";
        return false;
    } else if (role.length < 3) {
        error2.textContent = "role must be 3 content long";
        return false;
    } else if (role.length > 20) {
        error2.textContent = "role must not exceed 20 character";
        return false;
    } else if (salary == "") {
        error3.textContent = "salary is required";

        error2.textContent = "";
        return false;
    } else if (salary < 30000) {
        error3.textContent = "Enter minimum salary as 30,000";

        return false;
    } else if (salary <= 30000 && salary >= 50000) {
        error3.textContent = "salary is value";
        return false;
    }
    {
        error.textContent = "";
        error1.textContent = "";
        error2.textContent = "";
        error3.textContent = "";

        return true;
    }
}
