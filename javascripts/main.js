import { createWideRegion, createStartPointDetails } from "./dropdown.js";
import { makeData } from './data-hanlder.js';
import { beforeAnswer, afterAnswer } from './util-functions.js';

const url = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/';


window.onload = createWideRegion();

document.querySelector('#startPointWide').addEventListener('change', function () {
    createStartPointDetails(this.value);
});

document.querySelector('button').addEventListener('click', e => {
    e.preventDefault();
    beforeAnswer();

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(makeData()),
        redirect: 'follow'
    }).then(res => res.json())
        .then(res => {
            document.querySelector('#announce').style.display = 'none';
            document.querySelector('#contents').innerText = res.choices[0].message.content;
            afterAnswer();
        });
});