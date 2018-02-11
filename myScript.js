		$(function() {
			$( "#datepicker" ).datepicker();
		});
		
		$(document).ready(function () {
			submitAge();
		});

		
		function submitAge() {
		 $('#agechecker').on('click', function () {
			var age = calculateAge(parseDate($('#datepicker').val()), new Date());
			$("#age").text(age);
			if (age > 20) {
				window.location="http://beer.com";
			} else {
				window.location="http://lol.disney.com/games/tsum-tsum-tower";
			}
			   
		});
		}
		
		function redirectToBeer() {
			window.location="http://beer.com";
		}
		
		function redirectToDisney() {
			window.location="http://lol.disney.com/games/tsum-tsum-tower";
		}
		
		function parseDate(dateStr) {
			var dateParts = dateStr.split("/");
			return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
		}

		function calculateAge (dateOfBirth, dateToCalculate) {
			var calculateYear = dateToCalculate.getFullYear();
			var calculateMonth = dateToCalculate.getMonth();
			var calculateDay = dateToCalculate.getDate();

			var birthYear = dateOfBirth.getFullYear();
			var birthMonth = dateOfBirth.getMonth();
			var birthDay = dateOfBirth.getDate();

			var age = calculateYear - birthYear;
			var ageMonth = calculateMonth - birthMonth;
			var ageDay = calculateDay - birthDay;

			if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
				age = parseInt(age) - 1;
			}
			return age;
		}