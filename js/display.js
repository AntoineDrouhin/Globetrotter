

function applyInfoGras(){
	if(caracteristiqueAcomparer == "surf"){
    	$(".c-surf").css( "font-weight", "bold" ); 
    }
    else if(caracteristiqueAcomparer == "popu"){
    	$(".c-popu").css( "font-weight", "bold" ); 
    }
	else if(caracteristiqueAcomparer == "polu"){
    	$(".c-polu").css( "font-weight", "bold" ); 
	}
	else if(caracteristiqueAcomparer == "pib"){
    	$(".c-pib").css( "font-weight", "bold" ); 
    }
}

function displayBandeauRouge(texte){
	$("#TEXTE_BANDEAU_ROUGE").html( texte );
	
	setTimeout(function() { $("#BANDEAU_ROUGE").css( "display", "none" );}, dureeDisplay);
}

function displayBandeauVert(texte){
	$("#TEXTE_BANDEAU_VERT").html( texte );
	$("#BANDEAU_VERT").css( "display", "block" );
	setTimeout(function() { $("#BANDEAU_VERT").css( "display", "none" );}, dureeDisplay);
}

function displayBandeauBleu(texte){
	$("#TEXTE_BANDEAU_BLEU").html( texte );
	$("#BANDEAU_BLEU").css( "display", "block" );
	setTimeout(function() { $("#BANDEAU_BLEU").css( "display", "none" );}, dureeDisplay);


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
            carteJoueur += "<div draggable=\"true\" id='carte"+ i +"' class=\"cartes\">";
            carteJoueur += JoueursTab[numJoueur][i].getHtmlTurned();
            carteJoueur += ("</div>");            
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
        //console.log(terrain);
    	$("#plateau").append(terrain[i].getHtml());
    	$("#plateau").append("<div  id=\"fleche-" + (i+1) + "\"class=\"glyphicon glyphicon-upload flechesInsertion\"></div>");
	}
	$('.flechesInsertion').click(function(){onClickFleche($(this).attr("id"));});
}