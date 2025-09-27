function insert_Row() {
    // Get the table
    var table = document.getElementById("sampleTable");

    // Insert a new row at the end
    var newRow = table.insertRow(-1);

    // Insert 2 cells
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Fill cells with text
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
