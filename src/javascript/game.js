 // Variáveis para armazenar as últimas seleções
 var lastSelectedHair = "";
 var lastSelectedHairColorDiv = "";
 var lastSelectedEyes = "";

 // Função para mostrar apenas a seleção de cabelo quando o botão 'btn-hair' é clicado
 function showHairSelection() {
     document.getElementById("hair").style.display = "flex";
     document.getElementById("color-hair-short").style.display = "none";
     document.getElementById("color-hair-medio").style.display = "none";
     document.getElementById("color-hair-longo").style.display = "none";
     document.getElementById("eyes").style.display = "none"; // Oculta a seleção de olhos
     document.getElementById("color-eyes-1").style.display = "none";
     document.getElementById("color-eyes-2").style.display = "none";
     document.getElementById("color-eyes-3").style.display = "none";
     document.getElementById("color-eyes-4").style.display = "none";
 }

 // Função para mostrar apenas a seleção de cor de cabelo curto quando o botão 'btn-color-hair' é clicado
 function showShortHairColor() {
 document.getElementById("hair").style.display = "none";
 document.getElementById("color-hair-short").style.display = "flex"; // Exibe as opções de 
 document.getElementById("color-hair-medio").style.display = "none";
 document.getElementById("color-hair-longo").style.display = "none";
 document.getElementById("eyes").style.display = "none";
 document.getElementById("color-eyes-1").style.display = "none";
 document.getElementById("color-eyes-2").style.display = "none";
 document.getElementById("color-eyes-3").style.display = "none";
 document.getElementById("color-eyes-4").style.display = "none";
}

// Função para mostrar apenas a seleção de cor de cabelo médio quando o botão 'btn-color-hair' é clicado
function showMediumHairColor() {
 document.getElementById("hair").style.display = "none";
 document.getElementById("color-hair-short").style.display = "none";
 document.getElementById("color-hair-medio").style.display = "flex"; // Exibe as opções de 
 document.getElementById("color-hair-longo").style.display = "none";
 document.getElementById("eyes").style.display = "none";
 document.getElementById("color-eyes-1").style.display = "none";
 document.getElementById("color-eyes-2").style.display = "none";
 document.getElementById("color-eyes-3").style.display = "none";
 document.getElementById("color-eyes-4").style.display = "none";
}

