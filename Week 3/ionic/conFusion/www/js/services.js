'use strict';

angular.module('conFusion.services', ['ngResource'])
.constant("baseURL","http://localhost:3000/")
.factory('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

  return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

}])

.factory('promotionFactory', ['$resource', 'baseURL', function($resource, baseURL) {
  return   $resource(baseURL+"promotions/:id");
}])

.factory('favoriteFactory', ['$resource', 'baseURL', function($resource, baseURL){
  var favFac = {};
  //contains dish ids
  var favorites = [];

  favFac.addToFavorites = function(dishid) {
    for(var i=0;i<favorites.length;i++){
      if(favorites[i].id == dishid){
        console.log("dishid: "+dishid+" is already in favorites, returning!");
        return;
      }
    }
    favorites.push({id: dishid});
  };

  favFac.getFavorites = function() {
    return favorites;
  };

  favFac.deleteFromFavorites = function(dishid) {
    for(var i=0; i<favorites.length; i++){
      if(favorites[i].id == dishid) {
        favorites.splice(i,1);//evades corner case because it only removes one
      }
    }
  };

  return favFac;
}])

.factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {


  return $resource(baseURL+"leadership/:id");

}])

.factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {


  return $resource(baseURL+"feedback/:id");

}])

;
