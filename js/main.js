let n1;
let n2;
let n3;
let n4;
let n5;
let ergebnis;
let summe = 0;
let anzahlNoten = 0;
/* Variablen festgelegt */


function tfnotenauslesen() {
    n1 = parseInt(document.getElementById("tfNote1").value);
    n2 = parseInt(document.getElementById("tfNote2").value);
    n3 = parseInt(document.getElementById("tfNote3").value);
    n4 = parseInt(document.getElementById("tfNote4").value);
    n5 = parseInt(document.getElementById("tfNote5").value);

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" +n5);

    punktePruefen(n1);
    punktePruefen(n2);
    punktePruefen(n3);
    punktePruefen(n4);
    punktePruefen(n5);

    ergebnis = summe / anzahlNoten;
    /* Formel zur Ergebnisrechnung vorgeben */

    document.getElementById("ausgabe").innerHTML = ergebnis;

    document.getElementById("ausgabe").style.color = "crimson"

    if (ergebnis <= 5 )
    {
        document.getElementById("ausgabe").style.color = "crimson"
    }else {
        if (ergebnis <= 12){
            document.getElementById("ausgabe").style.color = "orange"
        } else {
            document.getElementById("ausgabe").style.color = "green"
        }
    }
}   /* Farben der verschiedenen Punktzahlen geändert */


    function punktePruefen(punkte) {
        if (isNaN(punkte))
        {
            console.log(punkte + " ist keine Zahl!")
        }else if (punkte >= 0 && punkte <= 15){
            summe = summe + punkte;
            anzahlNoten = anzahlNoten + 1;
        }else{
            console.log(punkte + "Sind keine gültigen Notenpunkte")
        }
        }
        /* maximale Punktzahl: 15 */