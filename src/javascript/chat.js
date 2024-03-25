class Personagem {
  constructor(nome) {
      this.nome = nome;
  }

  falar(texto) {
      const dialogBox = document.getElementById('dialog-box');
      dialogBox.innerHTML += `<p><strong>${this.nome}:</strong> ${texto}</p>`;
  }

  mostrarOpcoes(opcoes) {
      exibirEscolhas(opcoes);
  }

  exibirImagem() {
      const imagemPersonagem = document.getElementById('personagem-imagem');
      imagemPersonagem.style.display = 'flex';
  }

  ocultarImagem() {
      const imagemPersonagem = document.getElementById('personagem-imagem');
      imagemPersonagem.style.display = 'none';
  }

  ocultarDialogo() {
      const dialogBox = document.getElementById('dialog-box');
      dialogBox.style.display = 'none';
  }

  exibirDialogo() {
      const dialogBox = document.getElementById('dialog-box');
      dialogBox.style.display = 'flex';
  }
}

const outroPersonagem = new Personagem("");

const dialogo = [
{ 
  escolhas: [
    { resposta: "(Acabei de chegar em casa e já me sinto exausta! Ainda sinto a mochila pinicar nas minhas costas e essa leg insuportável grudar nas minhas pernas.)", caminho: 1 },
  ]
},
{ escolhas: [
    { resposta: "-Mãe, pai cheguei da escola..", 
   caminho: 2 },
  ]
},
{ escolhas: [
    { resposta: "(Definitivamente esse não foi o meu dia, certeza que tirei a nota mais baixa possivel nessa prova surpresa, bom, nao era supresa ja que o professor avisou, mas eu nao ouvi então foi surpresa sim. Acho nada me animaria agora a não ser... LEITE! Isso! Eu preciso de um copo de leite!) ", 
   caminho: 3 },
  ]
},
{ escolhas: [
    { resposta: "* geladeira * - O que é isso?", 
   caminho: 4 },
  ]
},
{ escolhas: [
    { resposta: "(Pego o papel que está grudada na geladeira)", 
   caminho: 5 },
  ]
},
{ escolhas: [
    { resposta: "-Mas o que? Férias? Que sorte hein, enquanto isso vou ter que limpar o porão, so de pensar que aquele lugar vai esta cheio de poeira me da arrepios", 
   caminho: 6 },
  ]
},
{ escolhas: [
    { resposta: "-Bom, mas antes de encarar o porão, vou comer alguma coisa.", 
   caminho: 7 },
  ]
},
{ escolhas: [
    { resposta: "(Abri a geladeira e peguei a garrafa com leite)", 
   caminho: 8 },
  ]
},
{ escolhas: [
    { resposta: "-o bom dessa viajem é que eu não vou precisar falar sobre minha pessima nota", 
   caminho: 9 },
  ]
},
{ escolhas: [
    { resposta: "(Termino de tomar o leite,  vou até o meu quarto e troco de roupa, colocando algo mais confortável)", 
   caminho: 10 },
  ]
},
{ escolhas: [
    { resposta: "(Após essas pequenas tarefas, percebo que estou adiando o inevitável. Respiro fundo, preparando-me mentalmente para enfrentar o porão.)", 
   caminho: 11 },
  ]
},
{ escolhas: [
    { resposta: "-É hora de encarar meus medos e descobrir o que há lá embaixo.", 
   caminho: 12 },
  ]
},
{ escolhas: [
    { resposta: "A. So espero que nao tenha baratas", caminho: 13 },
    { resposta: "B. Só espero que nao tenha nenhum fantasma", caminho: 13 }
  ]
},
{ escolhas: [
    { resposta: "-Não vai ter jeito, é melhor eu fazer isso logo. ", 
   caminho: 14 },
  ]
},
{ escolhas: [
    { resposta: "(Desço as escadas para o porão, aqui é tao escuro e úmido que estou começando a me arrepender de nao ter deixado isso para outra hora)", 
   caminho: 15 },
  ]
},
{ escolhas: [
    { resposta: "-Por que eu concordei em fazer isso mesmo?", 
   caminho: 16 },
  ]
},
{ escolhas: [
    { resposta: "(Começo a vasculhar o porão, movendo caixas empoeiradas e antigas.)", 
   caminho: 17 },
  ]
},
{ escolhas: [
    { resposta: " -Que barulho é esse? (acabei de escutar um barulho estranho vindo de um canto escuro)", 
   caminho: 18 },
  ]
},
{ escolhas: [
    { resposta: "(Me aproximo lentamente do canto onde o som veio)", 
   caminho: 19 },
  ]
},
{ escolhas: [
    { resposta: "-O que é isso?", 
   caminho: 20 },
  ]
},
{ escolhas: [
    { resposta: "(Estendo a minha mão para pegar o objeto)", 
   caminho: 21 },
  ]
},
{ escolhas: [
    { resposta: "-Um livro, deve ter sido isso que fez o barulho..", 
   caminho: 22 },
  ]
},
{ escolhas: [
    { resposta: "(O livro tem uma capa dura e escura, nao tem nada escrito na capa)", 
   caminho: 23 },
  ]
},
{ escolhas: [
    { resposta: "(Limpo sua capa empoeirada e começo a folhear o livro, descobrindo que está escrito em uma língua estranha e antiga. De repente uma gota de sangue cai sobre a folha)", 
   caminho: 24 },
  ]
},
{ escolhas: [
    { resposta: "-Droga, meu nariz ta sangrando de novo (tenho problemas com estresse e isso sempre acontece)", 
   caminho: 25 },
  ]
},
{ escolhas: [
    { resposta: "(Limpo meu nariz com a mão e tento limpar a folha do livro e so acabo sujando mais)", 
   caminho: 26 },
  ]
},
{ escolhas: [
    { resposta: "(Derepente as palavras do livro começam a brilhar em um tom sinistro, e um portal se abre diante de mim)  ", 
   caminho: 27 },
  ]
},
{ escolhas: [
    { resposta: "(Impressionada) O que diabos está acontecendo?", 
   caminho: 28 },
  ]
},
{ escolhas: [
    { resposta: "(Do portal emerge uma figura misteriosa, vestida com roupas escuras e uma aura sombria.)", 
   caminho: 29 },
  ]
},
{ escolhas: [
    { resposta: "A. Q-quem é você?", caminho: 30 },
    { resposta:"B. *grito* AAAAAAAAH o que é isso?", caminho: 31}
  ]
},
{ nome: "", texto: "-Eu nao credito que depois de tantos anos eu fui envocado de novo, nao é possivel que esse humanos nao apredem mesmo depois de tudo que passaram.... você me invoca e ainda tem a coragem de perguntar quem sou eu?", 
escolhas: [
    { resposta: "Eu to sonhando? so pode ser, não é possivel que.. (sinto minha pressão cair e tudo a minha volta escurecer)", 
    caminho: 32},
]
},
{ nome: "", texto: "Por que você esta gritando humana? Ja nao bastava me invocar ainda tenho que ficar escutando gritos? o que voce espera ver depois de ter invocado um demonio? ver coelhinhos fofinhos?", 
escolhas: [
    { resposta: "D-demoni? eu to sonhando? so pode ser, não é possivel que..(sinto minha pressão cair e tudo a minha volta escurecer)", 
    caminho: 33 },
]
},

{ escolhas: [
    { resposta: "(acordo e estou no meu quarto, começo a me lembra do que aconteceu) ainda bem, foi tudo um sonho, mas pareceu tão real...", 
   caminho: 34 },
  ]
},
{ nome: "", texto: "-Finalmente voce acordou", 
escolhas: [
    { resposta: "(olho para o lado vendo aquele cara esquisito bem ao meu lado)", 
    caminho: 35 },
]
},
{ 
nome: "", 
texto: "Finalmente acordou o bela adormecida, ja enrolou demais dormindo, me manda de volta e antes que o portal se abra de uma vez e os demonios comecem a invadir o seu mundo. Voces humanos nao são tão egoistas e so pensam em si mesmos. a barreira ja vai ser quebrada e seu mundo vai virar um caos, parece que nao leu o que estava escrito no livro", 
escolhas: [
{ resposta: "(O que esse cara ta falando, barreira, livro, destruição, quem é esse maluco e o que ele ta fazendo aqui na minha casa, ou melhor, no meu quarto!)",
caminho: 36}
] 
},

];
function exibirDialogo(index) {
const dialogBox = document.getElementById('dialog-box');
const choicesDiv = document.getElementById('choices');
const { texto, escolhas, nome } = dialogo[index];

// Limpar o conteúdo anterior da caixa de diálogo
dialogBox.innerHTML = '';
//


if (texto) {
    outroPersonagem.falar(texto);
    outroPersonagem.exibirImagem();
    outroPersonagem.exibirDialogo();
} else {
    outroPersonagem.ocultarImagem();
    outroPersonagem.ocultarDialogo();
}

if (escolhas.length > 0) {
    outroPersonagem.mostrarOpcoes(escolhas);
}
}

