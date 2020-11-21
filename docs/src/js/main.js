let globalFile;

const init = () => {
    //todo: initialize local storage object
    saveLS("elementMergerData", userdata);
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
        var thingy = createEle("p"),
        ev;

        thingy.innerHTML = eMD.kObj[i];
        thingy.style.cursor = "grab";
        thingy.className = eMD.kObj[i];
        thingy.setAttribute("data-index", 1);
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
    var myItem = byClass(globalFile);

    for (var i = 0; i < myItem.length; i++) {
        if (myItem[i].parentNode.id === "board") {
            if (i < myItem.length) {

            }
        }
    }
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
        var combination = newItem.parentNode.className + newItem.className;
        newItem.parentNode.remove();

        var alterItem = createEle("div");

        alterItem.innerHTML = combination;
        alterItem.style.cursor = "grab";
        alterItem.className = globalFile;
        alterItem.style.position = "absolute";
        alterItem.style.left = ev.x + "px";
        alterItem.style.top = ev.y + "px";

        alterItem.ondrag = (event) => drag(event);

        alterItem.draggable = true;

        ev.preventDefault();

        board.appendChild(alterItem);
    }
};

window.onload = function () {
    init();
};
