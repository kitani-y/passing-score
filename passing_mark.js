function calculate(){
    let num1 = document.getElementById('textbox1').value;
    let num2 = document.getElementById('textbox2').value;


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let nitaki = 100 - num1;

    let scr = ((120 - num2) - nitaki) / 0.7;

    scr = Math.ceil(scr);

    document.getElementById('result').innerText = '次は' + scr + '点取りましょう';
}//acbed//