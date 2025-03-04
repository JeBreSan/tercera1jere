console.log('Cragando hambuger-icon')

(function(){
const main_object={
    init: function(){
        this.eventhandlers()
    },
    eventhandlers: function(){
        document.querySelector('.hamburger-icon').addEventListener('click', function(){
            document.querySelector('.menu-container').classList.toogle('menu-open');
        });
    }
}
main_object.init()
})();
