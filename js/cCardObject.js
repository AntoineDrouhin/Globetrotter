
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
    }
};

cCardObject.prototype.initHtml = function() {
    this.$el = $("#TEAMPLATE_CARD_HTML").clone();
    this.$el.find("c-card").attr("id", "card-" + this.id);
    this.$el.find(".c-header").html(this.name);
    this.$el.find(".c-pib").html(this.pib);
    this.$el.find(".c-polu").html(this.polu);
    this.$el.find(".c-surf").html(this.surf);
    this.$el.find(".c-popu").html(this.popu);
};

cCardObject.prototype.getHtml =  function() {
    return this.$el.html();
};

