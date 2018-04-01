

function typografy() {
            var minSize = 15;
            var maxSize = 80;
            var colorise = true;
            var colorArray = ['#369', '#000', '#aaa'];
            $(".js_typografy").each(function () {
                var retHTML = "";
                //get the text
                var allText = $(this).text().trim().split(' ');

                //now add each word one by one
                for (i = 0; i < allText.length; i++) {
                    var size = getRandomInt(minSize, maxSize);
                    size = Math.ceil(size / 10) * 10;
                    if (colorise == true) {
                        var j = getRandomInt(0, colorArray.length - 1);
                        if (j < 0) { j = 0; }
                        retHTML += " " + allText[i] + "";
                    }
                    else
                    { retHTML += " " + allText[i] + ""; }
                }
                $(this).text('');
                $(this).html(retHTML);
                
            });
        }
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        $(document).ready(function () {
            typografy();
        });