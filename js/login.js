/**
*	LOGIN - SCRIPT
*
*/

function loginSuccess () {
	
	$(".error").remove();

	localStorage.setItem("login", "done");
	localStorage.setItem("user", $("#email").val()+'data');

	alert("login efetuado com sucesso.");

	window.open("index.html");
	window.close();
	
	return true;
}

function validator ()
{
	console.log("entrou");
	
	
	var data = localStorage.getItem($("#email").val() + 'data');
	var report = [];
	if(IsNotEmail($("#email").val())){
		report[report.length] = "invalid email";
	}
	if(data == null){

		report[report.length] = "email not signed";
	}
	else if (data.split('\n')[6] != $("#password").val()){

		report[report.length] = "invalid password";
	}
	else{
		return loginSuccess ();
	}
	
	reportError (report);
	
	return false;
}
