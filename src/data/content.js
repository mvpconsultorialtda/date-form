export const content = {
  theme: {
    primaryColor: "#4a0e0e", // Vinho profundo
    secondaryColor: "#f4e1d2", // Pergaminho
    accentColor: "#d4af37", // Dourado
    fontFamily: "'Cinzel', serif",
  },
  intro: {
    title: "Uma Jornada pelo Coração",
    description: "Responda a estas perguntas para revelar seu destino...",
    buttonText: "Iniciar Jornada",
    backgroundImage: "/assets/intro-bg.png"
  },
  questions: [
    {
      id: 1,
      text: "Você encontra um dragão guardando um tesouro. O que você faz?",
      image: "/assets/q1.png",
      options: [
        { text: "Saca sua espada e ataca!", scores: { adventure: 2, casual: 0 } },
        { text: "Tenta argumentar com a fera.", scores: { adventure: 1, casual: 1 } },
        { text: "Passa furtivamente.", scores: { adventure: 1, casual: 0 } },
        { text: "Oferece um lanche.", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 2,
      text: "Um portal misterioso se abre diante de você. Para onde ele leva?",
      image: "/assets/q2.png",
      options: [
        { text: "Um campo de batalha glorioso.", scores: { adventure: 2, casual: 0 } },
        { text: "Uma biblioteca escondida.", scores: { adventure: 0, casual: 2 } },
        { text: "Uma taverna movimentada.", scores: { adventure: 1, casual: 1 } },
        { text: "Um jardim sereno.", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 3,
      text: "Escolha uma arma para sua jornada.",
      image: "/assets/q3.png",
      options: [
        { text: "Um martelo de guerra maciço.", scores: { adventure: 2, casual: 0 } },
        { text: "Um cajado mágico.", scores: { adventure: 1, casual: 1 } },
        { text: "Uma adaga veloz.", scores: { adventure: 2, casual: 0 } },
        { text: "Um alaúde para encantar.", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 4,
      text: "O rei lhe oferece uma recompensa. O que você escolhe?",
      image: "/assets/q4.png",
      options: [
        { text: "Um título de nobreza.", scores: { adventure: 1, casual: 1 } },
        { text: "Um baú de ouro.", scores: { adventure: 1, casual: 1 } },
        { text: "A mão da princesa/príncipe.", scores: { adventure: 2, casual: 0 } },
        { text: "Uma cabana tranquila na floresta.", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 5,
      text: "Começa a chover forte. Onde você procura abrigo?",
      image: "/assets/q5.png",
      options: [
        { text: "Uma caverna escura e assustadora.", scores: { adventure: 2, casual: 0 } },
        { text: "Debaixo de um cogumelo gigante.", scores: { adventure: 0, casual: 2 } },
        { text: "Continua andando, chuva não é nada.", scores: { adventure: 2, casual: 0 } },
        { text: "Bate na porta de um estranho.", scores: { adventure: 1, casual: 1 } },
      ]
    },
    {
      id: 6,
      text: "Você encontra um filhote perdido na floresta. Ele tem três cabeças.",
      image: "/assets/q6.png",
      options: [
        { text: "Treina-o para a batalha.", scores: { adventure: 2, casual: 0 } },
        { text: "Faz carinho nas três cabeças.", scores: { adventure: 0, casual: 2 } },
        { text: "Foge!", scores: { adventure: 1, casual: 0 } },
        { text: "Leva para casa e chama de Fofinho.", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 7,
      text: "Um bardo pede para você terminar a música. A letra é 'O herói cavalgou...'",
      image: "/assets/q7.png",
      options: [
        { text: "...para as garras da morte!'", scores: { adventure: 2, casual: 0 } },
        { text: "...para a padaria pegar um doce!'", scores: { adventure: 0, casual: 2 } },
        { text: "...de volta para sua cama quentinha.'", scores: { adventure: 0, casual: 2 } },
        { text: "...com o vento em seus cabelos.'", scores: { adventure: 1, casual: 1 } },
      ]
    },
    {
      id: 8,
      text: "Sua noite ideal envolve:",
      image: "/assets/q8.png",
      options: [
        { text: "Planejar um cerco.", scores: { adventure: 2, casual: 0 } },
        { text: "Ler pergaminhos antigos.", scores: { adventure: 0, casual: 2 } },
        { text: "Afiar seu machado.", scores: { adventure: 2, casual: 0 } },
        { text: "Cozinhar um ensopado.", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 9,
      text: "Você precisa atravessar um rio furioso. Como?",
      image: "/assets/q9.png",
      options: [
        { text: "Nada contra a correnteza.", scores: { adventure: 2, casual: 0 } },
        { text: "Constrói uma jangada.", scores: { adventure: 1, casual: 1 } },
        { text: "Procura uma ponte.", scores: { adventure: 0, casual: 2 } },
        { text: "Espera a água baixar.", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 10,
      text: "A aventura termina. Qual é o seu troféu?",
      image: "/assets/q10.png",
      options: [
        { text: "O Coração do Dragão.", scores: { adventure: 2, casual: 0 } },
        { text: "Uma história para contar.", scores: { adventure: 1, casual: 1 } },
        { text: "Um novo amigo.", scores: { adventure: 0, casual: 2 } },
        { text: "Paz e sossego.", scores: { adventure: 0, casual: 2 } },
      ]
    }
  ],
  results: {
    adventure: {
      title: "Um Banquete Nobre",
      description: "Teu espírito é de fogo e coragem! Vamos compartilhar uma taça do melhor vinho em minha fortaleza. As estrelas testemunharão nossos contos de glória.",
      image: "/assets/result-wine.png",
      type: "wine"
    },
    casual: {
      title: "Um Passeio Doce",
      description: "Teu coração é gentil e caloroso. Vamos passear pela vila e dividir um doce gelado, aproveitando as alegrias simples do reino.",
      image: "/assets/result-icecream.png",
      type: "icecream"
    }
  }
};
