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
        {className: 'banner-1'},
        {className: 'banner-1'}
    ];
};

IndexController.prototype.listBrands = function() {
    return [
        {image: 'assets/images/promo_back_to_school_large.jpg'},
        {image: 'assets/images/promo_camera_large.jpg'},
        {image: 'assets/images/promo_diversity_large.jpg'},
        {image: 'assets/images/promo_health_large.jpg'}
    ];
};

IndexController.prototype.initData = function() {
    this.data.interval = 5000;
    this.data.noWrapSlides = false;
    this.data.slides = this.listSlides();
    this.data.brands = this.listBrands();
};

IndexController.prototype.initStyleCarousel = function() {
    var height = $(window).height();
    var item = $('.main-carousel');
    console.log(item.html());
};

app.controller('IndexController', IndexController);