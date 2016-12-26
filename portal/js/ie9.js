$(function() {
    coverPlaceholder('message-control', '验证码短信将发送至138****2222');
})

var coverPlaceholder = function(name, placeholder) {
    $('.' + name).val(placeholder).css('color', '#666');
    $('.' + name).focusin(function(event) {
        if ($(this).val() === placeholder) {
            $(this).val('').css('color', '#666');
        } else {
            $(this).css('color', '#222');
        }
    });
    $('.' + name).blur(function(event) {
        if ($(this).val() === null || $(this).val() === '' || $(this).val() === placeholder) {
            $(this).val(placeholder);
            $(this).css('color', '#666');
        } else {
            $(this).css('color', '#222');
        }
    });
    $('.' + name).keyup(function() {
        $(this).css('color', '#222');
    });
}