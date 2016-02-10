# Globetrotter

##Info :

* **Pour changer les cartes** Changer dans l'actualisation de l'affichage la ligne (GlobeTrotter : )
 * <code>carteJoueur += JoueursTab[numJoueur][i].getHtml();</code>
* Par :
 * <code>carteJoueur += JoueursTab[numJoueur][i].getHtmlTurned();</code>

## To Do :
* Créer les fonctions permettant le choix d'une carte et de l'emplacement
* Créer une fonction de Parse pour permettre l'affichage au dela de 10 cartes sur le board
* Améliorer DisplayGood()
* Améliorer DisplayFalse()
* Faire perdurer l'affichage d'une carte selectionnée (genre la carte actuellement selectioné reste marqué)
* Faire perdurer l'affichage d'une fleche selectionnée (genre la fleche actuellement selectioné reste marqué
* Modifier comportement de trouverIDCarteDroiteFleche(id) au cas ou on clique que la fleche a plus à droite

## Done :
* Gerer l'affichage Des fleches entre les cartes du board
* Afficher le nom du joueur 
* Faire une fonction d'affichage de la carte "Retournée"
* Gerer l'affichage des cartes sur une même ligne

