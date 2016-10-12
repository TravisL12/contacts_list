'use strict';

angular.module('honeyBookApp').filter('hashTag', [function () {
    return function (name) {
        if (name) {
            return '@' + name.replace(/[\s-\.*?!{}\[\]()]/g,'');
        }
        return;
    }
}])
