/**
 * Created by tmoe on 8/29/2015.
 */
dashboard.controller('userCtrl', function($scope, $rootScope, Users, $routeParams){

    $scope.userSort = '';

    Users.getUsers()
        .success(function(data){
            $scope.users = data;
            $rootScope.userCount = $scope.users.length;
        }).error(function(error){
            console.log('users are not there, bruh');
        });

    var user = $routeParams.id;

    if(user) {
        Users.getUser(user)
            .success(function(data) {
                $scope.activeUser = data;
            })
            .error(function(error) {
                console.log('user does not exist, yo');
            });
    }

});

dashboard.controller('widgetCtrl', function($scope, $rootScope, Widgets, $routeParams) {

    $scope.widgetSort = '';
    $scope.widgetEditor = false;
    $scope.createWidgetPanel = false;

    Widgets.getWidgets()
        .success(function(data) {
            $scope.widgets = data;
            $rootScope.widgetCount = $scope.widgets.length;
        }).error(function(error){
            console.log('no widgets found, gurrrrl');
        });

    $scope.widgetUpdate = function(widget) {
        Widgets.updateWidget(widget);
    };

    $scope.newWidget = {
        id: '',
        name: '',
        price: '',
        color: '',
        melts: 'false',
        inventory: ''
    };

    $scope.createWidget = function(newWidget) {
        newWidget.id = $scope.widgets.length + 1;
        Widgets.createWidget(newWidget);
        $scope.widgets.push(newWidget);
        $scope.createWidgetPanel = false;
    };

    var widget = $routeParams.id;

    if(widget) {
        Widgets.getWidget(widget)
            .success(function(data) {
                $scope.activeWidget = data;
            })
            .error(function(error) {
                console.log('widget does not exist, boo');
            });
    }

});