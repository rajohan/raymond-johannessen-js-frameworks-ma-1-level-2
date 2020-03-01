(function($) {
    "use strict";

    $.fn.slider = function (options) {

        options = $.extend({
            loop: true,
            auto: true,
            speed: 2000,
            width: 800,
            height: 500
        }, options);

        let currentImage = 0;
        let sliderTimer = null;
        const images = this.find("figure");

        $(this).on("click", "#sliderPrev", () => {
            currentImage <= 0 ? currentImage = images.length - 1 : currentImage--;
            handleChange();
        });

        $(this).on("click", "#sliderNext", () => {
            currentImage >= images.length - 1 ? currentImage = 0 : currentImage++;
            handleChange();
        });

        $(this).on("click", ".sliderCircle", elm => {
            currentImage = parseInt($(elm.target).attr("data-sliderCircleNr"));
            handleChange();
        });

        const createCircles = () => {
            let circles = "";

            for(let i = 0; i < images.length; i++) {
                circles += `<span class="sliderCircle ${i === 0 ? "active" : ""}" data-sliderCircleNr="${i}"></span>`;
            }

            return circles;
        };

        const changeActiveCircle = () => {
            $(".sliderCircle").each(function () {
                if(parseInt($(this).attr("data-sliderCircleNr")) === currentImage) {
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            })


        };

        const createNavigation = () => {
            const navigation = `
                <button id="sliderPrev"></button>
                <div id="sliderCircles">${createCircles()}</div>
                <button id="sliderNext"></button>
            `;
            this.append(navigation);
        };

        const startTimer = () => {
            if(options.auto) {
                sliderTimer = setInterval(() => {
                    if(options.loop || (!options.loop && (currentImage + 1 <= images.length - 1))) {
                        currentImage = currentImage >= images.length - 1 ? 0 : currentImage + 1;
                        changeImage();
                        changeActiveCircle();
                    }
                }, options.speed);
            }
        };

        const setImageAttributes = () => {
            images.attr("data-slider", index => {
                return index;
            });
            images.children("img").attr({"width": options.width, "height": options.height});
        };

        const changeImage = () => {
            images.each(function () {
                if (parseInt($(this).attr("data-slider")) !== currentImage) {
                    $(this).hide();
                }
                else {
                    $(this).fadeIn(600);
                }
            });
        };

        const handleChange = () => {
            changeImage();
            clearInterval(sliderTimer);
            startTimer();
            changeActiveCircle();
        };

        setImageAttributes();
        changeImage();
        createNavigation();
        startTimer();
        $(this).wrapInner("<div id='sliderWrapper'></div>");

        return this;
    };
}(jQuery));