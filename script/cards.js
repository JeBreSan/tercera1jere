console.log('Cargando Cards')

const dataCards = [
    {
        "title": "Juego del año",
        "url_image": "./img/goty.png",
        "desc": "Un impresionante juego",
        "cta": "Mostrar más...",
        "link": "https://www.reddit.com/r/PSVR/comments/17t5afa/best_vr_game_of_the_year_golden_joystick_award/?tl=es-419&rdt=53185"
    },
    {
        "title": "Juego del mes",
        "url_image": "./img/goty.png",
        "desc": "Este impresionante juego, hecho solo para los más exigentes, requiere de mucha habilidad y paciencia.",
        "cta": "Mostrar más...",
        "link": "https://www.reddit.com/r/PSVR/comments/17t5afa/best_vr_game_of_the_year_golden_joystick_award/?tl=es-419&rdt=53185"
    },
    {
        "title": "Juego del día",
        "url_image": "./img/goty.png",
        "desc": "Este impresionante juego, hecho solo para los más exigentes, requiere de mucha habilidad y paciencia.",
        "cta": "Mostrar más...",
        "link": "https://www.reddit.com/r/PSVR/comments/17t5afa/best_vr_game_of_the_year_golden_joystick_award/?tl=es-419&rdt=53185"
    },
];

(function () {
    let CARD = {
        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                    <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>
            </div>`)
        },
    }
    CARD.init();
})();