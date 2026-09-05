// VIJI SYSTEM - Sheria na Hadhabu kwa App ZOTE
function toaOnyo(sababu){
  let warnings = parseInt(localStorage.getItem("vijiWarnings")) || 0;
  warnings++;
  localStorage.setItem("vijiWarnings", warnings);
  let coins = parseInt(localStorage.getItem("vijiCoins")) || 0;

  if(warnings === 1){
    alert(`⚠️ ONYO LA 1/3: ${sababu}\nTafadhali zingatia Sheria za Viji.`);
  }
  if(warnings === 2){
    alert(`⛔ ONYO LA 2/3: ${sababu}\nAkaunti yako inafungwa kwa siku 7`);
    localStorage.setItem("vijiBlockedUntil", Date.now() + 7*24*60*60*1000);
  }
  if(warnings >= 3){
    alert(`❌ IMEFUTWA: ${sababu}\nUmevunja sheria mara 3. Viji Coins ${coins} zimepotea`);
    localStorage.clear();
    window.location.href = "index.html";
  }
}

function checkKamaAmefungwa(){
  let blockTime = localStorage.getItem("vijiBlockedUntil");
  if(blockTime && Date.now() < blockTime){
    let masaa = Math.ceil((blockTime - Date.now()) / 1000 / 60 / 60);
    alert(`⛔ IMEFUNGWA\nBado masaa ${masaa}h`);
    window.location.href = "index.html";
    return true;
  }
  return false;
}

// Iangalie mara tu ukiingia App yoyote
checkKamaAmefungwa();
