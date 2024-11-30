function toggleLang() {
    var langSwitch = document.getElementById('lang-switch');
    var titleElement = document.getElementById('head-title');
    var enText = document.getElementsByClassName('svg-img-en');
    var knText = document.getElementsByClassName('svg-img-kn');
    if (enText.length === knText.length) {
        for (var i = 0; i < enText.length; i++) {
            if (langSwitch.checked) {
                titleElement.innerHTML = 'ಸಚಿನ್ ಮತ್ತು ವಿದ್ಯಾ';
                enText[i].style.display = 'none';
                knText[i].style.display = 'flex';
            } else {
                titleElement.innerHTML = 'Sachin & Vidya';
                enText[i].style.display = 'flex';
                knText[i].style.display = 'none';
            }
        }
    }
}
