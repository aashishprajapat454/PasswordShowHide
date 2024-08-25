let password = document.getElementById('password');
	let button = document.getElementById('seepass');
	button.addEventListener('click', function seepass() {
		if (password.getAttribute('type') === 'password') {
			password.setAttribute('type', 'text');			
			button.innerText = 'heid'
		}
		else{
			password.setAttribute('type','password');
			button.innerText = 'show'
		}
	});