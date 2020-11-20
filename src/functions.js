export function alertNotification(eltext, elclass = 'primary'){

    let el = document.querySelector('#notification');
    let alert = document.querySelector('#notification .alert');
    let textBox = document.querySelector('#notification .alert span.message');

    let textDefault = 'Empty Notification...';

    if( eltext.trim() !== '' ){
        textBox.innerText = eltext;
    }else{
        textBox.innerText = textDefault;
    }

    el.classList.add('active');
    alert.classList.add('alert-' + elclass);

    setTimeout(function(){
        el.classList.remove('active');
    }, 2500);
    setTimeout(function(){
        alert.classList.remove('alert-' + elclass);
    }, 3000);

}
export function redirectHome () {
    window.location.href = '/';
}