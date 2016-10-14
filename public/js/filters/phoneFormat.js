'use strict';

angular.module('honeyBookApp').filter('phoneFormat', [function () {
    return function (phoneNumber) {
        if (phoneNumber) {
            var trimmedNumber = phoneNumber.replace(/[\.-\s]/g,'');
            if (trimmedNumber.length === 10) {
                return trimmedNumber.replace(/^(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
            }
            return phoneNumber;
        }
        return;
    }
}])
