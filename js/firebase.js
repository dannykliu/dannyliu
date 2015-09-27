var messageRef = new Firebase('https://rezgrader.firebaseIO.com/');
	$(function() {
		$("#contactform").submit(function(event) {
			if($("#message").val().length < 1){
				alert("Please enter a valid message!");
			}
			else if($("#email").val().indexOf("@") < 0){
				alert("Please enter a valid email!");
			}
			else if($("#name").val().length < 1){
				alert("Please enter your name!");
			}
			else {
				messageRef.push().set({
					name: $("#name").val(),
					message: $("#message").val(),
					email: $("#email").val()
				});
				event.preventDefault();
			}
			$("#success").show().fadeIn(1000);

	}, function (errorObject) {
		$("#error").show().fadeIn(1000);
		console.log("The read failed: " + errorObject.code);
	});