window.onload = function () {
    // var animation = document.getElementById("btn");
    // animation.onclick = getKeyThenMove;
    var animation = document.getElementById("animation");
    let ufo = document.getElementById('ufo');
    const onMouseMove = (e) => {

        ufo.style.left = (e.pageX - 200) + 'px';
        ufo.style.top = (e.pageY - 580) + 'px';
        console.log(e.pageY);
        console.log(e.pageX);
    }
    document.addEventListener('mousemove', onMouseMove);



























    // var ufo = document.getElementById("ufo");

    // function getKeyThenMove(key) {
    //     alert("hi");
    //     var key_code = key.which || key.keyCode;
    //     switch (key_code) {
    //         case 37:
    //             moveLeft();
    //             break;
    //         case 38:
    //             moveUp();
    //             break;
    //         case 39:
    //             moveRight();
    //             break;
    //         case 40:
    //             moveDown();
    //             break;
    //     }
    // }

    // function moveLeft() {
    //     ufo.style.left = parseInt(ufo.style.left) - 10 + "px";
    //     alert("left");
    // };
    // function moveUp() {
    //     ufo.style.top = parseInt(ufo.style.top) - 10 + "px";
    //     alert("up")
    // };
    // function moveRight() {
    //     ufo.style.left = parseInt(ufo.style.left) + 10 + "px";
    //     alert("right")
    // };
    // function moveDown() {
    //     ufo.style.top = parseInt(ufo.style.top) + 10 + "px";
    //     alert("down")
    // };




};