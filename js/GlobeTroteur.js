
// Initialisation des joueurs
var joueur1 = [];
var joueur2 = [];
var joueur3 = [];
var joueur4 = [];
var JoueursTab = [joueur1,joueur2,joueur3,joueur4];
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
    console.log(cartes);
    pioche = remplirPioche(cartes);
    // console.log("pioche : " +  pioche);
    distribuerCarte(terrain);
	// console.log("Terrain : " + terrain);
	// console.log(terrain[0].getHtml());	
	// console.log(terrain[0]);
    distribuerMain();
    redrawBoard();
    redrawPlayer(0);
}

function remplirPioche(jsonArray){
    for (var i = 0; i < jsonArray.length; i++) {
        pioche.push(new cCardObject(jsonArray[i]));
    }
    return pioche;
}


function distribuerCarte( tab ){
	var idNumber = getRandomInt(0,pioche.length);
	// console.log(idNumber + " " + pioche.length);
	// console.log("pioche[idNumber]" + pioche[idNumber]);
	tab.push(pioche[idNumber]);
	pioche.splice(idNumber,1);
	// console.log("Fin de la fonction distribuerCarte " + tab);
}



function distribuerMain(){
	for(i=0; i < 4 ;i++){
		for(j=0;j< 4;j++){
			distribuerCarte(JoueursTab[i]);
		}
	}
}


/*
function jouerCarte(numéroJoueur, numéroCarteJoué, positinJoué){
	//b est un Boolean
	var b = isOk(numéroJoueur, numéroCarteJoué, positinJoué);
	if(b){		
		//ajoute sur le terrain
		terrain.splice(positinJoué,0,JoueursTab[numéroJoueur][numéroCarteJoué]);
		//supprime de la main du joueur
		JoueursTab[numéroJoueur].splice(numéroCarteJoué,1);		
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


function redrawPlayer(numJoueur){
        var i;
     //  	console.log("redrawPlayer");

        var carteJoueur = "<span id='carte' class=\"cartespan\">";

        for(i = 0; i < JoueursTab[numJoueur].length ; i++){
        	console.log(JoueursTab[numJoueur]);

            carteJoueur += JoueursTab[numJoueur][i].getHtml();
            carteJoueur += ("</span>");            
        } 
            $("#cartesJoueur").html(carteJoueur);
}



function redrawBoard(){
//	console.log("Debut redrawBoard");
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
    //for(i = 0; i<JoueursTab.length; i++){
//        if (typeof JoueursTab[i] !== "undefined" && JoueursTab[i].length <= 0) {
//            return(i);
    //}
    //return -1;
//}


