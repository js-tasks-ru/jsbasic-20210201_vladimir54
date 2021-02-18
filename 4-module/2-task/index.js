function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      let td = row.cells[i];
      td.style.backgroundColor = 'red';
    }
}
