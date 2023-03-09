$(document).ready(function(){
    $('.select-item').on('click', function () {
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());

        let type = $(this).parent().prev().prev().val();

        $('.articles-column').children().remove()

        $('.select-head').text() === 'Все темы' ? allArticles() : selectionArticles(type)
    });

    $('.button-item').on('click', function (event) {
         if (document.querySelector('.button-item-active')) {
            document.querySelector('.button-item-active').classList.remove('button-item-active')
        }
        if (document.querySelector('.popular-last-link-active')) {
            document.querySelector('.popular-last-link-active').classList.remove('popular-last-link-active')
        }

        
        let target = event.target
        target.classList.add('button-item-active')

        $('.articles-column').children().remove()

        $(target).text() === 'Все темы' ? allArticlesForPhone() : selectionArticles($(target).text())

    });

    $('#last').on('click', function (event) {
        if (document.querySelector('.button-item-active')) {
            document.querySelector('.button-item-active').classList.remove('button-item-active')
        }
        if (document.querySelector('.popular-last-link-active')) {
            document.querySelector('.popular-last-link-active').classList.remove('popular-last-link-active')
        }

        let target = event.target
        target.classList.add('popular-last-link-active')

        $('.articles-column').children().remove()

        alternativeArticles()

    })
    $('#popular').on('click', function (event) {
        if (document.querySelector('.button-item-active')) {
            document.querySelector('.button-item-active').classList.remove('button-item-active')
        }
        if (document.querySelector('.popular-last-link-active')) {
            document.querySelector('.popular-last-link-active').classList.remove('popular-last-link-active')
        }

        let target = event.target
        target.classList.add('popular-last-link-active')

        $('.articles-column').children().remove()
        
        allArticlesForPhone()
    })
})


//для размера ноутбука
function articleCard(id, foto, head, date, author){

    let divArticle = document.createElement('div')
    divArticle.className = 'article'

     // Добавляется статья
    divArticle.id = id
    divArticle.onclick = function(){articleLoad(this)} 
    ////////////////////////////

    divArticle.innerHTML = `
    <div class="article-image">
        <img class="article-image__image" src="` + foto + `" alt="alternative">
        <div class="article-button-favourite">
            <svg class="button-favourite" width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 27L13 19.7778L1 27V3.88889C1 3.12271 1.36122 2.38791 2.00421 1.84614C2.64719 1.30436 3.51926 1 4.42857 1H21.5714C22.4807 1 23.3528 1.30436 23.9958 1.84614C24.6388 2.38791 25 3.12271 25 3.88889V27Z" stroke="#3A4736" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                      
        </div>
        <div class="article-image-flags">
            <div class="article-flag">
            <svg class="article-flag-image" width="15" height="10" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6C1 6 3.72727 1 8.5 1C13.2727 1 16 6 16 6C16 6 13.2727 11 8.5 11C3.72727 11 1 6 1 6Z" stroke="#fff" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.49858 7.875C9.62825 7.875 10.544 7.03553 10.544 6C10.544 4.96447 9.62825 4.125 8.49858 4.125C7.36891 4.125 6.45312 4.96447 6.45312 6C6.45312 7.03553 7.36891 7.875 8.49858 7.875Z" stroke="#fff" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="article-flag-text">15560</p>
            </div>
            <div class="article-flag">         
                <svg class="article-flag-image" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 6.66668C13.2523 7.54659 13.0467 8.4146 12.65 9.20001C12.1796 10.1412 11.4565 10.9328 10.5616 11.4862C9.66675 12.0396 8.63548 12.3329 7.58332 12.3333C6.70341 12.3356 5.8354 12.13 5.04999 11.7333L1.25 13L2.51666 9.20001C2.11995 8.4146 1.91437 7.54659 1.91667 6.66668C1.91707 5.61452 2.21041 4.58325 2.76381 3.68838C3.31721 2.79352 4.10883 2.0704 5.04999 1.60002C5.8354 1.20331 6.70341 0.997725 7.58332 1.00002H7.91666C9.30622 1.07668 10.6187 1.66319 11.6027 2.64726C12.5868 3.63132 13.1733 4.94378 13.25 6.33334V6.66668Z" stroke="#fff" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="article-flag-text">15</p>
            </div>
            <div class="article-flag">
                <svg class="article-flag-image" width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5L4.5 7L1 9.5V1.5C1 1.23478 1.10536 0.98043 1.29289 0.792893C1.48043 0.605357 1.73478 0.5 2 0.5H7C7.26522 0.5 7.51957 0.605357 7.70711 0.792893C7.89464 0.98043 8 1.23478 8 1.5V9.5Z" stroke="white" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="article-flag-text">15</p>
            </div>
            <div class="article-flag">         
                <svg class="article-flag-image" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 11H1.75C1.48478 11 1.23043 10.8946 1.04289 10.7071C0.855357 10.5196 0.75 10.2652 0.75 10V6.5C0.75 6.23478 0.855357 5.98043 1.04289 5.79289C1.23043 5.60536 1.48478 5.5 1.75 5.5H3.25M6.75 4.5V2.5C6.75 2.10218 6.59196 1.72064 6.31066 1.43934C6.02936 1.15804 5.64782 1 5.25 1L3.25 5.5V11H8.89C9.13116 11.0027 9.36519 10.9182 9.54895 10.762C9.73272 10.6058 9.85384 10.3885 9.89 10.15L10.58 5.65C10.6018 5.50668 10.5921 5.36034 10.5517 5.22113C10.5113 5.08191 10.4411 4.95315 10.3459 4.84376C10.2508 4.73437 10.133 4.64697 10.0008 4.58761C9.86853 4.52825 9.72495 4.49836 9.58 4.5H6.75Z" stroke="white" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="article-flag-text">123</p>
            </div>
        </div>
    </div>
    <h3 class="article-title">` + head + `</h3>

    <div class="article-link__wrapper">
        <p class="article-link">` + author + `</p>
        <p class="article-link">` + date + `</p>
    </div>`

    return divArticle
}

