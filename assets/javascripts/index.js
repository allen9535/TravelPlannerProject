const url = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';
var data = [{
    role: 'system',
    content: 'assistant는 느긋한 여행을 추천하고, 날짜별로 여행 계획을 세우며 아주 상세한 답변을 주는 여행 전문가이다.'
}];

const wideRegion = [
    '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '제주',
    '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도'
];
const gyeonggi = [
    '고양', '수원', '용인', '과천', '광명', '광주', '구리', '군포', '김포', '남양주', '동두천', '부천', '성남',
    '시흥', '안산', '안성', '안양', '양주', '여주', '오산', '의왕', '의정부', '이천', '파주', '평택', '포천',
    '하남', '화성', '가평', '양평', '연천'
];
const gangwon = [
    '강릉', '동해', '삼척', '속초', '원주', '춘천', '태백', '고성', '양구',
    '양양', '영월', '인제', '정선', '철원', '평창', '홍천', '화천', '횡성'
];
const chungbuk = [
    '제천', '청주', '충주', '괴산', '단양', '보은', '영동', '옥천', '음성', '증평', '진천'
];
const chungnam = [
    '계룡', '공주', '논산', '당진', '보령', '서산', '아산', '천안',
    '금산', '부여', '서천', '예산', '청양', '태안', '흥성'
];
const jeonbuk = [
    '군산', '김제', '남원', '익산', '전주', '정읍', '고창',
    '무주', '부안', '순창', '완주', '임실', '장수', '진안'
];
const jeonnam = [
    '광양', '나주', '목포', '순천', '여수', '강진', '고흥', '곡성', '구례', '담양', '무안',
    '보성', '신안', '영광', '영양', '완도', '장성', '장흥', '진도', '함평', '해남', '화순'
];
const gyeongbuk = [
    '경산', '경주', '구미', '김천', '문경', '상주', '안동', '영주', '영천', '포항', '고령', '군위',
    '봉화', '성주', '영덕', '영양', '예천', '울릉', '울진', '의성', '청도', '청송', '칠곡'
];
const gyeongnam = [
    '창원', '거제', '김해', '밀양', '사천', '양산', '진주', '통영', '거창',
    '고성', '남해', '산청', '의령', '창녕', '하동', '함안', '함양', '합천'
];

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

// function emptyValue() {
//     $startPoint.value = null;
//     $destination.value = null;
//     // document.querySelector('#start-date').value = null;
//     // document.querySelector('#end-date').value = null;
//     $rent.value = null;
// }

function valueCheck() {
    if (($startPointWide.value === '') || ($startPointDetails.value === '')) {
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
    // emptyValue();

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

function createWideRegion() {
    wideRegion.forEach(wideRegion => {
        const optionTag = document.createElement('option');
        optionTag.value = wideRegion;
        optionTag.innerText = wideRegion;
        $startPointWide.appendChild(optionTag);
    });

    wideRegion.forEach(wideRegion => {
        const optionTag = document.createElement('option');
        optionTag.value = wideRegion;
        optionTag.innerText = wideRegion;
        $destination.appendChild(optionTag);
    });
}

$startPointWide.addEventListener('change', function () {
    $startPointDetails.innerHTML = '<option class="hidden" value="" disabled selected>세부 지역</option>';
    document.querySelector('#start-point-details').style.display = 'block';
    $startPointWide.style.width = '20%';
    switch ($startPointWide.value) {
        case '서울':
        case '부산':
        case '대구':
        case '인천':
        case '광주':
        case '대전':
        case '울산':
        case '세종':
        case '제주':
            document.querySelector('#start-point-details').style.display = 'none';
            $startPointWide.style.width = '50%';
            break;
        case '경기도':
            gyeonggi.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
        case '강원도':
            gangwon.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
        case '충청북도':
            chungbuk.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
        case '충청남도':
            chungnam.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
        case '전라북도':
            jeonbuk.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
        case '전라남도':
            jeonnam.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
        case '경상북도':
            gyeongbuk.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
        case '경상남도':
            gyeongnam.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                $startPointDetails.appendChild(optionTag);
            });
            break;
    }
});

window.onload = createWideRegion();

$button.addEventListener('click', e => {
    e.preventDefault();
    valueCheck();
    getTravelPlan();
});