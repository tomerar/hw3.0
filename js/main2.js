var currentQuestion;
$(document).ready(function () {
	
	$(".myButton").click(function () {
		localStorage.clear();
		window.location.href = 'index.html';
	});



	$.ajax({
		url: "https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple",
		type: "get",
		success: function (data) {
			var n = localStorage.getItem('counter');
			console.log(n);
			var n_int = parseInt(n);
			if (n_int == 2) {
				window.location.href = 'joke.html';
			}
			var counter = parseInt(localStorage.getItem('counter'));
			if (isNaN(counter) == true) {
				alert("You have to answer 3 questions and then you go to the joke page");
			}
			else {
				if((2 - counter)!=0){
				alert("You have to answer " + (2 - counter) + " questions and then you go to the joke page");
				}else{
					window.location.href = 'joke.html';
				}
			}
			if (data.results.length === 0) {
				$("#question").text("no questions!!");
			} else {
				currentQuestion = data.results[0];
				console.log(currentQuestion);
				$("#question").append("<h1 id='main-q'>" +
					currentQuestion.question +
					"</h1>");
				$("#question").append("<div class='answer correct'>" +
					currentQuestion.correct_answer +
					"</div>");
				$.each(currentQuestion.incorrect_answers,
					function (index, value) {
						$("#question").append("<div class='answer false'>" +
							value +
							"</div>");
					});
			}
		},
		error: function (err) {
			console.log(err);
		}
	});

	$(document).on('click', '.answer', function () {
		if ($(this).hasClass('correct')) {
			alert('correct answer');
			var n = localStorage.getItem('counter');
			console.log(n);

			if (n === null) {
				n = 0;
			} else {
				n++;
			}
			localStorage.setItem("counter", n);
			window.location.href = 'page5.html';

		}
		if ($(this).hasClass('false')) {
			alert('The wrong answer will try again');
		}
	});

});
