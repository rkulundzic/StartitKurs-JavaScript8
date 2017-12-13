var profil = {
	name : 'Radmila',
	surname: 'Kulundžić',
	profilPhoto: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/1982082_10152265519364655_353508968_n.jpg?oh=5ecc5ebd3e56eed436c23cfb2399448a&oe=5AC7BBD2',
	profilCover: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/184478_10151344643414655_2086960898_n.jpg?oh=5b34041a64cf1cfdbd29dfac4ae752bc&oe=5ABAA305',
	status: [
		'(crying emoji)',
		'Nikad, nikad, nikad!',
		'Neću više nikad izostati sa časa!'
	]
};

var profilImg = document.getElementById('profile-img');
profilImg.src = profil.profilPhoto;
profilImg.style.width = "160px";
profilImg.style.height = "160px";
profilImg.alt = profil.name + ' ' + profil.surname + 'profile photo';

var coverImg = document.getElementById('hero');
coverImg.style.background = "url('" + profil.profilCover + "') top center"; // konkatenacija
// coverImg.style.background.size = "contain"; ??

var fullName = document.getElementById('full-name');
fullName.innerHTML = profil.name + " " + profil.surname;

var statusPlaceholder = document.getElementById('novi-status');
statusPlaceholder.placeholder = "What's on your mind, " + profil.name + "?"

var allUpdates = document.getElementById('statusi');

for (var i = profil.status.length - 1; i >= 0; i--) {
	var newDiv = document.createElement("div");
	var newP = document.createElement("p");

	newP.innerHTML = profil.status[i];
	
	newDiv.classList.add('status');
	newDiv.appendChild(newP);

	allUpdates.appendChild(newDiv);
}
