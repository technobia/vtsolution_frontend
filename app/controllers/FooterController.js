/**
 * Created by apium on 22/08/2015.
 */
function FooterController($scope, RestAPI) {
    this.data = $scope.data = {};
    this.fn = $scope.fn = {};
    this.event = $scope.event = {};
    this.restAPI = RestAPI;

    this.event.onLoad = this.onLoad.bind(this);
    return this;
}

FooterController.prototype.onLoad = function() {
    this.initData();
};

FooterController.prototype.initData = function() {
    this.getListMenu();
};

FooterController.prototype.getListMenu = function() {
    this.restAPI.getListMenu.then(function(response) {
        this.data.listMenu = response.data;
    }.bind(this));
};

app.controller('FooterController', FooterController);