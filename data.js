let iplTeams = [
  {
    "short_form_name": "CSK",
    "jersey_primary_color": "Yellow",
    "jersey_secondary_color": "Blue",
    "moto": "Whistle Podu"
  },
  {
    "short_form_name": "DC",
    "jersey_primary_color": "Blue",
    "jersey_secondary_color": "Red",
    "moto": "Dildaar Dilli"
  },
  {
    "short_form_name": "GT",
    "jersey_primary_color": "Blue",
    "jersey_secondary_color": "Gold",
    "moto": "Rise as One"
  },
  {
    "short_form_name": "KKR",
    "jersey_primary_color": "Purple",
    "jersey_secondary_color": "Gold",
    "moto": "Korbo, Lorbo, Jeetbo"
  },
  {
    "short_form_name": "LSG",
    "jersey_primary_color": "Blue",
    "jersey_secondary_color": "Orange",
    "moto": "Ab Apni Baari Hai"
  },
  {
    "short_form_name": "MI",
    "jersey_primary_color": "Blue",
    "jersey_secondary_color": "Yellow",
    "moto": "Duniya Hila Denge"
  },
  {
    "short_form_name": "PBKS",
    "jersey_primary_color": "Orange",
    "jersey_secondary_color": "Yellow",
    "moto": "Sadda Punjab"
  },
  {
    "short_form_name": "RR",
    "jersey_primary_color": "Pink",
    "jersey_secondary_color": "Blue",
    "moto": "Halla Bol"
  },
  {
    "short_form_name": "RCB",
    "jersey_primary_color": "Red",
    "jersey_secondary_color": "Black",
    "moto": "Play Bold"
  },
  {
    "short_form_name": "SRH",
    "jersey_primary_color": "Orange",
    "jersey_secondary_color": "Black",
    "moto": "Orange Army"
  }
]   ;


let headlines = [
  "You're one decision away from a new life.",
  "Action beats motivation every time.",
  "Prove the doubt wrong. Again.",
  "Discipline is choosing what you want most over what you want now.",
  "Make today so good, yesterday gets jealous.",
  "Don't wait. Start now, start strong.",
  "Fear sets limits. Break them.",
  "Success speaks. Let yours roar.",
  "Be the reason someone believes in progress.",
  "Small steps. Big impact. Keep going.",
  "Burn bright, not out.",
  "Your effort is your edge.",
  "Silence the noise. Focus on growth.",
  "Win the morning, win the day.",
  "Turn setbacks into setups.",
  "Be stubborn about your goals, flexible about your methods.",
  "Energy flows where attention goes.",
  "One habit can change everything.",
  "Don't just dream. Do.",
  "Make progress your habit."
] ;

let cursors = [
  {cursorname: "hammer", cursorurl: "./img/image-removebg-preview.png", id:"hammer-cursor"},
  {cursorname: "fire", cursorurl: "./img/golden-new-year-illustration_23-2151911183-removebg-preview.png", id:"fire-cursor"},
  {cursorname: "sawchi", cursorurl: "./img/cursor_design-removebg-preview.png", id:"sawchi-cursor"},
  {cursorname: "sword", cursorurl: "./img/win-jon-snows-sword-longclaw-game-of-thrones-longclaw-metal-sword-of-jon-snow-115630700895cwqs2jquf-removebg-preview.png", id:"sword-cursor"},
];

