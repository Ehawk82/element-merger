let globalFile;
const mySong = new Audio("src/assets/music/mu1.flac");

mySong.loop = true;

const init = () => {
  var eMD = parseLS("elementMergerData"),
    eMD_l = parseLS("eMD_legend");

  if (!eMD || eMD === null) {
    saveLS("elementMergerData", userdata);
  }
  var eMD = parseLS("elementMergerData");

  if (!eMD_l || eMD_l === null) {
    saveLS("eMD_legend", emd_legend);
  }
  appBuild(eMD);
};

const appBuild = eMD => {

  var eMD_l = parseLS("eMD_legend");

  var board = createEle("div"),
    sideBar = createEle("div"),
    navBar = createEle("div"),
    musicBtn = createEle("button"),
    stopBtn = createEle("button"),
    clearBtn = createEle("button"),
    hintOutput = createEle("div"),
    hintBtn = createEle("button"),
    refreshSideBarBtn = createEle("button"),
    settings = createEle("button");

  settings.innerHTML = "⚙️";
  settings.onclick = () => {
    return runSettPage();
  };

  let hintToggle, result = eMD.currentHint,
      hintBool,
      resultCount = result.toString().length;

  if (eMD.currentHint === "" && eMD_l.gold > 0) {
    hintToggle = eMD_l.gold + " GOLD";
    hintBool = false;
  } else {
    if(result === ""){
      hintToggle = eMD_l.gold + " GOLD";
    } else {
      hintToggle = "<img src='src/assets/images/" + result + ".png' />";
    }
    hintBool = true;
  }
  let textToggle,actionToggle;

  if (mySong.duration > 0 && !mySong.paused) {
      textToggle = "⏸️";
      actionToggle = pauseMusic(musicBtn);
  } else {
      textToggle = "▶️";
      actionToggle = commitMusic(musicBtn);
      //Not playing...maybe paused, stopped or never played.
  }


  hintOutput.innerHTML = hintToggle;
  hintOutput.className = "hintOutput";

  hintBtn.innerHTML = "❓";
  hintBtn.id = "hintBtn";
  hintBtn.disabled = hintBool;
  hintBtn.onclick = summonHint(hintBtn,hintOutput);

  musicBtn.innerHTML = textToggle;
  musicBtn.className = "musicBtn";
  musicBtn.onclick = actionToggle;

  stopBtn.innerHTML = "⏹️";
  stopBtn.className = "stopBtn";
  stopBtn.onclick = stopMusic(musicBtn);

  clearBtn.innerHTML = "🗑️";
  clearBtn.onclick = () => {
    return clearBoard();
  };

  refreshSideBarBtn.innerHTML = "🔄";
  refreshSideBarBtn.className = "refreshSideBarBtn";
  refreshSideBarBtn.onclick = () => {
    return refreshSideBarFunc();
  };

  navBar.className = "navBar";
  navBar.append(clearBtn,settings,musicBtn,stopBtn,hintBtn,hintOutput,refreshSideBarBtn);

  sideBar.id = "sideBar";

  board.ondrop = event => drop(event);
  board.id = "board";
  board.ondragover = event => allowDrop(event);

  body.append(board,navBar,sideBar);
  commitMusic();

  for (var i = 0; i < eMD.kObj.length; i++) {
    var thingy = createEle("div");

    thingy.innerHTML = eMD.kObj[i];
    thingy.style.backgroundImage = "url(../docs/src/assets/images/" + eMD.kObj[i] + ".png)";
    thingy.style.cursor = "grab";
    thingy.className = eMD.kObj[i];
    thingy.onmousedown = () => {
      return commitSound(5)
    };
    thingy.ondrag = event => drag(event);
    /* TODO: fix the touch screen crap
    thingy.addEventListener('touchmove', function(event) {
      return drag(event);
    },{ passive: true });

    thingy.addEventListener('touchend', function(event) {
      return touchDrop(event);
    },{ passive: true });
    */
    thingy.draggable = true;

    pollItems(eMD.kObj[i], thingy);

    sideBar.append(thingy);
  }
};

const allowDrop = ev => {

  ev.preventDefault();
};

const drag = ev => {

  globalFile = ev.target.className;

};

