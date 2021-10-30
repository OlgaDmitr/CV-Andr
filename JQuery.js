function back() {
    let button = $('.back');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 40) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
};

back();

