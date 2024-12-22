let randNum = Math.floor(Math.random() * 100) + 1;
let bt = document.getElementById("bt");
let massage = document.getElementById("answer");
let score = 0;
let body = document.body;

bt.addEventListener("click", () => {
    let guess1 = document.getElementById("inp").value;
    inp.value = "";
    if (guess1 !== "") {
        let guess = parseInt(guess1);
        if (guess >= 1 && guess <= 100) {
            if (guess === randNum) {
                score++;
                massage.innerHTML = "כל הכבוד! הצלחת! מספר הנקודות שלך הוא: " + score;
                body.style.background = "lightgreen";
                randNum = Math.floor(Math.random() * 100) + 1;
            } else if (guess > randNum) {
                massage.innerHTML = "גדול מדי!";
                body.style.background = "red";
            } else {
                massage.innerHTML = "קטן מדי!";
                body.style.background = "red";
            }
        } else {
            massage.innerHTML = "המספר לא בטווח! אנא בחר מספר בין 1 ל-100.";
        }
    } else {
        massage.innerHTML = "לא הכנסת מספר!";
    }
});
