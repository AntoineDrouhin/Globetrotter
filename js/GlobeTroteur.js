var cCardObject = function(data) {
    if (data) {
        this.id = data.id;
        this.name = data.name;
        this.surf = data.surf;
        this.popu = data.popu;
        this.polu = data.polu;
        this.pib  = data.pib;
        this.initHtml();
    }
};

cCardObject.prototype.initHtml = function() {
    this.$el = $("#TEAMPLATE_CARD_HTML").clone();
    this.$el.find("c-card").attr("id", this.id);
    this.$el.find(".c-header").html(this.name);
    this.$el.find(".c-pib").html(this.pib);
    this.$el.find(".c-polu").html(this.polu);
    this.$el.find(".c-surf").html(this.surf);
    this.$el.find(".c-popu").html(this.popu);
};

cCardObject.prototype.getHtml =  function() {
    return this.$el.html();
};

 var cartes =  [
    {
            id : 1,
            name : "Brésil",
            surf : 8511965,
            popu : 205716890,
            polu : 2.3,
            pib  : 251800
    },

    {
            id : 2,
            name : "Irlande",
            surf : 70280,
            popu : 472208,
            polu : 9.5,
            pib  : 221700
    },

    {
            id : 3,
            name : "Sénégal",
            surf : 196190,
            popu : 12969606,
            polu : 0.4,
            pib  : 14700
    },

    {
            id : 4,
            name : "Grèce",
            surf : 131940,
            popu : 10767827,
            polu : 8.7,
            pib  : 312000
    },

    {
            id : 5,
            name : "Corée du Sud",
            surf : 98480,
            popu : 48860500,
            polu : 6.7,
            pib  : 1164000
    },

    {
            id : 6,
            name : "Cameroun",
            surf : 475440,
            popu : 20129878,
            polu : 0.4,
            pib  : 25800
    },

    {
            id : 7,
            name : "Suisse",
            surf : 41290,
            popu : 8014000,
            polu : 4.7,
            pib  : 665900
    },

    {
            id : 8,
            name : "Maroc",
            surf : 446550,
            popu : 32309239,
            polu : 1.7,
            pib  : 101800
    },

    {
            id : 9,
            name : "Roumanie",
            surf : 237500,
            popu : 21848504,
            polu : 3.9,
            pib  : 185300
    },

    {
            id : 10,
            name : "147181",
            surf : 8511965,
            popu : 29890686,
            polu : 0.1,
            pib  : 18300
    },

    {
            id : 11,
            name : "Liban",
            surf : 10400,
            popu : 4140289,
            polu : 4.7,
            pib  : 41500
    },

    {
            id : 12,
            name : "Thailande",
            surf : 514000,
            popu : 67091089,
            polu : 4.1,
            pib  : 345600
    },

    {
            id : 13,
            name : "Afrique du Sud",
            surf : 1219912,
            popu : 50586757,
            polu : 9.7,
            pib  : 422000
    },

    {
            id : 14,
            name : "France",
            surf : 547030,
            popu : 65800000,
            polu : 5.6,
            pib  : 2808000
    },

    {
            id : 15,
            name : "Canada",
            surf : 9984670,
            popu : 34300083,
            polu : 15.6,
            pib  : 1759000
    },

    {
            id   :  16,
            name : "Algérie",
            surf : 2381740,
            popu : 35406303,
            polu : 3.3,
            pib  : 183400
    },

    {
            id   :  17,
            name : "Nouvelle-Zélande",
            surf : 268680,
            popu : 4327944,
            polu : 7.3,
            pib  : 168800
    },

    {
            id   :  18,
            name : "Colombie",
            surf : 1138910,
            popu : 45239079,
            polu : 1.6,
            pib  : 321500
    },

    {
            id   :  19,
            name : "Inde",
            surf : 3287590,
            popu : 1205073612,
            polu : 1.8,
            pib  : 1843000
    },

    {
            id   :  20,
            name : "Japon",
            surf : 377835,
            popu : 127368088,
            polu : 9.3,
            pib  : 5855000
    },

    {
            id   :  21,
            name : "Italie",
            surf : 301230,
            popu : 61261254,
            polu : 6.7,
            pib  : 2246000
    },

    {
            id   :  22,
            name : "Danemark",
            surf : 43094,
            popu : 5543453,
            polu : 5.9,
            pib  : 330500
    },

    {
            id   :  23,
            name : "Argentine",
            surf : 2780400,
            popu : 42192494,
            polu : 5.4,
            pib  : 435200
    },

    {
            id   :  24,
            name : "Egypte",
            surf : 1001450,
            popu : 83688164,
            polu : 3,
            pib  : 231900
    },

    {
            id   :  25,
            name : "Alemagne",
            surf : 357021,
            popu : 81305856,
            polu : 9.1,
            pib  : 3629000
    },

    {
            id   :  26,
            name : "Mexique",
            surf : 1972550,
            popu : 114975406,
            polu : 4,
            pib  : 185000
    },

    {
            id   :  27,
            name : "Tunisie",
            surf : 163610,
            popu : 10732900,
            polu : 2.6,
            pib  : 48900
    },

    {
            id   :  28,
            name : "Pays-Bas",
            surf : 41526,
            popu : 16730632,
            polu : 11.2,
            pib  : 858300
    },

    {
            id   :  29,
            name : "Australie",
            surf : 7886650,
            popu : 22015576,
            polu : 19,
            pib  : 1507000
    },

    {
            id : 30,
            name : "Croatie",
            surf : 56542,
            popu : 4480043,
            polu : 5.4,
            pib  : 608000
    },

    {
            id : 31,
            name : "Israel",
            surf : 20770,
            popu : 7590758,
            polu : 9.2,
            pib  : 245300
    },

    {
            id : 32,
            name : "Canada",
            surf : 9984670,
            popu : 34300083,
            polu : 15.6,
            pib  : 1759000
    },

    {
            id : 33,
            name : "Portugal",
            surf : 92391,
            popu : 10781459,
            polu : 5,
            pib  : 241900
    },

    {
            id : 34,
            name : "Russie",
            surf : 17098178,
            popu : 138082178,
            polu : 12.5,
            pib  : 1291000
    },

    {
            id : 35,
            name : "Belgique",
            surf : 30528,
            popu : 10438453,
            polu : 9.2,
            pib  : 529000
    }
];

var pioche = [];
function main() {

    // Initialisation des joueurs
    var joueur1 = [4];
    var joueur2 = [4];
    var joueur3 = [4];
    var joueur4 = [4];
    var lesJoueurs = [joueur1,joueur2,joueur3,joueur4];


    // initialisation du terrain
    var terrain = [];
    // terrain.push() -- a la fin
    // terrain.pop() -- met à la fin et la supprime
    // terrain.splice(index,0,valeur)
    // terrain.splice(index, 1) : supprime à cette index

    // initailisation de la pioche
    
    pioche = remplirPioche(cartes);
    
    debugger;
    
}

function remplirPioche(jsonArray){
    var pioche = [];
    for (var i = 0; i < jsonArray.length; i++) {
        pioche.push(new cCardObject(jsonArray[i]));
    }
    return pioche;
    
}

function distributionCarte(joueur){
	joueur.push(pioche[getRandomInt(0,pioche.length) + 1]);
}

function distribuer4Cartes(){
	for(i=0;i<=LesJoueurs.length;i++){
		for(j=0;j<=4;j++){
			distributionCarte(lesJoueurs[i]);
		}
}

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

// retourne TRUE si il a bien placé ça carte. FALSE sinon
function isOk(positionSurTerrain, carteJoueur){
	// TODO
}

function actualiserAffichage(){

}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
}

