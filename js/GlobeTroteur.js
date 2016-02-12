
// Initialisation des joueurs
var joueur1 = [];
var joueur2 = [];
var joueur3 = [];
var joueur4 = [];
var JoueursTab = [joueur1,joueur2,joueur3,joueur4];
var terrain = [];
var pioche = [];
var dureeDisplay = 1000;
var nbCarte = 4;
var nbJoueur = 2; 

var idCarteClique;
var idFleche;
var carteGaucheDeLaFleche;
var carteDroiteDeLaFleche;

var joueurEnCour = 0;
var cartePose = 0 ;
// à changer !!!
var caracteristiqueAcomparer = "pib";

    // terrain.push() -- a la fin
    // terrain.pop() -- met à la fin et la supprime
    // terrain.splice(index,0,valeur)
    // terrain.splice(index, 1) : supprime à cette index

function init() {

    var param = window.location.search.replace("?","");
    param = param.split("&");

    if(param[0] != "")
        caracteristiqueAcomparer = type;
    if(param[1] != "" && param > 0  && param < 4){
        nbJoueur = param[1];
        var JoueursTab = [];
        var k;
        for(k=0;k<JoueursTab;k++){
            var joueur = [];
            JoueursTab.push[joueur];
        }
    }
    console.log(JoueursTab);
    // remplie la pioche n
    pioche = remplirPioche(cartes);
    // rempli le terrain 
    distribuerCarte(terrain);
    // distribution des cartes des joueurs
    distribuerMain();

    redrawBoard();
    redrawPlayer(0);
    applyInfoGras();



    displayBandeauBleu("Debut de la Partie");
    setTimeout(function() {displayBandeauBleu("Inserer les pays");
		setTimeout(function() {displayBandeauBleu("par ordre croissant");
			setTimeout(function() {displayBandeauBleu("De " + texteType());}, dureeDisplay)} , dureeDisplay);} , dureeDisplay);

}

function texteType(){
    if(caracteristiqueAcomparer == "popu"){
        return "Population";
    }
    if(caracteristiqueAcomparer == "polu"){
        return "Pollution";
    }

    if(caracteristiqueAcomparer == "surf"){
        return "Surface";
    }
    if(caracteristiqueAcomparer == "pib"){
        return "PIB";
    }
}

function onClickFleche(id){
    if( typeof idCarteClique != "undefined" && cartePose == 0){
        idFleche = id;
        console.log("ID Fleche cliqué " + id);
        trouverIDCarteGaucheFleche(id);
        trouverIDCarteDroiteFleche(id);
        jouerCarte(joueurEnCour,convertirIDenIndice(parseID(idCarteClique)),parseID(idFleche));
        cartePose = 1;
        setTimeout(onValidation, dureeDisplay);
        //onValidation();
    }
}

function onClickCarte(id){
	if(typeof idCarteClique != "undefined"){
        $("#" + idCarteClique).css( "border", "1px solid white" );
    }
    idCarteClique = id;
	// console.log("ID Carte cliqué : " + id);
    $("#" + id).css( "border", "5px solid black" );
    console.log ($("#" + id));
}


function onValidation(){
	// console.log("Debut Validation : \nidCarteClique : " + idCarteClique +"\nidFleche : " + idFleche +"\ncarteGauche : " + carteGaucheDeLaFleche +"\ncarteDroite : " + carteDroiteDeLaFleche);
	// Si le mec n'a pas encore défini de fleche de gauche et de droite
	if(idCarteClique == undefined || idFleche == undefined){
		return 0;
	}

    console.log("carte gauche : " + carteGaucheDeLaFleche);
	var testGauche = testSiLaMiseEstBonne(terrain[parseID(carteGaucheDeLaFleche)] , terrain[convertirIDenIndicePourTerrain(parseID(idCarteClique))], caracteristiqueAcomparer);
	// console.log("Test Gauche : " + testGauche);

    console.log("INTERR");

	// console.log(JoueursTab[joueurEnCour], parseID(idCarteClique));
	// console.log(findObject(terrain, parseID(carteDroiteDeLaFleche));
    // console.log(carteDroiteDeLaFleche);
	var testDroite = testSiLaMiseEstBonne(terrain[convertirIDenIndicePourTerrain(parseID(idCarteClique))], terrain[parseID(carteDroiteDeLaFleche)] , caracteristiqueAcomparer);
    // console.log("Test Droite : " + testDroite);
    
    // console.log(testDroite);
    validerLaMise((testGauche && testDroite), joueurEnCour ,parseID(idFleche) );

    console.log("LONGUEUR TABLEAU == "  + JoueursTab[joueurEnCour].length);
    
    idCarteClique = undefined;
	idFleche = undefined;
	carteGaucheDeLaFleche = undefined;
	carteDroiteDeLaFleche = undefined;
    joueurEnCour = (joueurEnCour + 1) % nbJoueur;
    cartePose = 0;

  	testfinpartie();


    redrawPlayer(joueurEnCour); 
    redrawBoard();
    applyInfoGras();
    
    setTimeout(function() {displayBandeauBleu("JOUEUR "+ (joueurEnCour + 1));}, dureeDisplay);
}

