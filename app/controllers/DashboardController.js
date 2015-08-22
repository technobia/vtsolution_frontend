/**
 * Created by apium on 01/08/2015.
 */
function IndexController($scope) {
    this.data = $scope.data = {};
    this.fn = $scope.fn = {};
    this.event = $scope.event = {};

    this.event.onLoad = this.onLoad.bind(this);

    return this;
}

IndexController.prototype.onLoad = function() {
    this.initData();
};

IndexController.prototype.listSlides = function() {
    return [
        {image: 'assets/images/slide-0.jpg'},
        {image: 'assets/images/slide-1.jpg'},
        {image: 'assets/images/slide-2.jpg'}
    ];
};

IndexController.prototype.initData = function() {
    this.data.interval = 5000;
    this.data.noWrapSlides = false;
    this.data.slides = this.listSlides();
};

app.controller('IndexController', IndexController);