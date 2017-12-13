// var profil = {
// 	name : 'Radmila',
// 	surname: 'Kulundžić',
// 	profilPhoto: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/1982082_10152265519364655_353508968_n.jpg?oh=5ecc5ebd3e56eed436c23cfb2399448a&oe=5AC7BBD2',
// 	profilCover: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/184478_10151344643414655_2086960898_n.jpg?oh=5b34041a64cf1cfdbd29dfac4ae752bc&oe=5ABAA305',
// 	status: [
// 		'(crying emoji)',
// 		'Nikad, nikad, nikad!',
// 		'Neću više nikad izostati sa časa!'
// 	]
// };

var allUpdates = document.getElementById('statusi');
var statusUpdateBtn = document.getElementById('novi-status-btn');
var statusUpdate = document.getElementById('novi-status');
var firstStatus = document.getElementById('statusi').firstChild;

statusUpdateBtn.onclick = function(e) {
	
	if (statusUpdate.value.trim() == ""){

		alert("This post appears to be blank. Please write something or attach a link or photo to post.");
	}

	else {
		var newDiv = document.createElement("div");
		var newP = document.createElement("p");

		newP.innerHTML = statusUpdate.value;

		newDiv.classList.add('status');
		newDiv.appendChild(newP);

		allUpdates.insertBefore(newDiv, allUpdates.firstChild);

	}


}