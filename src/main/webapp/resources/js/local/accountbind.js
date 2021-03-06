/*
*
* 绑定微信
*
* */

var accountbind = {

    bind:function () {

        var bindUrl = '/local/bindlocalauth';

        var userType = common.getQueryString("userType");

        $('#submit').click(function() {
            var userName = $('#username').val();
            var password = $('#psw').val();
            var verifyCodeActual = $('#j_captcha').val();
            var needVerify = false;
            if (!verifyCodeActual) {
                $.toast('请输入验证码！');
                return;
            }
            $.ajax({
                url : bindUrl,
                async : false,
                cache : false,
                type : "post",
                dataType : 'json',
                data : {
                    userName : userName,
                    password : password,
                    verifyCodeActual : verifyCodeActual
                },

                success : function(data) {
                    if (data.success) {
                        $.toast('绑定成功！');
                        if(userType == 2){

                            window.location.href = '/shop/shoplist';
                        }else{
                            window.location.href = '/frontend/index';
                        }
                    } else {
                        $.toast('绑定失败！');
                        $('#captcha_img').click();
                    }
                }
            });
        });


    },
    
    
};


$(function () {

    accountbind.bind();


});