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

let cursorbox = document.getElementById("cursor-box");
let butt5 = document.getElementById("butt5");
let selectedIndex = null; // index of currently selected cursor (null means none yet)


function populateCursorButtonsSimple() {
  if (!cursorbox || !Array.isArray(cursors)) return;

  if (cursorbox.children.length === 0) {
    cursors.forEach(c => {
      let butt6 = document.createElement('button');
      butt6.className = 'cursor-button';
      butt6.type = 'button';

      let cursimg = document.createElement('img');
      cursimg.className = 'cursor-option-img';
      cursimg.src = c.cursorurl || '';
      cursimg.alt = c.cursorname || '';
      // add id and dataset so we can style specific cursors (e.g., hammer) and identify them easily
      cursimg.dataset.cursorId = c.cursorname || '';
      cursimg.id = `cursor-img-${c.cursorname || ''}`;
      cursimg.title = c.cursorname || '';

      butt6.appendChild(cursimg);
      cursorbox.appendChild(butt6);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateCursorButtonsSimple);
} else {
  populateCursorButtonsSimple();
}

butt5.addEventListener('click', function(e){
  cursorbox.style.opacity = "1";;

  setTimeout(() => {
    cursorbox.style.opacity = "0";
  }, 3000);
});

let cursorbuttons = document.querySelectorAll(".cursor-button");
console.log(cursorbuttons); 

if (cursorbox) {
  function setSelectedIndex(idx) {
    const buttons = Array.from(cursorbox.querySelectorAll('.cursor-button'));
    if (!buttons.length) return;
    if (idx < 0 || idx >= buttons.length) idx = 0;

    buttons.forEach(b => b.classList.remove('selected'));
    buttons[idx].classList.add('selected');
    selectedIndex = idx;

    const sel = cursors[idx];
    if (sel && sel.cursorurl) {
      showActiveCursor(sel.cursorurl, sel.cursorname);
    }
  }

  cursorbox.addEventListener('click', function(e){
    const btn = e.target.closest('.cursor-button');
    if (!btn) return; 

    const buttons = Array.from(cursorbox.querySelectorAll('.cursor-button'));
    const idx = buttons.indexOf(btn);
    if (idx === -1) return;

    console.log('Selected cursor:', cursors[idx]);
    setSelectedIndex(idx);
  });
} else {
  console.warn('cursorbox element not found; cursor buttons cannot be selected');
}

const box5 = document.getElementById('box5');

const activeCursor = document.createElement('img');
activeCursor.id = 'active-cursor';
activeCursor.className = 'cursor';
activeCursor.alt = 'active cursor';
box5.appendChild(activeCursor);

function showActiveCursor(url, id) {
  activeCursor.src = url;
  activeCursor.dataset.cursorId = id || '';
  activeCursor.style.display = 'block';
  box5.style.cursor = 'none';
}

function hideActiveCursor() {
  activeCursor.style.display = 'none';
}

box5.addEventListener('mouseenter', function(e) {
  box5.style.cursor = 'none';
  activeCursor.style.position = 'absolute';

  if (selectedIndex === null) {
    
    const buttons = Array.from(cursorbox.querySelectorAll('.cursor-button'));
    if (buttons.length) {
      buttons.forEach(b => b.classList.remove('selected'));
      buttons[0].classList.add('selected');
      selectedIndex = 0;
      if (cursors[0] && cursors[0].cursorurl) showActiveCursor(cursors[0].cursorurl, cursors[0].cursorname);
    }
  } else if (activeCursor.src) {
    activeCursor.style.display = 'block';
  }
});

box5.addEventListener('mousemove', function(e){
  if (activeCursor.style.display === 'none') return;
  const rect = box5.getBoundingClientRect();
  const x = e.clientX - rect.left; 
  const y = e.clientY - rect.top;
  activeCursor.style.left = `${x}px`;
  activeCursor.style.top = `${y}px`;
});

box5.addEventListener('mouseleave', hideActiveCursor);


let gmbody = document.querySelector(".gmbody");
let bubbles = document.querySelector(".bubbles");
let bubb = "";
let hitval = "";
let scoreval = 0;
let gmplay = document.querySelector("#gmplay");


function randbubb(){
  bubb = "";
  for(i=0 ; i<50 ; i++){
    let bubbval = Math.floor(Math.random()*10);
    bubb += `<div class="bubbles" id=bubb${i}>${bubbval}</div>`;
  };
  gmbody.innerHTML = bubb;
};


function randhitval(){
  hitval = Math.floor(Math.random()*10);
  document.querySelector("#hit-val").innerHTML = hitval;
};

function timeavail(){
  scoreval = 0;
  document.querySelector('#score-val').innerHTML = scoreval;

  let t = 60
  let tremain = setInterval(() => {
        t--;
        console.log(t);
        document.querySelector('#time-val').innerHTML = t;
      }, 1000);
  
  setTimeout(() => {
    clearInterval(tremain);
    gmbody.innerHTML = 'Game - Over';
    gmplay.innerHTML = `<i class="ri-reset-left-fill"></i>`;
    gmplay.style.opacity = "1";

  }, 60000);
};

gmbody.addEventListener("click", function(dets){
  console.log(hitval);
  console.log(dets.target.id);
  if(dets.target.textContent == hitval){
    dets.target.style.backgroundColor = 'green';
    
    setTimeout(() => {
      randbubb();
      randhitval();
      scoreval += 10;
      document.querySelector('#score-val').innerHTML = scoreval;
    }, 200);
  }
  else
    dets.target.style.backgroundColor = 'red';
    setTimeout(() => {
      dets.target.style.backgroundColor = '';
    }, 200);
});

gmplay.addEventListener("click",function(){
  gmplay.style.opacity = "0";

  randbubb();
  randhitval();
  timeavail();

});
let reelsec = document.querySelector('.main-box');
function reelsplay(){
  let reel = '';

  reels.forEach(function(dets,idx){

    reel = reel + `<div class="reel-box">
                  <video class="reel-video" src="${dets.videosrc}" autoplay loop muted></video>
                  <div class="lower-box">
                      <div class="user-info">
                          <img src="${dets.userimg}" alt="">
                          <div><h3>${dets.username}</h3></div>
                          <button id="${idx}" class="followico">${dets.isfollow?'Un-follow':'follow'}</button>
                      </div>
                      <h5>${dets.caption}</h5>
                  </div>
                  <div class="icon-box">
                      <div class="likeico iconset" id="${idx}">
                          <i class="${dets.islike ? 'ri-heart-3-fill' :"ri-heart-3-line"}"></i>
                          <h6 class="nofheart">${dets.noflikes}</h6>
                      </div>
                      <div class="iconset">
                          <i class="ri-chat-3-line"></i>
                          <h6>${dets.nofcomments}</h6>
                      </div>

                      <div class="iconset">
                          <i class="ri-share-fill"></i>
                          <h6>share</h6>
                      </div>
                      <div class="iconset">
                          <i class="ri-more-2-fill"></i>
                      </div>
                  </div>
              </div>`
  });

  reelsec.innerHTML = reel;
};

reelsplay();

reelsec.addEventListener('click',function(det){
  console.log(det.target.className);  
  if(det.target.className == 'likeico iconset'){
    if(!reels[det.target.id].islike){
      reels[det.target.id].noflikes++
      reels[det.target.id].islike = true;
      reelsplay();
    }
    else{
      reels[det.target.id].noflikes--;
      reels[det.target.id].islike = false;
      reelsplay();
    }  
  }

  if(det.target.classList.contains("followico")){
    reels[det.target.id].isfollow ? reels[det.target.id].isfollow = false : reels[det.target.id].isfollow = true ;
    reelsplay();
  }
});

let mainsecti = document.querySelector('#main-section');
let spotcir = document.querySelector('#spoting-box');
mainsecti.addEventListener('mousemove',function(det){
  spotcir.style.background = `radial-gradient(5rem at ${det.x-50}px ${det.y-50}px, rgba(255, 255, 255, 0.049), rgba(0, 0, 0, 0.9)`;
  console.log(det);
})

let charactor = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let paratext = document.querySelector('#main-section p');
let text = paratext.innerHTML;

paratext.addEventListener('mouseenter',function(){
  let iteration = 0;
  let matrixef = setInterval(() => {      
      if(iteration>text.length){
        clearInterval(matrixef);
        console.log("i am right");
      }
      const randstr = text.split('').map((char,idx)=>{
      if(iteration>idx){
        return char;
      }

      

      return charactor.split('')[Math.floor(Math.random()*charactor.length)]
    }).join("")
    paratext.innerText = randstr;
    iteration += 0.25;
    console.log(`iteration = ${iteration}`)
  }, 40);


});
