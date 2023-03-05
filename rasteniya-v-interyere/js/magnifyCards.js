$(document).ready(function(){
  $(document).on('click', '.card', function(event){

      let target = event.target.parentElement
      let id = target.getAttribute('id')
      // let card = target
      
      if(!(target.classList.contains("card"))) return
    
      $('body').append(`<div id="overlay">
                          
                        </div>
                        <div id="magnify">
                            <div id="close-card"></div>
                            <div id="left"></div>
                            <div id="right"></div>
                            <div id="save"></div>
                            <div id = ` + id + ` class="magnify-card">` + target.innerHTML +`</div>
                        </div>`)

      $('#magnify').css({
          left: ($(document).width() - $('#magnify').outerWidth())/2,
          top: ($(window).height() - $('#magnify').outerHeight())/2
      });

      $('#close-card').css({
        right: -($(document).width() - $('#magnify').outerWidth())/2 + 30,
        top: -100
      });

      $('#left').css({
        left: -70,
        top: ($(window).height() - $('#magnify').outerHeight()) + 50
      });

      $('#right').css({
        right: -70,
        top: ($(window).height() - $('#magnify').outerHeight()) + 50
      });
      $('#save').css({
        right: -50,
        bottom: 0
      });

      $('#left').click(function(){
          let index = $('.magnify-card').attr('id')
          // console.log(index);
          let prevIndex = index - 1
          let prevElem = document.getElementById(prevIndex)
          if (prevElem === null) return
          $('.magnify-card').children().remove()
          $('.magnify-card').append(prevElem.innerHTML)
          $('.magnify-card').attr('id', prevIndex)
          replaceClasses(document.querySelector('.magnify-card'))           
      })
      
      $('#right').click(function(){
          let index = $('.magnify-card').attr('id')
          // console.log(index);
          let nextIndex = +index + 1
          let nextElem = document.getElementById(nextIndex)
          if (nextElem === null) return
          $('.magnify-card').children().remove()
          $('.magnify-card').append(nextElem.innerHTML)
          $('.magnify-card').attr('id', nextIndex)
          replaceClasses(document.querySelector('.magnify-card'))          
          
      })

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
  let cardButtonsCircle = magnifyCard.children
    for(let btn of cardButtonsCircle){
      if(btn.classList.contains('card-button-circle')){
        btn.classList.add('card-button')
        btn.classList.remove('card-button-circle')
        btn.firstElementChild.classList.remove('hidden')
      }
    }
}

