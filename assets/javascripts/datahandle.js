import { radioCheck, valueCheck } from "./checkers.js";

const data = [{
    role: 'system',
    content: 'assistant는 느긋한 여행을 추천하고, 날짜별로 여행 계획을 세우며 아주 상세한 답변을 주는 여행 전문가이다.'
}];


export function makeData() {
    valueCheck();

    var userInputData = `
    나는 ${document.querySelector('#start-point-wide').value}의 ${document.querySelector('#start-point-details').value}에서 출발해 
    ${document.querySelector('#destination').value}로 여행을 가려고 해. 
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
    });

    return data;
}