let reels =[
  {
    "username": "travelbug",
    "caption": "Sunrise over Santorini 🌅 One of the most magical moments I've ever witnessed. #TravelDiaries #Santorini",
    "userimg": "https://images.unsplash.com/photo-1651917388545-7ec903f93d08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzJTIwcHJvZmlsJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    "videosrc": "https://www.pexels.com/download/video/9384673/",
    "isfollow": true,
    "islike": true,
    "noflikes": 45200,
    "nofcomments": 890
  },
  {
    "username": "foodiecentral",
    "caption": "This creamy mushroom risotto took 40 minutes but was SO worth it. Recipe in bio! 🍄 #Foodie #Risotto",
    "userimg": "https://images.unsplash.com/photo-1581977325979-80749e97b0c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVscyUyMHByb2ZpbCUyMHBob3RvfGVufDB8fDB8fHww",
    "videosrc": "https://www.pexels.com/download/video/16646786/",
    "isfollow": false,
    "islike": true,
    "noflikes": 23400,
    "nofcomments": 650
  },
  {
    "username": "life_jane",
    "caption": "Full body burn in 20 mins 🔥 No equipment, just you and the floor. Let’s go! 💪 #HomeWorkout #Fitness",
    "userimg": "https://media.istockphoto.com/id/1325359218/photo/portrait-of-a-young-african-man-at-studio-high-fashion-male-model-in-colorful-bright-neon.webp?a=1&b=1&s=612x612&w=0&k=20&c=jA5qv2Uej3FSyEZTCs8Cs5eE5xhggYo4-WXOwWspIQM=",
    "videosrc": "https://www.pexels.com/download/video/35134974/",
    "isfollow": false,
    "islike": false,
    "noflikes": 18700,
    "nofcomments": 420
  },
  // {
  //   "username": "artbyliam",
  //   "caption": "Time-lapse of my new mural in downtown! Painted over 3 days. 🎨 #StreetArt #Mural",
  //   "userimg": "https://images.unsplash.com/photo-1699718085453-d6e5f9e73d1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG1vZGVscyUyMHByb2ZpbCUyMHBob3RvfGVufDB8fDB8fHww",
  //   "videosrc": "https://www.pexels.com/download/video/8087076/",
  //   "isfollow": true,
  //   "islike": true,
  //   "noflikes": 31200,
  //   "nofcomments": 730
  // },
  // {
  //   "username": "petlovers",
  //   "caption": "When your dog tries yoga with you 🐶🧘‍♀️ Too cute not to share! #DogLover #FunnyPets",
  //   "userimg": "https://plus.unsplash.com/premium_photo-1661964398742-0e038230ca79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vZGVscyUyMHByb2ZpbCUyMHBob3RvfGVufDB8fDB8fHww",
  //   "videosrc": "https://www.pexels.com/download/video/27893854/",
  //   "isfollow": true,
  //   "islike": false,
  //   "noflikes": 52100,
  //   "nofcomments": 1120
  // },
  // {
  //   "username": "techwithtara",
  //   "caption": "iPhone 16 rumors are wild! Here’s what we might see… 📱 #TechNews #Apple",
  //   "userimg": "https://plus.unsplash.com/premium_photo-1697183203535-26eb824b21bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxtb2RlbHMlMjBwcm9maWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  //   "videosrc": "https://www.pexels.com/download/video/29356214/",
  //   "isfollow": false,
  //   "islike": true,
  //   "noflikes": 19800,
  //   "nofcomments": 540
  // },
  {
    "username": "danceflow",
    "caption": "New choreo to ‘Electric Pulse’ – hope you love it! 💃 #DanceReel #Choreography",
    "userimg": "https://plus.unsplash.com/premium_photo-1723629631794-62f838c48ee8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxtb2RlbHMlMjBwcm9maWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    "videosrc": "https://www.pexels.com/download/video/34218311/",
    "isfollow": false,
    "islike": false,
    "noflikes": 27600,
    "nofcomments": 680
  },
  // {
  //   "username": "worm_ben",
  //   "caption": "Just finished this masterpiece. Can’t stop thinking about it. 📚 #BookTok #MustRead",
  //   "userimg": "https://images.unsplash.com/photo-1621190211188-c0c04e52877f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxtb2RlbHMlMjBwcm9maWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  //   "videosrc": "https://www.pexels.com/download/video/963206/",
  //   "isfollow": true,
  //   "islike": true,
  //   "noflikes": 14300,
  //   "nofcomments": 390
  // },
  {
    "username": "naturefocus",
    "caption": "Slow-mo shot of a hummingbird feeding. Nature is incredible. 🐦 #WildlifePhotography #Nature",
    "userimg": "https://images.unsplash.com/photo-1743792395257-60bdc120b8e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxtb2RlbHMlMjBwcm9maWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    "videosrc": "https://www.pexels.com/download/video/8848958/",
    "isfollow": false,
    "islike": true,
    "noflikes": 38900,
    "nofcomments": 760
  },
  // {
  //   "username": "comedyking",
  //   "caption": "When you try to act cool but trip on nothing… 😂 #Fail #Comedy",
  //   "userimg": "https://images.unsplash.com/photo-1657217470058-242d659dbfe1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE4fHxtb2RlbHMlMjBwcm9maWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  //   "videosrc": "https://www.pexels.com/download/video/10240190/",
  //   "isfollow": true,
  //   "islike": true,
  //   "noflikes": 64200,
  //   "nofcomments": 1450
  // }
];


let divimgs = ['https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww','https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww','https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D','https://plus.unsplash.com/premium_photo-1719930222484-86600f8c74da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D']