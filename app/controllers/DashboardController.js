/**
 * Created by apium on 01/08/2015.
 */
function DashboardController($scope) {
    this.data = $scope;
    this.data.myInterval = 5000;
    this.data.noWrapSlides = false;
    this.data.slides = [];
    for (var i=0; i<4; i++) {
        this.addSlide();
    }
    return this;
}

DashboardController.prototype.addSlide = function() {
    var newWidth = 600 + this.data.slides.length + 1;
    this.data.slides.push({
        image: '//placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][this.data.slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][this.data.slides.length % 4]
    });
};

app.controller('DashboardController', DashboardController);