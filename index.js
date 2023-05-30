const $upperForm = document.querySelector("#upper-form");
const $underForm = document.querySelector("#under-form");
const $userInput = document.querySelector("#user-input");
const $optionButton = document.querySelector("#option-button");
const $chatList = document.querySelector('#chatList');

// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// 사용자의 질문
let question;

// 질문과 답변 저장
let data = [
    {
        role: "system",
        content: "assistant는 친절한 답변가이다.",
    },
];

// 화면에 뿌려줄 데이터, 질문들
let questionData = [];

$optionButton.addEventListener("input", (e) => {
    question = e.target.value;
});

// function optionButtonHandler() {
//     var startDateOption = document.querySelector('#start-date').value;
//     var endDateOption = document.querySelector('#end-date').value;
//     var tripCountry = document.querySelector('#trip-country').value;

//     return `나는 ${startDateOption}부터 ${endDateOption}의 일정으로 ${tripCountry}를 여행하고 싶어. 여행 일정을 짜줘`
// }

// input에 입력된 질문 받아오는 함수
$userInput.addEventListener("input", (e) => {
    question = e.target.value;
});

// 사용자의 질문을 객체를 만들어서 push
const sendQuestion = (question) => {
    if (question) {
        data.push({
            role: "user",
            content: question,
        });
        questionData.push({
            role: "user",
            content: question,
        });
    }
};

// 화면에 질문 그려주는 함수
const printQuestion = async () => {
    if (question) {
        var createChatMessage = document.createElement('div');
        createChatMessage.className = 'chatMessage';

        var createContents = document.createElement('div');
        createContents.className = 'flex items-end justify-end';

        var createText = document.createElement('div');
        createText.className = 'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end';

        var createBox = document.createElement('span');
        createBox.className = 'px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white';
        questionData.map((el) => {
            createBox.innerText = el.content;
        });

        createText.appendChild(createBox);
        createContents.appendChild(createText);
        createChatMessage.appendChild(createContents);
        $chatList.appendChild(createChatMessage);

        questionData = [];
        question = false;

        // // 채팅창을 스크롤하여 최신 메시지를 표시
        $chatList.scrollTop = $chatList.scrollHeight;
    }
};

// 화면에 답변 그려주는 함수
const printAnswer = (answer) => {
    var createChatMessage = document.createElement('div');
    createChatMessage.className = 'chatMessage';

    var createContents = document.createElement('div');
    createContents.className = 'flex items-end';

    var createText = document.createElement('div');
    createText.className = 'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start';

    var createBox = document.createElement('span');
    createBox.className = 'px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600';
    createBox.innerText = answer;

    createText.appendChild(createBox);
    createContents.appendChild(createText);
    createChatMessage.appendChild(createContents);
    $chatList.appendChild(createChatMessage);

    // // 채팅창을 스크롤하여 최신 메시지를 표시
    $chatList.scrollTop = $chatList.scrollHeight;
};

// api 요청보내는 함수
const apiPost = async () => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
        .then((res) => res.json())
        .then((res) => {
            printAnswer(res.choices[0].message.content);
        })
        .catch((err) => {
            console.log(err);
        });
};

// submit
// 채팅창 하단의 전송 버튼
$underForm.addEventListener("submit", (e) => {
    e.preventDefault();
    $userInput.value = null;
    sendQuestion(question);
    apiPost();
    printQuestion();
});