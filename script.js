document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        let audio = new Audio("notes/A.mp3");
        audio.play();
    } else if (event.code === "KeyS") {
        let audio = new Audio("notes/S.mp3");
        audio.play();
    }
    else if (event.code === "KeyD") {
        let audio = new Audio("notes/D.mp3");
        audio.play();
    }
    else if (event.code === "KeyF") {
        let audio = new Audio("notes/F.mp3");
        audio.play();
    }
    else if (event.code === "KeyG") {
        let audio = new Audio("notes/G.mp3");
        audio.play();
    }
    else if (event.code === "KeyH") {
        let audio = new Audio("notes/H.mp3");
        audio.play();
    }  else if (event.code === "KeyJ") {
        let audio = new Audio("notes/J.mp3");
        audio.play();
    }
    else if (event.code === "KeyW") {
        let audio = new Audio("notes/W.mp3");
        audio.play();
    }
    else if (event.code === "KeyE") {
        let audio = new Audio("notes/E.mp3");
        audio.play();
    }
    else if (event.code === "KeyT") {
        let audio = new Audio("notes/T.mp3");
        audio.play();
    }
    else if (event.code === "KeyY") {
        let audio = new Audio("notes/Y.mp3");
        audio.play();
    }
    else if (event.code === "KeyU") {
        let audio = new Audio("notes/U.mp3");
        audio.play();
    }
    else {
        console.warn('Дурак?');
    }
});