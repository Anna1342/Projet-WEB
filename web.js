

// Fonction pour afficher le popin spécifié
function afficherPopin(popin) {
  var popin = document.getElementById(popin);
  if (popin) {
      popin.classList.remove('hidden');
  }
}

// Fonction pour masquer tous les popins
function masquerPopins() {
  var popin = document.querySelectorAll('.popin');
  popin.forEach(function(popin) {
      popin.classList.add('hidden');
  });
}

// Fonction pour envoyer le formulaire
function recupererpseudo() {
 
  var pseudoValue = document.querySelector("#pseudoInput").value;
  var pseudoAffichee = document.querySelector("#pseudoAffichee");
  pseudoAffichee.innerHTML = " pseudo: " + pseudoValue;

}

window.addEventListener('load', function() {
  // Afficher le premier popin au chargement de la page
  afficherPopin('popin');

  // Ajouter des écouteurs d'événements pour les boutons de fermeture des popins
  document.getElementById('fermerBtn1').addEventListener('click', function() {
      masquerPopins();
      afficherPopin('popin2'); // Affichez le popin suivant
    
  });

  document.getElementById('fermerBtn2').addEventListener('click', function() {
      masquerPopins();
      afficherPopin('popin3')
  });

  document.getElementById('formulaire').addEventListener('submit', function(event) {
    // Empêchez le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();
    
    masquerPopins();

  });

  
});

var pseudo = document.getElementById('pseudo');
var player = document.querySelector('audio')




function toggleResources() {
  const resourcesContainer = document.getElementById('resourcesContainer');
  resourcesContainer.classList.toggle('hidden');
}
// Sélectionnez l'élément emoji
const emoji = document.getElementById('emoji');

// Sélectionnez la boîte de dialogue des ressources
const resourcesContainer = document.getElementById('resourcesContainer');

// Lorsque l'élément emoji est cliqué
emoji.addEventListener('click', function() {
    // Affiche la boîte de dialogue des ressources
    resourcesContainer.classList.toggle('hidden');
});




let ressources = {
  denarii: 2000,
  victualia: 500,
  lignum: 20,
  ferrum: 20,
  petra: 20,
  manupretium:2,
}; 

let ordo = 75; 

const buildings = {
  "Forum": { coutInitial: {petra : 20, denarii:500 } , conditionsRevenu: { ordonnance: 70 }, revenu: { denarii:100}},
  "Bains": { coutInitial: {petra : 10, denarii:500 }, revenu: {ordo:10} },
  "Aqueduc": { coutInitial: {petra : 30, denarii:1500 }, revenu:{ordo:20} },
  "Amphitéatre": { coutInitial:{petra : 20, denarii:1000 }, revenu:{ordo:20} },
  "Temple": { coutInitial:{petra : 20, denarii:1000 }, revenu: {ordo:10} },
  "Caserne": { coutInitial:{petra : 5,  denarii:1000, lignum: 10}, conditionsRevenu: { ordonnance:  50 }, revenu: 20 },
  "Ecurie": { coutInitial: {petra : 5,  denarii:1000, lignum: 20}, conditionsRevenu: { ordonnance: 50 }, revenu: 20 },

};

function construirebuildings(type) {
  const building = buildings[type];
  if (verifierRessourcesSuffisantes(batiment.coutInitial)) {
      soustraireRessources(batiment.coutInitial);
      // Mettre à jour d'autres états du jeu en fonction du bâtiment construit
      // Par exemple, ajouter le bâtiment à la liste des bâtiments du joueur
  } else {
      console.log("Ressources insuffisantes pour construire ce bâtiment !");
  }
}


function mettreAJourRessources() {
  for (const type in buildings) {
      const building = buildings[type];
      if (remplirConditionsRevenu(batiment)) {
        ajouterRevenu(batiment.revenu);
   }
  }
}

function verifierRessourcesSuffisantes(cost) {
  for (const ressource in cost) {
      if (ressources[ressource] < cost[ressource]) {
          return false;
      }
  }
  return true;
}


function soustraireRessources(cost) {
  for (const ressource in cost) {
      ressources[ressource] -= cost[ressource];
  }
}

// Fonction pour vérifier si un bâtiment remplit les conditions pour produire des revenus
function remplirConditionsRevenu(batiment) {
  const conditionsRevenu = batiment.conditionsRevenu;
  if (!conditionsRevenu) {
      return true; // Aucune condition spécifiée, donc le bâtiment peut toujours produire des revenus
  }
  for (const condition in conditionsRevenu) {
      if (condition === 'ordonnance' && ordo < conditionsRevenu[condition]) {
          return false;
      }
  }
  return true;
}

// Fonction pour ajouter les revenus d'un bâtiment au joueur
function ajouterRevenu(revenu) {
  for (const ressource in revenu) {
      ressources[ressource] += revenu[ressource];
  }
}




// Mettre à jour les ressources dans le HTML
function mettreAJourRessourcesHTML() {
  const ressourcesContainer = document.getElementById('ressourcesContainer');
  ressourcesContainer.innerHTML = ''; // Effacer le contenu précédent

  for (const ressource in ressources) {
      const li = document.createElement('li');
      li.innerText = `${ressource}: ${ressources[ressource]}`;
      ressourcesContainer.appendChild(li);
  }
}

// Appelez cette fonction chaque fois que vous souhaitez mettre à jour les ressources dans votre interface utilisateur
mettreAJourRessourcesHTML();






const nbRegions = 17;
const adjacencyLists = [ 
[1,8],
[0,2,4,8],
[1,3,4,5],
[2,5], 
[1,2,5,6,9,10],
[2,3,4,6,8], 
[4,5,7,10,11],
[5,6,11], 
[0,1,9,13], 
[1,4,8,10,13,14], 
[4,6,9,11,12,15], 
[6,7,10,12],
[10,11,16], 
[8,9,14],
[9,13,15], 
[10,14,16], 
[12,15], 
]

# regions 

const regionsCentersCoords = [
[207,282], [328,251], [407,151], [536,114], 
[454,254], [542,208], [577,296], [661,228],
[311,377], [402,416], [510,398], [533,352], 
[670,407], [286,504], [393,527], [513,515], 
[611,482] 
]

let ownedRegions = [10,15,16]

document.getElementById('map').addEventListener('click', function(event) {
    const rect = this.getBoundingClientRect(); // Obtient la position de l'image
    const x = event.clientX - rect.left; // Position x du clic relative à l'image
    const y = event.clientY - rect.top; // Position y du clic relative à l'image

    checkRegions(x, y);
});

function checkRegions(x, y) {
    const radius = 30; // Rayon de tolérance

    regions.forEach(region => {
        const distance = Math.sqrt(Math.pow(region.x - x, 2) + Math.pow(region.y - y, 2));
        if (distance <= radius) {
            alert(`Clic dans la région ${region.id}`);
            // Vous pouvez effectuer d'autres actions ici, comme mettre à jour l'interface utilisateur
        }
    });
}


#villes 

  
for(let i = 0; i<positionCities.lenght; i++){
  let img = new Image();
  img.src = '/src/assets.jpg';
  img.classList.add('city')
  img.style.left = positionCities[i][0]+'px'; 
  img.style.top = positionCities [i][1]+'px';
  document.getElementById('plan_map').appendChild(img);
}




const positionCities = [ [380,252], [288,480], [480,408]
]

const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
});
