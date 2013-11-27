define([
  'marionette',
  'app',
  'hbs!modules/repository/list/templates/item'
], function(Marionette, app, tmplRepositoryItem) {

  var Repository = app.module('Repository');

  Repository.List = { };

  Repository.List.ItemView = Marionette.ItemView.extend({
    tagName: 'li',

    template: tmplRepositoryItem,

    events: {
      'click': 'setSelected'
    },

    modelEvents: {
      'change': 'toggleActiveClass'
    },

    initialize: function() {
      this.toggleActiveClass();
    },

    setSelected: function() {
      this.model.set('selected', true);
      this.trigger('item:select', this.model.get('owner').login, this.model.get('name'));
    },

    toggleActiveClass: function() {
      this.$el.toggleClass('active', !!this.model.get('selected'));
    }
  });

  Repository.List.CollectionView = Marionette.CollectionView.extend({
    tagName: 'ol',

    className: 'nav nav-pills nav-stacked',

    itemView: Repository.List.ItemView,

    initialize: function() {
      app.vent.on('repository:show:item', this.onItemSelected, this);

      var shown = app.request('repository:shown:item');
      if (typeof shown !== 'undefined') {
        this.onItemSelected(shown.get('owner').login, shown.get('name'));
      }

      this.on('itemview:item:select', $.proxy(function(childView, owner, name) {
        this.onItemSelected(owner, name);
      }, this));
    },

    onItemSelected: function(owner, name) {
      this.collection.each(function(item) {
        var isSelected = item.get('owner').login === owner && item.get('name') === name;
        item.set('selected', isSelected);
      });
    }
  });

  return Repository;

});
