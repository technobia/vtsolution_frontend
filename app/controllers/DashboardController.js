/**
 * Created by apium on 01/08/2015.
 */
function IndexController($scope) {
    this.data = $scope;
    this.data.interval = 5000;
    this.data.noWrapSlides = false;
    this.data.slides = [];
    for (var i=0; i<4; i++) {
        this.addSlide();
    }
    return this;
}

IndexController.prototype.addSlide = function() {
    this.data.slides.push({
        image: 'assets/images/slide-0.jpg'
    });
};

IndexController.prototype.listSlide = function() {
    
};

app.controller('IndexController', IndexController);