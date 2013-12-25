var ListView = require('shared/views/list_view'),
    navigate = require('shared/lib/navigate');

var AdminListView = ListView.extend({
  template: require('templates/admin_list'),
  selectedCategory: '',

  events: {
    'click .category.btn': 'filter'
  },

  initialize: function() {
    var self = this;

    this.listenTo(this.collection, 'reset', this.render);

    $('#search-form').submit(function() {
      self.submitQuery({
        search: $('#search').val(),
        limit: 4000,
        sort: 'name'
      });

      return false;
    });
  },
  filter: function(event) {
    var category = $(event.target).data('value');
    navigate({categories: [category]});
    return false;
  }
});

module.exports = AdminListView;
