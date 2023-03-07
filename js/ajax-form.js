
$(document).ready(function () {
	$(".contactForm__form").on("submit", function (e) {
		e.preventDefault();
		$.ajax({
			url: 'telegram.php',
			method: "post",
			data: $(this).serialize(),
			success: function () {
				
				$(".contactForm__form").trigger("reset");
				$(".form_responce").addClass('active');
				$(".success").addClass('active');

				setTimeout(() => {
					$(".success").removeClass('active');
					$(".form_responce").removeClass('active');
				  }, "5000");
				  
			},
			error: function (error) {
				

				$(".error").addClass('active');

				setTimeout(() => {
					$(".error").removeClass('active');
				  }, "5000");
			}
		});
		return false;  
	});
});
