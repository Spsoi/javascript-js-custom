'use strict'
function Connections() {
  this.globalData = null;
  
}
//$this.globalData
Connections.prototype.postAjax = function (method, url, data) {
        $.ajax({
            url: url,
            async:false,
            type: method,
            dataType: "json",
            data:  data,
            success: function (response) {
                $this.globalData = null;
                console.log('POST');
                $this.globalData = response;
                return response;
            },
            error: function (xhr, ajaxOptions, thrownError) {
            }
        });
    }
