(function(root) {
  'use strict';
  root.ApiUtil = {
    fetchAllDestinations: function () {
      $.ajax({
        url: "/api/destinations/",
        type: "GET",
        dataType: "json",
        success: function (destinations) {
          ApiActions.receiveAllDestinations(destinations);
        }
      });
    },
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
