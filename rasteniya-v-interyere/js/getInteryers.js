$(document).ready(function () {
    $(document).on('click', '#last', function (event) {
        if (document.querySelector('.button-item-active')) {
            document.querySelector('.button-item-active').classList.remove('button-item-active')
        }
        if (document.querySelector('.popular-last-link-active')) {
            document.querySelector('.popular-last-link-active').classList.remove('popular-last-link-active')
        }

        let target = event.target
        target.classList.add('popular-last-link-active')
        let location = 'Растения в интерьере'

        $('#first__first-column, #first__second-column, #first__third-column').children().remove()
        $('#second__first-column, #second__second-column, #second__third-column').children().remove()
        alternativeinteryers()
        titleInteryer(location)
    })
    $(document).on('click', '#popular', function (event) {
        if (document.querySelector('.button-item-active')) {
            document.querySelector('.button-item-active').classList.remove('button-item-active')
        }
        if (document.querySelector('.popular-last-link-active')) {
            document.querySelector('.popular-last-link-active').classList.remove('popular-last-link-active')
        }

        let target = event.target
        target.classList.add('popular-last-link-active')
        let location = 'Растения в интерьере'

        $('#first__first-column, #first__second-column, #first__third-column').children().remove()
        $('#second__first-column, #second__second-column, #second__third-column').children().remove()
        allInteryers()
        titleInteryer(location)
    })
    $(document).on('click', '#all', function (event) {
        if (document.querySelector('.button-item-active')) {
            document.querySelector('.button-item-active').classList.remove('button-item-active')
        }
        if (document.querySelector('.popular-last-link-active')) {
            document.querySelector('.popular-last-link-active').classList.remove('popular-last-link-active')
        }

        let target = event.target
        target.classList.add('popular-last-link-active')
        let location = 'Растения в интерьере'

        $('#first__first-column, #first__second-column, #first__third-column').children().remove()
        $('#second__first-column, #second__second-column, #second__third-column').children().remove()
        allInteryers()
        titleInteryer(location)
    })
})


function outputInteryers(data) {
    let length = data.info.length
    let halfOfLength = parseInt(length / 2, 10) //21
    let i1 = parseInt(halfOfLength / 3, 10) //7
    let i2 = parseInt(halfOfLength / 3 * 2, 10) //14
    let i3 = i2 * 2 //28
    let i4 = i1 * 5 //75

    for (let i = 0; i < i1; i++) {
        let index = 'first__first-column'
        interyerAndPlantsCard(data.info[i].id_interior, data.info[i].foto, data.info[i].alt, index)
    }
    for (let i = i1; i < i2; i++) {
        let index = 'first__second-column'
        interyerAndPlantsCard(data.info[i].id_interior, data.info[i].foto, data.info[i].alt, index)
    }
    for (let i = i2; i < halfOfLength; i++) {
        let index = 'first__third-column'
        interyerAndPlantsCard(data.info[i].id_interior, data.info[i].foto, data.info[i].alt, index)
    }

    for (let i = halfOfLength; i < i3; i++) {
        let index = 'second__first-column'
        interyerAndPlantsCard(data.info[i].id_interior, data.info[i].foto, data.info[i].alt, index)
    }
    for (let i = i3; i < i4; i++) {
        let index = 'second__second-column'
        interyerAndPlantsCard(data.info[i].id_interior, data.info[i].foto, data.info[i].alt, index)
    }
    for (let i = i4; i < length; i++) {
        let index = 'second__third-column'
        interyerAndPlantsCard(data.info[i].id_interior, data.info[i].foto, data.info[i].alt, index)
    }
}

function alternativeinteryers() {
    fetch('backend/alternativeInteryer.php')
        .then(result => result.json())
        .then(data => { outputInteryers(data) })
}

function allInteryers() {
    fetch('backend/interyers.php')
        .then(result => result.json())
        .then(data => { outputInteryers(data) })
}

function interyerAndPlantsCard(id, foto, alt, index) {
    let card = document.createElement('div')
    card.className = 'card'
    card.setAttribute('id', id)
    card.innerHTML = `
                <div class="card-button-like">
                    <svg class="button-like-image" width="30" height="30" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65748 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z" stroke="#3A4736" stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                            
                </div>
                <img class="card-image" src="` + foto + `" alt="` + alt + `">`

    $.ajax({
        url: "backend/getPlants.php", //url страницы
        type: "GET", //метод отправки
        dataType: "json", //формат данных
        data: { "id": id },
        success: function (data) { //Данные отправлены успешно
            if (data.code != 'error') {
                for (let i = 0; i < data.info.length; i++) {
                    let button = document.createElement('div')
                    button.className = 'card-button-circle'
                    button.innerHTML = `<p class="hidden button-text">` + data.info[i].name + `</p>`
                    
                    $(button).css({
                        'top': data.info[i].top + '%',
                        'left': data.info[i].left_px + '%',
                    })
                    card.appendChild(button)
                }

                $('#' + index).append(card)

            } else {
                console.log(data);
            }
        },
        error: function (data) { // Данные не отправлены
            console.log(data);
        }
    });
}

function titleInteryer(location) {
    $.ajax({
        url: "backend/titleInteryer.php", //url страницы
        type: "GET", //метод отправки
        dataType: "json", //формат данных
        data: { "location": location },
        success: function (data) { //Данные отправлены успешно
            if (data.code != 'error') {
                for (let i = 0; i < data.info.length; i++) {
                    $('.main-title').text(data.info[i].location)
                    $('.main-text').text(data.info[i].text)
                }

            } else {
                console.log(data);
            }
        },
        error: function (data) { // Данные не отправлены
            console.log(data);
        }
    });
}

