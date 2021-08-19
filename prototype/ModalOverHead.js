    Connections.prototype.Window = function(path,data, managers) {
        return new Promise(function (resolve) {
            Library.renderTemplate(path,
            {
                'config': Widget.config,
                'loader_classname': Widget.config.classname_widget + '-settings-tab-loader',
                'data': data,
                'managers': managers,
            }
            ).
            then(function(output) {
                Library.modal({
                    width: 700,
                    html: output,
                    callback: function($Body, Modal) {
                        $Body.show().trigger('modal.centrify');
                        $Body.on('click', '#cmdf5_name-modal--filter--close', function () {
                            Modal.destroy();
                        });
                    }
                });
            });
        });
    }
