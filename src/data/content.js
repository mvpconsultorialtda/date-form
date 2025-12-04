export const content = {
  theme: {
    primaryColor: "#4a0e0e", // Deep red (wine)
    secondaryColor: "#f4e1d2", // Parchment
    accentColor: "#d4af37", // Gold
    fontFamily: "'Cinzel', serif",
  },
  intro: {
    title: "A Quest for the Heart",
    description: "Answer these questions to reveal your destiny...",
    buttonText: "Begin Journey",
    backgroundImage: "/assets/intro-bg.png"
  },
  questions: [
    {
      id: 1,
      text: "You encounter a dragon guarding a treasure. What do you do?",
      image: "/assets/q1.jpg",
      options: [
        { text: "Draw your sword and charge!", image: "/assets/q1-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "Try to reason with the beast.", image: "/assets/q1-b.jpg", scores: { adventure: 1, casual: 1 } },
        { text: "Sneak past it.", image: "/assets/q1-c.jpg", scores: { adventure: 1, casual: 0 } },
        { text: "Offer it a snack.", image: "/assets/q1-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 2,
      text: "A mysterious portal opens before you. Where does it lead?",
      image: "/assets/q2.jpg",
      options: [
        { text: "A battlefield of glory.", image: "/assets/q2-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "A hidden library.", image: "/assets/q2-b.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "A bustling tavern.", image: "/assets/q2-c.jpg", scores: { adventure: 1, casual: 1 } },
        { text: "A serene garden.", image: "/assets/q2-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 3,
      text: "Choose a weapon for your journey.",
      image: "/assets/q3.jpg",
      options: [
        { text: "A massive warhammer.", image: "/assets/q3-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "A magic staff.", image: "/assets/q3-b.jpg", scores: { adventure: 1, casual: 1 } },
        { text: "A swift dagger.", image: "/assets/q3-c.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "A lute to charm foes.", image: "/assets/q3-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 4,
      text: "The king offers you a reward. What do you choose?",
      image: "/assets/q4.jpg",
      options: [
        { text: "A title of nobility.", image: "/assets/q4-a.jpg", scores: { adventure: 1, casual: 1 } },
        { text: "A chest of gold.", image: "/assets/q4-b.jpg", scores: { adventure: 1, casual: 1 } },
        { text: "The hand of the princess/prince.", image: "/assets/q4-c.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "A quiet cottage in the woods.", image: "/assets/q4-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 5,
      text: "It starts to rain heavily. Where do you seek shelter?",
      image: "/assets/q5.jpg",
      options: [
        { text: "A dark, spooky cave.", image: "/assets/q5-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "Under a giant mushroom.", image: "/assets/q5-b.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "Keep walking, rain is nothing.", image: "/assets/q5-c.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "Knock on a stranger's door.", image: "/assets/q5-d.jpg", scores: { adventure: 1, casual: 1 } },
      ]
    },
    {
      id: 6,
      text: "You find a lost puppy in the woods. It has three heads.",
      image: "/assets/q6.jpg",
      options: [
        { text: "Train it for battle.", image: "/assets/q6-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "Cuddle all three heads.", image: "/assets/q6-b.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "Run away!", image: "/assets/q6-c.jpg", scores: { adventure: 1, casual: 0 } },
        { text: "Take it home and name it Fluffy.", image: "/assets/q6-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 7,
      text: "A bard asks you to finish his song. The lyric is 'The hero rode...'",
      image: "/assets/q7.jpg",
      options: [
        { text: "...into the jaws of death!'", image: "/assets/q7-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "...to the bakery for a treat!'", image: "/assets/q7-b.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "...back to his warm bed.'", image: "/assets/q7-c.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "...with the wind in his hair.'", image: "/assets/q7-d.jpg", scores: { adventure: 1, casual: 1 } },
      ]
    },
    {
      id: 8,
      text: "Your ideal evening involves:",
      image: "/assets/q8.jpg",
      options: [
        { text: "Planning a siege.", image: "/assets/q8-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "Reading ancient scrolls.", image: "/assets/q8-b.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "Sharpening your axe.", image: "/assets/q8-c.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "Cooking a stew.", image: "/assets/q8-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 9,
      text: "You must cross a raging river. How?",
      image: "/assets/q9.jpg",
      options: [
        { text: "Swim against the current.", image: "/assets/q9-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "Build a raft.", image: "/assets/q9-b.jpg", scores: { adventure: 1, casual: 1 } },
        { text: "Look for a bridge.", image: "/assets/q9-c.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "Wait for the water to lower.", image: "/assets/q9-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    },
    {
      id: 10,
      text: "The adventure ends. What is your trophy?",
      image: "/assets/q10.jpg",
      options: [
        { text: "The Dragon's Heart.", image: "/assets/q10-a.jpg", scores: { adventure: 2, casual: 0 } },
        { text: "A story to tell.", image: "/assets/q10-b.jpg", scores: { adventure: 1, casual: 1 } },
        { text: "A new friend.", image: "/assets/q10-c.jpg", scores: { adventure: 0, casual: 2 } },
        { text: "Peace and quiet.", image: "/assets/q10-d.jpg", scores: { adventure: 0, casual: 2 } },
      ]
    }
  ],
  results: {
    adventure: {
      title: "A Noble Feast",
      description: "Thy spirit is one of fire and courage! Let us share a goblet of the finest vintage in my keep. The stars shall witness our tales of glory.",
      image: "/assets/result-wine.png",
      type: "wine"
    },
    casual: {
      title: "A Sweet Stroll",
      description: "Thy heart is gentle and warm. Let us wander the village and share a cold treat, enjoying the simple joys of the realm.",
      image: "/assets/result-icecream.png",
      type: "icecream"
    }
  }
};
