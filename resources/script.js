let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Player data array
const players = [
    {
        name: "Kevin De Bruyne",
        height: "1.81 m",
        position: "Midfielder",
        image: "https://www.mancity.com/meta/media/rhxfgi4x/kevin-de-bruyne.png?width=600",
        description: "Kevin De Bruyne is a Belgian professional footballer who plays as a midfielder. He is known for his vision, technique, and playmaking abilities.",
        stats: {
            goals: 9,
            assists: 15,
            matches: 28
        }
    },
    {
        name: "Erling Haaland",
        height: "1.94 m",
        position: "Forward",
        image: "https://www.mancity.com/meta/media/onup5slb/erling-haaland.png?width=600",
        description: "Erling Haaland is a Norwegian striker known for his exceptional strength, speed, and finishing abilities. He is one of the top goal scorers in the world.",
        stats: {
            goals: 35,
            assists: 5,
            matches: 32
        }
    },
    {
        name: "Phil Foden",
        height: "1.71 m",
        position: "Midfielder",
        image: "https://www.mancity.com/meta/media/sdwm0bgm/phil-foden.png?width=600",
        description: "Phil Foden is an English footballer who plays as an attacking midfielder. He is known for his technical skills, dribbling, and versatility on the pitch.",
        stats: {
            goals: 6,
            assists: 8,
            matches: 30
        }
    },
    {
        name: "Rodrigo Hernández Cascante",
        height: "1.91 m",
        position: "Midfielder",
        image: "https://www.mancity.com/meta/media/qasnvbyk/rodrigo.png?width=600",
        description: "Rodri is a Spanish midfielder who excels in defensive duties and ball distribution. His tactical intelligence makes him crucial in the midfield.",
        stats: {
            goals: 3,
            assists: 2,
            matches: 29
        }
    },
    {
        name: "Bernardo Silva",
        height: "1.73 m",
        position: "Midfielder",
        image: "https://www.mancity.com/meta/media/n30l1sq5/bernardo-silva.png?width=600",
        description: "Bernardo Silva is a Portuguese winger known for his dribbling, passing, and creativity. He is one of the key players in Manchester City’s attack.",
        stats: {
            goals: 7,
            assists: 10,
            matches: 31
        }
    }
];

// Track the current player index
let currentPlayer = 0;

// Function to update the player card
function updatePlayer() {
    const player = players[currentPlayer];
    document.getElementById("player-name").innerText = player.name;
    document.getElementById("player-height").innerText = "Height: " + player.height;
    document.getElementById("player-position").innerText = "Position: " + player.Position;
    document.getElementById("player-description").innerText = "About: " + player.description;
    document.getElementById("player-img").src = player.image;
}

// Function to go to the next player
document.getElementById("next-player-btn").addEventListener("click", function() {
    currentPlayer = (currentPlayer + 1) % players.length; // Loop through the players
    updatePlayer();
});

// Initialize the first player
updatePlayer();