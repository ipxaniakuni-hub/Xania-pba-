/* =====================================================
   CONTACT FORM VALIDATION
===================================================== */

$(document).on("submit", "#contactForm", function (event) {

    event.preventDefault();

    // Get values
    var name = $("#contactName").val().trim();
    var email = $("#contactEmail").val().trim();
    var message = $("#message").val().trim();
    var consent = $("#consent").is(":checked");

    // Clear previous errors
    $("#nameError").text("");
    $("#emailError").text("");
    $("#messageError").text("");
    $("#consentError").text("");

    $("#contactSuccess").hide();

    var valid = true;


    /* =========================================
       NAME VALIDATION
    ========================================= */

    if (name === "") {

        $("#nameError").text(
            "Please enter your name."
        );

        valid = false;
    }

    else if (name.length < 2) {

        $("#nameError").text(
            "Name must contain at least 2 characters."
        );

        valid = false;
    }


    /* =========================================
       EMAIL VALIDATION
    ========================================= */

    var emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        $("#emailError").text(
            "Please enter your email."
        );

        valid = false;
    }

    else if (!emailPattern.test(email)) {

        $("#emailError").text(
            "Please enter a valid email address."
        );

        valid = false;
    }


    /* =========================================
       MESSAGE VALIDATION
    ========================================= */

    if (message === "") {

        $("#messageError").text(
            "Please enter your message."
        );

        valid = false;
    }

    else if (message.length < 10) {

        $("#messageError").text(
            "Message must contain at least 10 characters."
        );

        valid = false;
    }


    /* =========================================
       ETHICAL CONSENT VALIDATION
    ========================================= */

    if (!consent) {

        $("#consentError").text(
            "Please provide your consent before submitting the form."
        );

        valid = false;
    }


    /* =========================================
       IF FORM IS VALID
    ========================================= */

    if (valid === true) {

        $("#contactSuccess")
            .text(
                "Thank you! Your message has been submitted successfully."
            )
            .fadeIn();

        // Clear form
        $("#contactForm")[0].reset();

        // Refresh checkbox UI
        $("#consent").checkboxradio("refresh");

    }

});



/* =====================================================
   BOOKING FORM VALIDATION
===================================================== */

$(document).on("submit", "#bookingForm", function (event) {

    event.preventDefault();


    // Get values
    var name = $("#bookingName").val().trim();

    var phone = $("#phone").val().trim();

    var email = $("#bookingEmail").val().trim();

    var date = $("#travelDate").val();

    var participants = $("#participants").val();

    var tourPackage = $("#tourPackage").val();


    // Clear messages
    $("#bookingError").hide().text("");
    $("#bookingSuccess").hide().text("");


    var errors = [];


    /* =========================================
       NAME
    ========================================= */

    if (name === "") {

        errors.push("Please enter your full name.");

    }


    /* =========================================
       PHONE
    ========================================= */

    if (phone === "") {

        errors.push("Please enter your phone number.");

    }

    else if (phone.length < 8) {

        errors.push(
            "Please enter a valid phone number."
        );

    }


    /* =========================================
       EMAIL
    ========================================= */

    var emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        errors.push("Please enter your email.");

    }

    else if (!emailPattern.test(email)) {

        errors.push(
            "Please enter a valid email address."
        );

    }


    /* =========================================
       DATE
    ========================================= */

    if (date === "") {

        errors.push(
            "Please select your travel date."
        );

    }


    /* =========================================
       PARTICIPANTS
    ========================================= */

    if (
        participants === "" ||
        participants < 1
    ) {

        errors.push(
            "Please enter at least 1 participant."
        );

    }


    /* =========================================
       PACKAGE
    ========================================= */

    if (tourPackage === "") {

        errors.push(
            "Please select a tour package."
        );

    }


    /* =========================================
       DISPLAY ERRORS
    ========================================= */

    if (errors.length > 0) {

        $("#bookingError")
            .html(errors.join("<br>"))
            .fadeIn();

        return;

    }


    /* =========================================
       SUCCESS
    ========================================= */

    $("#bookingSuccess")
        .text(
            "Booking submitted successfully! " +
            "Thank you for choosing Sarawak Holiday Tours."
        )
        .fadeIn();


    // Reset form
    $("#bookingForm")[0].reset();

});



/* =====================================================
   SET MINIMUM TRAVEL DATE
===================================================== */

$(document).on("pagecreate", "#booking", function () {

    var today = new Date();

    var year = today.getFullYear();

    var month =
        String(today.getMonth() + 1)
        .padStart(2, "0");

    var day =
        String(today.getDate())
        .padStart(2, "0");

    var currentDate =
        year + "-" + month + "-" + day;


    $("#travelDate").attr(
        "min",
        currentDate
    );

});



/* =====================================================
   TOOLTIP
===================================================== */

$(document).on("pagecreate", function () {

    $(".tooltip-text").each(function () {

        $(this).attr(
            "title",
            $(this).attr("title")
        );

    });

});



/* =====================================================
   PAGE TRANSITION
===================================================== */

$(document).on(
    "mobileinit",
    function () {

        $.mobile.defaultPageTransition = "slide";

    }
);