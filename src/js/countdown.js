const jourJ = new Date("May 14, 2023");
const why = "La nouvelle coloc !!!";

const daysSpan = document.querySelector('#days');
const hoursSpan = document.querySelector('#hours');
const minutesSpan = document.querySelector('#minutes');
const secondesSpan = document.querySelector('#secondes');

const daysName = document.querySelector('#days-name');
const hoursName = document.querySelector('#hours-name');
const minutesName = document.querySelector('#minutes-name');
const secondesName = document.querySelector('#secondes-name');

const whySpan = document.querySelector('#why');

function countdown(){
  const today = new Date();

  let remaining = (jourJ - today) / 1000;

  if(remaining <= 0){
    secondesSpan.innerHTML = '🎉 Finish 🎉';
    clearInterval(interval);
    return;
  }

  let days = Math.floor(remaining / (60 * 60 * 24));
  let hours = Math.floor((remaining % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((remaining % (60 * 60)) / 60);
  let secondes = Math.floor(remaining % 60);

  
  // let hoursN = hours > 1 ? 'heures' : 'heure';
  // let hours0 = hours > 0 ? hoursN : "";
  // let hoursV = hours > 0 ? hours : "";
  
  // let minutesN = minutes > 1 ? 'minutes' : 'minute';
  // let minutes0 = minutes > 0 ? minutesN : "";
  // let minutesV = minutes < 10 ? '0'+minutes : minutes;
  // minutesV = minutes > 0 ? minutesV : "";
  
  // let secondesN = secondes > 1 ? 'secondes' : 'seconde';
  // let secondesV = secondes < 10 ? '0'+secondes : secondes;

  let daysN, daysV;
  let hoursN, hoursV;
  let minutesN, minutesV;
  let secondesN, secondesV;

  if(days > 0){
    daysN = days > 1 ? 'jours' : 'jour';
    daysName.innerHTML = daysN;
    daysV = days < 10 ? '0'+days : days;
    daysSpan.innerHTML = daysV;
    hoursN = hours > 1 ? 'heures' : 'heure';
    hoursName.innerHTML = hoursN;
    hoursV = hours < 10 ? '0'+hours : hours;
    hoursSpan.innerHTML = hoursV;
    minutesN = minutes > 1 ? 'minutes' : 'minute';
    minutesName.innerHTML = minutesN;
    minutesV = minutes < 10 ? '0'+minutes : minutes;
    minutesSpan.innerHTML = minutesV;
    secondesN = secondes > 1 ? 'secondes' : 'seconde';
    secondesName.innerHTML = secondesN;
    secondesV = secondes < 10 ? '0'+secondes : secondes;
    secondesSpan.innerHTML = secondesV;
  } else {
    daysN = "";
    daysV = "";
    if(hours > 0){
      hoursN = hours > 1 ? 'heures' : 'heure';
      hoursName.innerHTML = hoursN;
      hoursV = hours < 10 ? '0'+hours : hours;
      hoursSpan.innerHTML = hoursV;
      minutesN = minutes > 1 ? 'minutes' : 'minute';
      minutesName.innerHTML = minutesN;
      minutesV = minutes < 10 ? '0'+minutes : minutes;
      minutesSpan.innerHTML = minutesV;
      secondesN = secondes > 1 ? 'secondes' : 'seconde';
      secondesName.innerHTML = secondesN;
      secondesV = secondes < 10 ? '0'+secondes : secondes;
      secondesSpan.innerHTML = secondesV;
    } else {
      hoursN = "";
      hoursName.innerHTML = hoursN;
      hoursV = "";
      hoursSpan.innerHTML = hoursV;
      if(minutes > 0){
        minutesN = minutes > 1 ? 'minutes' : 'minute';
        minutesName.innerHTML = minutesN;
        minutesV = minutes < 10 ? '0'+minutes : minutes;
        minutesSpan.innerHTML = minutesV;
        secondesN = secondes > 1 ? 'secondes' : 'seconde';
        secondesName.innerHTML = secondesN;
        secondesV = secondes < 10 ? '0'+secondes : secondes;
        secondesSpan.innerHTML = secondesV;
      } else {
        minutesN = "";
        minutesName.innerHTML = minutesN;
        minutesV = "";
        minutesSpan.innerHTML = minutesV;
        if(secondes > 0){
          secondesN = secondes > 1 ? 'secondes' : 'seconde';
          secondesName.innerHTML = secondesN;
          secondesV = secondes < 10 ? '0'+secondes : secondes;
          secondesSpan.innerHTML = secondesV;
        } else {
          secondesN = "";
          secondesName.innerHTML = secondesN;
          secondesV = "";
          secondesSpan.innerHTML = secondesV;
        }
      }
    }
  }
  whySpan.innerHTML = why;
}

countdown();

const interval = setInterval(countdown, 1000);