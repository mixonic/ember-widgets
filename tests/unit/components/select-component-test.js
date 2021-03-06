import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

var select = null;

moduleForComponent('select-component', '[Unit] Select component', {
  unit: true,
  teardown: function() {
    Ember.run( function() {
      select.destroy();
    });
    select = null;
  }
});

var animalData = function() {
  return [
    {name: 'Sparrow', sound: 'Squawk'},
    {name: 'Crow', sound: 'Squawk'},
    {name: 'Dog', sound: 'bark'},
    {name: 'Wolf', sound: 'Bark'},
    {name: 'Sea Lion', sound: 'Bark'}
  ];
};

var contentEqual = function(assert, expected, actual, groupingIndices) {
  assert.equal(expected.length, actual.length, 
               "Unexpected groupedContent size");
  for (var i = 0; i < expected.length; i++) {
    assert.equal(expected[i], Ember.get(actual[i], 'name'));
  }
  groupingIndices.forEach(function(i) {
    assert.ok(
      Ember.get(actual[i], 'isGroupOption'), 
      "Expected grouping option at index " + i
    );
  });
};

test('Test continuous queries in a row', function(assert) {
  assert.expect(5);

  var filteredContent;
  select = this.subject({
    content: ['foo', 'bar', 'barca', 'baz']
  });

  select.set('query', 'ba');

  filteredContent = select.get('filteredContent');
  assert.equal(filteredContent[0], 'bar');
  assert.equal(filteredContent[1], 'barca');
  assert.equal(filteredContent[2], 'baz');

  select.set('query', 'bar');

  filteredContent = select.get('filteredContent');
  assert.equal(filteredContent[0], 'bar');
  assert.equal(filteredContent[1], 'barca');
});

test('Test filtered content using array proxy', function(assert) {
  assert.expect(2);

  var data = Ember.ArrayProxy.create({
    content: Ember.A(['red', 'reddit', 'green', 'blue'])
  });
  select = this.subject({
    content: data
  });
  select.set('query', 're');
  assert.equal(select.get('filteredContent')[0], 'red');
  assert.equal(select.get('filteredContent')[1], 'reddit');
});

test('Test groupedContent default sorting', function(assert) {
  assert.expect(12);

  select = this.subject({
    content: animalData(),
    optionLabelPath: 'name',
    optionValuePath: 'name',
    optionGroupPath: 'sound'
  });

  var expected = [
    'Bark',
    'Sea Lion',
    'Wolf',
    'Squawk',
    'Crow',
    'Sparrow',
    'bark',
    'Dog'
  ];

  var actual = select.get('groupedContent');
  contentEqual(assert, expected, actual, [0, 3, 6]);
});

test('Test groupedContent custom sorting', function(assert) {
  assert.expect(12);

  // Sort by first objects in sored members of the group
  var sortFn = function(group1, group2) {
    var firstGroup1Member = group1.members.sort()[0];
    var firstGroup2Member = group2.members.sort()[0];

    if (firstGroup1Member < firstGroup2Member) {
      return -1;
    }

    if (firstGroup1Member > firstGroup2Member) {
      return 1;
    }

    return 0;
  };

  select = this.subject({
    content: animalData(),
    optionLabelPath: 'name',
    optionValuePath: 'name',
    optionGroupPath: 'sound',
    groupSortFunction: sortFn
  });

  var expected = [
    'Squawk',
    'Crow',
    'Sparrow',
    'bark',
    'Dog',
    'Bark',
    'Sea Lion',
    'Wolf'
  ];

  var actual = select.get('groupedContent');
  contentEqual(assert, expected, actual, [0,3,5]);
});

test('Test sorted filter content', function(assert) {
  assert.expect(3);

  select = this.subject({
    content: ['reddit', 'red', 'green', 'blue']
  });
  select.set('query', 'r');

  assert.equal(select.get('sortedFilteredContent')[0], 'green');
  assert.equal(select.get('sortedFilteredContent')[1], 'red');
  assert.equal(select.get('sortedFilteredContent')[2], 'reddit');
});

