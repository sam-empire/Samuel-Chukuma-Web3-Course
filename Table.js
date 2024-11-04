<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
  ];

  function buildTable(data) {
    // Create the table element
    const table = document.createElement("table");

    // Extract column names from the first object
    const columns = Object.keys(data[0]);

    // Create and append the header row
    const headerRow = document.createElement("tr");
    columns.forEach(column => {
      const headerCell = document.createElement("th");
      headerCell.appendChild(document.createTextNode(column));
      headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create and append rows for each data object
    data.forEach(mountain => {
      const row = document.createElement("tr");
      columns.forEach(column => {
        const cell = document.createElement("td");
        const cellValue = mountain[column];
        cell.appendChild(document.createTextNode(cellValue));
        
        // Right-align numeric values
        if (typeof cellValue === "number") {
          cell.style.textAlign = "right";
        }
        
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  // Find the container and append the table
  const container = document.getElementById("mountains");
  container.appendChild(buildTable(MOUNTAINS));
</script>