const drop = ev => {
  commitSound(1);
  var newItem = createEle("div");

  newItem.innerHTML = globalFile;
  newItem.style.backgroundImage = "url(../docs/src/assets/images/" + globalFile + ".png)";
  newItem.style.cursor = "grab";
  newItem.className = globalFile;
  newItem.style.position = "absolute";
  newItem.style.left = ev.x - 50 + "px";
  newItem.style.top = ev.y - 50 + "px";
  newItem.onmousedown = () => {
    return commitSound(5);
  };
  newItem.ondrag = (event) => drag(event);

  newItem.draggable = true;

  ev.preventDefault();

  ev.target.appendChild(newItem);

  if (newItem.parentNode.id != "board") {
    let scopeBool = false;
    var eMD = parseLS("elementMergerData");

    var combination = newItem.parentNode.className + newItem.className,
        comboMixed = newItem.className + newItem.parentNode.className;

    newItem.parentNode.remove();

    for (var k = 0; k < eMD.kObj.length; k++) {
      if (combination === eMD.kObj[k] || comboMixed === eMD.kObj[k]) {
        if (comboMixed != eMD.kObj[k]) {
        } else {
          combination = comboMixed;
        }
        generateAlterItem(ev, combination);
        scopeBool = true;
      }
    }

    for (var i = 0; i < eMD.unkObj.length; i++) {
      if (combination === eMD.unkObj[i] || comboMixed === eMD.unkObj[i]) {
        if (comboMixed != eMD.unkObj[i]) {
        } else {
          combination = comboMixed;
        }

        generateAlterItem(ev, combination);
        scopeBool = true;

        Array.prototype.remove = function () {
          var what,
            a = arguments,
            L = a.length,
            ax;
          while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
              this.splice(ax, 1);
            }
          }
          return this;
        };

        var ary = eMD.unkObj;
        ary.remove(combination);

        eMD.kObj.push(combination);
        eMD.unkObj = ary;

        saveLS("elementMergerData", eMD);

        var newKey = createEle("div");

        newKey.innerHTML = combination;
        newKey.style.backgroundImage = "url(../docs/src/assets/images/" + combination + ".png)";
        newKey.style.backgroundColor = "rgba(8, 166, 84, 0.52)";
        newKey.style.cursor = "grab";
        newKey.style.opacity = "0.2";
        newKey.className = combination;
        newKey.onclick = () => {
          return commitSound(5);
        };
        newKey.ondrag = (event) => drag(event);

        newKey.draggable = true;

        sideBar.insertBefore(newKey, sideBar.childNodes[4]);

        if (eMD.kObj.length === 14) {
          add_letter("f");
        }

        if (eMD.kObj.length === 20) {
          add_letter("g");
        }

        if (eMD.kObj.length === 27) {
          add_letter("h");
        }
        if (combination === eMD.currentHint) {
          clearHintLog(eMD);
        }
        commitSound(0);
        pollItems(combination, newKey);

        setTimeout(function () {
          newKey.style.opacity = "1";
          newKey.style.backgroundColor = "transparent";

          if (eMD.unkObj.length === 0) {
            completedAlert();
          }
        }, 100);
      }
    }

    if (scopeBool == false) {
      commitSound(3);
    }
  }
};

const runSettPage = () => {
  var eMD_l = parseLS("eMD_legend");

  var settPage = createEle("div"),
    soundFeature = createEle("div"),
    sndRange = createEle("input"),
    musicFeature = createEle("div"),
    musRange = createEle("input"),
    clearLSbtn = createEle("button"),
    xOut = createEle("button");

  clearLSbtn.innerHTML = "CLEAR DATA";
  clearLSbtn.className = "clearLSbtn";
  clearLSbtn.onclick = runDeleteWarning(clearLSbtn);

  musRange.type = "range";
  musRange.min = 0;
  musRange.max = .25;
  musRange.step = 0.005;
  musRange.value = eMD_l.musicVol;
  musRange.onmouseup = updateMusicVolume(eMD_l, musRange);

  sndRange.type = "range";
  sndRange.min = 0;
  sndRange.max = .5;
  sndRange.step = 0.005;
  sndRange.value = eMD_l.sound;
  sndRange.onmouseup = updateSoundVolume(eMD_l, sndRange);

  xOut.innerHTML = "❌";
  xOut.className = "xOut";
  xOut.onclick = xOutFunc(xOut);

  soundFeature.innerHTML = "<h2>AUDIO</h2>";
  soundFeature.className = "soundFeature";
  soundFeature.append(sndRange);

  musicFeature.innerHTML = "<h2>MUSIC</h2>";
  musicFeature.className = "musicFeature";
  musicFeature.append(musRange);

  settPage.className = "settPage";
  settPage.append(soundFeature,musicFeature,clearLSbtn,xOut);

  body.append(settPage);

  commitSound(7);

  setTimeout(() => {
    makeFull(settPage);
  }, 0);
};

