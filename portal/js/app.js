$(function() {
    $('.message-code').click(function() {
        $('.message-code').attr('disabled', true);
        $('.message-code').text('60s 后重新获取');
        countStart();
    });
    $('.btn-close').click(function() {
        modalClose();
    });
    $('.tab-switch').click(function() {
        $(this).addClass('color-primary').siblings('.tab-switch').removeClass('color-primary');
        $('.switch-content').eq($(this).index()).show().siblings('.switch-content').hide();
    });
});

// timer start
var count = 59;
var sendMessage = function() {
    var sendMessageButton = $('.message-code');

    if (count === 0) {
        sendMessageButton.attr('disabled', false);
        sendMessageButton.text('重新获取验证码');
        count = 60;
        clearInterval(interval);
    } else {
        sendMessageButton.attr('disabled', true);
        sendMessageButton.text(count + 's 后重新获取');
        count--;
    };
};

var countStart = function() {
    interval = window.setInterval("sendMessage()", 1000);
};
// timer end

// modal close
var modalClose = function() {
    $('.modal').fadeOut('fast');
    $('.modal-dialog').removeClass('in');
};

// modal show 
var modalShow = function(className) {
    $(className).fadeIn();
    $('.modal-dialog').addClass('in');
};