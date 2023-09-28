var b1 = document.getElementById('button-1');
var b2 = document.getElementById('button-2');
var b3 = document.getElementById('button-3');
var b4 = document.getElementById('button-4');
var b5 = document.getElementById('button-5');
var sub = document.getElementById('sub');

var clicked = null;
var selectedNumber = 0;
var lastClicked = null;

function lastClickedFunc(buttonId) {
    if (lastClicked !== buttonId && clicked === true) {
        let button = [lastClicked];

        button[0].classList.replace('bg-orange-500', 'bg-slate-700');
        button[0].classList.replace(
            'hover:bg-orange-400',
            'hover:bg-slate-400'
        );
        button[0].classList.remove('text-white');

        return (clicked = false);
    }
}

function ifClicked(buttonId, numberButton) {
    let button = [buttonId, lastClicked];

    lastClickedFunc(buttonId);

    button[0].classList.replace('bg-slate-700', 'bg-orange-500');
    button[0].classList.replace('hover:bg-slate-400', 'hover:bg-orange-400');
    button[0].classList.add('text-white');

    clicked = true;

    selectedNumber = numberButton;
    localStorage.setItem('selectedNumber', selectedNumber);

    lastClicked = buttonId;
}

b1.addEventListener('click', () => {
    ifClicked(b1, 1);
});

b2.addEventListener('click', () => {
    ifClicked(b2, 2);
});

b3.addEventListener('click', () => {
    ifClicked(b3, 3);
});

b4.addEventListener('click', () => {
    ifClicked(b4, 4);
});

b5.addEventListener('click', () => {
    ifClicked(b5, 5);
});

sub.addEventListener('click', () => {
    if (selectedNumber === 0) {
        alert('Please select a number');
        preventDefault();
    }
});
