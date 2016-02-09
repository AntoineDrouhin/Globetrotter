main() {

// Initialisation des joueurs

var joueur1 = new array(4);
var joueur2 = new array(4);
var joueur3 = new array(4);
var joueur4 = new array(4);
var lesJoueurs = [joueur1,joueur2,joueur3,joueur4];

// initialisation du terrain
var terrain = [];
// terrain.push() -- a la fin
// terrain.pop() -- met à la fin et la supprime
// terrain.splice(index,0,valeur)
// terrain.splice(index, 1) : supprime à cette index

// initailisation de la pioche
var pioche = [];


}

remplirPioche(fichier){

}

distributionCarte(joueur){
	joueur.push(pioche[getRandomInt(0,pioche.length + 1]);
}

distribuer4Cartes(){
	for(i=0;i<=4;i++){
		for(j=0;j<=4;j++){
			distributionCarte(lesJoueurs[i]);
		}
	}
}

insererCarte(position, id){

}

actualiserAffichage(){

}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