// Função para mostrar apenas a seleção de cor de cabelo longo quando o botão 'btn-color-hair' é clicado
function showLongHairColor() {
 document.getElementById("hair").style.display = "none";
 document.getElementById("color-hair-short").style.display = "none";
 document.getElementById("color-hair-medio").style.display = "none";
 document.getElementById("color-hair-longo").style.display = "flex"; // Exibe as opções de 
 document.getElementById("eyes").style.display = "none";
 document.getElementById("color-eyes-1").style.display = "none";
 document.getElementById("color-eyes-2").style.display = "none";
 document.getElementById("color-eyes-3").style.display = "none";
 document.getElementById("color-eyes-4").style.display = "none";
}

 // Função para mostrar apenas a seleção de olhos quando o botão 'btn-eyes' é clicado
 function showEyesSelection() {
     document.getElementById("eyes").style.display = "flex";
     document.getElementById("color-eyes-1").style.display = "none";
     document.getElementById("color-eyes-2").style.display = "none";
     document.getElementById("color-eyes-3").style.display = "none";
     document.getElementById("color-eyes-4").style.display = "none";
     document.getElementById("hair").style.display = "none"; // Oculta a seleção de cabelo
     document.getElementById("color-hair-short").style.display = "none"; // Oculta a 
     document.getElementById("color-hair-medio").style.display = "none"; // Oculta a 
     document.getElementById("color-hair-longo").style.display = "none"; // Oculta a 
 }

 // Funções para mostrar a seleção de cor de olhos correspondente quando o botão 'btn-color-eyes' é clicado
 function showEyesColor1() {
     document.getElementById("color-eyes-1").style.display = "flex";
     document.getElementById("color-eyes-2").style.display = "none";
     document.getElementById("color-eyes-3").style.display = "none";
     document.getElementById("color-eyes-4").style.display = "none";
     document.getElementById("eyes").style.display = "none";
     document.getElementById("hair").style.display = "none";
     document.getElementById("color-hair-short").style.display = "none"; // Oculta a 
     document.getElementById("color-hair-medio").style.display = "none"; // Oculta a s
     document.getElementById("color-hair-longo").style.display = "none"; // Oculta a s
 }

 function showEyesColor2() {
     document.getElementById("color-eyes-1").style.display = "none";
     document.getElementById("color-eyes-2").style.display = "flex";
     document.getElementById("color-eyes-3").style.display = "none";
     document.getElementById("color-eyes-4").style.display = "none";
     document.getElementById("eyes").style.display = "none";
     document.getElementById("hair").style.display = "none";
     document.getElementById("color-hair-short").style.display = "none"; // Oculta a seleção de cor de cabelo curto
     document.getElementById("color-hair-medio").style.display = "none"; // Oculta a seleção de cor de cabelo médio
     document.getElementById("color-hair-longo").style.display = "none"; // Oculta a seleção de cor de cabelo longo
 }

 function showEyesColor3() {
     document.getElementById("color-eyes-1").style.display = "none";
     document.getElementById("color-eyes-2").style.display = "none";
     document.getElementById("color-eyes-3").style.display = "flex";
     document.getElementById("color-eyes-4").style.display = "none";
     document.getElementById("eyes").style.display = "none";
     document.getElementById("hair").style.display = "none";
     document.getElementById("color-hair-short").style.display = "none"; // Oculta a seleção de cor de cabelo curto
     document.getElementById("color-hair-medio").style.display = "none"; // Oculta a seleção de cor de cabelo médio
     document.getElementById("color-hair-longo").style.display = "none"; // Oculta a seleção de cor de cabelo longo
 }

 function showEyesColor4() {
     document.getElementById("color-eyes-1").style.display = "none";
     document.getElementById("color-eyes-2").style.display = "none";
     document.getElementById("color-eyes-3").style.display = "none";
     document.getElementById("color-eyes-4").style.display = "flex";
     document.getElementById("eyes").style.display = "none";
     document.getElementById("hair").style.display = "none";
     document.getElementById("color-hair-short").style.display = "none"; // Oculta a seleção de cor de cabelo curto
     document.getElementById("color-hair-medio").style.display = "none"; // Oculta a seleção de cor de cabelo médio
     document.getElementById("color-hair-longo").style.display = "none"; // Oculta a seleção de cor de cabelo longo
 }
 //olhos e cabelo pre-selecionados
 document.addEventListener('DOMContentLoaded', function () {
    
     // Selecionar os olhos padrão
     selectEyes('../imagens/olhos/olhos-1-roxos.png');

      // Selecionar a primeira opção de cabelo por padrão
      selectHair('../imagens/cabelos/cabelo-curto-preto.png');

 });

// Função para selecionar um cabelo
function selectHair(imagePath) {
 // Remove a imagem do cabelo anterior, se houver
 const existingHair = document.querySelector(".hair-image");
 if (existingHair) {
     existingHair.parentNode.removeChild(existingHair);
 }

 // Remove a imagem da cor do cabelo anterior, se houver
 const existingHairColor = document.querySelector(".hair-color-image");
 if (existingHairColor) {
     existingHairColor.parentNode.removeChild(existingHairColor);
 }

 // Cria a imagem do cabelo
 var hairImage = new Image();
 hairImage.src = imagePath;
 hairImage.className = "hair-image"; // Adiciona uma classe para identificação
 hairImage.style.position = "absolute";
 hairImage.style.left = "95px";
 hairImage.style.top = "90px";
 hairImage.style.width = "120px";
 //
 hairImage.style.zIndex = '2';

 // Adicionar a nova imagem à área de visualização
 var personImage = document.getElementById("person-image");
 personImage.appendChild(hairImage);

 // Armazenar o caminho da imagem selecionada
 lastSelectedHair = imagePath;
}

