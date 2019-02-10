(function($) {
    
    const Carousel = {

        init: function($target) {
            //console.log('Carousel.init()');

            this.$gallery = $target;

        }

    };

    (function carouselScript() {
        const $gallery = $('.ilona-slider');
    
        if ($gallery.length === 0) {
            return;
        }

        const carousel = Object.create(Carousel);
        carousel.init();
    })();

})(jQuery);