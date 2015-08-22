/**
 * Created by apium on 22/08/2015.
 */
function BaseController($scope) {
    this.data = $scope.data = {};
    this.fn = $scope.fn = {};
    this.event = $scope.event = {};

    this.event.onLoad = this.onLoad.bind(this);

    return this;
}

BaseController.prototype.onLoad = function() {
    this.initData();
};

BaseController.prototype.initData = function() {
    
};

app.controller('BaseController', BaseController);