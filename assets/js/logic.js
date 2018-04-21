//CHECK-IN VALIDATION
//-------------------------//
var campers = [
	{
		'id'     : 111111111,
		'name'   : 'Todd',
		'last'   : 'Chessher',
		'status' : 'reserved',
	},
	{
		'id'     : 222222222,
		'name'   : 'Carlos',
		'last'   : 'Gutierrez',
		'status' : 'reserved',
	},
	{
		'id'     : 333333333,
		'name'   : 'Flor',
		'last'   : 'Perry',
		'status' : 'waitlist',
	},
	{
		'id'     : 444444444,
		'name'   : 'Debbie',
		'last'   : 'Williams',
		'status' : 'reserved',
	},
	{
		'id'     : 555555555,
		'name'   : 'Danny',
		'last'   : 'Pasa',
		'status' : 'unregistered',
	},
]

$("#check_in_btn").on("click", function() {

	var user_id = $('#id_box').val();
	var message = $('#message');

	if (user_id.length !=9) {
		
		message.html('The ID you entered is not valid. Please try again.');

		setTimeout(clear, 3000);
	} else {

		for (var i = 0; i < campers.length; i++) {

			var name = campers[i].name;
			var camper_id = campers[i].id;
			var status = campers[i].status;

			if (user_id == camper_id && status === 'unregistered') {

				message.html('Hi ' + name + ",<br>You don't seem to be registered.");

				setTimeout(clear, 3000);

			} else if (user_id == camper_id && status === 'waitlist') {

				message.html('Hi ' + name + ",<br>You're still in the waitlist.");

				setTimeout(clear, 3000);

			} else if (user_id == camper_id && status === 'reserved') {

				message.html('Hi ' + name + ",<br>You're good to go!");

				setTimeout(clear, 1500);
			};
		};
	};
});

function clear() {
	$('#id_box').val('');
	$('#message').html('');
}


//BACKGROUND ROTATION
//-------------------------//
var bgsArr 	= ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var current = 0;
var next 	= current + 1;

setInterval(new_bg, 3000);

function new_bg() {

	if (next > 9) {
		reset();
	} else {

		$('#bg').removeClass('bg_' + bgsArr[current]).addClass('bg_' + bgsArr[next]);
		current++;
		next++;
	}
};

function reset() {
	$('#bg').removeClass('bg_one bg_two bg_three bg_four bg_five bg_six bg_seven bg_eight bg_nine bg_ten');
	current = 0;
	next = current +1;
}

