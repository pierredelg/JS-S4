"use strict";

//const nom = `Regina`;
//let html = `images/` + nom.toLowerCase() + `.jpg`;
//document.querySelector(".pizzasContainer").innerHTML = html;
//let html;
var noms = ['Regina', 'Napolitaine', 'Spicy'];
noms = [{
  nom: 'Regina',
  base: 'tomate',
  ingredients: [{
    id: 1,
    nom: 'jambon'
  }, {
    id: 1,
    nom: 'champignons'
  }, {
    id: 1,
    nom: 'fromage'
  }]
}, {
  nom: 'Napolitaine',
  base: 'tomate',
  ingredients: [{
    id: 1,
    nom: 'jambon'
  }, {
    id: 1,
    nom: 'anchois'
  }, {
    id: 1,
    nom: 'fromage'
  }]
}, {
  nom: 'Spicy',
  base: 'tomate',
  ingredients: [{
    id: 1,
    nom: 'jambon'
  }, {
    id: 1,
    nom: 'piment'
  }, {
    id: 1,
    nom: 'fromage'
  }]
}];
/*
METHODE FOR


let html = "";

for (let i = 0; i < noms.length;i++ ){
    
    let html2 = `images/` + noms[i].nom.toLowerCase() + `.jpg`;
    
    html += `<article class="media">
        <a href="${html2}" >
            <img src="${html2}" width="246" height="138" />
            <h4>${noms[i].nom}</h4>
                <ul>`;
                for(let j = 0;j < noms[0].ingredients.length;j++){
                    html += `<li>${noms[i].ingredients[j].nom}</li>`;
                }
                html +=`</ul>
        </a>
    </article>`;
}
*/

/*
METHODE FOR EACH
*/

var html = "";
noms.forEach(function (pizza) {
  var html2 = "images/" + pizza.nom.toLowerCase() + ".jpg";
  html += "<article class=\"media\">\n        <a href=\"".concat(html2, "\">\n            <img src=\"").concat(html2, "\" width=\"246\" height=\"138\" />\n            <h4>").concat(pizza.nom, "</h4>\n                <ul>");
  pizza.ingredients.forEach(function (ingred) {
    html += "<li>".concat(ingred.nom, "</li>");
  });
  html += "</ul>\n        </a>\n    </article>";
});
document.querySelector(".pizzasContainer").innerHTML = html;
//# sourceMappingURL=main.js.map