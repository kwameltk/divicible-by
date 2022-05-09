function divisibleNum(){
    var userNumber = parseFloat(prompt("input any number"));

    var divicibleNum = 2;
    var divicibleNum2 = 5;

    if (userNumber % divicibleNum == 0) {
        alert("number is divisible by 2 only");
    }
    if (userNumber % divicibleNum2 == 0) {
        alert("number is divisible by 5 only");
    }
    else if (userNumber % divicibleNum2 === 0 && userNumber % divicibleNum === 0) {
        var output = userNumber + "divisible by both 2 and 5";
        alert(userNumber + "divisible by 2 and 5");
    }
    else (userNumber %! divicibleNum2 === 0 && userNumber %! divicibleNum === 0) 
        // var output2 = userNumber + "not divisible by both";
        alert(userNumber + "not divicible by 2 or 5");
    }
divisibleNum();