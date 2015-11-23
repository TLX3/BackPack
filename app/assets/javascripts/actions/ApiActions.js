(function(root) {
  'use strict';
  root.ApiActions = {
    receiveAllDestinations: function (destinations) {
      AppDispatcher.dispatch({
        actionType: DestinationConstants.DESTINATIONS_RECEIVED,
        destinations: destinations
      });
    },
    receiveAllTags: function (tags) {
      AppDispatcher.dispatch({
        actionType: TagConstants.TAGS_RECEIVED,
        tags: tags
      });
    },
    receiveSingleUser: function (user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.CURRENT_USER_RECEIVED,
        user: [user]
      });
    },
    sendMessage: function (message, flashNow) {
      AppDispatcher.dispatch({
        actionType: MessageConstants.MESSAGE_RECEIVED,
        message: message,
        flashNow: flashNow
      });
    },
    sendError: function (error, flashNow) {
      AppDispatcher.dispatch({
        actionType: MessageConstants.ERROR_RECEIVED,
        error: error,
        flashNow: flashNow
      });
    }
  };
}(this));
