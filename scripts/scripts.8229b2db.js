"use strict";angular.module("mlgApp",["ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","hljs"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mlgApp").controller("MainCtrl",["$scope",function(a){a.client=[],a.entreprise=[],a.hebergeur=[],a.entreprise.name="Yoan Marchal",a.entreprise.url="http://yoanmarchal.com/",a.entreprise.serp="Création, refonte de site web en limousin",a.hebergeur.url="http://www.planethoster.net",a.hebergeur.adresse="Planethoster, 4416 Louis B Mayer Laval, Quebec, H7P 0G1 Canada"}]);