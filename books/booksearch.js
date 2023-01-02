// code based heavily on https://www.w3schools.com/howto/howto_js_filter_table.asp

function bookSearch() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("book_input");
    filter = input.value.toUpperCase();
    table = document.getElementById("book_table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        bookName = tr[i].getElementsByTagName("td")[0];
        bookAuthor = tr[i].getElementsByTagName("td")[1];
        if (bookName || bookAuthor){
            name_value = bookName.textContent || bookName.innerText;
            author_value = bookAuthor.textContent || bookAuthor.innerText;
            if (name_value.toUpperCase().indexOf(filter) > -1 || author_value.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }

     /*
      td = tr[i].getElementsByTagName("td")[0];
        

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
      */
    }
}