function exibirEscolhas(opcoes) {
const choicesDiv = document.getElementById('choices');
choicesDiv.innerHTML = '';

opcoes.forEach((opcao) => {
    const button = document.createElement('button');
    button.textContent = opcao.resposta;
    button.addEventListener('click', () => escolherOpcao(opcao.caminho));
    choicesDiv.appendChild(button);
});
}


// Função para exibir o diálogo salvo ao carregar a página
function exibirDialogoSalvo() {
  const indiceSalvo = obterIndiceDialogoSalvo();
  if (indiceSalvo !== null) {
      exibirDialogo(parseInt(indiceSalvo));
  } else {
      exibirDialogo(0); // Se nenhum índice estiver salvo, comece do início
  }
}

// Função para armazenar o índice do diálogo atual no Armazenamento Web
function salvarIndiceDialogoAtual(indice) {
  localStorage.setItem('indiceDialogo', indice);
}

// Função para obter o índice do diálogo atual do Armazenamento Web
function obterIndiceDialogoSalvo() {
  return localStorage.getItem('indiceDialogo');
}

// Função para exibir as opções de diálogo
function exibirEscolhas(opcoes) {
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';

  opcoes.forEach((opcao) => {
      const button = document.createElement('button');
      button.textContent = opcao.resposta;
      button.addEventListener('click', () => {
          escolherOpcao(opcao.caminho);
          salvarIndiceDialogoAtual(opcao.caminho); // Salvar o índice do diálogo atual ao escolher uma opção
      });
      choicesDiv.appendChild(button);
  });
}

