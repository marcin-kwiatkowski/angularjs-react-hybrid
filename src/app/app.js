import angular from 'angular'
import {react2angular} from 'react2angular'
import UsersList from './users/UsersList.jsx'

import '../style/app.css'

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
}

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack'
  }
}

const MODULE_NAME = 'app'

const module = angular.module(MODULE_NAME, [])
module.directive('app', app)
module.controller('AppCtrl', AppCtrl)

// Set up React components as Angular's components using react2angular.
module.component('usersList', react2angular(UsersList))

export default MODULE_NAME
