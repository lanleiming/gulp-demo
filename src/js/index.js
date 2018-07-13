(function () {

    $.ajax({
       url:'/data/1.json',
       dataType:'json',
       success:function (ret) {
         console.log(ret);
       }
    });

}());