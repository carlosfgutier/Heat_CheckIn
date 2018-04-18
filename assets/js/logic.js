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
		'name'   : 'Lean',
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

	if (user_id.length >= 9) {

		for (var i = 0; i < campers.length; i++) {
			
			if (user_id == campers[i].id) {
				console.log('Welcome ' + campers[i].name + ' ' + campers[i].last + ". You're good to go!");
			}
		}

	} else {
		console.log('this is not a correct id');
	}

});





function checkID() {
	console.log(campers[0].id + '<br>' + campers[0].name + ' ' + campers[0].last);
};