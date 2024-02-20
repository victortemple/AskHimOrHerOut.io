
const hishername = document.querySelector("#UserName").value;
const Username = document.querySelector(".gfName").innerHTML = hishername;

function submit(){
    const show = document.querySelector(".theQuery");
    show.style.display = "block"

    const hishername = document.querySelector("#UserName").value;
    document.querySelector(".gfName").innerHTML = hishername;

    if(document.querySelector("#maleGendertype").checked){
        document.querySelector(".queryTxt").innerHTML = "will you be my boyfriend pls!..";
    }

   else if(document.querySelector("#femaleGendertype").checked){
        document.querySelector(".queryTxt").innerHTML = "will you be my girlfriend pls!..";
    }

    const hide = document.querySelector("#message");
    hide.style.display = "none"

}

function yes(){
    const show = document.querySelector(".kissingGif");
    show.style.display = "block"

    const showms = document.querySelector(".thnxMss");
    showms.style.display = "block"

    const hide = document.querySelector(".theQuery");
    hide.style.display = "none"
}

    const noButton = document.querySelector(".noBtn");

    let clickCount = 0;

    const buttonTexts = ["no!.., you sure maybe you made a mistake", "no!.., huh seriously stop hitting the no button", "no!.., stop hurting me😭😢", "no!.., stop it😭 pls say yes", "stop playing hard to get😭😢😿"];


    noButton.addEventListener('click', function() {
    
    const nextText = buttonTexts[clickCount % buttonTexts.length];
    
    noButton.textContent = nextText;
    
    clickCount++;

    const buttonToResize = document.querySelector(".yesBtn");

    const currentFontSize = parseFloat(window.getComputedStyle(buttonToResize).fontSize);
    
    
    buttonToResize.style.fontSize = (currentFontSize + 10) + 'px';

    const nobuttonToResize = document.querySelector(".noBtn");

    const yescurrentFontSize = parseFloat(window.getComputedStyle(nobuttonToResize).fontSize);
    
    
    nobuttonToResize.style.fontSize = (yescurrentFontSize - 2) + 'px';


});