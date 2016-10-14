'use strict';

angular.module('honeyBookApp', ['ui.router', 'ngAnimate']).config(['$urlRouterProvider', '$locationProvider', '$stateProvider', 
    function ($urlRouterProvider, $locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('honeybook', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'public/views/header.html',
                    controllerAs: 'vmHeader',
                    controller: ['$scope', function ($scope) {
                        this.sendSearch = function () {
                            $scope.$emit('searchContacts', this.search.keyword);
                        };
                    }]
                }
            },
            resolve: {
                // Load contacts from API before moving forward
                HoneybookContacts: function ($http, Addressbook) {
                    return $http.get('https://candidate-test.herokuapp.com/contacts').then(function (response) {
                        Addressbook.contacts = response.data;
                    });
                }
            }
        })
        .state('honeybook.contacts', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: 'public/views/contacts.html',
                    controller: 'ContactsController as vmContacts'
                }
            }
        })
    }
]);
