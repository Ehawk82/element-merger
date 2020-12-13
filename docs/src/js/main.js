let globalFile;
const mySong = new Audio("src/assets/music/mu1.flac");

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

const appBuild = (eMD) => {

  var eMD_l = parseLS("eMD_legend");

  var board = createEle("div"),
    sideBar = createEle("div"),
    navBar = createEle("div"),
    musicBtn = createEle("button"),
    stopBtn = createEle("button"),
    clearBtn = createEle("button"),
    hintOutput = createEle("input"),
    hintBtn = createEle("button"),
    refreshSideBarBtn = createEle("button"),
    settings = createEle("button");

  settings.innerHTML = "⚙️";
  settings.onclick = () => {
    return runSettPage();
  };

  let hintToggle, result = eMD.currentHint,
      hintBool,
      resultCount = result.toString().length,
      result1 = result.substr(0,resultCount / 2),
      result2 = result.substr(resultCount / 2, resultCount);

  if (eMD.currentHint === "" && eMD_l.gold > 0) {
    hintToggle = eMD_l.gold + " GOLD";
    hintBool = false;
  } else {
    if(result1 === ""){
      hintToggle = eMD_l.gold + " GOLD";
    } else {
      hintToggle = result1 + " + " + result2;
    }
    hintBool = true;
  }
  hintOutput.type = "text";
  hintOutput.readOnly = true;
  hintOutput.placeholder = hintToggle;
  hintOutput.className = "hintOutput";

  hintBtn.innerHTML = "❓";
  hintBtn.disabled = hintBool;
  hintBtn.onclick = summonHint(hintBtn,hintOutput);

  musicBtn.innerHTML = "▶️";
  musicBtn.className = "musicBtn";
  musicBtn.onclick = commitMusic(musicBtn);

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

  board.ondrop = (event) => drop(event);
  board.id = "board";
  board.ondragover = (event) => allowDrop(event);

  body.append(board,navBar,sideBar);
  commitMusic();

  for (var i = 0; i < eMD.kObj.length; i++) {
    var thingy = createEle("div");

    thingy.innerHTML = eMD.kObj[i];
    thingy.style.cursor = "grab";
    thingy.className = eMD.kObj[i];
    thingy.onmousedown = () => {
      return commitSound(5);
    };
    thingy.ondrag = (event) => drag(event);

    thingy.draggable = true;
    pollItems(eMD.kObj[i], thingy);
    sideBar.append(thingy);
  }
};

const allowDrop = (ev) => {
  ev.preventDefault();
};

const drag = (ev) => {
  globalFile = ev.target.className;
};

const drop = (ev) => {
  commitSound(1);
  var newItem = createEle("div");

  newItem.innerHTML = globalFile;
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
        newKey.style.backgroundColor = "rgba(8, 166, 84, 0.52)";
        newKey.style.cursor = "grab";
        newKey.style.opacity = "0.2";
        newKey.className = combination;
        newKey.onmousedown = () => {
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
          newKey.style.backgroundColor = "white";

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
    xOut = createEle("button");

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
  settPage.append(soundFeature,musicFeature, xOut);

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

  for (var i = 0; i < eMD.kObj.length; i++) {
    var thingy = createEle("div");

    thingy.innerHTML = eMD.kObj[i];
    thingy.style.cursor = "grab";
    thingy.className = eMD.kObj[i];
    thingy.onmousedown = () => {
      return commitSound(5);
    };
    thingy.ondrag = (event) => drag(event);
    pollItems(eMD.kObj[i], thingy);
    thingy.draggable = true;

    sideBar.append(thingy);
  }
  commitSound(7);
};

const clearBoard = () => {
  commitSound(4);
  board.innerHTML = "";
};

const generateAlterItem = (ev, combination) => {
  var alterItem = createEle("div");

  alterItem.innerHTML = combination;
  alterItem.style.cursor = "grab";
  alterItem.className = combination;
  alterItem.style.position = "absolute";
  alterItem.style.left = ev.x - 50 + "px";
  alterItem.style.top = ev.y - 50 + "px";
  alterItem.onmousedown = () => {
    return commitSound(5);
  };
  alterItem.ondrag = (event) => drag(event);

  pollItems(combination, alterItem);

  alterItem.draggable = true;

  ev.preventDefault();

  board.appendChild(alterItem);
};

const add_letter = (x) => {
  var eMD = parseLS("elementMergerData");
  let ary = eMD.kObj;

  ary.splice(4, 0, x);

  saveLS("elementMergerData", eMD);

  var newTopKey = createEle("div");

  newTopKey.className = x;
  newTopKey.innerHTML = x;
  newTopKey.style.backgroundColor = "rgba(8, 166, 84, 0.52)";
  newTopKey.style.cursor = "grab";
  newTopKey.style.opacity = "0.2";
  newTopKey.onmousedown = () => {
    return commitSound(5);
  };
  newTopKey.ondrag = (event) => drag(event);

  newTopKey.draggable = true;

  sideBar.insertBefore(newTopKey, sideBar.childNodes[4]);

  setTimeout(function () {
    newTopKey.style.opacity = "1";
    newTopKey.style.backgroundColor = "white";
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
  reloadBtn.onclick = () => {
    return location.reload();
  };

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

const clearHintLog = (eMD) => {
  const eMD_l = parseLS("eMD_legend");

  if(eMD_l.gold > 0) {
    hintBtn.disabled = false;
  }

  hintOutput.value = "";
  hintOutput.placeholder = eMD_l.gold + " GOLD";

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
         result = eMD.unkObj[rand],
         resultCount = result.toString().length,
         result1 = result.substr(0,resultCount / 2),
         result2 = result.substr(resultCount / 2, resultCount);

     hintOutput.value = result1 + " + " + result2;
     hintOutput.id = "hintOutput";

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

const pauseMusic = (x,mySong) => {
  return function() {
    var eMD_l = parseLS("eMD_legend");

    x.innerHTML = "▶️";
    x.onclick = commitMusic(x);


    eMD_l.musicPos = mySong.currentTime;

    saveLS("eMD_legend", eMD_l);
    mySong.pause();
  }
};
const stopMusic = (musicBtn) => {
  return function(){
    var eMD_l = parseLS("eMD_legend");
    musicBtn.innerHTML = "▶️";
    musicBtn.onclick = commitMusic(musicBtn);

    eMD_l.musicPos = 0;

    saveLS("eMD_legend", eMD_l);

    mySong.pause();
  }
};
const commitMusic = (x) => {
  return function(){
  var eMD_l = parseLS("eMD_legend");
  
    mySong.volume = eMD_l.musicVol;
    mySong.currentTime = eMD_l.musicPos;
    mySong.autoplay = true;
    mySong.id = "mySong";
    mySong.play();

    x.onclick = pauseMusic(x,mySong);
    x.innerHTML = "⏸️";
  };
};
const commitSound = (x) => {
  var eMD_l = parseLS("eMD_legend");

  let mySound = new Audio("src/assets/sounds/" + appSounds[x]);

  mySound.volume = eMD_l.sound;
  mySound.play();
};

window.onload = function () {
  init();
};
