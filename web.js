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

const regionsCentersCoords = [
[207,282], [328,251], [407,151], [536,114], 
[454,254], [542,208], [577,296], [661,228],
[311,377], [402,416], [510,398], [533,352], 
[670,407], [286,504], [393,527], [513,515], 
[611,482] 
]

let ownedRegions = [10,15,16]

const positionCities = [ [380,252], [288,480], [480,408]
]

const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
});