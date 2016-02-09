
</style>
<div style="margin: 20px;">
    <div id="ja-content" class="col1">
        <div class="ja-content-top">
            <div class="ja-content-bot clearfix">
                <div id="ja-current-content">
                    <div class="item-page">
                        <div class="moduletable">
                            <style type="text/css">
                                #form_allure label{
                                    margin:0 0 0 10px;
                                }
                                #form_allure input{
                                    width:50px;
                                    margin:0 5px 10px 10px;
                                    text-align:right;
                                }
                                #pourcAppVMA label{
                                    width:150px;
                                    display:block;
                                    float:left;
                                }

                                #form_allure .f_disabled{
                                    color:#E80909;
                                }

                                #form_allure h2, .title{
                                    font-size:12px;
                                }

                                #form_allure .calculer{
                                    width:100px;
                                    text-align:center;
                                }

                                #votre_allure{
                                    float:left;
                                    margin:0 20px 0 0;
                                }
                                #votre_vma{
                                    float:left;
                                    margin:0 20px 0 0;
                                }
                                #votre_pourc{
                                    float:left;
                                }


                                #pourcAppVMA{
                                    float:left;
                                    margin:0 75px 0 0;
                                }
                                #alluresVMA{
                                    float:left;
                                }
                                .clear{
                                    clear:both;
                                }

                                #alluresSPE label{
                                    float:left;
                                    width:80px;
                                }
                                #alluresSPE1{
                                    float:left;
                                    margin:0 75px 0 0;
                                }
                                #alluresSPE2{
                                    float:left;
                                }
                                .calculer{
                                    float:left;
                                    margin:10px 0 0 0;
                                }
                            </style>
                            <script type="text/javascript">
                                function pourcApp()
                                {
                                    if (document.forms['form_allure'].elements['f_chronoHeure'].value != "" && document.forms['form_allure'].elements['f_chronoMinute'].value != "")
                                    {
                                        var heure = Number(document.forms['form_allure'].elements['f_chronoHeure'].value);
                                        var minute = Number(document.forms['form_allure'].elements['f_chronoMinute'].value);

                                        if (minute + (60 * heure) >= 211)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_9'].value;
                                        }
                                        else if (minute + (60 * heure) >= 181)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_8'].value;
                                        }
                                        else if (minute + (60 * heure) >= 151)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_7'].value;
                                        }
                                        else if (minute + (60 * heure) >= 121)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_6'].value;
                                        }
                                        else if (minute + (60 * heure) >= 91)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_5'].value;
                                        }
                                        else if (minute + (60 * heure) >= 61)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_4'].value;
                                        }
                                        else if (minute + (60 * heure) >= 46)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_3'].value;
                                        }
                                        else if (minute + (60 * heure) >= 31)
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_2'].value;
                                        }
                                        else
                                        {
                                            return document.forms['form_allure'].elements['f_pourcAppVMA_1'].value;
                                        }
                                    }
                                }

                                function allure()
                                {
                                    if (document.forms['form_allure'].elements['f_distance'].value != "")
                                    {
                                        var distance = Number(document.forms['form_allure'].elements['f_distance'].value);
                                        var heure = Number(document.forms['form_allure'].elements['f_chronoHeure'].value);
                                        var minute = Number(document.forms['form_allure'].elements['f_chronoMinute'].value);
                                        var seconde = Number(document.forms['form_allure'].elements['f_chronoSeconde'].value);

                                        var allure = ((distance * 3600) / ((heure * 3600) + (minute * 60) + seconde));
                                        var num = new Number(allure);
                                        return num.toFixed(2);
                                    }

                                }

                                function calculVMA()
                                {
                                    var monAllure = allure();
                                    var monPourcApp = pourcApp();
                                    var VMA = ((monAllure * 100) / monPourcApp);

                                    var num = new Number(VMA);
                                    return num.toFixed(2);
                                }

                                function calculAllureVMA()
                                {
                                    var VMA = calculVMA();

                                    var allureVMA1 = new Number(((VMA * document.forms['form_allure'].elements['f_alluresVMA_11'].value * 1000) / (100 * 3600) * 30));
                                    document.forms['form_allure'].elements['f_alluresVMA_12'].value = allureVMA1.toFixed(0);

                                    var allureVMA2 = new Number((200 / ((VMA * document.forms['form_allure'].elements['f_alluresVMA_21'].value * 1000) / (100 * 3600))));
                                    document.forms['form_allure'].elements['f_alluresVMA_22'].value = allureVMA2.toFixed(0);

                                    var allureVMA3 = new Number(((VMA * document.forms['form_allure'].elements['f_alluresVMA_31'].value * 1000) / (100 * 3600) * 30));
                                    document.forms['form_allure'].elements['f_alluresVMA_32'].value = allureVMA3.toFixed(0);

                                    var allureVMA4 = new Number(((VMA * document.forms['form_allure'].elements['f_alluresVMA_41'].value * 1000) / (100 * 3600) * 45));
                                    document.forms['form_allure'].elements['f_alluresVMA_42'].value = allureVMA4.toFixed(0);

                                    var allureVMA5 = new Number(((VMA * document.forms['form_allure'].elements['f_alluresVMA_51'].value * 1000) / (100 * 3600) * 60));
                                    document.forms['form_allure'].elements['f_alluresVMA_52'].value = allureVMA5.toFixed(0);

                                    var allureVMA6 = new Number((300 / ((VMA * document.forms['form_allure'].elements['f_alluresVMA_61'].value * 1000) / (100 * 3600))));
                                    document.forms['form_allure'].elements['f_alluresVMA_62'].value = allureVMA6.toFixed(0);

                                    var allureVMA7 = new Number((400 / ((VMA * document.forms['form_allure'].elements['f_alluresVMA_71'].value * 1000) / (100 * 3600))));
                                    document.forms['form_allure'].elements['f_alluresVMA_72'].value = allureVMA7.toFixed(0);

                                    var allureVMA8 = new Number((500 / ((VMA * document.forms['form_allure'].elements['f_alluresVMA_81'].value * 1000) / (100 * 3600))));
                                    document.forms['form_allure'].elements['f_alluresVMA_82'].value = allureVMA8.toFixed(0);

                                    var allureVMA9 = new Number((600 / ((VMA * document.forms['form_allure'].elements['f_alluresVMA_91'].value * 1000) / (100 * 3600))));
                                    document.forms['form_allure'].elements['f_alluresVMA_92'].value = allureVMA9.toFixed(0);

                                }

                                function allureSpe()
                                {
                                    var allure_ = allure();

                                    var allureSPE11 = new Number((500 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_11'].value = Math.floor(allureSPE11);
                                    var allureSPE12 = new Number((500 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_11'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_12'].value = allureSPE12.toFixed(0);

                                    var allureSPE21 = new Number((1000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_21'].value = Math.floor(allureSPE21);
                                    var allureSPE22 = new Number((1000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_21'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_22'].value = allureSPE22.toFixed(0);

                                    var allureSPE31 = new Number((1500 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_31'].value = Math.floor(allureSPE31);
                                    var allureSPE32 = new Number((1500 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_31'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_32'].value = allureSPE32.toFixed(0);

                                    var allureSPE41 = new Number((2000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_41'].value = Math.floor(allureSPE41);
                                    var allureSPE42 = new Number((2000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_41'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_42'].value = allureSPE42.toFixed(0);

                                    var allureSPE51 = new Number((2500 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_51'].value = Math.floor(allureSPE51);
                                    var allureSPE52 = new Number((2500 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_51'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_52'].value = allureSPE52.toFixed(0);

                                    var allureSPE61 = new Number((3000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_61'].value = Math.floor(allureSPE61);
                                    var allureSPE62 = new Number((3000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_61'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_62'].value = allureSPE62.toFixed(0);

                                    var allureSPE71 = new Number((4000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_71'].value = Math.floor(allureSPE71);
                                    var allureSPE72 = new Number((4000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_71'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_72'].value = allureSPE72.toFixed(0);

                                    var allureSPE81 = new Number((5000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_81'].value = Math.floor(allureSPE81);
                                    var allureSPE82 = new Number((5000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_81'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_82'].value = allureSPE82.toFixed(0);

                                    var allureSPE91 = new Number((6000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_91'].value = Math.floor(allureSPE91);
                                    var allureSPE92 = new Number((6000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_91'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_92'].value = allureSPE92.toFixed(0);

                                    var allureSPE101 = new Number((7000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_101'].value = Math.floor(allureSPE101);
                                    var allureSPE102 = new Number((7000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_101'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_102'].value = allureSPE102.toFixed(0);

                                    var allureSPE111 = new Number((8000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_111'].value = Math.floor(allureSPE111);
                                    var allureSPE112 = new Number((8000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_111'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_112'].value = allureSPE112.toFixed(0);

                                    var allureSPE121 = new Number((9000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_121'].value = Math.floor(allureSPE121);
                                    var allureSPE122 = new Number((9000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_121'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_122'].value = allureSPE122.toFixed(0);

                                    var allureSPE131 = new Number((10000 / ((allure_ * 1000) / (3600))) / 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_131'].value = Math.floor(allureSPE131);
                                    var allureSPE132 = new Number((10000 / ((allure_ * 1000) / (3600))) - document.forms['form_allure'].elements['f_alluresSPE_131'].value * 60);
                                    document.forms['form_allure'].elements['f_alluresSPE_132'].value = allureSPE132.toFixed(0);

                                    var allureSPE14 = new Number((5 * 60) * (allure_ * 1000 / 3600));
                                    document.forms['form_allure'].elements['f_alluresSPE_14'].value = Math.floor(allureSPE14);

                                    var allureSPE15 = new Number((6 * 60) * (allure_ * 1000 / 3600));
                                    document.forms['form_allure'].elements['f_alluresSPE_15'].value = Math.floor(allureSPE15);

                                    var allureSPE16 = new Number((7 * 60) * (allure_ * 1000 / 3600));
                                    document.forms['form_allure'].elements['f_alluresSPE_16'].value = Math.floor(allureSPE16);

                                    var allureSPE17 = new Number((8 * 60) * (allure_ * 1000 / 3600));
                                    document.forms['form_allure'].elements['f_alluresSPE_17'].value = Math.floor(allureSPE17);

                                    var allureSPE18 = new Number((9 * 60) * (allure_ * 1000 / 3600));
                                    document.forms['form_allure'].elements['f_alluresSPE_18'].value = Math.floor(allureSPE18);

                                    var allureSPE19 = new Number((10 * 60) * (allure_ * 1000 / 3600));
                                    document.forms['form_allure'].elements['f_alluresSPE_19'].value = Math.floor(allureSPE19);

                                }

                                function calcul()
                                {
                                    if (!isNaN(pourcApp()))
                                    {
                                        document.forms['form_allure'].elements['f_pourcApp'].value = pourcApp();
                                        document.forms['form_allure'].elements['f_allure'].value = allure();
                                        document.forms['form_allure'].elements['f_VMA'].value = calculVMA();
                                        calculAllureVMA();
                                        allureSpe();
                                    }
                                }
                            </script>
                            <script type="text/javascript">
                                <!-- 
                                function CalculVitesse(distancetemps, tempshr, tempsmin, tempssec) {
                                    distancetemps = parseFloat(distancetemps);
                                    tempshr = parseFloat(tempshr);
                                    tempsmin = parseFloat(tempsmin);
                                    tempssec = parseFloat(tempssec);

                                    if ((tempshr >= 0) && (tempsmin >= 0) && (tempsmin < 60) && (tempssec >= 0) && (tempssec < 60) && (distancetemps >= 0)) {
                                        temps = ((tempshr * 3600) + (tempsmin * 60) + tempssec);
                                        if ((temps > 0) && (distancetemps > 0)) {
                                            VitesseMoyenne = Math.round((((distancetemps / temps) * 3600) / 1000) * 100) / 100;
                                            TempKilometremin = Math.floor((3600 / VitesseMoyenne) / 60);
                                            TempKilometresec = Math.round((3600 / VitesseMoyenne) % 60);
                                        }
                                        else {
                                            VitesseMoyenne = 0;
                                            TempKilometremin = 0;
                                            TempKilometresec = 0;
                                        }
                                    }

                                    else {
                                        alert(' La distance doit être un chiffre, le temps en heure, minute et secondes doivent être un chiffre compris entre 0 et 59 !');
                                    }

                                    var AfficheVitesseMoyenne = document.getElementById("AfficheVitesseMoyenne");
                                    AfficheVitesseMoyenne.innerHTML = VitesseMoyenne;

                                    var AfficheTempKilometremin = document.getElementById("AfficheTempKilometremin");
                                    AfficheTempKilometremin.innerHTML = TempKilometremin;

                                    var AfficheTempKilometresec = document.getElementById("AfficheTempKilometresec");
                                    AfficheTempKilometresec.innerHTML = TempKilometresec;

                                }

                                function CalculTemps(totalDistance, vitesse, distancepassage) {
                                    var vitesse = parseFloat(vitesse);
                                    var totalDistance = parseFloat(totalDistance);
                                    var distancepassage = parseFloat(distancepassage);
                                    var vitesseMetreSec = (vitesse * 0.277777778);
                                    var TempsParcoursSec;
                                    var TempsParcoursMin;
                                    var TempsParcoursHrs;
                                    var Tempsparcour;
                                    if ((vitesse >= 0) && (totalDistance >= 0)) {
                                        if ((totalDistance > 0) && (vitesse > 0)) {
                                            Tempsparcour = Math.round((((totalDistance) / vitesseMetreSec)) * 100) / 100;
                                            TempsParcoursHrs = Math.floor((Tempsparcour) / 3600);
                                            TempsParcoursMin = Math.floor((Tempsparcour % 3600) / 60);
                                            TempsParcoursSec = Math.round((Tempsparcour % 3600) % 60);

                                            tempspassage(totalDistance, vitesse, distancepassage);
                                        }
                                        else {
                                            TempsParcoursHrs = 0;
                                            TempsParcoursMin = 0;
                                            TempsParcoursSec = 0;
                                        }
                                    }
                                    else {
                                        alert('La vitesse moyenne et la distance doivent être un chiffre !');
                                        TempsParcoursHrs = 0;
                                        TempsParcoursMin = 0;
                                        TempsParcoursSec = 0;
                                    }

                                    var AfficheTempsParcoursHrs = document.getElementById("AfficheTempsParcoursHrs");
                                    AfficheTempsParcoursHrs.innerHTML = TempsParcoursHrs;

                                    var AfficheTempsParcoursMin = document.getElementById("AfficheTempsParcoursMin");
                                    AfficheTempsParcoursMin.innerHTML = TempsParcoursMin;

                                    var AfficheTempsParcoursSec = document.getElementById("AfficheTempsParcoursSec");
                                    AfficheTempsParcoursSec.innerHTML = TempsParcoursSec;

                                }

                                function tempspassage(distancetotal, vitesse, distancepassage) {
                                    var vitesse = parseFloat(vitesse);
                                    var distancetotal = parseFloat(distancetotal);
                                    var distancepassage = parseFloat(distancepassage);
                                    var distanceint = distancepassage;
                                    var vitesseMetreSec = (vitesse * 0.277777778);
                                    var TempsParcoursSec2;
                                    var TempsParcoursMin2;
                                    var TempsParcoursHrs2;
                                    var Tempsparcour2;
                                    var i = 0;
                                    var tempspassage = "<strong>Temps de passage :</strong><br />";
                                    tempspassage += '<table style="text-align: center;margin: auto;width: 300px;"><tr><td>';
                                    while (distanceint < distancetotal) {
                                        i = i + 1;
                                        Tempsparcour2 = Math.round((((distanceint) / vitesseMetreSec)) * 100) / 100;
                                        TempsParcoursHrs2 = Math.floor((Tempsparcour2) / 3600);
                                        TempsParcoursMin2 = Math.floor((Tempsparcour2 % 3600) / 60);
                                        TempsParcoursSec2 = Math.round((Tempsparcour2 % 3600) % 60);
                                        tempspassage += '<strong>';
                                        tempspassage += distanceint;
                                        tempspassage += '</strong> m :</td><td><span class="couleur">';
                                        tempspassage += TempsParcoursHrs2;
                                        tempspassage += '</span>h <span class="couleur">';
                                        tempspassage += TempsParcoursMin2
                                        tempspassage += '</span>m <span class="couleur">';
                                        tempspassage += TempsParcoursSec2

                                        tempspassage += "</span>s </td></tr><tr><td>";

                                        distanceint = distanceint + distancepassage;
                                    }

                                    Tempsparcour2 = Math.round((((distancetotal) / vitesseMetreSec)) * 100) / 100;
                                    TempsParcoursHrs2 = Math.floor((Tempsparcour2) / 3600);
                                    TempsParcoursMin2 = Math.floor((Tempsparcour2 % 3600) / 60);
                                    TempsParcoursSec2 = Math.round((Tempsparcour2 % 3600) % 60);
                                    tempspassage += '<strong>';
                                    tempspassage += distancetotal;
                                    tempspassage += '</strong> m :</td><td><span class="couleur">';
                                    tempspassage += TempsParcoursHrs2;
                                    tempspassage += '</span>h <span class="couleur">';
                                    tempspassage += TempsParcoursMin2
                                    tempspassage += '</span>m <span class="couleur">';
                                    tempspassage += TempsParcoursSec2
                                    tempspassage += "</span>s </td><td>&nbsp;</td><td>&nbsp;</td></tr></table>";

                                    var AffichePassage = document.getElementById("AffichePassage");
                                    AffichePassage.innerHTML = tempspassage;
                                }

-->
                            </script>