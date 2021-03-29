
var input=document.getElementsByClassName('flashInput');
img=document.getElementsByClassName('flashPicClass');
img.onload=setInterval(carouse,4000);

function carouse(i,num) {
    for (i = 0; i < 5; i++) {
        if (img[i].style.display == 'block') {
            var num = i;
            if (num == 0) {
                for (i = 0; i < 5 & i != 1; i++) {
                    img[i].style.display = 'none';
                    input[i].style.background = 'white';
                }
                img[1].style.display = 'block';
                input[1].style.background = 'red';
                break;
            } else if (num == 1) {
                for (i = 0; i < 5 & i != 2; i++) {
                    img[i].style.display = 'none';
                    input[i].style.background = 'white';
                }
                img[2].style.display = 'block';
                input[2].style.background = 'red';
                break;
            } else if (num == 2) {
                for (i = 0; i < 5; i++) {
                    img[i].style.display = 'none';
                    input[i].style.background = 'white';
                }
                img[3].style.display = 'block';
                input[3].style.background = 'red';
                break;
            } else if (num == 3) {
                for (i = 1; i < 5; i++) {
                    img[i].style.display = 'none';
                    input[i].style.background = 'white';
                }
                img[4].style.display = 'block';
                input[4].style.background = 'red';
                break;
            } else if (num == 4) {
                for (i = 1; i < 5; i++) {
                    img[i].style.display = 'none';
                    input[i].style.background = 'white';
                }
                img[0].style.display = 'block';
                input[0].style.background = 'red';
                break;
            }
        }
    }

    for (i = 0; i < 5; i++) {
        input[i].onclick = function clickbutton() {
            for (i = 0; i < 5; i++) {
                // alert("123");
                img[i].style.display = 'none';
                if (input[i] == this) {
                    var num = i;
                    if (num == 1) {
                        img[0].style.display = 'none';
                        img[2].style.display = 'none';
                        img[3].style.display = 'none';
                        img[4].style.display = 'none';
                        input[0].style.background = 'white';
                        input[2].style.background = 'white';
                        input[3].style.background = 'white';
                        input[4].style.background = 'white';
                        img[1].style.display = 'block';
                        input[1].style.background = 'red';
                        break;
                    } else if (num == 2) {
                        img[0].style.display = 'none';
                        img[1].style.display = 'none';
                        img[3].style.display = 'none';
                        img[4].style.display = 'none';
                        input[0].style.background = 'white';
                        input[1].style.background = 'white';
                        input[3].style.background = 'white';
                        input[4].style.background = 'white';
                        img[2].style.display = 'block';
                        input[2].style.background = 'red';
                        break;
                    } else if (num == 3) {
                        img[0].style.display = 'none';
                        img[1].style.display = 'none';
                        img[2].style.display = 'none';
                        img[4].style.display = 'none';
                        input[0].style.background = 'white';
                        input[1].style.background = 'white';
                        input[2].style.background = 'white';
                        input[4].style.background = 'white';
                        img[3].style.display = 'block';
                        input[3].style.background = 'red';
                        break;
                    } else if (num == 4) {
                        img[0].style.display = 'none';
                        img[1].style.display = 'none';
                        img[2].style.display = 'none';
                        img[3].style.display = 'none';
                        input[0].style.background = 'white';
                        input[1].style.background = 'white';
                        input[2].style.background = 'white';
                        input[3].style.background = 'white';
                        img[4].style.display = 'block';
                        input[4].style.background = 'red';
                        break;
                    } else if (num == 0) {
                        for (i = 1; i < 5; i++) {
                            img[i].style.display = 'none';
                            input[i].style.background = 'white';
                        }
                        img[0].style.display = 'block';
                        input[0].style.background = 'red';
                        break;
                    }
                }
            }
        }
    }
}