function findObject(tab, entier){
	var i;
	if(Array.isArray(tab)){
		for(i = 0; i < tab.length; i++){
			if(tab[i].id == entier)
				return tab[i];
		}	
	}
}

function convertirIDenIndice(pID){
	var i;
	for(i = 0; i < JoueursTab[joueurEnCour].length ; i++){
		if(pID == JoueursTab[joueurEnCour][i].id)
			return i;
	}
}

function convertirIDenIndicePourTerrain(pID){
    var i;
    for(i = 0; i < terrain.length ; i++){
        if(pID == terrain[i].id)
            return i;
    }
}

function trouverIDCarteGaucheFleche(id){
    console.log("ID == " +id);
	if(id == "fleche-0"){
		carteGaucheDeLaFleche = undefined;
	}
	else {
        var idCarteGauche =  parseInt(parseID(id))-1;
		carteGaucheDeLaFleche = "carte-" + idCarteGauche;	
	}
}

function trouverIDCarteDroiteFleche(id){
	// if(id = "fleche-0"){
	// 	carteGaucheDeLaFleche = undefined;
	// }
    var idCarteDroite =  parseInt(parseID(id))+1;
	carteDroiteDeLaFleche = "carte-" + idCarteDroite ;	
	
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
	for(i=0; i < nbJoueur ;i++){
		for(j=0;j< nbCarte;j++){
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
        pioche.push(terrain[indiceFinal]);
        terrain.splice(indiceFinal, 1);
        distribuerCarte(JoueursTab[numJoueur]);
        redrawPlayer(numJoueur);
        redrawBoard();
        displayBandeauRouge("False");
    }else{
        displayBandeauVert("Good");
    }
}

// Test si un joueur a bon c'est a dire on vérifie la valeur des cartes 
// que l'on compare par rapport à la position.
// Renvois true si c'est Ok
function testSiLaMiseEstBonne(carteGauche , carteDroite, caracteristiqueAcomparer){
	console.log(carteDroite);
    if(typeof carteGauche == "undefined" || typeof carteDroite == "undefined"){
		console.log("Lors du test un des cartes(gauche ou droite) etait de type undefined");
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
        console.log(" TESTsIlAmISE === " + carteGauche.polu + " " + carteDroite.polu);
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
 *	Parse un id de fleche ou de car et retourne juste l'entier
 */
function parseID(id){
	if(id === undefined){
		return 0;
	}
	if(id.substring(0,3) == "car"){
		if(id.length == 7){
			return id.substring(6,7)
		}
		if(id.length == 8){
			return id.substring(6,8)
		}
		if(id.length == 9){
			return id.substring(6,9)
		}
	}
	if(id.substring(0,3) == "fle"){
		if(id.length == 8){
			return id.substring(7,8)
		}
		if(id.length == 9){
			return id.substring(7,9)
		}
		if(id.length == 10){
			return id.substring(7,10)
		}
	}
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
        	$("#TEXTE_BANDEAU_BLEU").html( "VICTOIRE DE" );
	         setTimeout(function() {$("#TEXTE_BANDEAU_BLEU").html( "JOUEUR "+ (i) ); $("#BANDEAU_BLEU").css( "display", "block" );}, dureeDisplay);        	
			
        }
    }   
}