function outputArticles(data){
    let i1 = parseInt( data.info.length / 3, 10)
    let i2 = parseInt( data.info.length / 3 * 2, 10)
    
    if( data.info.length % 3 !== 0 && data.info.length % 2 !== 0){
        
        for(let i = 0; i <= i1; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__first').append(card)
        }
    
        for(let i = i1 + 1; i < i2 + 1; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__second').append(card)
        }
    
        for(let i = i2 + 1; i < data.info.length; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__third').append(card)
        }
        
    }else{
            for(let i = 0; i < i1; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__first').append(card)
        }

        for(let i = i1; i < i2; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__second').append(card)
        }
    
        for(let i = i2; i < data.info.length; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__third').append(card)
        }
    }

}

function allArticles(){
    fetch('magazine/backend/articles.php')
        .then(result => result.json())
        .then(data => { outputArticles(data)})
}

function selectionArticles(type){
        $.ajax({
            url:     "magazine/backend/selectionArticles.php", //url страницы
            type:     "GET", //метод отправки
            dataType: "json", //формат данных
            data: {"type": type},
            success: function(data) { //Данные отправлены успешно
                if(data.code != 'error'){
                    outputArticles(data)
                    console.log(data)

                }else{
                    console.log(data);
                }
        },
        error: function(data) { // Данные не отправлены
                console.log(data);
        }
    });
}
//////////////


//для размеров телефона
function outputArticlesForPhone(data){
    let i1 = parseInt( data.info.length / 2, 10)
    
    if(data.info.length % 2 !== 0){
        
        for(let i = 0; i <= i1; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__first').append(card)
        }
    
        for(let i = i1 + 1; i < data.info.length; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__second').append(card)
        }
        
    }else{
        for(let i = 0; i < i1; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__first').append(card)
        }

        for(let i = i1; i < data.info.length; i++){
            let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
            $('.articles-column__second').append(card)
        }
    }

}

function allArticlesForPhone(){
    fetch('magazine/backend/articles.php')
        .then(result => result.json())
        .then(data => { outputArticlesForPhone(data)})
}

function selectionArticles(type){
        $.ajax({
            url:     "magazine/backend/selectionArticles.php", //url страницы
            type:     "GET", //метод отправки
            dataType: "json", //формат данных
            data: {"type": type},
            success: function(data) { //Данные отправлены успешно
                if(data.code != 'error'){
                    outputArticlesForPhone(data)
                    console.log(data)

                }else{
                    console.log(data);
                }
        },
        error: function(data) { // Данные не отправлены
                console.log(data);
        }
    });
}

function alternativeArticles() {
    fetch('magazine/backend/alternativeArticle.php')
        .then(result => result.json())
        .then(data => { outputArticlesForPhone(data) })
}
////////////








