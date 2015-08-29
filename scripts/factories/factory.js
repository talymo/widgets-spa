/**
 * Created by tmoe on 8/29/2015.
 */
dashboard.factory("Users", function($http){

    var urlBase = 'http://spa.tglrw.com:4000/users';

    var users = {};

    users.getUsers = function () {
        return $http.get(urlBase);
    };

    users.getUser = function(id) {
        return $http.get(urlBase + '/' + id);
    }

    return users;

});

dashboard.factory('Widgets', function($http){

    var urlBase = 'http://spa.tglrw.com:4000/widgets';

    var widgets = {};

    widgets.getWidgets = function () {
        return $http.get(urlBase);
    };

    widgets.getWidget = function(id) {
        return $http.get(urlBase + '/' + id);
    };

    widgets.updateWidget = function (widget) {
        return $http.put(urlBase + '/' + widget.id, widget);
    };

    widgets.createWidget = function(widget) {
        return $http.post(urlBase, widget);
    };

    return widgets;

});