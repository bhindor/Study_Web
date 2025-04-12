function showDan() {
    if(myform.dan.value == "") {
        alert("단을 선택하세요");
        myform.dan.focus();
        return ;
    }
    var dan = parseInt(myform.dan.value);
    var str = "";

    for(var i = 1; i <= 9; i++) {
        str = str + dan + " x " + i + " = " + (dan * i) + "<br><br>";
    }

    document.getElementById("msg").innerHTML = str;
}

function showRandom() {
    var str = "";
    var dan = Math.floor(Math.random() * 8) + 2;
    var i = Math.floor(Math.random() * 9) + 1;

    var str = "<div class='rdan'>" + dan + " x " + i + " = " + (dan * i) + "</div>";

    document.getElementById("msg").innerHTML = str;
}

function showClear() {
    var str = "";
    document.getElementById("msg").innerHTML = str;
    myform.reset();
}