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
var pioche = [];


}

function remplirPioche(fichier){

}

function distributionCarte(joueur){
	joueur.push(pioche[getRandomInt(0,pioche.length + 1]);
}

function distribuer4Cartes(){
	for(i=0;i<=LesJoueurs.length;i++){
		for(j=0;j<=4;j++){
			distributionCarte(lesJoueurs[i]);
		}
}

function insererCarte(positionSurTerrain, positionCarteJoueur){
	terrain.splice(positionSurTerrain,0,positionCarteJoueur);
}

function actualiserAffichage(){

}

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

