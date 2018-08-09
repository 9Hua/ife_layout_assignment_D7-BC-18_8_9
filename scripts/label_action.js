var labels = document.querySelectorAll('#banner li a');
var imgs = document.querySelectorAll('#banner img');
var navs = document.querySelectorAll('nav li a');

{
    for (i = 0; i < labels.length; i++) {
        var label = labels[i];
        setLabelHandler(label, i);
    }

    function setLabelHandler(label, labelPos) {
        label.onclick = function () {
            for (i = 0; i < labels.length; i++) {
                if (labels[i].getAttribute('class')) {
                    labels[i].removeAttribute('class');
                }
            }

            label.setAttribute('class', 'active');

            for (i = 0; i < imgs.length; i++) {
                if (imgs[i].getAttribute('class')) {
                    imgs[i].removeAttribute('class');
                }
            }

            imgs[labelPos].setAttribute('class', 'active-picture');
        }
    }
}

{
    for (i = 0; i < navs.length; i++) {
        var nav = navs[i];
        setLabelHandler(nav, i);
    }

    function setLabelHandler(nav, navPos) {
        nav.onclick = function () {
            for (i = 0; i < navs.length; i++) {
                if (navs[i].getAttribute('class')) {
                    navs[i].removeAttribute('class');
                }
            }
            nav.setAttribute('class', 'active');
        }
    }
}