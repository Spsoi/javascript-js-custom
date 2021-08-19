// path = modal/wrapper_search_children_menu.
// data = данные которые надо отрисовать.

Connections.prototype.renderChildrenList = function(path, data = null) {
    return new Promise(function (resolve) {
        Library.renderTemplate(path, {
            'data' : data
        }).then(function(output) {
            console.log(output);
        });
    });
}
