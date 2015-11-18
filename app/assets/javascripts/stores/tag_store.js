(function(root) {
  'use strict';
  var _tags = [];
  var CHANGED_EVENT = "CHANGED_EVENT";

  var resetTags = function (tags) {
    _tags = tags;
 };

  root.TagStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _tags.slice(0);
    },
    addChangeListener: function (callback) {
      TagStore.on(CHANGED_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      TagStore.removeListener(CHANGED_EVENT, callback);
    },
    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TagConstants.TAGS_RECEIVED:
          resetTags(payload.tags);
          TagStore.emit(CHANGED_EVENT);
          break;
      }
    })
  });
}(this));
