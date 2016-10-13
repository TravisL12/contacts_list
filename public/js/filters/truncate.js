'use strict';

angular.module('honeyBookApp').filter('truncate', [function () {
    return function (name, textLength) {
        if (name && name.length > textLength) {
            return name.slice(0, textLength) + '...';
        } else {
            return name;
        }
    }
}])
