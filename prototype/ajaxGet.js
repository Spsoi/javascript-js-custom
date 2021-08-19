'use strict'
function Connections() {
  this.globalData = null;
  
}
Connections.prototype.getAjax = function (method, url) {
    $.ajax({
        url: url,
        async:false,
        type: method,
        dataType: "json",
        success: function (response) {
            $this.globalData = null;
            console.log('GET');
            console.log('response');
            console.log(response);
            $this.globalData = response;
            console.log('$this.globalData');
            console.log($this.globalData);
            return response;
        },
        error: function (xhr, ajaxOptions, thrownError) {
        }
    });
}
