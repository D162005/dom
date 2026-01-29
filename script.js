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

let butt3 = document.getElementById("button3");


butt3.addEventListener('click', function(){
    let innerbox = document.getElementById("innerbox");
    let randamnum = 50 + Math.floor(Math.floor(Math.random()*50));
    let num = 0;


    let int = setInterval(() => {
        num++;
        innerbox.style.width = `${num}%`;
        document.getElementById("loadpercent").innerHTML=`${num}%`;
        document.querySelector("#circle").style.backgroundColor ="#d7d7d7";
    }, randamnum);

    setTimeout(() => {
      clearInterval(int);
      let remaintime = document.createElement("h3");
      remaintime.style.fontSize = "3vh";
      remaintime.id = "remaintime";
      remaintime.style.transform = "translateX(0vw) translateY(-17vh)";
      remaintime.innerHTML = `Approx ${(randamnum*100)/1000} Seconds taken to Download`;
      document.querySelector("#loadingcard").appendChild(remaintime);
      butt3.innerHTML = "Downloaded";
    },randamnum*100);

    butt3.innerHTML = "Downloading...";
    butt3.style.opacity = "0.3";
    butt3.disabled = true;
    butt3.style.cursor = "not-allowed";

});

let realoadbutt = document.createElement("button");
realoadbutt.innerHTML = `<span class="material-symbols-outlined">rotate_left</span>`;
realoadbutt.id = "butt4";
document.querySelector("#box3").appendChild(realoadbutt);

realoadbutt.addEventListener('click', function(){
  // document.location.reload();
  butt3.disabled = false;
  butt3.style.opacity = "1";
  butt3.style.cursor = "pointer";
  innerbox.style.width = `0%`;
  document.getElementById("circle").style.backgroundColor =null;
  document.getElementById("loadpercent").innerHTML=``;
  remaintime.remove(); // document.querySelector("#remaintime").remove();
  butt3.innerHTML = "Download";

});


let postimg = document.querySelector("#postcard img");
postimg.addEventListener('click', function(){
  document.querySelector("#heart-icon").style.opacity = "1";
  document.querySelector("#heart-icon").style.transform = " scale(1.5) translateY(0vh) rotate(-50deg)  ";
  console.log(document.querySelector("#heart-icon").style.transform);

  setTimeout(() => {
    document.querySelector("#heart-icon").style.opacity = "1";
    document.querySelector("#heart-icon").style.transform = " scale(1.7) translateY(-25vh) rotate(0deg)  ";
  }, 200);

  setTimeout(() => {
    document.querySelector("#heart-icon").style.opacity = "0";
    document.querySelector("#heart-icon").style.transform = " scale(1) translateY(0vh) rotate(0deg)  ";
  }, 500);

});