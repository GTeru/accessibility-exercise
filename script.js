function toggleDarkMode(){
    let htmlEl = document.getElementsByTagName('html')[0];
    // let bodyEl = document.getElementsByTagName('body')[0];
    if (htmlEl.classList.contains('dark-mode')) {
        htmlEl.classList.remove('dark-mode');
    }
    else{
        htmlEl.classList.add('dark-mode');

    }
}

let elDarkModeButton = document.getElementById('dark-mode-button');
elDarkModeButton.addEventListener('click', toggleDarkMode);