const topics = [
  { title:"Duolingo", desc:"A fun, free app for learning 40+ languages through quick, bite-sized lessons.", img:"images/topics/Duo4.jpg", id:12 },
  { title:"Kahoot!", desc:"A game-based learning platform that brings engagement and fun to 1+ billion players every year at school, at work, and at home.", img:"images/topics/Kahoot4.jpg", id:13 },
  { title:"Tug o' War", desc:"A sport in which two teams compete by pulling on opposite ends of a rope, with the goal of bringing the rope a certain distance in one direction against the force of the opposing team's pull.", img:"images/topics/ToW4.jpg", id:9 },

  { title:"Jump Rope", desc:"A sport/exercise that involves rhythmically jumping over a rope swung underfoot and overhead.", img:"images/topics/JR4.jpg", id:10 },
  { title:"7554", desc:"Vietnam's first visually stunning first-person shooter video game, developed by Hiker Games, set against the historical backdrop of the resistance war against the French.", img:"images/topics/75544.jpg", id:4 },
  { title:"Xiangqi / Chinese Chess", desc:"A strategy board game for two players. It is the most popular board game in China.", img:"images/topics/CC4.jpg", id:7 },

  { title:"Chess", desc:"A two-player abstract strategy board game played on an 8x8 checkered board, where each player controls 16 pieces (king, queen, rooks, bishops, knights, pawns) with unique moves, aiming to checkmate the opponent's king by placing it under inescapable attack.", img:"images/topics/Chess5.jpg", id:8 },
  { title:"Minesweeper", desc:"A logic puzzle video game genre generally played on personal computers.", img:"images/topics/Mine4.jpg", id:2 },
  { title:"Fate/Grand Order", desc:"A command card battle RPG optimized for smart phones!", img:"images/topics/FGO4.jpg", id:6 },

  { title:"Capture The Flag / CTF", desc:"A classic outdoor team game where two teams try to steal the other's flag from their base and return it to their own, all while defending their own flag and avoiding being tagged by opponents, who get sent to \"jail\" if caught in enemy territory.", img:"images/topics/CTF4.jpg", id:11 },
  { title:"Undertale", desc:"Control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever.", img:"images/topics/UT4.jpg", id:3 },
  { title:"Brother Hai's Pho Restaurant", desc:"A story-driven horror game insprired by Vietnamese culture and real events.", img:"images/topics/BHPR5.jpg", id:1 },

  { title:"Minecraft", desc:"A sandbox game developed and published by Mojang Studios.", img:"images/topics/MC4.jpg", id:5 },
];

const perPage = 3;
let currentPage = 1;

function renderPage(page){

  const totalPages = Math.ceil(topics.length / perPage);

  if(page < 1 || page > totalPages) return;

  currentPage = page;

  const container = document.getElementById("topics-container");
  container.innerHTML = "";

  const start = (page-1)*perPage;
  const end = start + perPage;
  const pageItems = topics.slice(start,end);  

  pageItems.forEach(item=>{
    container.innerHTML += `
      <div class="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
        <div class="d-flex">
          <img src="${item.img}" class="custom-block-image img-fluid">

          <div class="custom-block-topics-listing-info d-flex">
            <div>
              <h5 class="mb-2">${item.title}</h5>
              <p class="mb-0">${item.desc}</p>
              <a href="topics-detail.html?id=${item.id}" 
                 class="btn custom-btn mt-3 mt-lg-4">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // 🔥 UPDATE ACTIVE BUTTON
  document.querySelectorAll(".page-item")
    .forEach(item=>item.classList.remove("active"));

  const items = document.querySelectorAll(".page-item");
  items[page].classList.add("active"); 
}


renderPage(1);
