'use strict';

angular.module('honeyBookApp').filter('hashTag', [function () {
    return function (name) {
        return '@' + name.replace(/[\s-\.*?!{}\[\]()]/g,'');
    }
}])
