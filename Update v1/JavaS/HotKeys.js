

//Hotkeys for money.js

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "27") {
        if (Nav == 0){
            openNav()
        }
        else {closeNav()}
    }
}

window.addEventListener("keydown", buy1, false);

function buy1(e) {
    if (e.keyCode == "49") {
    	buyAutoClick();
    }
}

window.addEventListener("keydown", buy2, false);

function buy2(e) {
    if (e.keyCode == "50") {
    	buyAutoClick2();
    }
}

window.addEventListener("keydown", buy3, false);

function buy3(e) {
    if (e.keyCode == "51") {
    	buyAutoClick3();
    }
}

window.addEventListener("keydown", buy4, false);

function buy4(e) {
    if (e.keyCode == "52") {
    	buyAutoClick4();
    }
}

window.addEventListener("keydown", buy5, false);

function buy5(e) {
    if (e.keyCode == "53") {
    	buyAutoClick5();
    }
}

window.addEventListener("keyup", press, false);

function press(e) {
    if (e.keyCode == "32") {
        add();
    }
}
