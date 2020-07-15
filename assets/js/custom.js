(function($){
	//show add modal
	$(document).ready(function(){
		$('a#student_show').click(function(){
			$('#student_add_modal').modal('show');
			return false;
		});

	});

	// //show single student 
	// $('a#single_show').click(function(){
	// 	$('#single_student_modal').modal('show');
	// });

	$(document).on('click','a#single_show', function(){
			$('#single_student_modal').modal('show');

			return false;

	});


	//add new student 
	$('form#add_student_form').submit(function(e){
		e.preventDefault();

		let name = $('input[name="name"]').val();
		let email = $('input[name="email"]').val();
		let cell = $('input[name="cell"]').val();

		if (name == "" || email =="" || cell =="")
		{
			$('.mess').html('<p class = "alert alert-danger">All fild requar <button class="close" data-dismiss = "alert">&times;</button></p>')
		}else{

			$.ajax({
				url: 'inc/ajax/student_add.php',
				data: new FormData(this),
				method: "POST",
				contentType: false,
				processData: false,
				success: function(data){

					$('form#add_student_form')[0].reset();
					
					$('#student_add_modal').modal('hide');
					$('.mess_all').html(data);
					allStudent();
				}

			});
		}


	});

	//show all 
	function allStudent(){
		$.ajax({
		url: 'inc/ajax/show_all_student.php',
		success: function(data){
			$('tbody#show_all_data').html(data);
		}
	});
	}

	allStudent();

	// delete student 
	$(document).on('click','a#delete_student',function(){

		let student_id = $(this).attr('student_id');
		let con = confirm("are you sure");
		if (con == true) {
			$.ajax({
				url: 'inc/ajax/delete_student.php',
				data: {id : student_id},
				method: "POST",
				success: function(data){
					$('.mess_all').html('<p class = "alert alert-danger">delete success fully<button class="close" data-dismiss = "alert">&times;</button></p>')
					allStudent();
				}


			});
		}else {
			return false;
		}

		
		return false;
	});



})(jQuery)