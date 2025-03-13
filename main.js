let result = "x";
let x = "دور"
const titel = document.querySelector('.top');
let squr = [];
// تحديد الرابح 
function end(n1, n2, n3) {
    titel.innerHTML = `${squr[n1]} weener`;
    document.getElementById('item' + n1).style.background = "red";
    document.getElementById('item' + n2).style.background = "red";
    document.getElementById('item' + n3).style.background = "red";
    setInterval(() => { titel.innerHTML += '<span>.</span>' }, 1000);
    setTimeout(() => location.reload(), 4000)
}
// قوانين الربح
function weener() {
    for (let i = 1; i < 9; i++) {
        squr[i] = document.getElementById("item" + i).innerHTML;

    }
    if (squr[1] == squr[2] && squr[2] == squr[3] && squr[2] != '') {
        end(1, 2, 3)

    }
    else if (squr[4] == squr[5] && squr[5] == squr[6] && squr[4] != '') {
        end(4, 5, 6)

    }
    else if (squr[7] == squr[8] && squr[8] == squr[9] && squr[7] != '') {

        end(7, 8, 9)
    }
    //2
    else if (squr[1] == squr[4] && squr[4] == squr[7] && squr[1] != '') {
        end(1, 4, 7)

    }
    else if (squr[2] == squr[5] && squr[5] == squr[8] && squr[5] != '') {
        end(2, 5, 8)

    }
    //3
    else if (squr[3] == squr[6] && squr[6] == squr[9] && squr[9] != '') {

        end(3, 6, 9)
    }
    //4
    else if (squr[1] == squr[5] && squr[5] == squr[9] && squr[1] != '') {
        end(1, 5, 9)
        console.log("dz");
        

    }
    //5
    else if (squr[3] == squr[5] && squr[5] == squr[7] && squr[5] != '') {

        end(3, 5, 7)
    }
}


// تخديد دور  xo 
function game(id) {
    let elment = document.getElementById(id);
    if (result === 'x' && elment.innerHTML == "") {
        elment.innerHTML = "x";
        result = 'o'
        titel.innerHTML = `  <span>${result}</span> ${x}`

    } else if (result === "o" && elment.innerHTML == "") {
        elment.innerHTML = "o";
        result = 'x'
        titel.innerHTML = `  <span>${result}</span> ${x}`
    }
    weener();
}
//اعداة اللعبة عند تالعادل
function relod() {
  location.reload()
}
