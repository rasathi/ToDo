// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ToDo', ['ionic', 'ToDo.controllers'])
.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('ToDoListCtrl', function ($scope) {

  $scope.toDoListItems = [{
    task: 'Reading',
    status: 'not done'
  }, {
    task: 'Coding',
    status: 'not done'
  }]
});

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.




.config(function($stateProvider, $urlRouteProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .state('account', {
    url: '/account',
    templateUrl: 'templates/account.html',
    controller: 'AccountCtrl'
  });
  .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller: 'CategoriesCtrl'
  })
  .state('lists', {
      url: '/lists/:categoryId',
      templateUrl: 'templates/lists.html',
      controller: 'ListsCtrl'
  })
  .state('items', {
      url: "/items/:listId",
      templateUrl: "templates/items.html",
      controller: "ItemsCtrl"
  });
  $urlRouteProvider.otherwise('/home');
});
