const input1 = document.querySelector('#input-1'); //Query elements
const input2 = document.querySelector('#input-2');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const theList = document.querySelector('#theList');
const output1 = document.querySelector('#total-colored');
const alertCtrl = document.querySelector('ion-alert-controller')

let total1 = 0;

const clear = () => {               //Func to cleara the input area
    input1.value = '';
    input2.value = '';
}

confirmBtn.addEventListener('click', () => {        //Event listener
    const entered1 = input1.value;
    const entered2 = input2.value;

    if (entered1.trim().length <= 0 || entered2 <=0 || entered2.trim().length <= 0) {                           //create a sample alert with an okay button
        alertCtrl.create({message: 'Please enter string value for input 1 and number for input 2.',
        header: 'Invalid argument!',
        buttons: ['Okay']})
        .then(alertElement => {
            alertElement.present();                 //bring the alert to the screen
        });
        return;
    }
    else {
        const item1 = document.createElement('ion-item');   //create ion element
        item1.textContent = entered1.trim() + ': ' + entered2;         //implement text into element
        theList.appendChild(item1);                         //append element
    }

    total1 += +entered2;                                    //plus to convert from string to let
    output1.textContent = total1;
    clear();
});

cancelBtn.addEventListener('click', () => {clear()});


