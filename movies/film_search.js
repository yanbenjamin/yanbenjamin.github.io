// code from https://www.w3schools.com/howto/howto_js_filter_table.asp

function filmSearch() {
              // Declare variables
              var input, filter, table, tr, td, i, txtValue;
              input = document.getElementById("film_input");
              filter = input.value.toUpperCase();
              table = document.getElementById("film_table");
              tr = table.getElementsByTagName("tr");
            
              // Loop through all table rows, and hide those who don't match the search query
              for (i = 1; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                  txtValue = td.textContent || td.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
                }
              }
        }

function showSearch() {
            // Declare variables
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("show_input");
            filter = input.value.toUpperCase();
            table = document.getElementById("show_table");
            tr = table.getElementsByTagName("tr");
          
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 1; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
          }