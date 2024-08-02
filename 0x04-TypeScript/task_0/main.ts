interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Udynath",
    lastName: "Uwah",
    age: 26,
    location: "Uyo",
};

const student2: Student = {
    firstName: "Saviour",
    lastName: "Edethu",
    age: 25,
    location: "Uyo",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
