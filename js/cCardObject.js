
var cCardObject = function(data) {
    if (data) {
        this.id = data.id;
        this.$el;
        this.name = data.name;
        this.surf = data.surf;
        this.popu = data.popu;
        this.polu = data.polu;
        this.pib  = data.pib;
        this.initHtml();
        this.initHtmlTurned();
    }
};

cCardObject.prototype.initHtml = function() {
    this.$el = $("#TEAMPLATE_CARD_HTML").clone();
    this.$el.find(".c-card").attr("id", "carte-" + this.id);
    this.$el.find(".c-header").html(this.name);
    this.$el.find(".c-pib").html(splitNumber(this.pib));
    this.$el.find(".c-polu").html(this.polu);
    this.$el.find(".c-surf").html(splitNumber(this.surf));
    this.$el.find(".c-popu").html(splitNumber(this.popu));
};

cCardObject.prototype.getHtml =  function() {
    return this.$el.html();
};


cCardObject.prototype.initHtmlTurned = function() {
    this.$elt = $("#TEAMPLATE_CARD_HTML_TURNED").clone();
    this.$elt.find(".c-card").attr("id", "carte-" + this.id);
    //this.$elt.find("c-card").attr("id", this.id);
    this.$elt.find(".c-header").html(this.name);
};


cCardObject.prototype.getHtmlTurned =  function() {
    return this.$elt.html();
};

function splitNumber(number){
    number = number+"";
    var str_popu = number.substring(0,number.length % 3);
    number = number.substring(number.length % 3, number.length);
    str_popu += " "
    while (number.length > 3){    
        str_popu += number.substring(0,3);
        str_popu += " "; 
        number = number.substring(3,number.length)
    }
        str_popu += number.substring(0,3);
        number = number.substring(3,number.length)
    return str_popu;
}


