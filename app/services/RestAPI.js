/**
 * Created by apium on 22/08/2015.
 */
app.factory('RestAPI', RestAPI);

function RestAPI($http) {
    this.getListMenu = $http.get('json/listMenu.json').success(function(response) {
        return response;
    });

    return this;
}