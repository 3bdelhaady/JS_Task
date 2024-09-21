document.getElementById("userForm").addEventListener("submit", function(event) {
        event.preventDefault();
            
            var firstName = encodeURIComponent(document.getElementById("firstName").value);
            var lastName = encodeURIComponent(document.getElementById("lastName").value);

        window.open(
                "https://www.google.com/search?q=" + firstName + "+" + lastName,
                "_blank",
                "width=600,height=400,left=1000,top=500"
            );
        });
