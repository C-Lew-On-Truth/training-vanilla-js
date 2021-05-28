(function() {

    var httpRequest;
    document.getElementById('ajax-button')
    .addEventListener('click', requestMade);

    function requestMade() {
        httpRequest = new XMLHttpRequest

        if(!httpRequest) {
            alert('request failed : - (');
            return false;
        }

        httpRequest.onreadystatechange = showFile;
        httpRequest.open('GET', 'drag-drop.html')
        httpRequest.send()
    }

    function showFile() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                document.querySelector('.show-html').innerHTML = this.responseText
            } else {
                alert('OH no there was a problem!')
            }
        }
    }

})();
console.log('seen')