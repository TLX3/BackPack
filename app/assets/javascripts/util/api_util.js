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
    fetchAllTags: function () {
      $.ajax({
        url: "/api/tags/",
        type: "GET",
        dataType: "json",
        success: function (tags) {
          ApiActions.receiveAllTags(tags);
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
