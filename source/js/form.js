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

    me.isValid = function() {
        if(me.isAllCompleted(document.querySelectorAll('[data-valid="required"]'))) {
            return true;
        };
    };

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if(!validation.isNotEmpty(data[i].value)) {
                result = false;
                break
            }
        }

        return result;
    };

    window.form = me;
}());