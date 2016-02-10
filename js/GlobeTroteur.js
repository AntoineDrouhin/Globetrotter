
// Initialisation des joueurs
var joueur1 = [];
var joueur2 = [];
var joueur3 = [];
var joueur4 = [];
var JoueursTab = [joueur1,joueur2,joueur3,joueur4];
var terrain = [];
var pioche = [];
var idCarteClique;
var idPosition;
// à changer !!!
var caracteristiqueAcomparer = "popu";

    // terrain.push() -- a la fin
    // terrain.pop() -- met à la fin et la supprime
    // terrain.splice(index,0,valeur)
    // terrain.splice(index, 1) : supprime à cette index

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

    jouerCarte(0,2,0);
    validerLaMise(false , 0, 0);

    // exemple d'utilisation  (caracteritisqueAcompater = variablea globale à regardr tout en haut)
    //estSiLaMiseEstBonne(JoueursTab[0][0] , terrain[0], caracteristiqueAcomparer)
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
    if(caracteristiqueAcomparer == "surf"){
        if(carteGauche.surf < carteDroite.surf){
            return true;
        }else{
            return false;
        }
    }else if(caracteristiqueAcomparer == "popu"){
        if(carteGauche.popu < carteDroite.popu){
            return true;
        }else{
            return false;
        }
    }else if(caracteristiqueAcomparer == "polu"){
         if(carteGauche.polu < carteDroite.polu){
            return true;
        }else{
            return false;
        }
    }else if(caracteristiqueAcomparer == "pib"){
        if(carteGauche.pib < carteDroite.pib){
            return true;
        }else{
            return false;
        }
    }
// TODO faire un pull
}




function redrawPlayer(numJoueur){
        var i;
     //  	console.log("redrawPlayer");
     	$("#titreCartesJoueur").html("Tour du Joueur " + (numJoueur+1));
        var carteJoueur = "<span id='carte' class=\"cartespan\">";
        for(i = 0; i < JoueursTab[numJoueur].length ; i++){
        	console.log(JoueursTab[numJoueur]);

            carteJoueur += JoueursTab[numJoueur][i].getHtml();
            carteJoueur += ("</span>");            
        } 
        $("#cartesJoueur").html(carteJoueur);
        $('#cartesJoueur .c-card').click(function(){alert($(this).attr("id"));});
}

function redrawBoard(){
//	console.log("Debut redrawBoard");
	var i = 0;
	$("#plateau").html("<div  id=\"fleche"+ i + "\"class=\"glyphicon glyphicon-upload flechesInsertion\"></div>");
	for(i = 0; i < terrain.length; i++) {
    	$("#plateau").append(terrain[i].getHtml());
    	$("#plateau").append("<div  id=\"fleche-" + (i+1) + "\"class=\"glyphicon glyphicon-upload flechesInsertion\"></div>");
	}
	$('.flechesInsertion').click(function(){alert($(this).attr("id"));});
}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



function testfinpartie() {
	var i;
    for(i = 0; i<JoueursTab.length; i++){
        if (JoueursTab[i].length == 0) {
            return(i);
        }
    }   
    return -1;
}



