$(function(){
	$('#btnCrt').click(function(){
		
		$.ajax({
			url: '/create',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});

function changeimage() {
	var x = document.getElementsByTagName("img").item(0);
	var v = x.getAttribute("src");
	var nam = document.getElementById("inputName");
	var val = nam.value;
	var str = "static/images/"+val+".png";
	x.setAttribute("src", str);
}
