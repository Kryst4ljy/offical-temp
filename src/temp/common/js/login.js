$(function(){
    
    var userInfo = getCookie('userinfo')
    removeCookie('userinfo')
    if(userInfo != undefined && userInfo != ""){
         $(".login").hide();
         $(".alreadyLogin").show();
    }else{
        $(".login").show();
    }
    $("#loginBtn").on("click",function(){
        // console.log('logins')
        // $(".login").hide();
        // $(".downLogin").show();
        
        var userName = $("#userName").val()
        var password = $("#password").val()
        if(userName == ""){
            alert("请输入用户名")
        }else if(password == ""){
            alert("请输入密码")
        }else if(!userName.match(/^[A-Za-z0-9]{6,18}$/)){
            alert("用户名格式错误,应为6-18位数字字母组合")
        }else if(!password.match(/^[A-Za-z0-9]{6,18}$/)){
            alert("密码格式错误,应为6-18位数字字母组合")
        }else{
            addCookie('userinfo',userName+password,1)
            $(".login").hide();
            $(".downLogin").show();
        }
    })

    function addCookie(name,value,iDay){//cookie设置
        if(iDay){
            //设置过期时间
            var oDate = new Date();
            oDate.setDate(oDate.getDate()+iDay);
            document.cookie = name+'='+value+'; PATH=/; EXPIRES='+oDate.toGMTString();
        }else{
            //默认不设置过期时间
            document.cookie = name+'='+value+'; PATH=/';
        }
    }
    function getCookie(name){//cookie读取
        var arr = document.cookie.split('; ');
        for(var i=0;i<arr.length;i++){
            var arr2 = arr[i].split('=');
            if(arr2[0]==name){
                return arr2[1];
            }
        }
    }
    function removeCookie(name){//cookie删除
        addCookie(name,1,-1);
    }

})