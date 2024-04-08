var pseudo = prompt("Veuillez entrer votre pseudo:");


function envoyerformulaire() {
  // ouvre une fenetre sans barre d'etat, ni d'ascenceur
  w=open("",'formulaire','width=400,height=200,toolbar=no,scrollbars=no,resizable=yes');	
  w.document.close();
}






document.getElementById('popupBtn').addEventListener('click', function() {
  document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('fermerPopupBtn').addEventListener('click', function() {
  document.getElementById('popup').classList.add('hidden');
});


var pseudo = getElementsById('pseudo');
pseudo.style.color = 'blue';
pseudo.style.width = '200px';






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
