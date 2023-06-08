import { createWideRegion, createStartPointDetails } from "./dropdown.js";
const url = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';
const data = [{
    role: 'system',
    content: 'assistant는 느긋한 여행을 추천하고, 날짜별로 여행 계획을 세우며 아주 상세한 답변을 주는 여행 전문가이다.'
}];

const $startPointWide = document.querySelector('#start-point-wide');
const $startPointDetails = document.querySelector('#start-point-details');
const $destination = document.querySelector('#destination');
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
    var userInputData = `
    나는 ${$startPointWide.value}의 ${$startPointDetails.value}에서 출발해 ${$destination.value}로 여행을 가려고 해. 
    일정은 ${document.querySelector('#start-date').value} 부터 ${document.querySelector('#end-date').value} 까지야.
    이에 대해 일자별로 아주 세세한 계획을 세워줘.
    `;

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

function valueCheck() {
    if (($startPointWide.value === '') && ($startPointDetails.value === '')) {
        alert('출발지를 입력해주세요.');
        location.reload();
    } else if ($destination.value === '') {
        alert('도착지를 입력해주세요.');
        location.reload();
    } else if ((document.querySelector('#start-date').value === '') || (document.querySelector('#end-date').value === '')) {
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

window.onload = createWideRegion($startPointWide), createWideRegion($destination);

$startPointWide.addEventListener('change', function () {
    createStartPointDetails($startPointWide, $startPointDetails, this.value);
});

$button.addEventListener('click', e => {
    e.preventDefault();
    valueCheck();
    getTravelPlan();
});