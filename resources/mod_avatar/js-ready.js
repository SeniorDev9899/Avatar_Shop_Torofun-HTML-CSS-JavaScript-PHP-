
//Active class for the selected items
$("body").on("click", ".non-active", function () {
    $(this).closest('.gallery-section').find('.image-wrapper').removeClass("active").addClass("non-active");
    $(this).removeClass("non-active");
    $(this).addClass("active");
});

$("body").on("click", ".cart-button", function () {
    $(this).closest('div').removeClass("active").addClass("non-active");
});
//Open an close cart effect
$("body").on("click", ".openCarrito", function () {
    $(this).removeClass("openCarrito");
    $(this).addClass("closeCarrito");
    document.getElementById("carrito").style.width = "100%";
    $("#carrito").addClass("visible");
    $("#carrito").removeClass("animate__fadeOutDown");
});
$("body").on("click", ".closeCarrito", function () {
    $(this).removeClass("closeCarrito");
    $(this).addClass("openCarrito");
    document.getElementById("carrito").style.width = "0";
    document.getElementById("carrito").removeClass("visible");
});
$("body").on("click", ".exitCarrito", function () {
    $(".closeCarrito").addClass("openCarrito");
    $(".closeCarrito").removeClass("closeCarrito");
    $("#carrito").addClass("animate__fadeOutDown");
});

// Different zoom when click on different features
$("body").on("click", ".link-zoom-face", function () {
    $(".avatar-img").addClass("zoom-face");
    $(".avatar-img").removeClass("zoom-hair");

});
$("body").on("click", ".link-zoom-hair", function () {
    $(".avatar-img").addClass("zoom-hair");
    $(".avatar-img").removeClass("zoom-face");
});
$("body").on("click", ".link-zoom-regular", function () {
    $(".avatar-img").removeClass("zoom-face");
    $(".avatar-img").removeClass("zoom-hair");
});

$("body").on("click", ".remove-item-btn", function () {
    $(this).closest(".cart-item").hide();
});

// cart buttons
$("body").on("click", ".non-active", function () {
    var type = "animate__rubberBand";
    var counter = ($(".btn-go-to-cart").find("span").text() * 1) + 1;
    $(".btn-go-to-cart").find("i").addClass(type);
    $(".btn-go-to-cart").find("span").text(counter);
    $(".btn-go-to-cart").find("span").addClass("bg-dark");
    setTimeout(function () {
        $(".btn-go-to-cart").find("i").removeClass(type);
        $(".btn-go-to-cart").find("span").removeClass("bg-dark");
    }, 1000);
});

// var subCategories = [];
// var shtml = "";

// $.ajax({
//     type: "Get",
//     url: "http://localhost:8000/SubCategories/get_sub_categories/1",
//     success: function (data) {
//         console.log("data => ", data);
//         subCategories = data;
//         if (subCategories.length) {
//             subCategories.forEach(function (value, i) {
//                 shtml += "<li class='nav-item'>";
//                 if (i) {
//                     shtml += "<a class='nav-link link-zoom-regular' href=#" + value.subCategoryName + "data-toggle='tab'>" + value.subCategoryName + "</a>";
//                 } else {
//                     shtml += "<a class='nav-link link-zoom-regular active' href=#" + value.subCategoryName + "data-toggle='tab'>" + value.subCategoryName + "</a>";
//                 }
//                 shtml += "</li>";
//             });

//             console.log("Shtml => ", shtml);

//             document.getElementById("body-sub-cats-first").innerHTML = shtml;
//         }
//     }
// });

// $("#first-cat").on("click", function () {

//     var subCategories = [];
//     var shtml = "";

//     $.ajax({
//         type: "Get",
//         url: "http://localhost:8000/SubCategories/get_sub_categories/1",
//         success: function (data) {
//             console.log("data => ", data);
//             subCategories = data;
//             if (subCategories.length) {
//                 subCategories.forEach(function (value, i) {
//                     shtml += "<li class='nav-item'>";
//                     if (i) {
//                         shtml += "<a class='nav-link link-zoom-regular' href=#" + value.subCategoryName + "data-toggle='tab'>" + value.subCategoryName + "</a>";
//                     } else {
//                         shtml += "<a class='nav-link link-zoom-regular active' href=#" + value.subCategoryName + "data-toggle='tab'>" + value.subCategoryName + "</a>";
//                     }
//                     shtml += "</li>";
//                 });

//                 console.log("Shtml => ", shtml);

//                 document.getElementById("body-sub-cats").innerHTML = shtml;
//             }
//         }
//     });

// });
