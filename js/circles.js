'use strict';
(function($) {

    const Circle = {
        init: function(data) {
            this.colorCode = data[0];
            this.diameter = data[1];
            this.x = data[2];
            this.y = data[3];
        },

        asPercent(prop) {
            return this[prop] * 100 + '%';
        },

        style: function() {
            const translate = `translate(${this.asPercent('x')}, ${this.asPercent('y')})`;
            return `width: ${this.diameter}px; height: ${this.diameter}px; transform: ${translate};`;
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
            [1, 40, -0.9, 1.1]
        ];

        const circles = Object.create(Circles);
        circles.init(data);

        $circles.html(circles.html());

    })();
})(jQuery);