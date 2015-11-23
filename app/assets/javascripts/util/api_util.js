(function(root) {
  'use strict';
  root.ApiUtil = {
    fetchDestinationMatches: function (queryStr) {
      $.ajax({
        url: "/api/destinations/",
        type: "GET",
        dataType: "json",
        data: {query: queryStr},
        success: function (destinations) {
          ApiActions.receiveAllDestinations(destinations);
        }
      });
    },
    fetchAllTags: function (queryStr) {
      $.ajax({
        url: "/api/tags/",
        type: "GET",
        dataType: "json",
        data: {query: queryStr},
        success: function (tags) {
          ApiActions.receiveAllTags(tags);
        }
      });
    },
    fetchCurrentUser: function () {
      $.ajax({
        url: "/users/" + window.CURRENT_USER_ID,
        type: "GET",
        dataType: "json",
        success: function (user) {
          ApiActions.receiveSingleUser(user);
        }
      });
    },
    updateCurrentUser: function (user) {
      $.ajax({
        url: "/users/" + window.CURRENT_USER_ID,
        type: "PATCH",
        dataType: "json",
        data: {user: user},
        success: function (message) {
          ApiActions.sendMessage(message, false);
        },
        error: function (error) {
          ApiActions.sendError(error, true);
        }
      });
    },
    removeTag: function(name){
      $.ajax({
        url: "api/tags/" + window.CURRENT_USER_ID,
        type: "DELETE",
        dataType: "json",
        data: {name: name},
        success: function(message){
          ApiActions.sendMessage(message,true);
        },
        error: function(error){
          ApiActions.sendError(error,true);
        }
      });
    },
    createDestination: function (destination) {
      $.ajax({
        url: "/api/destinations/",
        type: "POST",
        dataType: "json",
        data: {destination: destination},
        success: function (message) {
          ApiActions.sendMessage(message, false);
        },
       error: function (error) {
          ApiActions.sendError(error, true);
        }
      });
    },
    logOut: function () {
      $.ajax({
        url: "/session",
        type: "DELETE",
        success: function () {
          window.location = "/";
        }
      });
    }
  };
}(this));
