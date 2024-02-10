const keyA = 'ai';
const keyE = 'enter';
const keyI = 'imes';
const keyO = 'ober';
const keyU = 'ufat';

function inputCheck(str) {
    if(str.length){
        return /^[a-z0-9 ]*$/.test(str);
    }
    else{
        return false;
    } 
  }

function encryptText(text){
    let textArray = text.split("");
    let encryptedText = '';
    let encryptedArray = [];

    for(let i = 0; i < textArray.length; i++){
        if(textArray[i] === "a"){
            encryptedArray[i] = keyA;
        }
        else if(textArray[i] === "e"){
            encryptedArray[i] = keyE;
        }
        else if(textArray[i] === "i"){
            encryptedArray[i] = keyI;
        }
        else if(textArray[i] === "o"){
            encryptedArray[i] = keyO;
        }
        else if(textArray[i] === "u"){
            encryptedArray[i] = keyU;
        }
        else{
            encryptedArray[i] = textArray[i];
        }
    }
    
    return encryptedText = encryptedArray.join("");
}

function asignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return
}

function showHideElement (elementId, action){
    let x = document.getElementById(elementId);
    switch(action){
        case "show":
            x.style.display = "block";
            break;
        case "hide":
            x.style.display = "none";
            break;
    }       
}

function initialValues(){
    asignTextElement('h1', '');
    showHideElement("h2Div", "show");
    showHideElement("h3Div", "show");
    showHideElement("copyB", "hide");

    if (!window.matchMedia("(max-width: 768px)").matches) {
        showHideElement("imageDiv", "show");
      } 
}


function onClickEncryptText () {
    initialValues();
    let inputText = document.getElementById('inputValue').value;
    if(inputCheck(inputText)){      
        let element = document.getElementById("p1");
        element.classList.remove("pColor");
        showHideElement("imageDiv", "hide");
        showHideElement("h2Div", "hide");
        showHideElement("h3Div", "hide");
        asignTextElement('h1', `${encryptText(inputText)}`);
        showHideElement("copyB", "show");
    } 

    else{
        let element = document.getElementById("p1");
        element.classList.add("pColor");
        
    }
}

function onClickDecryptText () {
    initialValues();
    let inputText = document.getElementById('inputValue').value;
    if(inputCheck(inputText)){
        let element = document.getElementById("p1");
        element.classList.remove("pColor");
        showHideElement("imageDiv", "hide");
        showHideElement("h2Div", "hide");
        showHideElement("h3Div", "hide");
        let decryptedText = inputText.replaceAll(keyA, 'a').replaceAll(keyE, 'e').replaceAll(keyI, 'i').replaceAll(keyO, 'o').replaceAll(keyU, 'u'); 
        asignTextElement('h1', `${decryptedText}`);
        showHideElement("copyB", "show");
    } 
    else{
        let element = document.getElementById("p1");
        element.classList.add("pColor");
    }
}

function copyText() {
    let copyText = document.getElementById("h1Div").innerText;
    navigator.clipboard.writeText(copyText)
      .then(function() {
        console.log('copiado')
      })
      .catch(function(error) {
        console.log("Failed to copy text: " + error);
      });
  }