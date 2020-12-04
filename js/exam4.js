var app4 = angular.module ('app4',[]);

app4.controller('eventCtrl',function($scope){

    $scope.dayTimeButton = true;

    $scope.capitals =[

    {"City":"Montgomery",
    "State":"Alabama"},
    {"City":"Junea",
    "State":"Alaska"},
    {"City":"Phoenix",
    "State":"Arizona"},
    {"City":"Little Rock",
    "State":"Arkansas"}

    ];


    $scope.disableButton = true;

    $scope.blur=0;
    $scope.click=0;
    $scope.dblclick=0;
    $scope.copy=0;
    $scope.paste=0;
    $scope.cut=0;
    $scope.focus=0;
    $scope.change=0;

    $scope.keydown = function(e){
        $scope.kdKey = String.fromCharCode(e.keyCode);
    };

    $scope.mouseenter=0;
    $scope.mouseleave=0;

});