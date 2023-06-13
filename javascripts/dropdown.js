const regions = [
    {
        'wideRegion': '서울',
        'detailRegions': '',
    },
    {
        'wideRegion': '부산',
        'detailRegions': '',
    },
    {
        'wideRegion': '대구',
        'detailRegions': '',
    },
    {
        'wideRegion': '인천',
        'detailRegions': '',
    },
    {
        'wideRegion': '광주',
        'detailRegions': '',
    },
    {
        'wideRegion': '대전',
        'detailRegions': '',
    },
    {
        'wideRegion': '울산',
        'detailRegions': '',
    },
    {
        'wideRegion': '세종',
        'detailRegions': '',
    },
    {
        'wideRegion': '제주',
        'detailRegions': '',
    },
    {
        'wideRegion': '경기도',
        'detailRegions': [
            '고양', '수원', '용인', '과천', '광명', '광주', '구리', '군포', '김포', '남양주', '동두천', '부천', '성남',
            '시흥', '안산', '안성', '안양', '양주', '여주', '오산', '의왕', '의정부', '이천', '파주', '평택', '포천',
            '하남', '화성', '가평', '양평', '연천'
        ]
    },
    {
        'wideRegion': '강원도',
        'detailRegions': [
            '강릉', '동해', '삼척', '속초', '원주', '춘천', '태백', '고성', '양구',
            '양양', '영월', '인제', '정선', '철원', '평창', '홍천', '화천', '횡성'
        ]
    },
    {
        'wideRegion': '충청북도',
        'detailRegions': [
            '제천', '청주', '충주', '괴산', '단양', '보은', '영동', '옥천', '음성', '증평', '진천'
        ]
    },
    {
        'wideRegion': '충청남도',
        'detailRegions': [
            '계룡', '공주', '논산', '당진', '보령', '서산', '아산', '천안',
            '금산', '부여', '서천', '예산', '청양', '태안', '흥성'
        ]
    },
    {
        'wideRegion': '전라북도',
        'detailRegions': [
            '군산', '김제', '남원', '익산', '전주', '정읍', '고창',
            '무주', '부안', '순창', '완주', '임실', '장수', '진안'
        ]
    },
    {
        'wideRegion': '전라남도',
        'detailRegions': [
            '광양', '나주', '목포', '순천', '여수', '강진', '고흥', '곡성', '구례', '담양', '무안',
            '보성', '신안', '영광', '영양', '완도', '장성', '장흥', '진도', '함평', '해남', '화순'
        ]
    },
    {
        'wideRegion': '경상북도',
        'detailRegions': [
            '경산', '경주', '구미', '김천', '문경', '상주', '안동', '영주', '영천', '포항', '고령', '군위',
            '봉화', '성주', '영덕', '영양', '예천', '울릉', '울진', '의성', '청도', '청송', '칠곡'
        ]
    },
    {
        'wideRegion': '경상남도',
        'detailRegions': [
            '창원', '거제', '김해', '밀양', '사천', '양산', '진주', '통영', '거창',
            '고성', '남해', '산청', '의령', '창녕', '하동', '함안', '함양', '합천'
        ]
    },
];
const $startPointWide = document.querySelector('#startPointWide');
const $startPointDetails = document.querySelector('#startPointDetails');
const $destination = document.querySelector('#destination');


function makeRegionsToDropbox(dropboxTag) {
    regions.forEach(region => {
        const optionTag = document.createElement('option');
        optionTag.value = region.wideRegion;
        optionTag.innerText = region.wideRegion;
        dropboxTag.appendChild(optionTag);
    });
}

export function createWideRegion() {
    makeRegionsToDropbox($startPointWide);
    makeRegionsToDropbox($destination);
}

export function createStartPointDetails(wideRegionValue) {
    $startPointDetails.style.display = 'none';
    $startPointWide.style.width = '50%';
    $startPointDetails.innerHTML = '<option class="hidden" value="" disabled selected>세부 지역</option>';
    regions.forEach(region => {
        if ((wideRegionValue === region.wideRegion) && (region.detailRegions !== '')) {
            $startPointDetails.style.display = 'block';
            $startPointWide.style.width = '20%';
            region.detailRegions.forEach(province => {
                const optionTag = document.createElement('option');
                optionTag.value = province;
                optionTag.innerText = province;
                $startPointDetails.appendChild(optionTag);
            });
        }
    });
}