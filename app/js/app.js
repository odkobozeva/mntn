$(document).ready(function() {
                $('.js-toggle-menu').click(function(e) {
                    e.preventDefault();
                    $('.header-menu__list').slideToggle();
                    $(this).toggleClass('open');
                });
            });