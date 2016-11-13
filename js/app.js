$(function() {
    $('.message-code').click(function() {
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
var count = 60;
var countStartFlag = false;
var sendMessage = function() {
    var sendMessageButton = $('.message-code');
    if (count === 0) {
    	countStartFlag = false;
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
	if(countStartFlag) {
		return;
	};
	interval = window.setInterval("sendMessage()", 1000);
};
// timer end

// modal close
var modalClose = function () {
    $('.modal').fadeOut('fast');
    $('.modal-dialog').removeClass('in');
};

// modal show 
var modalShow = function(className) {
    $(className).fadeIn();
    $('.modal-dialog').addClass('in');
};