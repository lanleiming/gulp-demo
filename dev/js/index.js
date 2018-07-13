'use strict';

(function () {

   $.ajax({
      url: '/data/1.json',
      dataType: 'json',
      success: function success(ret) {
         console.log(ret);
      }
   });
})();