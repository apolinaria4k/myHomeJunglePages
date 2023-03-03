$(document).ready(function(){
    $(document).on('click', '.card', function(event){

        let target = event.target.parentElement
        if(!(target.classList.contains("card"))) return
        
        $('body').append(`<div id="overlay">
                            
                          </div>
                          <div id="magnify">
                              <div id="close-card"></div>
                              <div id="left"></div>
                              <div id="right"></div>
                              <div id="save"></div>
                              <div class="magnify-card">` + target.innerHTML +`</div>
                          </div>`)

        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
        });

        $('#close-card').css({
          right: -($(document).width() - $('#magnify').outerWidth())/2 + 30,
          top: ($(window).height() - $('#magnify').outerHeight())/4 - 100
        });

        $('#left').css({
          left: -70,
          top: ($(window).height() - $('#magnify').outerHeight()) * 2.2
        });

        $('#right').css({
          right: -70,
          top: ($(window).height() - $('#magnify').outerHeight()) * 2.2
        });
        $('#save').css({
          right: -50,
          bottom: 0
        });

        replaceClasses(document.querySelector('.magnify-card'))
  
        $('#overlay, #magnify').fadeIn('fast');
    })

    $('body').on('click', '#overlay, #close-card', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#magnify, #overlay').remove();
        });
      });
})

function replaceClasses(magnifyCard){
  console.log('меняем классы');
  let cardButtonsCircle = magnifyCard.children
    for(let btn of cardButtonsCircle){
      if(btn.classList.contains('card-button-circle')){
        btn.classList.add('card-button')
        btn.classList.remove('card-button-circle')
        btn.firstElementChild.classList.remove('hidden')
      }
    }
}

