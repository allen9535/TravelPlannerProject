export function beforeAnswer() {
    document.querySelector('#loader').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden'
}

export function afterAnswer() {
    document.querySelector('#loader').style.display = 'none';
    document.querySelector('body').style.overflow = 'visible'
}