function ListProductController($scope, $routeParams) {
    this.data = $scope.data = {};
    this.event = $scope.event = {};
    this.$params = $routeParams;
    console.log(this.$params);
    this.event.onLoad = this.onLoad.bind(this);

    return this;
}

ListProductController.prototype.onLoad = function() {
    this.initData();
};

ListProductController.prototype.initData = function() {
    
};

app.controller('ListProductController', ListProductController);