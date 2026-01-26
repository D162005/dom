console.log(iplTeams[0].jersey_primary_color);
var firstbox = document.querySelector("#winbox");
var secondbox = document.querySelector("#box1");
var butt1 = document.getElementById("button1");

butt1.addEventListener('click', function(){
    var rand = Math.floor(Math.random() * iplTeams.length);
    firstbox.style.backgroundColor = iplTeams[rand].jersey_primary_color;
    document.querySelector("#team-name").innerText = iplTeams[rand].short_form_name;
    document.querySelector("#team-moto").innerText = iplTeams[rand].moto;
    let seccolor = secondbox.style.backgroundColor = iplTeams[rand].jersey_secondary_color;
    document.querySelectorAll("#team-name,#team-moto").forEach(ele=>{ele.style.color = seccolor});;
});

var butt2 = document.getElementById("button2");

butt2.addEventListener('click', function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let a = Math.floor(Math.random()*70);
    let b = Math.floor(Math.random()*70);
    let c = Math.floor(Math.random()*10);
    let d = (Math.random()*2);
    

    if (c%2==0){
      let newelement = document.createElement("div");
      newelement.style.height = "25vh";
      newelement.style.width = "25vw";
      newelement.style.backgroundColor = `rgb(${x},${y},${z})`;
      newelement.style.position = "absolute";
      newelement.style.top = `${a}vh`;
      newelement.style.left = `${b}vw`;
      // newelement.style.scale = d;
      newelement.style.transform=`rotate(${x}deg)`;
      newelement.style.overflow="hidden";
      document.querySelector("#box2").appendChild(newelement);

    }
    else{
     let newheading = document.createElement("h1");
      newheading.style.color = `rgb(${x},${y},${z})`;
      newheading.innerText = headlines[Math.floor(Math.random()*headlines.length)];
      newheading.style.position = "absolute";
      newheading.style.top = `${a}vh`;
      newheading.style.left = `${b}vw`;
      newheading.style.scale = d;
      newheading.style.transform=`rotate(${x}deg)`;

      document.querySelector("#box2").appendChild(newheading);
    }
});

