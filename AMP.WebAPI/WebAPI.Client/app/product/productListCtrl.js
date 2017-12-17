(function () {
    "use strict";
    angular
        .module("productManagerment")
        .controller("productListCtrl", ProductListCtrl);
    function ProductListCtrl() {
        var vm = this;
        vm.product = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-001",
                "productDate": "March 19, 2019",
                "description": "Leaf rake with...",
                "price": 19.95
            },
        {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-002",
                "productDate": "May 19, 2019",
                "description": "Garden Cart is... with...",
                "price": 50
    }
        ]
    }
})