var score_1 = 0;
var score_2 = 0;
var score_sum = 0;

function checkAnswer_1(answer) {
    const result = document.getElementById('result_1');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        score_1 = 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        score_1 = 0;
    }
    score_sum = score_1+score_2;
    document.getElementById("summary").innerHTML = "คุณได้ "+ score_sum +" คะแนน";
 }
 
 function checkAnswer_2(answer) {
    const result = document.getElementById('result_2');
    if (answer === 'c') {
        result.textContent = "ถูกต้องแล้ว ทำร้าน 7-Eleven ไง";
        result.style.color = 'green';
        score_2 = 1;
    } else {
        result.textContent = "ผิดแล้ว ลองใหม่อีกทีนะ";
        result.style.color = 'red';
        score_2 = 0;
    }
    score_sum = score_1+score_2;
    document.getElementById("summary").innerHTML = "คุณได้ "+ score_sum +" คะแนน";
 }
 
