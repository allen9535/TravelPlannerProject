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


export function createWideRegion(selectTag) {
    wideRegion.forEach(wideRegion => {
        const optionTag = document.createElement('option');
        optionTag.value = wideRegion;
        optionTag.innerText = wideRegion;
        selectTag.appendChild(optionTag);
    });
}

export function createStartPointDetails(startPointWide, startPointDetails, wideRegionValue) {
    startPointDetails.innerHTML = '<option class="hidden" value="" disabled selected>세부 지역</option>';
    startPointDetails.style.display = 'block';
    startPointWide.style.width = '20%';
    switch (wideRegionValue) {
        case '서울':
        case '부산':
        case '대구':
        case '인천':
        case '광주':
        case '대전':
        case '울산':
        case '세종':
        case '제주':
            startPointDetails.style.display = 'none';
            startPointWide.style.width = '50%';
            break;
        case '경기도':
            gyeonggi.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
        case '강원도':
            gangwon.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
        case '충청북도':
            chungbuk.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
        case '충청남도':
            chungnam.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
        case '전라북도':
            jeonbuk.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
        case '전라남도':
            jeonnam.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
        case '경상북도':
            gyeongbuk.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
        case '경상남도':
            gyeongnam.forEach(detail => {
                const optionTag = document.createElement('option');
                optionTag.value = detail;
                optionTag.innerText = detail;
                startPointDetails.appendChild(optionTag);
            });
            break;
    }
    console.log()
}