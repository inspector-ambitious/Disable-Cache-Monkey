function loadUrls() {
    var urls = localStorage['urls'] ? JSON.parse(localStorage['urls']) : [],
        urlList = document.getElementById('url-list'),
        div;
        
    urlList.innerHTML = '';    
    for (var i = 0; i < urls.length; i++) {
        div = document.createElement('div');
        div.innerHTML='<span>' + urls[i] + '</span><button onclick="removeUrl('+ i +')">Remove</button>';
        div.id = 'url-' + i;
        urlList.appendChild(div);
    }
}

function removeUrl(idx) {
    var new_urls = [],
        urls = localStorage['urls'] ? JSON.parse(localStorage['urls']) : [],
        div;
    console.log(idx);    
    for (var i = 0 ; i < urls.length; i++) {
        if (i !== idx) {
            new_urls.push(urls[i]);
        }
    }
    
    localStorage['urls'] = JSON.stringify(new_urls);
    div = document.getElementById('url-' + idx);
    document.getElementById('url-list').removeChild(div);
}

function addUrl(e) {
    if (e.keyCode === 13) {
        var input = document.getElementById('url-input'),
            url = document.getElementById('url-input').value;
        if (url != '') {
            var urls = localStorage['urls'] ? JSON.parse(localStorage['urls']) : [];
            urls.push(url);
            localStorage['urls'] = JSON.stringify(urls);
            loadUrls();
            input.value='';
        }
    }
}