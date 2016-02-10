
// Initialisation des joueurs
var joueur1 = [];
var joueur2 = [];
var joueur3 = [];
var joueur4 = [];
var JoueursTab = [joueur1,joueur2,joueur3,joueur4];
var terrain = [];
var pioche = [];

var idCarteClique;
var idFleche;
var carteGaucheDeLaFleche;
var carteDroiteDeLaFleche;

var joueurEnCour = 0;

// à changer !!!
var caracteristiqueAcomparer = "popu";

    // terrain.push() -- a la fin
    // terrain.pop() -- met à la fin et la supprime
    // terrain.splice(index,0,valeur)
    // terrain.splice(index, 1) : supprime à cette index

function init() {
    var i;
    // remplie la pioche n
    pioche = remplirPioche(cartes);
    // rempli le terrain 
    distribuerCarte(terrain);
    // distribution des cartes des joueurs
    distribuerMain();

    redrawBoard();
    redrawPlayer(0);

    $('#boutonValidation').click(function(){onValidation()});

}

function onClickFleche(id){
	idFleche = id;
	console.log("ID Fleche cliqué " + id);
	trouverIDCarteGaucheFleche(id);
	trouverIDCarteDroiteFleche(id);
}

function onClickCarte(id){
	idCarteClique = id;
	console.log("ID Carte cliqué : " + id);
}


function onValidation(){
	console.log("Debut Validation : \nidCarteClique : " + idCarteClique +"\nidFleche : " + idFleche +"\ncarteGauche : " + carteGaucheDeLaFleche +"\ncarteDroite : " + carteDroiteDeLaFleche);
	// Si le mec n'a pas encore défini de fleche de gauche et de droite
	if(idCarteClique == undefined || idFleche == undefined){
		return 0;
	}

	var testGauche = testSiLaMiseEstBonne(carteGaucheDeLaFleche , carteJoueur, caracteristiqueAcomparer);
	console.log("Test Gauche : " + testGauche);

	var testDroite = testSiLaMiseEstBonne(carteJoueur, carteDroiteDeLaFleche , caracteristiqueAcomparer);
    console.log("Test Droite : " + testDroite);

    	//SI LA MISE EST BONNE.
    if(testGauche && testDroite) {
    	displayGood();
    	jouerCarte(joueurEnCour,convertirIDenIndice(idCarte),idfleche.substring(7,8));
    }
    	// SI LA MISE EST FAUSSE
    else {
    	displayFalse();
    }
    

    idCarteClique = undefined;
	idFleche = undefined;
	carteGaucheDeLaFleche = undefined;
	carteDroiteDeLaFleche = undefined;
    joueurEnCour = (joueurEnCour + 1) % 4;

    redrawBoard();
    redrawPlayer(joueurEnCour);    
}

function displayGood(){
	alert("Bien joué");
}

function displayFalse(){
	alert("C'est faux");
}


function convertirIDenIndice(pID){
	var i = 0;
	for(i = 0; i < JoueursTab[joueurEnCour].length ; i++){
		if(pID == JoueursTab[joueurEnCour].id)
			return i;
	}
}

function trouverIDCarteGaucheFleche(id){
	if(id = "fleche-0"){
		carteGaucheDeLaFleche = undefined;
	}
	else {
		carteGaucheDeLaFleche = "carte-" + (id.substring(7,8) - 1);	
	}
}

function trouverIDCarteDroiteFleche(id){
	if(id = "fleche-0"){
		carteGaucheDeLaFleche = undefined;
	}
	else {
		carteGaucheDeLaFleche = "carte-" + id.substring(7,8);	
	}
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

// Lorsque le joueur joue une carte , la carte s'affiche sur le 
// terrain mais s'éfface dans la main du joueur
function jouerCarte(numJoueur , indice , indiceFinal){
    terrain.splice(indiceFinal ,0,JoueursTab[numJoueur][indice]);
    JoueursTab[numJoueur].splice(indice, 1);
    redrawPlayer(numJoueur);
    redrawBoard();
}

// valide la mise du joueur quand le joueur à faux on ajoute une carte au joueur 
// et on enlève la carte sur le terrain
function validerLaMise(aReussiSaMise ,numJoueur , indiceFinal ){
    if(!aReussiSaMise){
        terrain.splice(indiceFinal, 1);
        distribuerCarte(JoueursTab[numJoueur]);
        redrawPlayer(numJoueur);
        redrawBoard();
    }
}

// Test si un joueur a bon c'est a dire on vérifie la valeur des cartes 
// que l'on compare par rapport à la position.
function testSiLaMiseEstBonne(carteGauche , carteDroite, caracteristiqueAcomparer){
	if(typeof carteGauche == "undefined" || typeof carteDroite == "undefined"){
		return true;
	}
    if(caracteristiqueAcomparer == "surf"){
        if(carteGauche.surf <= carteDroite.surf){
            return true;
        }else{
            return false;
        }
    }else if(caracteristiqueAcomparer == "popu"){
        if(carteGauche.popu <= carteDroite.popu){
            return true;
        }else{
            return false;
        }
    }else if(caracteristiqueAcomparer == "polu"){
         if(carteGauche.polu <= carteDroite.polu){
            return true;
        }else{
            return false;
        }
    }else if(caracteristiqueAcomparer == "pib"){
        if(carteGauche.pib <= carteDroite.pib){
            return true;
        }else{
            return false;
        }
    }
}



/*
 *	Rafraichis l'affichage du joueur, prend en parametre le numero du joueur (0-3)
 */
function redrawPlayer(numJoueur){
        var i;
     //  	console.log("redrawPlayer");
     	$("#titreCartesJoueur").html("Tour du Joueur " + (numJoueur+1));
        var carteJoueur = "";
        for(i = 0; i < JoueursTab[numJoueur].length ; i++){
        	// console.log(JoueursTab[numJoueur]);
            carteJoueur += "<span id='carte"+ i +"' class=\"cartespan\">";
            carteJoueur += JoueursTab[numJoueur][i].getHtml();
            carteJoueur += ("</span>");            
        } 
        $("#cartesJoueur").html(carteJoueur);
        $('#cartesJoueur .c-card').click(function(){onClickCarte($(this).attr("id"));});
}


/*
 *	Rafraichis l'affichage du terrain en fonction du contenu de l'array "terrain"
 */
function redrawBoard(){
//	console.log("Debut redrawBoard");
	var i = 0;
	$("#plateau").html("<div  id=\"fleche-"+ i + "\"class=\"glyphicon glyphicon-upload flechesInsertion\"></div>");
	for(i = 0; i < terrain.length; i++) {
    	$("#plateau").append(terrain[i].getHtml());
    	$("#plateau").append("<div  id=\"fleche-" + (i+1) + "\"class=\"glyphicon glyphicon-upload flechesInsertion\"></div>");
	}
	$('.flechesInsertion').click(function(){onClickFleche($(this).attr("id"));});
}

/*
 *	On renvoie un entier aléatoire entre une valeur min (incluse) et une valeur max (exclue).
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


/*
 *	
 */
function testfinpartie() {
	var i;
    for(i = 0; i<JoueursTab.length; i++){
        if (JoueursTab[i].length == 0) {
            return(i);
        }
    }   
    return -1;
}

// function pause(){
//     while(validation == 0 || idCarteClique != undefined || idFleche != undefined){
//         setTimeout(function() {}, 1000);
//     }
// }


