//let realRap = document.querySelector('.real-rap');
let portfolio = document.querySelector('.portfolio')
//let gitHub = document.querySelector('.github')

document.querySelector('.real-rap').onclick = function() {
    var redirectWindow = window.open('https://c-lew-on-truth.github.io/real-rap-fans/', '_blank');
    redirectWindow.location;
};

portfolio.onclick = () => {
    //console.log('seen')
    window.location.href = 'index.html'
}

document.querySelector('.github').onclick = function() {
    var redirectWindow = window.open('https://github.com/C-Lew-On-Truth', '_blank');
    redirectWindow.location;
};
