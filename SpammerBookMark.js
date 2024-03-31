javascript: (() => {
 const input = prompt("email: ");
var number = prompt("# of emails to send: ");
const subjects = prompt("subject: ");
const body = prompt("body text: ");
var waitTime = prompt("You should put more then 1000 (3000 best) It will be slower but it has a higher chance of working\nTime to wait between emails: ");

number = parseInt(number);
waitTime = parseInt(waitTime);

email();

async function email() {
  const composeButton = document.querySelector('.T-I.T-I-KE.L3');
  if (composeButton) {
    for (var i = 0; i < number; i++) {
      composeButton.click();
      console.log('Clicked on the "Compose" button');
      await sleep(waitTime); /* Wait for a short period before adding text */
      await addText();
    }
  } else {
    alert("Error finding new draft button!");
  }
}

async function addText() {
  const to = document.querySelector('.agP.aFw');
  const subject = document.querySelector('.aoT');
  const insides = document.querySelectorAll('.Am.Al.editable.LW-avf.tS-tW');
  const sendButton = document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3');

  if (subject && to && insides && sendButton) {
    const event = new Event('input', {
      bubbles: true,
      cancelable: true,
    });

    insides.forEach((divElement) => {
      divElement.innerHTML = body;
      divElement.dispatchEvent(event);
    });

    to.value = input;
    subject.value = subjects;

    to.dispatchEvent(event);
    subject.dispatchEvent(event);

    console.log(`Filled in text: "${input}"`);
    sendButton.click();
  } else {
    console.error('Input element not found');
    await sleep(waitTime); /* Wait for a short period before retrying*/
    await addText();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
})();
