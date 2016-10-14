'use strict';

angular.module('honeyBookApp').controller('ContactsController', ['Addressbook', '$rootScope', function (Addressbook, $rootScope) {
    var ContactsCtrl = this;
    ContactsCtrl.contacts = Addressbook.contacts;

    // Receives Header search input for searching (filtering) by `name`
    $rootScope.$on('searchContacts', function (e, data) {
        ContactsCtrl.contactFilter = { name: data };
    })
}]);
