'use strict';

angular.module('honeyBookApp').controller('HomeController', ['Addressbook', function (Addressbook) {
    var homeCtrl = this;
    homeCtrl.contacts = Addressbook.contacts;
}]);
