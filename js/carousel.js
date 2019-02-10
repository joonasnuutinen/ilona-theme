'use strict';
(function($) {
    let idCount = 1;

    const Image = {

        init: function($img, active) {
            this.$img = $img;
        },

        src: function() {
            return this.$img.attr('src');
        },

        alt: function() {
            return this.$img.attr('alt');
        },

        html: function(active) {
            return `
                <div class="carousel-item${active ? ' active' : ''}">
                    <img src="${this.src()}" class="d-block w-100" alt="${this.alt()}">
                </div>
            `;
        }

    };
    
    const Carousel = {

        init: function($target) {
            //console.log('Carousel.init()');

            this.id = 'ilona-carousel-' + idCount++;
            this.setImages($target);

            $target.replaceWith(this.carouselHtml());

            //console.log(this.carouselHtml());

        },

        setImages: function($target) {
            const self = this;
            this.images = [];

            $target.find('img').each(function() {
                const image = Object.create(Image);
                image.init($(this));
                self.images.push(image);
            });
        },

        imgCount: function() {
            return this.images.length;
        },

        indicatorsHtml: function() {
            const self = this;

            function singleIndicatorHtml(i) {
                const active = (i === 0);

                return `<li data-target="#${self.id}" data-slide-to="${i}"${active ? ' class="active"' : ''}></li>`;
            }
            
            let html = '';

            for (let i = 0, n = this.imgCount(); i < n; i++) {
                html += singleIndicatorHtml(i);
            }

            return html;
        },

        innerHtml: function() {
            return this.images.map((image, i) => image.html(i === 0)).join('');
        },

        controlHtml(short, long) {
            return `
                <a class="carousel-control-${short}" href="#${this.id}" role="button" data-slide="${short}">
                    <span class="carousel-control-${short}-icon" aria-hidden="true"></span>
                    <span class="sr-only">${long}</span>
                </a>
            `;
        },

        prevHtml: function() {
            return this.controlHtml('prev', 'Edellinen');
        },

        nextHtml: function() {
            return this.controlHtml('next', 'Seuraava');
        },

        carouselHtml: function() {
            return `
                <div id="${this.id}" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        ${this.indicatorsHtml()}
                    </ol>
                    
                    <div class="carousel-inner">
                        ${this.innerHtml()}
                    </div>

                    ${this.prevHtml()}
                    ${this.nextHtml()}
                </div>
            `;
        }

    };

    (function carouselScript() {
        const $gallery = $('.ilona-slider');
    
        if ($gallery.length === 0) {
            return;
        }

        const carousel = Object.create(Carousel);
        carousel.init($gallery);
    })();

})(jQuery);