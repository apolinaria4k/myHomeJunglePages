// if($('.select-head').text() !== 'Все'){
//     $(this).parent().prepend($('<li class="select-item">Все</li>'))
// }

$(document).ready(function(){
    let type = ''


    $('.select-item').on('click', function () {
        // if($('.select-head').text() !== 'Все'){
        //     $(this).parent().prepend($('<li class="select-item">Все</li>'))
        // }

        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
        // $(this).parent().css({
        //     '-webkit-transform': 'scaleY(0)',
        //     '-ms-transform': 'scaleY(0)',
        //     'transform': 'scaleY(0)'
        // });
        type = $(this).parent().prev().prev().val();
        selectionArticles(type)
    });

    
    function selectionArticles(type){
        console.log('вывод из функции' + type)

        $.ajax({
            url:     "backend/selectionArticles.php", //url страницы
            type:     "GET", //метод отправки
            dataType: "json", //формат данных
            data: {"type": type},
            success: function(response) { //Данные отправлены успешно
                if(response.code != 'error'){

                    let i1 = parseInt( response.info.length / 3, 10)
                    let i2 = parseInt( response.info.length / 3 * 2, 10)

                    for(i = 0; i < response.info.length; i++){
                        row = response.info[i];
                        localStorage.setItem('id_company', index);
                        $('#name').html(row[1]);
                        $('#inn').html(row[2]);
                        $('#info').html(row[3]);
                        $('#dir').html(row[4]);
                        $('#address').html(row[5]);
                        $('#tel').html(row[6]);
                    }
                }else{
                    console.log(response);
                }
          },
          error: function(response) { // Данные не отправлены
                console.log(response);
          }
      });
    }
})

