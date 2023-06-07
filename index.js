const url = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';
var data = [{
    role: 'system',
    content: 'assistant는 느긋한 여행을 추천하고, 날짜별로 여행 계획을 세우며 아주 상세한 답변을 주는 여행 전문가이다.'
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

function removeLoader() {
    $loader.style.display = 'none';
}

function continueScroll() {
    $body.style.overflow = 'visible'
}

function stopScroll() {
    $body.style.overflow = 'hidden'
}

function makeData() {
    var userInputData = `나는 ${$startPoint.value}에서 출발해 ${$destination.value}로 여행을 가려고 해. ${$schedule.value} 정도 머물 예정이야. `;

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
    $rent.value = null;
}

function valueCheck() {
    if ($startPoint.value === '') {
        alert('출발지를 입력해주세요.');
        location.reload();
    } else if ($destination.value === '') {
        alert('도착지를 입력해주세요.');
        location.reload();
    } else if ($schedule.value === '') {
        alert('여행 일정을 입력해주세요.');
        location.reload();
    }
}

function appearContents(res) {
    document.querySelector('#announce').style.display = 'none';
    document.querySelector('#contents').innerText = res.choices[0].message.content;
}

function getTravelPlan() {
    appearLoader();
    stopScroll();
    makeData();
    emptyValue();

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'

    }).then(res => res.json())
        .then(res => {
            appearContents(res);
            removeLoader();
            continueScroll();
        });
}

$button.addEventListener('click', e => {
    e.preventDefault();
    valueCheck();
    getTravelPlan();
});