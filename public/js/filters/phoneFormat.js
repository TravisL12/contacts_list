'use strict';

angular.module('honeyBookApp').filter('phoneFormat', [function () {
    return function (phoneNumber) {
        if (phoneNumber) {

            // Clean up the phone number
            var trimmedNumber = phoneNumber.replace(/[\.-\s]/g,'');

            // Need a specific length of phone number to correctly format
            if (trimmedNumber.length === 10) {
                return trimmedNumber.replace(/^(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
            }
            return phoneNumber;
        }
        return;
    }
}])
