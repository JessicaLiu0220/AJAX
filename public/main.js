let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n = n + 1;
        }

    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }

    }
    request.send();

}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/3.html');
    request.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', "/2.js");
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response;
        document.body.appendChild(script)
    }
    request.send();
}
getCSS.onclick = () => {
    // 创建对象
    const request = new XMLHttpRequest();
    // 调用open方法
    request.open('GET', "/style.css");
    // 请求成功或失败
    request.onreadystatechange = () => {
        // 下载完成但不知道是成功还是失败
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {//状态码以2开头的都表示成功
                console.log(request.response)
                //创建style标签
                const style = document.createElement('style')
                //将request中响应的内容插入style中
                style.innerHTML = request.response
                //将style插入到head中
                document.head.appendChild(style)
            } else {
                alert("CSS加载失败")
            }
        }

    }
    request.onerror = () => {
        console.log('no')
    }
    // 发送出去
    request.send();
}