const updateSoundVolume = (eMD_l, sndRange) => {
  return function () {
    eMD_l.sound = sndRange.value;
    saveLS("eMD_legend", eMD_l);
  };
};

const updateMusicVolume = (eMD_l, musRange) => {
  return function () {
    mySong.volume = musRange.value;
    eMD_l.musicVol = musRange.value;
    saveLS("eMD_legend", eMD_l);
  };
};

const refreshSideBarFunc = () => {
  sideBar.innerHTML = "";

  var eMD = parseLS("elementMergerData");
  var myArray = eMD.kObj;

  myArray.sort();

  for (var i = 0; i < myArray.length; i++) {
    var thingy = createEle("div");

    thingy.innerHTML = eMD.kObj[i];
    thingy.style.backgroundImage = "url(../docs/src/assets/images/" + eMD.kObj[i] + ".png)";
    thingy.style.cursor = "grab";
    thingy.className = eMD.kObj[i];
    thingy.onclick = () => {
      return commitSound(5);
    };
    thingy.ondrag = (event) => drag(event);
    pollItems(eMD.kObj[i], thingy);
    thingy.draggable = true;

    sideBar.append(thingy);
  }

  saveLS("elementMergerData", eMD);
  commitSound(7);
};

const clearBoard = () => {
  commitSound(4);
  board.innerHTML = "";
};

const generateAlterItem = (ev, combination) => {
  var alterItem = createEle("div");

  alterItem.innerHTML = combination;
  alterItem.style.backgroundImage = "url(../docs/src/assets/images/" + combination + ".png)";
  alterItem.style.cursor = "grab";
  alterItem.className = combination;
  alterItem.style.position = "absolute";
  alterItem.style.left = ev.clientX - 50 + "px";
  alterItem.style.top = ev.clientY - 50 + "px";
  alterItem.onmousedown = () => {
    return commitSound(5);
  };
  alterItem.ondrag = (event) => drag(event);

  pollItems(combination, alterItem);

  alterItem.draggable = true;

  ev.preventDefault();

  board.appendChild(alterItem);
};

const add_letter = x => {
  var eMD = parseLS("elementMergerData");
  let ary = eMD.kObj;

  ary.splice(4, 0, x);

  saveLS("elementMergerData", eMD);

  var newTopKey = createEle("div");

  newTopKey.className = x;
  newTopKey.innerHTML = x;
  newTopKey.style.backgroundImage = "url(../docs/src/assets/images/" + x + ".png)";
  newTopKey.style.backgroundColor = "rgba(8, 166, 84, 0.52)";
  newTopKey.style.cursor = "grab";
  newTopKey.style.opacity = "0.2";
  newTopKey.onclick = () => {
    return commitSound(5);
  };
  newTopKey.ondrag = (event) => drag(event);

  newTopKey.draggable = true;

  sideBar.insertBefore(newTopKey, sideBar.childNodes[4]);

  setTimeout(function () {
    newTopKey.style.opacity = "1";
    newTopKey.style.backgroundColor = "transparent";
    commitSound(6);
  }, 200);
};

const completedAlert = () => {
  const winPage = createEle("div"),
    title = createEle("h2"),
    msg = createEle("p");

  title.innerHTML = "CONGRATULATIONS!";

  msg.innerHTML = "You have discovered every recipe!";

  const reloadBtn = createEle("button");

  reloadBtn.innerHTML = "RESTART";
  reloadBtn.onclick = restartProgram();

  winPage.append(title, msg, reloadBtn);
  winPage.className = "winPage";

  body.append(winPage);

  commitSound(2);

  //TODO make a popup for win state
  setTimeout(function () {
    makeFull(winPage);
    removeLSitem("elementMergerData");
  }, 10);
};

