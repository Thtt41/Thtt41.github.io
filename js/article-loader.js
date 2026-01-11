document.addEventListener("DOMContentLoaded", () => {

  const articles = {
    1: {
      title: "Brother Hai's Pho Restaurant",
      p1: `Pho Anh Hai is an indie horror game created by a student from Hanoi University of Science and Technology (marisa0704). 
          The game puts you in the role of a young man who has just opened a pho restaurant in a small rural village. 
          He also owns a pet dog (somehow, it’s extremely good at slipping off its leash), and your job is to keep an eye on it so it doesn’t get stolen by reckless “Exciter” riders. 
          At the same time, you must serve pho to some very… special customers, such as:

          • The Speedy Wheelchair Guy (Te Con)
          • “Just solve some calculus problems, kid” (Quí Bửu Bách Khoa)
          • Glory Glory Man United (MU Fan)

          And many more.`,

      p2: `Players must take orders, cook pho, and serve dishes on time. As you progress, the game becomes more challenging with more customers and faster pace. You can also upgrade your restaurant and unlock new items.`,
      quote: `I should've chased you away." - Brother Hai`,
      img1: `images/topics/BHPR2.jpg`,
      img2: `images/topics/BHPR3.jpg`,
      p3: `This game improves time management and multitasking skills. It is fun and relaxing, especially for people who enjoy cooking games. Brother Hai’s Pho Restaurant also introduces Vietnamese food culture in an entertaining way.`
    },

    2: {
      title: "Minesweeper",
      p1: "Minesweeper is a logic puzzle video game commonly played on computers. The game board consists of a grid of squares with hidden mines placed randomly.",
      p2: "Your goal is to clear all safe squares without clicking on a mine. Number clues show how many mines are nearby, helping you decide your next move.",
      quote: `One wrong click can end everything. Think carefully." - Arii Seika`,
      img1: `images/topics/Mine2.jpg`,
      img2: `images/topics/Mine3.jpg`,
      p3: `Minesweeper enhances logical thinking and problem-solving skills. It requires careful planning and attention to detail, making it a great exercise for the brain. The game is simple yet addictive, appealing to players of all ages.`
    },

    3: {
      title: `Undertale`,
      p1: `Undertale is a role-playing game created by an independent American developer named Toby Fox. In the game, you play as a child who accidentally falls into the Underground, a world where monsters live and humans cannot enter.`,
      p2: `During your journey, you meet many different monsters. Some will fight you, but you can choose to either kill them or spare them. Your decisions affect the story and lead to different endings.`,
      quote: `“Only the fearless made proceed. Brave ones, foolish ones. Both walk not the middle road.” - Toby Fox`,
      img1: `images/topics/UT2.jpg`,
      img2: `images/topics/UT3.jpg`,
      p3: `The game is quite challenging, but improves your reaction speed and thinking skills. It also teaches important lessons about kindness, forgiveness, and friendship, especially if you choose a peaceful path.`
    },

    4: {
      title: `7554`,
      p1: `7554 is a first-person shooter game developed in Vietnam. The game is based on historical events from the First Indochina War, where Vietnam fought for independence. The name “7554” refers to May 7, 1954, the day of the Điện Biên Phủ victory.`,
      p2: `Players take the role of a Vietnamese soldier and experience important battles from history. The game shows realistic environments, weapons, and war scenes. Through gameplay, players can learn about Vietnamese history and the sacrifices of soldiers.`,
      quote: `"TRẢ THÙ CHO ANH PHAN ĐÌNH GIÓT" - 7554`,
      img1: `images/topics/75542.jpg`,
      img2: `images/topics/75543.jpg`,
      p3: `7554 is not only a shooting game but also a way to honor national pride. It helps players understand historical events in an interactive way. The game combines entertainment with education.`
    },

    5: {
      title: `Minecraft`,
      p1: `Minecraft is a sandbox game developed by Mojang where players can explore a blocky open world. You can play in different modes such as Survival, Creative, and Adventure. In Survival mode, players must gather resources, build shelters, and survive against monsters.`,
      p2: `Players can mine materials like wood, stone, and diamonds to craft tools, weapons, and buildings. Creative mode allows unlimited resources, letting players freely build anything they imagine. The game also supports multiplayer, so you can play with friends and build together.`,
      quote: `"First we mine, then we craft. LET'S MINECRAFT!" - Steve (movie)`,
      img1: `images/topics/MC2.jpg`,
      img2: `images/topics/MC3.jpg`,
      p3: `Minecraft helps improve creativity, problem-solving, and teamwork skills. It is suitable for players of all ages and encourages imagination. Because of its freedom and endless possibilities, Minecraft remains one of the most popular games in the world.`
    },

    6: {
      title: `Fate/Grand Order`,
      p1: `Fate/Grand Order is a turn-based gacha game from Japan based on the anime Fate/stay night. In the game, you play as a Master who can summon Servants through a gacha system, which is basically luck-based gambling.`,
      p2: `The Servants are famous characters from history, mythology, and literature around the world. You can summon figures like King Arthur from England or the Trưng Sisters from Vietnam, along with many other legendary heroes. This gives players a wide variety of characters to choose from.`,
      quote: `"You have always been running amidst this storm... You have lost count of how many times you had given up, of how many times you wished for death. The reason you were able to keep on going... It was because you had that light. That distant, small, blue star shining in solitude beyond the storm." - Artoria Caster, via Asahi`,
      img1: `images/topics/FGO2.jpg`,
      img2: `images/topics/FGO3.jpg`,
      p3: `The game mixes history with fantasy, allowing players to have fun while learning about famous figures. Even though the gacha system can be frustrating, the story and characters make the game very enjoyable for fans of the series.`
    },

    7: {
      title: `Xiangqi (Chinese Chess)`,
      p1: `Xiangqi is a traditional Chinese board game inspired by ancient battlefields and military strategies from the Warring States period. The board is divided into two sides: red and black, separated by a “river” in the middle. Each side has the same number and type of pieces, with the only difference being their colors.`,
      p2: `To win, you must checkmate the opponent’s general so they have no legal moves left. If the two generals face each other directly with no pieces in between, it also counts as check. The pieces are divided into attack units (chariot, cannon, horse), defense units (general, advisor, elephant), and pawns.`,
      quote: `一着不慎，满盘皆输 (Yìzhāo búshèn, mǎnpán jiēshū) / "One careless move spoils the entire game" - 賈寶玉 / Jia Baoyu`,
      img1: `images/topics/CC2.jpg`,
      img2: `images/topics/CC3.jpg`,
      p3: `This is a turn-based game where players take turns moving their pieces. It requires strategic thinking and careful planning to outsmart your opponent. Xiangqi is great for training your brain and is also very entertaining, especially since you don’t need any technology to play it.`
    },

    8: {
      title: `Chess`,
      p1: `Chess is an international board game played all over the world. The board is divided into two sides: white and black. Each player controls a set of pieces, and the main goal is to checkmate the opponent’s king.`,
      p2: `Unlike Xiangqi, chess pieces are not divided into attack or defense roles. Every piece can be used for both offense and defense depending on your strategy. The queen is the most powerful piece on the board, and if a pawn reaches the opposite side, it can be promoted into another piece, usually a queen.`,
      quote: `"Think hard, think ahead, don't take too much time either. One mistake, and it's game over." - Arii Seika`,
      img1: `images/topics/Chess2.jpg`,
      img2: `images/topics/Chess3.jpg`,
      p3: `Chess is also a turn-based game where players must think ahead and plan carefully. It helps improve logical thinking, concentration, and problem-solving skills. This game is both educational and entertaining for players of all ages.`
    },

    9: {
      title: `Tug of War`,
      p1: `Tug of war is a traditional team sport played all over the world. It focuses mainly on strength and teamwork. Players are divided into two teams, each pulling on one side of a rope.`,
      p2: `A red cloth is tied in the middle of the rope. The team that pulls the cloth past their line first wins. While rules may differ slightly depending on the location, the main objective remains the same.`,
      quote: `"Coordination, strength, teamwork,... It all matters here." - Arii Seika`,
      img1: `images/topics/ToW2.jpg`,
      img2: `images/topics/ToW3.jpg`,
      p3: `This game helps improve physical strength and teamwork. It also creates a fun and exciting atmosphere, especially during festivals and school events.`
    },

    10: {
      title: `Jump Rope`,
      p1: `Jump rope is both a game and a form of exercise. Players swing a rope under their feet and over their heads while jumping continuously. It is simple but very effective.`,
      p2: `There are many styles of jump rope such as solo freestyle, speed jumping, double rope, or group jumping. It started as a children’s game but later developed into a real sport.`,
      quote: `“Jump, jump, jump a rope, Merrily in the spring. Hop, hop on each foot, As fast as you can sing.” - Care.com`,
      img1: `images/topics/JR2.jpg`,
      img2: `images/topics/JR3.jpg`,
      p3: `Jump rope is great for heart health, bone strength, and breathing ability. It is also cheap and easy to practice anywhere.`
    },

    11: {
      title: `Capture the Flag`,
      p1: `Capture the Flag, or CTF, is a traditional outdoor team game often played by children and teenagers. Players are divided into two teams, each with their own territory and a flag placed at the back. The goal is to steal the opponent’s flag and bring it safely back to your side.`,
      p2: `During the game, players can tag opponents who enter their territory. If a player gets tagged, they may be sent to “jail” and must be rescued by teammates. This creates exciting chases and requires good teamwork and planning.`,
      quote: `"I must capture the flag... that's what a hero does" - Eoin Colfer`,
      img1: `images/topics/CTF2.jpg`,
      img2: `images/topics/CTF3.jpg`,
      p3: `Capture the Flag helps improve physical fitness, speed, and coordination. It also teaches strategy, cooperation, and leadership. Because it is simple and fun, this game is popular at schools, camps, and outdoor events.`
    },

    12: {
      title: `Duolingo`,
      p1: `Duolingo is a popular free language-learning platform used by millions of people around the world. It uses a game-like design to make studying more fun and less stressful. Lessons are short, simple, and easy to follow, making it great for daily practice.`,
      p2: `Users can learn over 40 different languages, practicing vocabulary, grammar, pronunciation, and sentence structure. The app includes listening, speaking, reading, and writing exercises. Topics are based on real-life situations such as food, travel, school, and daily conversations.`,
      quote: `"Free language education – no hidden fees, no premium content, just free." - Duolingo`,
      img1: `images/topics/Duo2.jpg`,
      img2: `images/topics/Duo3.jpg`,
      p3: `Duolingo is especially suitable for beginners because it starts with basic knowledge. It also provides review exercises to help users remember what they have learned. Thanks to its friendly interface and fun style, learning a new language feels less like studying and more like playing a game.`
    },

    13: {
      title: `Kahoot!`,
      p1: `Kahoot! is an online learning platform that turns quizzes into fun games. Teachers and students often use it in classrooms, but anyone can create and play quizzes. Players join using a game code and answer questions on their own devices.`,
      p2: `The questions can include text, images, and videos, making learning more interactive. Players earn points based on speed and accuracy, which creates friendly competition. Kahoot! can be used for many subjects like math, history, science, and language learning.`,
      quote: `"To make learning awesome!" - Kahoot!`,
      img1: `images/topics/Kahoot2.jpg`,
      img2: `images/topics/Kahoot3.jpg`,
      p3: `Kahoot! helps students stay engaged and motivated during lessons. It also improves quick thinking and concentration. Because of its colorful design and competitive style, learning becomes more exciting.`
    },

    14: {
      title: `Offline Games`,
      p1: `Offline games are games that can be played without an internet connection. They can be physical games like board games, card games, or outdoor sports, as well as digital games that do not require online access.`,
      p2: `Offline games are great for developing critical thinking, problem-solving, and creativity. They also provide a break from screens and encourage face-to-face interaction. Examples include chess, checkers, Monopoly, and card games.`,
      quote: `"Offline games are a great way to stay active and social, especially within limited conditions." - Arii Seika`,
      img1: ``,
      img2: ``,
      p3: `Offline games are perfect for families and friends who want to spend time together without relying on technology. They can be played anywhere, anytime, and often involve strategy or teamwork.`
    },

    15: {
      title: `Online Games`,
      p1: `Online games are games that require an internet connection to play. They can be played on various platforms, including computers, consoles, and mobile devices.`,
      p2: `Online games offer a wide range of experiences, from action-packed adventures to strategic multiplayer battles. They allow players to connect with others globally, fostering social interaction and teamwork.`,
      quote: `"Online games aren't just games. It brings people together across the world, anywhere, anytime." - Arii Seika`,
      img1: ``,
      img2: ``,
      p3: `Online games are popular for their immersive environments and endless possibilities. They provide entertainment and social connections, making them a favorite among gamers of all ages.`
    }
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!articles[id]) return;

  document.getElementById("article-title").innerText = articles[id].title;
  document.getElementById("p1").innerText = articles[id].p1;
  document.getElementById("p2").innerText = articles[id].p2;
  document.getElementById("quote").innerText = articles[id].quote;
  document.getElementById("img1").src = articles[id].img1;
  document.getElementById("img2").src = articles[id].img2;
  document.getElementById("p3").innerText = articles[id].p3;
  document.getElementById("article-title").innerText = articles[id].title;
  document.getElementById("header-title").innerHTML = articles[id].title;

  document.title = articles[id].title;
});
