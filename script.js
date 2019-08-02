 var settimmer = 0;
        $(function(){
        window.setInterval(function() {
        var timeCounter = $("b[id=show-time]").html();
        var updateTime = eval(timeCounter)- eval(1);
        $("b[id=show-time]").html(updateTime);
        if(updateTime == 0){
 $("div[id=ar1web-timer]").html("").html("تحميل الملف ");
        window.location = ("http://www.ar1web.com/2016/03/create-redirect-link-with-timer.html");
        }
        }, 1000);
        });
