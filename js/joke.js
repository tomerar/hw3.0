
        $(document).ready(function () {
            $(".myButton").click(function(){
				localStorage.clear();
				window.location.href = 'index.html';
				});
			  
                $.ajax({
                    url: "http://api.icndb.com/jokes/random?",
                    type: "get",
                    success: function (data) {
                        var nameStr =data.value.joke;
                       nameStr= nameStr.replace("Chuck", localStorage.getItem("firstName"));
                       nameStr= nameStr.replace("Norris", localStorage.getItem("lastName"));
                        $("#joke").append("<p class='joke_text'>" +
                        nameStr +
							"</p>");
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            

        });
   