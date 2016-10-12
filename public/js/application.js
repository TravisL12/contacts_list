'use strict';

angular.module('honeyBookApp', ['ui.router']).config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('honeybook', {
        url: '',
        abstract: true,
        views: {
            'header': {
                templateUrl: '/public/views/header.html'
                // controller: 'HeaderController'
            }
        }
    })
    .state('honeybook.home', {
        url: '/',
        views: {
            'main@': {
                templateUrl: '/public/views/home.html'
                // controller: 'HomeController as vmHome'
            }
        }
    })
}).run();
