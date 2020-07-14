(function($){
	//show add modal
	$(document).ready(function(){
		$('a#student_show').click(function(){
			$('#student_add_modal').modal('show');
		});
	});

	//show single student 
	$('a#single_show').click(function(){
		$('#single_student_modal').modal('show');
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

})(jQuery)