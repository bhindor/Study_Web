function show() {
    if(myform.txt_start.value == "") {
        alert("시작 숫자를 입력하세요..");
        myform.txt_start.focus();
        return;
    }
    if(myform.txt_end.value == "") {
        alert("종료 숫자를 입력하세요..");
        myform.txt_end.focus();
        return;
    }

    var num1 = parseInt(myform.txt_start.value);
    var num2 = parseInt(myform.txt_end.value);

    if(num1 > num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

    var str = "";
    var cnt = 0;
    for(var i = num1; i <= num2; i++) {
        cnt++;
        if(i % 2 == 0)
            str = str + "<div class='card'>" + i + "</div>";
        else 
            str = str + "<div class='card2'>" + i + "</div>";

        if(cnt % 5 == 0) 
            str = str + "<div class='cardClear'></div>";
    }

    document.getElementById("msg").innerHTML = str;

}

function showClear() {
    var str = "";
    document.getElementById("msg").innerHTML = str;
    myform.reset();
}