// Função para selecionar a cor do cabelo
function colorHair(imagePath) {
 // Remove a cor do cabelo anterior, se houver
 const existingHairColor = document.querySelector(".hair-color-image");
 if (existingHairColor) {
     existingHairColor.remove();
 }

 // Remove a imagem do cabelo anterior, se houver
 const existingHair = document.querySelector(".hair-image");
 if (existingHair) {
     existingHair.parentNode.removeChild(existingHair);
 }

 // Cria a imagem da cor do cabelo
 var hairColorImage = new Image();
 hairColorImage.src = imagePath;
 hairColorImage.classList.add("hair-color-image"); // Adiciona uma classe para identificação
 hairColorImage.style.position = "absolute";
 hairColorImage.style.left = "95px";
 hairColorImage.style.top = "90px";
 hairColorImage.style.width = "120px";
 //
 hairColorImage.style.zIndex = '2';

 // Adiciona a nova imagem à área de visualização
 var personImage = document.getElementById("person-image");
 personImage.appendChild(hairColorImage);

 // Armazena o caminho da imagem selecionada
 lastSelectedHair = imagePath;
}

// Função para selecionar os olhos
function selectEyes(imagePath) {
 // Remove a imagem dos olhos anterior, se houver
 const existingEyes = document.querySelector(".eyes-image");
 if (existingEyes) {
     existingEyes.parentNode.removeChild(existingEyes);
 }

 // Cria a imagem dos olhos
 var eyesImage = new Image();
 eyesImage.src = imagePath;
 eyesImage.className = "eyes-image"; // Adiciona uma classe para identificação
 eyesImage.style.position = "absolute";
 eyesImage.style.left = "132px";
 eyesImage.style.top = "112px";
 eyesImage.style.width = "56px";
 //
 eyesImage.style.zIndex = '1';

 // Adiciona a nova imagem à área de visualização
 var personImage = document.getElementById("person-image");
 personImage.appendChild(eyesImage);

 // Armazena o caminho da imagem selecionada
 lastSelectedEyes = imagePath;
}

// Função para selecionar a cor dos olhos
function colorEyes(imagePath) {
 const existingEyesColor = document.querySelector(".eyes-color-image");
 if (existingEyesColor) {
     existingEyesColor.remove();
 }

 // Remove a imagem do cabelo anterior, se houver
 const existingEyes = document.querySelector(".eyes-image");
 if (existingEyes) {
     existingEyes.parentNode.removeChild(existingEyes);
 }

 // Cria a imagem da cor dos olhos
 var eyesColorImage = new Image();
 eyesColorImage.src = imagePath + ".png"; // Adiciona a extensão do arquivo
 eyesColorImage.classList.add("eyes-color-image"); // Adiciona uma classe para identificação
 eyesColorImage.style.position = "absolute";
 eyesColorImage.style.left = "132px";
 eyesColorImage.style.top = "112px";
 eyesColorImage.style.width = "56px";
 //
 eyesColorImage.style.zIndex = '1';

 // Adiciona a nova imagem à área de visualização
 var personImage = document.getElementById("person-image");
 personImage.appendChild(eyesColorImage);

 // Armazena o caminho da imagem selecionada
 lastSelectedEyes = imagePath;
}


 // Adiciona ouvintes de evento de clique aos botões relevantes
 document.getElementById("btn-hair").addEventListener("click", showHairSelection);
 document.getElementById("btn-color-hair").addEventListener("click", function() {
 // Verifica qual foi o último cabelo selecionado e exibe a cor correspondente
 if (lastSelectedHair.includes("cabelo-curto")) {
     showShortHairColor();
 } else if (lastSelectedHair.includes("cabelo-medio")) {
     showMediumHairColor();
 } else if (lastSelectedHair.includes("cabelo-longo")) {
     showLongHairColor();
 }
});
 document.getElementById("btn-eyes").addEventListener("click", showEyesSelection);
 document.getElementById("btn-color-eyes").addEventListener("click", function() {
 // Verifica qual foi o último cabelo selecionado e exibe a cor correspondente
 if (lastSelectedEyes.includes("olhos-1")) {
     showEyesColor1();
     } else if (lastSelectedEyes.includes("olhos-2")) {
         showEyesColor2();
     } else if (lastSelectedEyes.includes("olhos-3")) {
         showEyesColor3();
     } else if (lastSelectedEyes.includes("olhos-4")) {
         showEyesColor4();
     }
 });