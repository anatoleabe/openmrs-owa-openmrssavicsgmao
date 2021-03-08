import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component.js';
import Welcome from '../welcome/welcome';
//import uicommons from 'openmrs-contrib-uicommons';

let OpenmrssavicsgmaoModule = angular.module('Openmrssavicsgmao', [ uiRouter, Welcome.name, 'openmrs-contrib-uicommons'
    ])
    .component('main', mainComponent);

export default OpenmrssavicsgmaoModule;
