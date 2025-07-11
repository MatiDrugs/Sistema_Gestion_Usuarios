$(document).ready(function () {
  let dataTable;

  $('#cargarBtn').click(function () {
    const tipo = $('#tipoDato').val();
    const url = `https://jsonplaceholder.typicode.com/${tipo}`;
    
    $.getJSON(url, function (data) {
      if (dataTable) dataTable.destroy();

      const keys = Object.keys(data[0]);
      let thead = '<tr>' + keys.map(k => `<th>${k}</th>`).join('') + '</tr>';
      let tbody = data.map(item => {
        return '<tr>' + keys.map(k => `<td>${JSON.stringify(item[k])}</td>`).join('') + '</tr>';
      }).join('');

      $('#tablaDatos thead').html(thead);
      $('#tablaDatos tbody').html(tbody);

      dataTable = $('#tablaDatos').DataTable();
    });
  });
});
