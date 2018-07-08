const MyControllers = angular.module('MyControllers', [
  'ngStorage'
]);

MyControllers.controller("RotateCon", function(
  $scope, 
  $localStorage
) {

  $scope.$storage = $localStorage.$default({contacts: []});
// $localStorage.$reset(); 

$scope.handleDelete = (item) => {
  $scope.$storage.contacts.map((contact, i) => {
    if(contact.contact === item.contact) {
      $scope.$storage.contacts.splice(i, 1);
      console.log($scope.$storage.contacts);
    }
  });
};

  $scope.handleSubmit = () => {

    $scope.$storage.contacts.push({
      "contact": $scope.contact,
      "number": $scope.number
  });

    $scope.contact = "";
    $scope.number = "";
    $scope.contactForm.$setPristine();
  };

  $scope.class = '';
  $scope.changeClass = () => {
    if ($scope.class === 'rotate') {
      $scope.class = '';
    } else {
      $scope.class = 'rotate';
    }
  };
});
