'use strict';
(function($) {

    const Circle = {
        init: function(data) {
            this.colorCode = data[0];
            this.size = data[1];
            this.x = data[2];
            this.y = data[3];
        },

        style: function() {
            const diameters = [0, 17, 32, 48, 64];
            const diam = diameters[this.size];

            return `width: ${diam}px; height: ${diam}px; top: ${this.y}%; left: ${this.x}%`;
        },

        html: function() {
            const className = 'ilona-circle ilona-circle-' + this.colorCode;
            return `
                <div class="${className}" style="${this.style()}"></div>
            `;
        }
    };

    const Circles = {
        init: function(data) {
            this.setCircles(data);
        },

        setCircles: function(data) {
            this.circles = [];
            const self = this;
            data.forEach(d => {
                const newCircle = Object.create(Circle);
                newCircle.init(d);
                self.circles.push(newCircle);
            });
        },

        html: function() {
            return this.circles.map(c => c.html()).join('');
        }

    };
    
    (function runCircles() {
        //console.log('run circles');

        const $circles = $('.ilona-circles');

        if ($circles.length === 0) {
            return;
        }

        const data = [
            [1, 2, 10, -4],
            [1, 3, 77, -4],
            [1, 1, 1, 14],
            [2, 3, 19, 12],
            [2, 2, 69, 18],
            [2, 1, 83, 22],
            [2, 4, 94, 23],
            [1, 4, -4, 26],
            [1, 2, 21, 33],
            [1, 1, 96, 37],
            [2, 2, 82, 40],
            [1, 1, 18, 49],
            [2, 4, 7, 60],
            [1, 3, 92, 64]
        ];

        const circles = Object.create(Circles);
        circles.init(data);

        $circles.html(circles.html());

    })();
})(jQuery);