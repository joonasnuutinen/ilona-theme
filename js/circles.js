'use strict';
(function($) {

    const Circle = {
        init: function(data, diameters) {
            this.colorCode = data[0];
            this.size = data[1];
            this.x = data[2];
            this.y = data[3];
            this.diameters = diameters;
        },

        style: function() {
            const diameters = this.diameters;
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
        init: function(data, diameters) {
            this.setCircles(data, diameters);
        },

        setCircles: function(data, diameters) {
            this.circles = [];
            const self = this;
            data.forEach(d => {
                const newCircle = Object.create(Circle);
                newCircle.init(d, diameters);
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

        const diameters = [0, 17, 32, 48, 64];

        const wideData = [
            [1, 3, 11, 0], [2, 3, 25, 5], [2, 2, 33, 0], [1, 3, 88, 0],
            [2, 3, 1, 16], [1, 3, 13, 14], [2, 3, 79, 16],
            [2, 2, 29, 29], [1, 5, 36, 26], [1, 3, 62, 23], [2, 4, 69, 23], [1, 2, 85, 26], [2, 4, 94, 25],
            
            [2, 2, 8, 45], [2, 6, 22, 45], [2, 2, 64, 48], [1, 2, 78, 46], [1, 5, 84, 45],
            [2, 2, 34, 56], [1, 2, 72, 52], [1, 3, 95, 56],
            [2, 3, 16, 62],
            [1, 3, 5, 72], [1, 2, 26, 77], [2, 3, 71, 75],
            [2, 4, 13, 89]

        ];

        const wideDiameters = [0, 17, 32, 60, 86, 110, 136];

        const circles = Object.create(Circles);
        circles.init(wideData, wideDiameters);

        $circles.html(circles.html());

    })();
})(jQuery);