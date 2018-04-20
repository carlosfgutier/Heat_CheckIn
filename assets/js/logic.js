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
		'name'   : 'Lee',
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

	if (user_id.length <=8) {
		
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

			}
		}
	}
});

function clear() {
	$('#id_box').val('');
	$('#message').html('');
}


//BACKGROUND ROTATION
//-------------------------//
var bgsArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

var index_bg 	= Math.floor(Math.random() * bgsArr.length);
	var active_bg 	= bgsArr[index_bg];

setInterval(new_bg, 3000);

function new_bg() {

	console.log('I changed');
	
	$('#bg').toggleClass('change_bg');
};

function new_bg1() {

};


// $('.bg_one').css('background-image', 'url("assets/images/bg_images/' + active_bg + '.png")');




