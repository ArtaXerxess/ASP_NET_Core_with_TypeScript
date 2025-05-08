// Filter the table based on the search inputs
function filterTable(): void {
    const inputTitle = (document.querySelector('#search_bar input[placeholder="Title"]') as HTMLInputElement).value.toLowerCase();
    const inputDescription = (document.querySelector('#search_bar input[placeholder="Description"]') as HTMLInputElement).value.toLowerCase();
    const inputPriority = (document.querySelector('#search_bar input[placeholder="Priority"]') as HTMLInputElement).value.toLowerCase();

    const rows = document.querySelectorAll<HTMLTableRowElement>("#table_of_items tbody tr");

    rows.forEach(row => {
        const title = row.children[1].textContent?.toLowerCase() || '';
        const description = row.children[2].textContent?.toLowerCase() || '';
        const priority = row.children[3].textContent?.toLowerCase() || '';

        const matchesTitle = title.includes(inputTitle);
        const matchesDescription = description.includes(inputDescription);
        const matchesPriority = priority.includes(inputPriority);

        if (matchesTitle && matchesDescription && matchesPriority) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

/**
 * this function prints the whole stuff in logs as json
 */
function ExportJSONdata() {
    const element = [];
    document.querySelectorAll<HTMLTableRowElement>("#table_of_items tbody tr").forEach(row => {
        const Id = row.children[0].textContent?.toLowerCase() || '';
        const title = row.children[1].textContent?.toLowerCase() || '';
        const description = row.children[2].textContent?.toLowerCase() || '';
        const priority = row.children[3].textContent?.toLowerCase() || '';
        element.push({ Id, title, description, priority });
    });
    const foo = { element };
    const data = JSON.stringify(foo);
    console.log(data);

}





// Attach input event listeners on DOM load
document.addEventListener("DOMContentLoaded", () => {
    const searchInputs = document.querySelectorAll('#search_bar input');
    searchInputs.forEach(input => {
        input.addEventListener('input', filterTable);
    });
    document.getElementById("export_data_btn").addEventListener('click', ExportJSONdata);
});

// demo TS code
//function TSButton() {
//    let name: string = "Fred";
//    document.getElementById("ts-example")!.innerHTML = greeter(user);
//}

//class Student {
//    fullName: string;
//    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//        this.fullName = firstName + " " + middleInitial + " " + lastName;
//    }
//}

//interface Person {
//    firstName: string;
//    lastName: string;
//}

//function greeter(person: Person) {
//    return "Hello, " + person.firstName + " " + person.lastName;
//}

//let user = new Student("Fred", "M.", "Smith");
