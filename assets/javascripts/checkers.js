export function radioCheck() {
    var value;

    document.getElementsByName('car-rent').forEach((v) => {
        if (v.checked) {
            value = v.value;
        }
    });

    return value;
}

export function valueCheck() {
    if ((document.querySelector('#start-point-wide').value === '') && (document.querySelector('#start-point-details').value === '')) {
        alert('출발지를 입력해주세요.');
        location.reload();
    } else if (document.querySelector('#destination').value === '') {
        alert('도착지를 입력해주세요.');
        location.reload();
    } else if ((document.querySelector('#start-date').value === '') || (document.querySelector('#end-date').value === '')) {
        alert('여행 일정을 입력해주세요.');
        location.reload();
    }
}