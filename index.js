const btnList = document.querySelector('[role="btnlist"]');
const buttons = document.querySelectorAll('[role="btn"]');
const submitBtn = document.querySelector('[role="submitBtn"]');

btnList.addEventListener('keydown', ChangeButton);

buttons.forEach((button) => button.addEventListener('click', ChoseRating));

submitBtn.addEventListener('click', ShowResponse);

let btnFocus = 0;
function ChangeButton(e) {
    const keydownleft = 37;
    const keydownright = 39;

    if (e.keyCode === keydownleft || e.keyCode === keydownright) {
        buttons[btnFocus].setAttribute('tabindex', -1);
        if (e.keyCode === keydownright) {
            btnFocus++;
            if (btnFocus >= buttons.length){
                btnFocus = 0;
            }
         } else if (e.keyCode === keydownleft) {
            btnFocus--;
            if (btnFocus < 0) {
                btnFocus = buttons.length - 1;
            }
        }
        buttons[btnFocus].setAttribute('tabindex', 0);
        buttons[btnFocus].focus();
    }
}

function ChoseRating(e) {
    const targetBtn = e.target;
    const rating = targetBtn.getAttribute("data-rating");
    document.querySelector('[role="result-rating"]').textContent = rating;
}

function ShowResponse() {
    document.getElementById('rating').style.display = 'none';
    document.getElementById('response').style.display = 'grid';
}