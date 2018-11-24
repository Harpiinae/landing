(function() {
    var me = {};

    me.goto = function(link) {
        var item = document.querySelector(link);
        var numb = item.getBoundingClientRect().top
        console.log(numb);
        document.body.scrollBy(0, numb);
    }

    window.navigation = me;
}());