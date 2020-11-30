let globalFile;

const init = () => {
    //todo: initialize local storage object
    var eMD = parseLS("elementMergerData");

    if (!eMD || eMD === null) {
        saveLS("elementMergerData", userdata);
    }
    var eMD = parseLS("elementMergerData");
    appBuild(eMD);
};

const appBuild = (eMD) => {
    var board = createEle("div");
    board.ondrop = (event) => drop(event);
    board.id = "board";
    board.ondragover = (event) => allowDrop(event);

    body.append(board);

    for (var i = 0; i < eMD.kObj.length; i++) {
        /*this loop creates elements from an array in local storage*/
        var thingy = createEle("div");

        thingy.innerHTML = eMD.kObj[i];
        thingy.style.cursor = "grab";
        thingy.className = eMD.kObj[i];
        thingy.ondrag = (event) => drag(event);

        thingy.draggable = true;

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
    var newItem = createEle("div");

    newItem.innerHTML = globalFile;
    newItem.style.cursor = "grab";
    newItem.className = globalFile;
    newItem.style.position = "absolute";
    newItem.style.left = ev.x + "px";
    newItem.style.top = ev.y + "px";

    newItem.ondrag = (event) => drag(event);

    newItem.draggable = true;

    ev.preventDefault();

    ev.target.appendChild(newItem);
    
    if (newItem.parentNode.id != "board") {
        var eMD = parseLS("elementMergerData");
        
        var combination = newItem.parentNode.className + newItem.className,
            comboMixed = newItem.className + newItem.parentNode.className;

            newItem.parentNode.remove();

        for (var i = 0; i < eMD.unkObj.length; i++) {
            if(combination === eMD.unkObj[i] || comboMixed === eMD.unkObj[i]){
                if (comboMixed != eMD.unkObj[i]) {} else {
                    combination = comboMixed;
                }

                var alterItem = createEle("div");
                    
                alterItem.innerHTML = combination;
                alterItem.style.cursor = "grab";
                alterItem.className = combination;
                alterItem.style.position = "absolute";
                alterItem.style.left = (ev.x - 50) + "px";
                alterItem.style.top = (ev.y - 50) + "px";

                alterItem.ondrag = (event) => drag(event);
                alterItem.draggable = true;

                ev.preventDefault();
                
                Array.prototype.remove = function() {
                    var what, a = arguments, L = a.length, ax;
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

                saveLS("elementMergerData",eMD);

                var newKey = createEle("div");

                newKey.innerHTML = combination;
                newKey.style.backgroundColor = "rgba(8, 166, 84, 0.52)";
                newKey.style.cursor = "grab";
                newKey.style.opacity = "0.2";
                newKey.className = combination;
                newKey.ondrag = (event) => drag(event);

                newKey.draggable = true;

                sideBar.insertBefore(newKey, sideBar.childNodes[4]);

                board.appendChild(alterItem);

                if (eMD.kObj.length === 14) {
                    add_letter("f");
                }

                if (eMD.kObj.length === 20) {
                    add_letter("g");
                }

                if (eMD.kObj.length === 27) {
                    add_letter("h");
                }

                setTimeout(function(){
                    newKey.style.opacity = "1";
                    newKey.style.backgroundColor = "white";
                    
                    if(eMD.unkObj.length === 0){
                        completedAlert();
                    };
                },100);
            }
        }
    }
};

const add_letter = (x) => {
    var eMD = parseLS("elementMergerData");
    let ary = eMD.kObj;

    ary.splice(0, 0, x);

    saveLS("elementMergerData", eMD);

    var newTopKey = createEle("div");

    newTopKey.className = x;
    newTopKey.innerHTML = x;
    newTopKey.style.backgroundColor = "rgba(8, 166, 84, 0.52)";
    newTopKey.style.cursor = "grab";
    newTopKey.style.opacity = "0.2";

    newTopKey.ondrag = (event) => drag(event);
    newTopKey.draggable = true;

    sideBar.insertBefore(newTopKey, sideBar.childNodes[4]);

    setTimeout(function(){
        newTopKey.style.opacity = "1";
        newTopKey.style.backgroundColor = "white";
    },100);
};

const completedAlert = () => {
    const winPage = createEle("div"),
          title = createEle("h2"),
          msg = createEle("p");

    title.innerHTML = "CONGRATULATIONS!";

    msg.innerHTML = "You have discovered every recipe!";

    winPage.append(title,msg);
    winPage.className = "winPage";

    body.append(winPage);
    //TODO make a popup for win state
    setTimeout(function(){
        makeFull(winPage);
        removeLSitem("elementMergerData");
    },10);
};

window.onload = function () {
    init();
};
