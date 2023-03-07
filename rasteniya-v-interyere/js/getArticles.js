function articleCard(id, foto, head, date, author){

    let divArticle = document.createElement('div')
    divArticle.className = 'article-card'

    // Добавляется статья
    divArticle.id = `item-${id}`
    divArticle.onclick = function(){articleLoad(this)} 
    ////////////////////////////

    divArticle.innerHTML = `
        <div class="article-image">
            <img class="article-image__image" src="` + foto + `" alt="">
            <div class="article-button-favourite">
                <svg class="button-favourite" width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 27L13 19.7778L1 27V3.88889C1 3.12271 1.36122 2.38791 2.00421 1.84614C2.64719 1.30436 3.51926 1 4.42857 1H21.5714C22.4807 1 23.3528 1.30436 23.9958 1.84614C24.6388 2.38791 25 3.12271 25 3.88889V27Z" stroke="#3A4736" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                      
            </div>            
        </div>
        <h3 class="article-title">` + head + `</h3>
        <div class="article-link__wrapper">
            <p class="article-link">` + author + `</p>
            <p class="article-link">`+ date+ `</p>
        </div>`

    return divArticle
}

function outputArticles(data){
    for(let i = 0; i <  data.info.length; i++){
        let card = articleCard(data.info[i].id_article, data.info[i].foto, data.info[i].head, data.info[i].date, data.info[i].author)
        $('.articles').append(card)
    }
}

function allArticles(){
    fetch('backend/articles.php')
        .then(result => result.json())
        .then(data => { outputArticles(data)})
}




