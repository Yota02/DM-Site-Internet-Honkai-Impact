
let se_co = document.getElementById('b2'); // configure la variable se_co 
let titre_co = document.querySelector('h4'); // configure la variable qui vient du h4

//condition de la fonction
if (!localStorage.getItem('nom')) {
  demander_nom_util();
} else {
  let storedName = localStorage.getItem('nom');
  titre_co.textContent = 'Bonjour, ' + storedName;
}

//active la fonction demander le nom si le bouton est cliqué
se_co.addEventListener('click', function() {
  demander_nom_util();
});

function demander_nom_util() {
  let nomUtilisateur = prompt('Veuillez saisir votre nom?');//crée une page de saisie 
  localStorage.setItem('nom', nomUtilisateur);
  if (nomUtilisateur == 'Kiana'){//utilisation du si le texte
	titre_co.textContent = 'Enchanté ma reine ' + nomUtilisateur;
	titre_co.style.color = '#EEEEE';
  }
  if (nomUtilisateur == 'Frederic'){//utilisation du si le texte
    titre_co.textContent = 'Bien le bonjour, professeur  ' + '!  ';
    titre_co.style.color = '#EEEEE';
    }else{
	titre_co.textContent = 'Bonjour, ' + nomUtilisateur //remplace le h4 
	titre_co.style.fontStyle = "normal"; 
  }	
}