// Função para escolher uma opção de diálogo
function escolherOpcao(caminho) {
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';

  if (caminho === 5) {
      const extraImagem = document.getElementById('extra-imagem');
      extraImagem.style.display = 'block'; // Exibe a imagem extra
      exibirDialogo(caminho); // Exibe o próximo diálogo
  } else if (caminho === 4) {
      const gameContainer = document.getElementById('game-container-2');
      gameContainer.style.backgroundImage = "url(../imagens/cenarios/cozinha.jpg)";
      exibirDialogo(caminho); // Exibe o próximo diálogo
  } else if (caminho === 14) {
      const gameContainer = document.getElementById('game-container-2');
      gameContainer.style.backgroundImage = "url(../imagens/cenarios/porao.avif)";
      exibirDialogo(caminho); // Exibe o próximo diálogo
  } else if (caminho === 34) {
      const gameContainer = document.getElementById('game-container-2');
      gameContainer.style.backgroundImage = "url(../imagens/cenarios/quarto.jpg)";
      exibirDialogo(caminho); // Exibe o próximo diálogo
  } else {
      const extraImagem = document.getElementById('extra-imagem');
      extraImagem.style.display = 'none'; // Oculta a imagem extra para outras opções
      exibirDialogo(caminho); // Exibe o próximo diálogo
  }
}

// Função para exibir um diálogo com base no índice fornecido
function exibirDialogo(index) {
  const dialogBox = document.getElementById('dialog-box');
  const choicesDiv = document.getElementById('choices');
  const { texto, escolhas, nome } = dialogo[index];

  // Limpar o conteúdo anterior da caixa de diálogo
  dialogBox.innerHTML = '';

  if (texto) {
      outroPersonagem.falar(texto);
      outroPersonagem.exibirImagem();
      outroPersonagem.exibirDialogo();
  } else {
      outroPersonagem.ocultarImagem();
      outroPersonagem.ocultarDialogo();
  }

  if (escolhas.length > 0) {
      outroPersonagem.mostrarOpcoes(escolhas);
  }
}

window.onload = function() {
  exibirDialogoSalvo(); // Exibe o diálogo salvo ao carregar a página
}