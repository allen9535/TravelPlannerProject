export function radioCheck() {
    var value;

    document.getElementsByName('carRent').forEach((v) => {
        if (v.checked) {
            value = v.value;
        }
    });

    return value;
}

export function valueCheck() {
    if ((document.querySelector('#startPointWide').value === '')) {
        alert('출발지를 입력해주세요.');
    }

    if (document.querySelector('#destination').value === '') {
        alert('도착지를 입력해주세요.');
    }

    if ((document.querySelector('#startDate').value === '') || (document.querySelector('#endDate').value === '')) {
        alert('여행 일정을 입력해주세요.');
    }
}