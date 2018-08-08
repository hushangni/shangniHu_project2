$(document).ready(function () {
    console.log("ready");
    // Hamburger open close toggle top nav
    $('.hamburger-toggle').on('click', function () {
        $(this).toggleClass('x-toggle');
        $('.t-nav').toggleClass('res-menu');
    });

    // happy cute form submit messages
    $('#messageSend').on('click touchstart', function () {
        alert(`Thank you for your message!
		\n (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
        \n We will reply soon!!`);
    });

    $('#emailSend').on('click touchstart', function () {
        alert(`Thank you for subscribing to our newsletter!
		\n ✧･ﾟ: *✧･ﾟ:* 　Great things await your inbox　 *:･ﾟ✧*:･ﾟ✧`);
    });
});