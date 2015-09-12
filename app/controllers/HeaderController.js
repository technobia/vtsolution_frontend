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
    this.initHandleCollapseProduct();
};

HeaderController.prototype.initData = function() {
    this.data.isShowProduct = true;
};

HeaderController.prototype.initHandleCollapseProduct = function() {
    var self = this;
    $(document).off('click').on('click', function(e) {
        $.each($('.sub-product'), function() {
            if( this !== e.target && !$(this).has(e.target).length && e.target !== $('.to-sub-product')[0]) {
                self.data.isShowProduct = true;
                return;
            }
        });
    });
};

HeaderController.prototype.onClickShowProduct = function() {
    this.data.isShowProduct = !this.data.isShowProduct;
};

app.controller('HeaderController', HeaderController);