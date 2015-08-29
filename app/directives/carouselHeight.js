/**
 * Created by THANH BINH on 8/29/2015.
 */
app.directive('carouselHeight', [function() {
    return {
        priority: -1000,
        restrict: "A",
        link: function($scope, $element, $attributes) {
            // do what you want here.
            console.log($scope);
            console.log($element);
            console.log($attributes);
        }
    };
}]);