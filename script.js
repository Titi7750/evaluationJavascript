function tasks() {
    var li = document.createElement("li"); //Création de li
    var nom = document.getElementById('tache').value;
    var categos = document.getElementById('cate').value;
    var execut = document.getElementById('date').value;
    var t = document.createTextNode(nom, categos, execut);
    li.appendChild(t); //Dire que li est enfant de la variable (t)
    if (nom === '' || categos === '' || execut === '') {
        alert("Veuillez remplir tous les champs demandés");
    } else {
        document.getElementById("list").appendChild(li);
    }

    //Boucles pour faire supprimer l'élement de la liste avec la croix à coté du texte
    var span = document.createElement("SPAN"); //Création de l'élément span pour la variable (txt)
    var txt = document.createTextNode("\u00D7"); //\u00D7 signe x en Maths
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"; //Display none, propriété de CSS pour décidé de cacher l'élément sélectionné
        }
    }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"; //Pareil que ligne 52
    }
}