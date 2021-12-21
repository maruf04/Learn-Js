 html tarafında bu scripti ekle
 
<script type="text/javascript" src="https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js"></script>

js kısmında tablonun id'sini kullan.


function html_table_to_excel(type)
    {
        var data = document.getElementById('employee_data');

        var file = XLSX.utils.table_to_book(data, {sheet: "sheet1"});

        XLSX.write(file, { bookType: type, bookSST: true, type: 'base64' });

        XLSX.writeFile(file, 'file.' + type);
    }

    const export_button = document.getElementById('export_button');

    export_button.addEventListener('click', () =>  {
        html_table_to_excel('xlsx');
});
