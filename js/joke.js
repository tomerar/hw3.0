
        $(document).ready(function () {
            $(".myButton").click(function(){
				localStorage.clear();
				window.location.href = 'index.html';
				});
			  
                $.ajax({
                    url: "http://api.icndb.com/jokes/random?firstName="+localStorage.getItem('firstName')+"&lastName="+localStorage.getItem('lastName')+"",
                    type: "get",
                    success: function (data) {
                        $("#joke").append("<p class='joke_text'>" +
                        data.value.joke +
							"</p>");
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            

        });
   