(function() {
    var openFormButton = document.querySelector('.btn_down');

    if(openFormButton) {
        openFormButton.addEventListener('click', function() {
            form.open();
        })
    }
}());