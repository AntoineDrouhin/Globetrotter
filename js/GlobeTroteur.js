
// Initialisation des joueurs
var joueur1 = [4];
var joueur2 = [4];
var joueur3 = [4];
var joueur4 = [4];
var lesJoueurs = [joueur1,joueur2,joueur3,joueur4];
var terrain = [];
var pioche = [];

    // initialisation du terrain

    // terrain.push() -- a la fin
    // terrain.pop() -- met à la fin et la supprime
    // terrain.splice(index,0,valeur)
    // terrain.splice(index, 1) : supprime à cette index

    // initailisation de la pioche

function main() {
    var i;
    pioche = remplirPioche(cartes);

    console.log(pioche);


    distribuerCarte(terrain);
	
	console.log(terrain[0].getHtml());	
	console.log(terrain[0]);

    redrawBoard();


/*
    pioche = remplirPioche(cartes);
 
    console.log("main");

    redrawPlayer(terrain);


  	var data = {
            id : 3,
            name : "France",
            surf : 196190,
            popu : 12969606,
            polu : 0.4,
            pib  : 14700
        }

	var card = new cCardObject(data);
	joueur1.push(card);
	redrawPlayer(joueur1);



    
   */
    
}

function remplirPioche(jsonArray){
    for (var i = 0; i < jsonArray.length; i++) {
        pioche.push(new cCardObject(jsonArray[i]));
    }
    return pioche;
}


function distribuerCarte( tab ){
	var idNumber = getRandomInt(0,pioche.length) + 1;
	tab.push(pioche[idNumber]);
	pioche[idNumber] = undefined;
	console.log("Fin de la fonction distribuerCarte " + tab);
}


/*
function distribuer4Cartes(){
	for(i=0;i<=LesJoueurs.length;i++){
		for(j=0;j<=4;j++){
			distribuerCarte(lesJoueurs[i]);
		}
}
*/

/*
function jouerCarte(numéroJoueur, numéroCarteJoué, positinJoué){
	//b est un Boolean
	var b = isOk(numéroJoueur, numéroCarteJoué, positinJoué);
	if(b){		
		//ajoute sur le terrain
		terrain.splice(positinJoué,0,lesJoueurs[numéroJoueur][numéroCarteJoué]);
		//supprime de la main du joueur
		lesJoueurs[numéroJoueur].splice(numéroCarteJoué,1);		
	}
	else{
		//Todo quand le joueur à perdu
	}
}
*/

/*
// retourne TRUE si il a bien placé ça carte. FALSE sinon
function isOk(positionSurTerrain, carteJoueur){
	// TODO
}
*/


function redrawPlayer(joueur){
        var i;
       	console.log("redrawPlayer");
       	console.log(joueur);
        for(i ; i < joueur.length ; i++){
            var carteJoueur = "<div id='carte'" + i + ">";
            carteJoueur.append(joueur[i].getHtml());
            carteJoueur.append("</div>");            
        } 
            $("#cartesJoueur").html(carteJoueur);

}



function redrawBoard(){
	console.log("Debut redrawBoard");
	var i;
	for(i = 0; i < terrain.length; i++) {
    	$("#plateau").html(terrain[i].getHtml());
	}
}



// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//function testfinpartie() {
//	var i;
    //for(i = 0; i<LesJoueurs.length; i++){
//        if (typeof LesJoueurs[i] !== "undefined" && LesJoueurs[i].length <= 0) {
//            return(i);
    //}
    //return -1;
//}


