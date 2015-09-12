/**
 * Created by THANH BINH on 9/12/2015.
 */
function HeaderController($scope) {
    this.data = $scope.data = {};
    this.fn = $scope.fn = {};
    this.event = $scope.event = {};

    this.event.onLoad = this.onLoad.bind(this);
    this.event.onClickShowProduct = this.onClickShowProduct.bind(this);

    return this;
}

HeaderController.prototype.onLoad = function() {
    this.initData();
};

HeaderController.prototype.initData = function() {
    this.data.isShowProduct = true;
};

HeaderController.prototype.onClickShowProduct = function() {
    this.data.isShowProduct = !this.data.isShowProduct;
};

app.controller('HeaderController', HeaderController);