'use strict';

angular.module('honeyBookApp').filter('hashTag', [function () {
    return function (name) {
        // Remove all special chars to create a psuedo hashTag
        if (name) {
            return '@' + name.replace(/[\s-\.*?!{}\[\]()]/g,'');
        }
        return;
    }
}])
