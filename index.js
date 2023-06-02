var url = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';
var data = [{
    role: 'system',
    content: 'assistant는 느긋한 여행을 추천하고, 날짜별로 여행 계획을 세워 Day1, Day2와 같은 방식으로 표시하며 아주 상세한 답변을 주는 여행 전문가이다.'
}];
const $startPoint = document.querySelector('#start-point');
const $destination = document.querySelector('#destination');
const $schedule = document.querySelector('#schedule');
const $must = document.querySelector('#must-visit');
const $rent = document.getElementsByName('car-rent');
const $button = document.querySelector('button');
const $loader = document.querySelector('#loader');
const $body = document.querySelector('body');

function appearLoader() {
    $loader.style.display = 'block';
}

function stopScroll() {
    $body.style.overflow = 'hidden'
}

function makeData() {
    var userInputData = `나는 ${$startPoint.value}에서 출발해 ${$destination.value}로 여행을 가려고 해. ${$schedule.value} 정도 머물 예정이고, ${$must.value}는 꼭 들러보고 싶어. `;

    if (radioCheck() === 'yes') {
        userInputData += `그리고 차량은 가져가기로 했어.`
    } else {
        userInputData += `그리고 차량은 가져가지 않기로 했어.`
    }

    data.push({
        role: 'user',
        content: userInputData
    })
}

function radioCheck() {
    var value;

    $rent.forEach((v) => {
        if (v.checked) {
            value = v.value;
        }
    });

    return value;
}

function emptyValue() {
    $startPoint.value = null;
    $destination.value = null;
    $schedule.value = null;
    $must.value = null;
    $rent.value = null;
}

function makeQuestion() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'

    }).then(res => res.json())
        .then(res => {
            document.querySelector('#announce').remove();
            document.querySelector('#contents').innerText = res.choices[0].message.content;
            removeLoader();
            continueScroll();
            document.location.href = '#contents-title'
        });
}

function removeLoader() {
    $loader.style.display = 'none';
}

function continueScroll() {
    $body.style.overflow = 'visible'
}

$button.addEventListener('click', e => {
    e.preventDefault();

    appearLoader();
    stopScroll();
    makeData();
    emptyValue();
    makeQuestion();
});