test('Test selection label', function(assert) {
  assert.expect(2);

  var data = [
    {
      name: 'reddit'
    }, {
      name: 'red'
    }
  ];
  select = this.subject({
    content: data,
    selection: data[0],
    optionLabelPath: 'name'
  });
  assert.equal(select.get('selectedLabel'), 'reddit');

  select.set('selection.name', 'blues');
  assert.equal(select.get('selectedLabel'), 'blues');
});

test('Test query matching', function(assert) {
  assert.expect(8);

  select = this.subject({
    content: ['foo', 'bana$  na', 'bar ca', 'baz']
  });
  select.set('query', null);
  assert.equal(select.get('filteredContent').length, 4, 'null queries should return the full list of options');
  select.set('query', '   ');
  assert.equal(select.get('filteredContent').length, 4, 'queries containing all spaces should return the full list of options');
  select.set('query', ' a ');
  assert.equal(select.get('filteredContent').length, 3, 'queries containing spaces at two ends should be trimmed');
  select.set('query', 'bar  ca');
  assert.equal(select.get('filteredContent').length, 1, 'queries containing duplicated spaces should be removed');
  select.set('query', 'barca');
  assert.equal(select.get('filteredContent').length, 0, 'correct spaces should be considered when matching');
  select.set('query', 'bana$');
  assert.equal(select.get('filteredContent').length, 1, 'special characters should be considered when matching');
  select.set('query', 'bana[  na');
  assert.equal(select.get('filteredContent').length, 0, 'special characters should be considered when matching');
  select.set('query', 'bana$ n');
  assert.equal(select.get('filteredContent').length, 1, 'duplicated spaces in the source string should be removed before matching');
});

test('optionValuePath with POJOs', function(assert) {
  assert.expect(1);

  var data, obj1, obj2;
  obj1 = {
    name: 'reddit',
    value: 1
  };
  obj2 = {
    name: 'red',
    value: 2
  };
  data = [obj1, obj2];
  select = this.subject({
    content: data,
    optionLabelPath: 'name',
    optionValuePath: 'value'
  });
  Ember.run(function() {
    select.set('value', 2);
  });
  assert.equal(obj2, select.get('selection'), 'The right selection is retrieved');
});

test('optionValuePath with Ember Objects', function(assert) {
  assert.expect(1);

  var Klass, data, obj1, obj2;
  Klass = Ember.Object.extend({
    name: null,
    value: null
  });
  obj1 = Klass.create({
    name: 'reddit',
    value: 1
  });
  obj2 = Klass.create({
    name: 'red',
    value: 2
  });
  data = [obj1, obj2];
  select = this.subject({
    content: data,
    optionLabelPath: 'name',
    optionValuePath: 'value'
  });

  Ember.run(function() {
    select.set('value', 2);
  });
  assert.equal(obj2, select.get('selection'), 'The right selection is retrieved');
});

test('optionValuePath with ArrayProxy', function(assert) {
  assert.expect(1);

  var Klass, arrData, data, obj1, obj2;
  Klass = Ember.Object.extend({
    name: null,
    value: null
  });
  obj1 = Klass.create({
    name: 'reddit',
    value: 1
  });
  obj2 = Klass.create({
    name: 'red',
    value: 2
  });
  data = [obj1, obj2];
  arrData = Ember.ArrayProxy.create({
    content: Ember.A(data)
  });
  select = this.subject({
    content: arrData,
    optionLabelPath: 'name',
    optionValuePath: 'value'
  });

  Ember.run(function() {
    select.set('value', 2);
  });
  assert.equal(obj2, select.get('selection'), 'The right selection is retrieved');
});

test('optionValuePath with nested valuePath', function(assert) {
  assert.expect(1);

  var data, obj1, obj2, value1;
  value1 = Ember.Object.create();
  value1.set('subvalue', 1);
  obj1 = {
    name: 'reddit',
    value: value1
  };
  obj2 = {
    name: 'red',
    value: {
      subvalue: 2
    }
  };
  data = [obj1, obj2];
  select = this.subject({
    content: Ember.A(data),
    optionLabelPath: 'name',
    optionValuePath: 'value.subvalue'
  });

  Ember.run(function() {
    select.set('value', 2);
  });
  assert.equal(obj2, select.get('selection'), 'The right selection is retrieved');
});