const xOutFunc = (x, s) => {
  return function () {
    var p = x.parentNode;

    takeFull(p);
    commitSound(7);
    setTimeout(function () {
      deleteThis(p);
    }, 501);
  };
};

const clearHintLog = eMD => {
  const eMD_l = parseLS("eMD_legend"),
        hintOutput = bySel(".hintOutput");

  if(eMD_l.gold > 0) {
    hintBtn.disabled = false;
  }

  hintOutput.innerHTML = "";

  eMD.currentHint = "";

  saveLS("elementMergerData", eMD);
};

const summonHint = (hintBtn,hintOutput) => {
  return function() {
    hintBtn.id = "hintBtn";
    hintBtn.disabled = true;

     const eMD = parseLS("elementMergerData"),
           eMD_l = parseLS("eMD_legend");

     let rand = Math.floor((Math.random()*eMD.unkObj.length)),
         result = eMD.unkObj[rand];

     hintOutput.innerHTML = "<img src='src/assets/images/" + result + ".png' />";

     eMD_l.gold = eMD_l.gold - 1;

     eMD.currentHint = result;

     saveLS("eMD_legend",eMD_l);
     saveLS("elementMergerData", eMD);
  }
};

const pollItems = (x, y) => {
  for (var r = 0; r < eol.length; r++) {
    if (x === eol[r]) {
      y.style.boxShadow = "0 0 10px inset red";
    }
  }
};

const pauseMusic = x => {
  return function() {
    var eMD_l = parseLS("eMD_legend");

    x.innerHTML = "▶️";
    x.onclick = commitMusic(x);


    eMD_l.musicPos = mySong.currentTime;

    saveLS("eMD_legend", eMD_l);
    mySong.pause();
  }
};

const stopMusic = musicBtn => {
  return function(){
    var eMD_l = parseLS("eMD_legend");
    musicBtn.innerHTML = "▶️";
    musicBtn.onclick = commitMusic(musicBtn);

    eMD_l.musicPos = 0;

    saveLS("eMD_legend", eMD_l);

    mySong.pause();
  }
};

const commitMusic = x => {
  return function(){
  var eMD_l = parseLS("eMD_legend");
  
    mySong.volume = eMD_l.musicVol;
    mySong.currentTime = eMD_l.musicPos;
    mySong.autoplay = true;
    mySong.id = "mySong";
    mySong.play();

    x.onclick = pauseMusic(x);
    x.innerHTML = "⏸️";
  };
};

const commitSound = x => {
  var eMD_l = parseLS("eMD_legend");

  let mySound = new Audio("src/assets/sounds/" + appSounds[x]);

  mySound.volume = eMD_l.sound;
  mySound.play();
};

const runDeleteWarning = clearLSbtn => {
  return function() {
      clearLSbtn.disabled = true;
      var warnPage = createEle("div"),
          yesBtn = createEle("button"),
          noBtn = createEle("button");

      yesBtn.innerHTML = "YES";
      yesBtn.onclick = answerYes();

      noBtn.innerHTML = "NO";
      noBtn.onclick = answerNo(warnPage,clearLSbtn);

      warnPage.innerHTML = "<p>ARE YOU SURE YOU WOULD LIKE TO DELETE THE RECIPE LOG?</p>";
      warnPage.className = "warnPage";
      warnPage.append(yesBtn,noBtn);

      body.append(warnPage);

      setTimeout(function(){
        makeFull(warnPage);
      },1);
  }
};

const answerYes = () => {
  return function(){
    removeLSitem("elementMergerData");
    body.innerHTML = "";
    setTimeout(function(){
      init();
    },100);
  }
};

const answerNo = (warnPage,clearLSbtn) => {
  return function() {
     takeFull(warnPage);
     clearLSbtn.disabled = false;
     setTimeout(function() {
       deleteThis(warnPage);
     }, 600);
  }
};

const restartProgram = () => {
  return function(){
    body.innerHTML = "";
    setTimeout(function(){
      init();
    },100);
  }
};

window.onload = function () {

  init();
  
};
