'use strict';

angular.module('honeyBookApp').controller('ContactsController', ['Addressbook', '$rootScope', function (Addressbook, $rootScope) {
    var ContactsCtrl = this;
    ContactsCtrl.contacts = Addressbook.contacts;

    $rootScope.$on('searchContacts', function (e, data) {
        ContactsCtrl.contactFilter = {name: data};
    })
}]);
