$(document).ready(function(){
    $(document).on('click', '.card-button', function(event){
        let target = event.target
        console.log(target.textContent)
        plantLoad(target)
    })
})