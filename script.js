$(document).ready(function () {



    $(function () {
        $('.dropdown-toggle').dropdown();

        


    });


    $(function () {
        $('.navbar-nav').slideToggle();     

        


    });

    // $(function () {
    //     // $('.dropdown-toggle').dropdown();

    //     $('.navbar-nav li a').click(function () {
    //         if (!$(this).parent().hasClass('dropdown')) {
    //             $('.navbar-collapse').collapse('hide');
    //         }
    //     });


    // });



});

//     $('.menuHamburguer').click(function (event) {
//         $('.menuDropdown').slideToggle();
//     });

//     // scroll suave para seções a partir do menu hamburguer
//     $('.menuDropdown--link').click(function (event) {
//         $('.menuDropdown').slideToggle();
//         if (this.hash !== "") {
//             let hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function () {
//                 window.location.hash = hash;
//             });
//         }
//     });  //nav fixa com transição da logo



// });