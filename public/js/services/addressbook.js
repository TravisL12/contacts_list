'use strict';

angular.module('honeyBookApp').service('Addressbook', ['$http', function ($http) {

    // Each Contact has the following attributes
    // ------------------
    // company_name
    // email
    // icon (href link to image)
    // job
    // name
    // phone
    // profile_image (href link to image)
    // ------------------

    var url = 'https://candidate-test.herokuapp.com/contacts',
        contacts;

    return {

        refresh: function () {
            return $http.get(url).then(function (response) {
                contacts = response.data;
            });
        },

        get contacts () {
            return contacts;
        },

        set contacts (data) {
            contacts = data;
        }

    }
}])
