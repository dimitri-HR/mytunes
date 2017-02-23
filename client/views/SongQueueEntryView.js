// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': 'onClick'
    // 'click': function() {
      // this.model.play();
    // }
  },

  onClick: function () {
    console.log('You clicked SongQueueEntryView ');
console.log(this);
    // on click - > dequeue

    this.model.collection.at(0).play();
    // this.model.play();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }


});
