import angular from 'angular'
import {react2angular} from 'react2angular'
import UsersCtrl from './users/UsersCtrl'
import UsersList from './users/UsersList.jsx'
import '../style/app.css'

const MODULE_NAME = 'usersApp'

const module = angular.module(MODULE_NAME, [])

module.directive('app', () => {
  return {
    template: require('./users/users.html'),
    controller: 'UsersCtrl',
    controllerAs: 'app'
  }
})

module.controller('UsersCtrl', UsersCtrl)

// Set up React component as Angular's component using react2angular.
module.component('usersList', react2angular(UsersList, [], ['$http']))

export default MODULE_NAME
