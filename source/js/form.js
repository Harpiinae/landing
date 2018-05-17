(function() {
    var me = {};
    var form = document.querySelector('.form_container');
    var closeButton = null;

    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose)
    }

    me.open = function() {
        form.classList.remove('is_hidden');

        closeButton = document.querySelector('.form_close_button');
        closeButton.addEventListener('click', onClose);
    };

    me.close = function() {
        form.classList.add('is_hidden');
    };

    window.form = me;
}());