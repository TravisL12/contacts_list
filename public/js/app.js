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
        },
        resolve: {
            HoneybookContacts: function ($http, Addressbook) {
                return $http.get('https://candidate-test.herokuapp.com/contacts').then(function (response) {
                    Addressbook.contacts = response.data;
                });
            }
        }
    })
    .state('honeybook.home', {
        url: '/',
        views: {
            'main@': {
                templateUrl: '/public/views/home.html',
                controller: 'HomeController as vmHome'
            }
        }
    })
}).run();
