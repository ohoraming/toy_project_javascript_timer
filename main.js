// const miniute = document.querySelector('#miniute');
const second = document.querySelector('#second');
const startButton = document.querySelector('.start');
const endButton = document.querySelector('.end');

// 타이머 종료시 표시할 요소
const endMark = document.createElement('h1');
endMark.textContent = '끗! 😎';
endMark.style.fontSize = '100px';

const endBtn = document.createElement('button');
endBtn.textContent = '종료';

const renderSecond = () => {
    let sec = parseInt(second.value);
    second.value = sec - 1;
    if(parseInt(second.value) > 0) {
        console.log(parseInt(second.value));
        setTimeout(renderSecond, 1000);
    } else if(parseInt(second.value) == 0) {
        document.body.appendChild(endMark);
        document.body.appendChild(endBtn);
    }
};

endBtn.addEventListener('click', () => {
    endMark.remove();
    endBtn.remove();
})

startButton.addEventListener('click', () => {
    let sec = parseInt(second.value);
    console.log(sec);
    setTimeout(renderSecond, 1000);
});