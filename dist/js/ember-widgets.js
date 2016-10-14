/*!
* ember-widgets v0.3.0
* Copyright 2013-2016 Addepar Inc.
* See LICENSE.
*/
(function() {

var _ref;

Ember.Widgets = Ember.Namespace.create();

Ember.Widgets.VERSION = '0.3.0';

Ember.Widgets.DISABLE_ANIMATIONS = false;

if ((_ref = Ember.libraries) != null) {
  _ref.register('Ember Widgets', Ember.Widgets.VERSION);
}


})();

(function() {

Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Ember.AddeparMixins.ResizeHandlerMixin = Ember.Mixin.create({
  resizeEndDelay: 200,
  resizing: false,
  onResizeStart: Ember.K,
  onResizeEnd: Ember.K,
  onResize: Ember.K,
  endResize: Ember.computed(function() {
    return function(event) {
      if (this.isDestroyed) {
        return;
      }
      this.set('resizing', false);
      return typeof this.onResizeEnd === "function" ? this.onResizeEnd(event) : void 0;
    };
  }),
  handleWindowResize: function(event) {
    if (!this.get('resizing')) {
      this.set('resizing', true);
      if (typeof this.onResizeStart === "function") {
        this.onResizeStart(event);
      }
    }
    if (typeof this.onResize === "function") {
      this.onResize(event);
    }
    return Ember.run.debounce(this, this.get('endResize'), event, this.get('resizeEndDelay'));
  },
  didInsertElement: function() {
    this._super();
    return this._setupResizeDocumentHandlers();
  },
  willDestroyElement: function() {
    this._removeResizeDocumentHandlers();
    return this._super();
  },
  _setupResizeDocumentHandlers: function() {
    if (this._resizeHandler) {
      return;
    }
    this._resizeHandler = jQuery.proxy(this.get('handleWindowResize'), this);
    return jQuery(window).on("resize." + this.elementId, this._resizeHandler);
  },
  _removeResizeDocumentHandlers: function() {
    jQuery(window).off("resize." + this.elementId, this._resizeHandler);
    return this._resizeHandler = null;
  }
});


})();

(function() {

Ember.TEMPLATES["accordion-group-layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"panel-heading\">\n  <h4 class=\"panel-title\">\n    <a class=\"accordion-toggle collapsed\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "view.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </a>\n  </h4>\n</div>\n<div class=\"panel-collapse collapse\">\n  <div class=\"panel-body\">");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["carousel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.CollectionView", {hash:{
    'tagName': ("ol"),
    'class': ("carousel-indicators"),
    'contentBinding': ("view.content"),
    'itemViewClass': ("Ember.Widgets.CarouselIndicator")
  },hashTypes:{'tagName': "STRING",'class': "STRING",'contentBinding': "STRING",'itemViewClass': "STRING"},hashContexts:{'tagName': depth0,'class': depth0,'contentBinding': depth0,'itemViewClass': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n<div class=\"carousel-inner\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<a class=\"left carousel-control\"  href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "prev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">‹</a>\n<a class=\"right carousel-control\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">›</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["color-picker-button-partial"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<button class=\"btn btn-default color-picker-dropdown-button\"\n  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleDropdown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['color-picker-cell'] || (depth0 && depth0['color-picker-cell']),options={hash:{
    'color': ("selectedColor"),
    'classNameBindings': ("isColorTransparent:color-picker-cell-transparent")
  },hashTypes:{'color': "ID",'classNameBindings': "STRING"},hashContexts:{'color': depth0,'classNameBindings': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "color-picker-cell", options))));
  data.buffer.push("\n  <span class=\"pull-right fa fa-caret-down color-picker-dropdown-caret\"></span>\n</button>\n");
  return buffer;
  
});

Ember.TEMPLATES["color-picker-cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"no-color-indicator-holder\"></div>");
  
});

Ember.TEMPLATES["color-picker-dropdown"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <div class=\"color-row clearfix\">\n        ");
  stack1 = helpers.each.call(depth0, "color", "in", "row", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <hr>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['color-picker-cell'] || (depth0 && depth0['color-picker-cell']),options={hash:{
    'color': ("color"),
    'selectedColor': ("selectedColor"),
    'setColor': ("setColor")
  },hashTypes:{'color': "ID",'selectedColor': "ID",'setColor': "STRING"},hashContexts:{'color': depth0,'selectedColor': depth0,'setColor': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "color-picker-cell", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"dropdown open\">\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":dropdown-menu :color-picker-dropdown dropdownClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    role=\"menu\" aria-labelledby=\"dLabel\">\n    ");
  stack1 = helpers.each.call(depth0, "row", "in", "colorRows", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setCustomColor", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":color-picker-custom-form isCustomColorValid:valid:invalid")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <div class=\"input-group\">\n          <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":input-group-addon\n            :color-picker-custom-preview isCustomColor:active"),
    'style': ("customColorCSS")
  },hashTypes:{'class': "STRING",'style': "STRING"},hashContexts:{'class': depth0,'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setCustomColor", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          </span>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'valueBinding': ("customColor"),
    'class': ("form-control input-sm"),
    'type': ("text"),
    'placeholder': ("HEX code")
  },hashTypes:{'valueBinding': "STRING",'class': "STRING",'type': "STRING",'placeholder': "STRING"},hashContexts:{'valueBinding': depth0,'class': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </form>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["color-picker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['color-picker-dropdown'] || (depth0 && depth0['color-picker-dropdown']),options={hash:{
    'dropdownClass': ("dropdownClass"),
    'colorRows': ("colorRows"),
    'userSelected': ("userSelected"),
    'hideDropdown': ("hideDropdown"),
    'setSelectedColor': ("setSelectedColor"),
    'customColor': ("customColor"),
    'selectedColor': ("selectedColor")
  },hashTypes:{'dropdownClass': "ID",'colorRows': "ID",'userSelected': "STRING",'hideDropdown': "STRING",'setSelectedColor': "STRING",'customColor': "ID",'selectedColor': "ID"},hashContexts:{'dropdownClass': depth0,'colorRows': depth0,'userSelected': depth0,'hideDropdown': depth0,'setSelectedColor': depth0,'customColor': depth0,'selectedColor': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "color-picker-dropdown", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "colorPickerButtonPartial", options) : helperMissing.call(depth0, "partial", "colorPickerButtonPartial", options))));
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "isDropdownOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["component-default-content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<p>");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n");
  return buffer;
  
});

Ember.TEMPLATES["editable-label"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.innerTextField", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editLabel", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "view.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["font-chooser-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("view.style")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["modal-footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <button type=\"button\"\n    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-primary :btn-confirm isDisabled:disabled"),
    'disabled': ("isDisabled")
  },hashTypes:{'class': "STRING",'disabled': "STRING"},hashContexts:{'class': depth0,'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendConfirm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "confirmText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <button type=\"button\" class=\"btn btn-default btn-cancel\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendCancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "cancelText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <button type=\"button\" class=\"btn btn-default btn-close\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendClose", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "closeText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "confirmText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "cancelText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "closeText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":modal-dialog sizeClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" tabindex=\"-1\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "_headerViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"modal-body\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "_contentViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    <div class=\"modal-footer\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "_footerViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["modal_header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendClose", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</button>\n<h4 class=\"modal-title\">");
  stack1 = helpers._triageMustache.call(depth0, "headerText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n");
  return buffer;
  
});

Ember.TEMPLATES["multi-select-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n<a class=\"ember-select-search-choice-close\" href=\"#\" tabIndex=\"-1\"\n  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeSelectItem", "view.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">×\n</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["multi-select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"ember-select-no-results\">No results match \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</span>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-select-container ember-select-multi dropdown-toggle js-dropdown-toggle\"\n  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("hasFocus:ember-select-focus")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <ul ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ember-select-choices choicesFieldClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  data.buffer.push(escapeExpression(helpers.each.call(depth0, "selections", {hash:{
    'itemViewClass': ("view.selectionItemView")
  },hashTypes:{'itemViewClass': "STRING"},hashContexts:{'itemViewClass': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    <li class=\"ember-select-search-field\">\n      \n      <span class=\"invisible-placeholder\">");
  stack1 = helpers._triageMustache.call(depth0, "invisiblePlaceholderText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </li>\n  </ul>\n</div>\n\n<div class=\"dropdown-menu js-dropdown-menu\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-select-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["popover-link-popover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <h4 class=\"popover-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"arrow\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("view.arrowStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"popover-content\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view._contentViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["popover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <h4 class=\"popover-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"arrow\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("arrowStyle")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></div>\n");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<div class=\"popover-content\">\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view._contentViewClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["radio-button-layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Widgets.RadioButtonComponent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["select-item-layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.content.isGroupOption", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["select-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <span ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("view.label")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "controller.titleOnOptions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["select"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "selectedItemView", {hash:{
    'contentBinding': ("selection")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <span>");
  stack1 = helpers._triageMustache.call(depth0, "prompt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.dropdownToggleIcon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <div class=\"ember-select-search\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-select-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "contentIsEmpty", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n      <span class=\"ember-select-loading\">Loading...</span>\n    ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <div class=\"ember-select-empty-content\">\n        ");
  stack1 = helpers['if'].call(depth0, "emptyContentView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "emptyContentView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <span class=\"ember-select-no-results\">No results match \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</span>\n      ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "selectMenuView", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"ember-select-container dropdown-toggle js-dropdown-toggle\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleDropdown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-control :ember-select-choice buttonClass disabled:disabled\n  hasFocus:ember-select-focus")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "selection", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </a>\n</div>\n\n<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":dropdown-menu :js-dropdown-menu dropdownMenuClass\n  isDropdownMenuPulledRight:pull-right")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  stack1 = helpers.unless.call(depth0, "isSelect", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "showDropdown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "selectMenuView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["typeahead"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"dropdown-menu\">\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "listView", {hash:{
    'tagName': ("ul"),
    'classNames': ("ember-typeahead-results"),
    'heightBinding': ("dropdownHeight"),
    'rowHeightBinding': ("rowHeight"),
    'contentBinding': ("groupedContent"),
    'itemViewClassBinding': ("itemView")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'heightBinding': "STRING",'rowHeightBinding': "STRING",'contentBinding': "STRING",'itemViewClassBinding': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'heightBinding': depth0,'rowHeightBinding': depth0,'contentBinding': depth0,'itemViewClassBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  data.buffer.push("<div>\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "searchView", {hash:{
    'classBinding': ("searchFieldClass"),
    'disabled': ("disabled")
  },hashTypes:{'classBinding': "STRING",'disabled': "ID"},hashContexts:{'classBinding': depth0,'disabled': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n");
  stack1 = helpers.unless.call(depth0, "hasNoResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["view-parent-view-content"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "view.parentView.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

})();

(function() {

Ember.Widgets.KeyboardHelper = Ember.Mixin.create({
  KEY_CODES: {
    BACKSPACE: 8,
    DELETE: 46,
    DOWN: 40,
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    SPACEBAR: 32,
    TAB: 9,
    UP: 38,
    ESCAPE: 27
  }
});

Ember.Widgets.StyleBindingsMixin = Ember.Mixin.create({
  concatenatedProperties: ['styleBindings'],
  attributeBindings: ['style'],
  unitType: 'px',
  createStyleString: function(styleName, property) {
    var value;
    value = this.get(property);
    if (value === void 0) {
      return;
    }
    if (Ember.typeOf(value) === 'number') {
      value = value + this.get('unitType');
    }
    return "" + styleName + ":" + value + ";";
  },
  applyStyleBindings: function() {
    var lookup, properties, styleBindings, styleComputed, styles,
      _this = this;
    styleBindings = this.styleBindings;
    if (!styleBindings) {
      return;
    }
    lookup = {};
    styleBindings.forEach(function(binding) {
      var property, style, _ref;
      _ref = binding.split(':'), property = _ref[0], style = _ref[1];
      return lookup[style || property] = property;
    });
    styles = _.keys(lookup);
    properties = _.values(lookup);
    styleComputed = Ember.computed(function() {
      var styleString, styleTokens;
      styleTokens = styles.map(function(style) {
        return _this.createStyleString(style, lookup[style]);
      });
      styleString = styleTokens.join('');
      if (styleString.length !== 0) {
        return styleString;
      }
    });
    styleComputed.property.apply(styleComputed, properties);
    return Ember.defineProperty(this, 'style', styleComputed);
  },
  init: function() {
    this.applyStyleBindings();
    return this._super();
  }
});

Ember.Widgets.BodyEventListener = Ember.Mixin.create({
  bodyElementSelector: 'html',
  bodyClick: Ember.K,
  didInsertElement: function() {
    this._super();
    return Ember.run.next(this, this._setupDocumentHandlers);
  },
  willDestroyElement: function() {
    this._super();
    return this._removeDocumentHandlers();
  },
  _setupDocumentHandlers: function() {
    var _this = this;
    if (this._clickHandler || this.isDestroying) {
      return;
    }
    this._clickHandler = function(event) {
      return Ember.run(function() {
        var checkContain, isBodyElement;
        if ((_this.get('_state') || _this.get('state')) === 'inDOM' && Ember.isEmpty(_this.$().has($(event.target)))) {
          checkContain = $.contains(document.body, event.target);
          isBodyElement = event.target === document.body;
          if (checkContain || isBodyElement) {
            return _this.bodyClick(event);
          }
        }
      });
    };
    return $(this.get('bodyElementSelector')).on("click", this._clickHandler);
  },
  _removeDocumentHandlers: function() {
    $(this.get('bodyElementSelector')).off("click", this._clickHandler);
    return this._clickHandler = null;
  }
});

Ember.Widgets.TabbableModal = Ember.Mixin.create(Ember.Widgets.KeyboardHelper, {
  enforceModality: false,
  escToCancel: true,
  currentFocus: null,
  _focusTabbable: function() {
    var focusElement, hasFocus;
    hasFocus = [this.get('currentFocus')];
    if (!this.$().has(hasFocus[0]).length) {
      hasFocus = this.$('[autofocus]');
    }
    if (hasFocus.length === 0) {
      hasFocus = this.$(':tabbable');
    }
    if (focusElement = hasFocus[0]) {
      if (focusElement.className.indexOf('close') > -1) {
        if (hasFocus.length > 1) {
          focusElement = hasFocus[1];
        }
      }
      focusElement.focus();
      return this.set('currentFocus', focusElement);
    }
  },
  _checkContainingElement: function(containers, element) {
    var containerItem, _i, _len;
    for (_i = 0, _len = containers.length; _i < _len; _i++) {
      containerItem = containers[_i];
      if (containerItem === element || $.contains(containerItem, element)) {
        return true;
      }
    }
    return false;
  },
  mouseDown: function(event) {
    this._super(event);
    if (this._checkContainingElement(this.$(':tabbable'), event.target)) {
      return this.set('currentFocus', event.target);
    } else {
      this.set('currentFocus', null);
      return this.$().focus();
    }
  },
  keyDown: function(event) {
    var first, last, tabbableObjects, _currentFocus, _index;
    this._super(event);
    if (event.isDefaultPrevented()) {
      return;
    }
    if (event.keyCode === this.KEY_CODES.ESCAPE && this.get('escToCancel')) {
      this.send('sendCancel');
      event.preventDefault();
    } else if (event.keyCode === this.KEY_CODES.ENTER && this.get('enterToConfirm')) {
      if (!this.get('isDisabled')) {
        this.send('sendConfirm');
        event.preventDefault();
      }
    } else if (event.keyCode === this.KEY_CODES.TAB) {
      tabbableObjects = this.$(":tabbable").not('.close');
      _currentFocus = document.activeElement;
      _index = tabbableObjects.index(_currentFocus);
      if (_index === -1) {
        this._focusTabbable();
        return false;
      }
      if (tabbableObjects.length > 0) {
        first = tabbableObjects[0];
        last = tabbableObjects[tabbableObjects.length - 1];
        if (event.target === last && !event.shiftKey) {
          first.focus();
          this.set('currentFocus', first);
          event.preventDefault();
        } else if (event.target === first && event.shiftKey) {
          this.set('currentFocus', last);
          last.focus();
          event.preventDefault();
        } else {
          this.set('currentFocus', tabbableObjects[_index + 1]);
        }
      }
    }
    return true;
  }
});


})();

(function() {

Ember.Widgets.AccordionComponent = Ember.Component.extend({
  classNames: 'panel-group',
  activeIndex: 0
});

Ember.Widgets.AccordionItem = Ember.View.extend({
  defaultTemplate: Ember.Handlebars.compile('{{view.content}}'),
  layoutName: 'accordion-group-layout',
  classNames: 'panel panel-default',
  title: 'Untitled Accordion Group',
  index: 0,
  isActive: false,
  content: Ember.computed.alias('parentView.content'),
  isActiveDidChange: Ember.observer(function() {
    this.set('isActive', this.get('parentView.activeIndex') === this.get('index'));
    if (this.get('isActive')) {
      return this.show();
    } else {
      return this.hide();
    }
  }, 'parentView.activeIndex'),
  didInsertElement: function() {
    var index;
    index = this.get('parentView').$('.panel').index(this.$());
    this.set('index', index);
    return this.isActiveDidChange();
  },
  click: function(event) {
    if (!(this.$(event.target).closest('.panel-heading').length > 0)) {
      return;
    }
    if (this.get('isActive')) {
      return this.set('parentView.activeIndex', null);
    } else {
      return this.set('parentView.activeIndex', this.get('index'));
    }
  },
  hide: function() {
    var $accordionBody,
      _this = this;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.height($accordionBody.height())[0].offsetHeight;
    $accordionBody.removeClass('collapse').removeClass('in').addClass('collapsing');
    $accordionBody.height(0);
    return this._onTransitionEnd($accordionBody, function() {
      return $accordionBody.removeClass('collapsing').addClass('collapse');
    });
  },
  show: function() {
    var $accordionBody,
      _this = this;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.removeClass('collapse').addClass('collapsing').height(0);
    $accordionBody.height($accordionBody[0]['scrollHeight']);
    return this._onTransitionEnd($(), function() {
      return $accordionBody.removeClass('collapsing').addClass('in').height('auto');
    });
  },
  _onTransitionEnd: function($el, callback) {
    if (Ember.Widgets.DISABLE_ANIMATIONS) {
      return callback();
    } else {
      return $el.one($.support.transition.end, callback);
    }
  }
});

Ember.Handlebars.helper('accordion-component', Ember.Widgets.AccordionComponent);

Ember.Handlebars.helper('accordion-item', Ember.Widgets.AccordionItem);


})();

(function() {

Ember.Widgets.CarouselComponent = Ember.Component.extend({
  layoutName: 'carousel',
  classNames: ['carousel', 'slide'],
  classNameBindings: Ember.A(['sliding']),
  activeIndex: 0,
  $nextItem: null,
  didInsertElement: function() {
    this._super();
    if (!this.get('content')) {
      return this.set('content', Ember.A(new Array(this.$('.item').length)));
    }
  },
  willDestroyElement: function() {
    var _ref;
    if ((_ref = this.$nextItem) != null) {
      _ref.off($.support.transition.end);
    }
    return this._super();
  },
  actions: {
    prev: function() {
      var activeIndex, contentLength, nextIndex;
      if (this.get('sliding')) {
        return;
      }
      activeIndex = this.get('activeIndex');
      contentLength = this.get('content.length');
      nextIndex = activeIndex - 1;
      nextIndex = nextIndex < 0 ? contentLength - 1 : nextIndex;
      return this.slide('prev', nextIndex);
    },
    next: function() {
      var activeIndex, contentLength, nextIndex;
      if (this.get('sliding')) {
        return;
      }
      activeIndex = this.get('activeIndex');
      contentLength = this.get('content.length');
      nextIndex = activeIndex + 1;
      nextIndex = nextIndex >= contentLength ? 0 : nextIndex;
      return this.slide('next', nextIndex);
    }
  },
  to: function(pos) {
    var direction;
    if (this.get('sliding')) {
      return;
    }
    if (!((0 <= pos && pos < this.get('content.length')))) {
      return;
    }
    direction = pos > this.get('activeIndex') ? 'next' : 'prev';
    return this.slide(direction, pos);
  },
  slide: function(type, nextIndex) {
    var $active, direction, _ref,
      _this = this;
    if (this.get('activeIndex') === nextIndex) {
      return;
    }
    direction = type === 'next' ? 'left' : 'right';
    $active = $(this.$('.item').get(this.get('activeIndex')));
    if ((_ref = this.$nextItem) != null) {
      _ref.off($.support.transition.end);
    }
    this.$nextItem = $(this.$('.item').get(nextIndex));
    if (!Ember.Widgets.DISABLE_ANIMATIONS) {
      this.set('sliding', true);
      this.$nextItem.addClass(type);
      this.$nextItem[0].offsetWidth;
      $active.addClass(direction);
      this.$nextItem.addClass(direction);
    }
    return this._onTransitionEnd(this.$nextItem, function() {
      _this.$nextItem.off($.support.transition.end);
      Ember.run(_this, function() {
        this.set('activeIndex', nextIndex);
        this.$nextItem.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        this.set('sliding', false);
        return this.send('transitionEnded');
      });
      return _this.$nextItem = null;
    });
  },
  _onTransitionEnd: function($el, callback) {
    if (Ember.Widgets.DISABLE_ANIMATIONS) {
      return callback();
    } else {
      return $el.one($.support.transition.end, callback);
    }
  }
});

Ember.Widgets.CarouselIndicator = Ember.View.extend({
  classNameBindings: 'isActive:active',
  isActive: Ember.computed(function() {
    return this.get('contentIndex') === this.get('controller.activeIndex');
  }).property('contentIndex', 'controller.activeIndex'),
  click: function() {
    return this.get('controller').to(this.get('contentIndex'));
  }
});

Ember.Widgets.CarouselItem = Ember.View.extend({
  classNames: 'item'
});

Ember.Handlebars.helper('carousel-component', Ember.Widgets.CarouselComponent);

Ember.Handlebars.helper('carousel-item', Ember.Widgets.CarouselItem);


})();

(function() {

Ember.Widgets.EditableLabel = Ember.View.extend({
  templateName: 'editable-label',
  classNames: ['editable-label'],
  placeholder: '',
  isEditing: false,
  value: null,
  displayName: Ember.computed(function() {
    if (Ember.isNone(this.get('value')) || this.get('value') === '') {
      return this.get('placeholder');
    } else {
      return this.get('value');
    }
  }).property('value', 'placeholder'),
  innerTextField: Ember.TextField.extend({
    valueBinding: Ember.Binding.oneWay('parentView.value'),
    didInsertElement: function() {
      return this.$().focus();
    },
    blur: function() {
      this.set('parentView.isEditing', false);
      return this.set('parentView.value', this.get('value'));
    }
  }),
  editLabel: function() {
    return this.set('isEditing', true);
  }
});

Ember.Handlebars.helper('editable-label-component', Ember.Widgets.EditableLabel);


})();

(function() {

Ember.Widgets.ModalComponent = Ember.Component.extend(Ember.Widgets.StyleBindingsMixin, Ember.Widgets.TabbableModal, {
  layoutName: 'modal',
  classNames: ['modal'],
  classNameBindings: ['isShowing:in', 'hasCloseButton::has-no-close-button', 'fadeEnabled:fade'],
  modalPaneBackdrop: '<div class="modal-backdrop"></div>',
  bodyElementSelector: '.modal-backdrop',
  enforceModality: false,
  escToCancel: true,
  enterToConfirm: false,
  backdrop: true,
  isShowing: false,
  hasCloseButton: true,
  fade: true,
  headerText: "Modal Header",
  confirmText: "Confirm",
  cancelText: "Cancel",
  closeText: null,
  content: "",
  size: "normal",
  isValid: true,
  isDisabled: Ember.computed.not('isValid'),
  fadeEnabled: Ember.computed(function() {
    if (Ember.Widgets.DISABLE_ANIMATIONS) {
      return false;
    }
    return this.get('fade');
  }).property('fade'),
  confirm: null,
  cancel: null,
  close: null,
  _runFocusTabbable: null,
  headerViewClass: Ember.View.extend({
    templateName: 'modal_header'
  }),
  contentViewClass: Ember.View.extend({
    template: Ember.Handlebars.compile("<p>{{content}}</p>")
  }),
  footerViewClass: Ember.View.extend({
    templateName: 'modal-footer'
  }),
  _headerViewClass: Ember.computed(function() {
    var headerViewClass;
    headerViewClass = this.get('headerViewClass');
    if (typeof headerViewClass === 'string') {
      return Ember.get(headerViewClass);
    } else {
      return headerViewClass;
    }
  }).property('headerViewClass'),
  _contentViewClass: Ember.computed(function() {
    var contentViewClass;
    contentViewClass = this.get('contentViewClass');
    if (typeof contentViewClass === 'string') {
      return Ember.get(contentViewClass);
    } else {
      return contentViewClass;
    }
  }).property('contentViewClass'),
  _footerViewClass: Ember.computed(function() {
    var footerViewClass;
    footerViewClass = this.get('footerViewClass');
    if (typeof footerViewClass === 'string') {
      return Ember.get(footerViewClass);
    } else {
      return footerViewClass;
    }
  }).property('footerViewClass'),
  sizeClass: Ember.computed(function() {
    switch (this.get('size')) {
      case 'large':
        return 'modal-lg';
      case 'small':
        return 'modal-sm';
      default:
        return '';
    }
  }).property('size'),
  actions: {
    sendCancel: function() {
      var cancel;
      if (!this.get('isShowing')) {
        return;
      }
      cancel = this.get('cancel');
      if (typeof cancel === 'function') {
        this.cancel(this);
      } else {
        this.sendAction('cancel');
      }
      return this.hide();
    },
    sendConfirm: function() {
      var confirm;
      if (!this.get('isShowing')) {
        return;
      }
      confirm = this.get('confirm');
      if (typeof confirm === 'function') {
        this.confirm(this);
      } else {
        this.sendAction('confirm');
      }
      return this.hide();
    },
    sendClose: function() {
      var close;
      if (!this.get('isShowing')) {
        return;
      }
      close = this.get('close');
      if (typeof close === 'function') {
        this.close(this);
      } else {
        this.sendAction('close');
      }
      return this.hide();
    }
  },
  didInsertElement: function() {
    this._super();
    this._runFocusTabbable = Ember.run.schedule('afterRender', this, function() {
      return this._focusTabbable();
    });
    if (this.get('fade')) {
      this.$()[0].offsetWidth;
    }
    if (this.get('backdrop')) {
      this._appendBackdrop();
    }
    Ember.run.next(this, function() {
      if (this.isDestroying) {
        return;
      }
      return this.set('isShowing', true);
    });
    $(document.body).addClass('modal-open');
    return this._setupDocumentHandlers();
  },
  willDestroyElement: function() {
    if (this._runFocusTabbable) {
      Ember.run.cancel(this._runFocusTabbable);
    }
    this._super();
    this._removeDocumentHandlers();
    if (this._backdrop) {
      return this._backdrop.remove();
    }
  },
  click: function(event) {
    this._super(event);
    if (event.target === event.currentTarget) {
      if (!this.get('enforceModality')) {
        return this.send('sendCancel');
      }
    }
  },
  hide: function() {
    var _this = this;
    if (this.isDestroying) {
      return;
    }
    this.set('isShowing', false);
    $(document.body).removeClass('modal-open');
    if (this._backdrop) {
      this._backdrop.removeClass('in');
    }
    if (this.get('fadeEnabled')) {
      return this.$().one($.support.transition.end, function() {
        return Ember.run(_this, _this.destroy);
      });
    } else {
      return Ember.run(this, this.destroy);
    }
  },
  _appendBackdrop: function() {
    var modalPaneBackdrop, parentLayer;
    parentLayer = this.$().parent();
    modalPaneBackdrop = this.get('modalPaneBackdrop');
    this._backdrop = jQuery(modalPaneBackdrop);
    if (this.get('fadeEnabled')) {
      this._backdrop.addClass('fade');
    }
    this._backdrop.appendTo(parentLayer);
    return Ember.run.next(this, function() {
      return this._backdrop.addClass('in');
    });
  },
  _setupDocumentHandlers: function() {
    var _this = this;
    this._super();
    if (!this._hideHandler) {
      this._hideHandler = function() {
        return _this.hide();
      };
      return $(document).on('modal:hide', this._hideHandler);
    }
  },
  _removeDocumentHandlers: function() {
    this._super();
    $(document).off('modal:hide', this._hideHandler);
    this._hideHandler = null;
    $(document).off('keyup', this.get('keyHandler'));
    return this.$().off($.support.transition.end);
  }
});

Ember.Widgets.ModalComponent.reopenClass({
  rootElement: '.ember-application',
  poppedModal: null,
  hideAll: function() {
    return $(document).trigger('modal:hide');
  },
  popup: function(options) {
    var modal, rootElement;
    if (options == null) {
      options = {};
    }
    this.hideAll();
    rootElement = options.rootElement || this.rootElement;
    modal = this.create(options);
    if (modal.get('targetObject.container')) {
      modal.set('container', modal.get('targetObject.container'));
    }
    modal.appendTo(rootElement);
    return modal;
  }
});

Ember.Handlebars.helper('modal-component', Ember.Widgets.ModalComponent);


})();

(function() {

Ember.Widgets.PopoverMixin = Ember.Mixin.create(Ember.Widgets.StyleBindingsMixin, Ember.Widgets.BodyEventListener, {
  layoutName: 'popover',
  classNames: ['popover'],
  classNameBindings: ['isShowing:in', 'fadeEnabled:fade', 'placement'],
  styleBindings: ['left', 'top', 'display', 'visibility'],
  targetElement: null,
  contentViewClass: null,
  fade: true,
  escToCancel: true,
  placement: 'top',
  display: 'block',
  visibility: 'hidden',
  debounceTime: 100,
  fadeEnabled: Ember.computed(function() {
    if (Ember.Widgets.DISABLE_ANIMATIONS) {
      return false;
    }
    return this.get('fade');
  }).property('fade'),
  left: 0,
  top: 0,
  marginTop: 23,
  marginLeft: 10,
  isShowing: false,
  inserted: false,
  title: '',
  content: '',
  _resizeHandler: null,
  _scrollHandler: null,
  _contentViewClass: Ember.computed(function() {
    if (this.get('contentViewClass')) {
      return this.get('contentViewClass');
    }
    return Ember.View.extend({
      content: Ember.computed.alias('parentView.content'),
      templateName: 'view-parent-view-content'
    });
  }).property('contentViewClass'),
  didInsertElement: function() {
    this._super();
    this.snapToPosition();
    this.set('visibility', 'visible');
    return this.set('isShowing', true);
  },
  willDestroyElement: function() {
    this.$().off($.support.transition.end);
    return this._super();
  },
  bodyClick: function() {
    return this.hide();
  },
  hide: function() {
    var _this = this;
    if (this.get('isDestroyed')) {
      return;
    }
    this.set('isShowing', false);
    if (this.get('fadeEnabled')) {
      return this.$().one($.support.transition.end, function() {
        return Ember.run(_this, _this.destroy);
      });
    } else {
      return Ember.run(this, this.destroy);
    }
  },
  /*
  Calculate the offset of the given iframe relative to the top window.
  - Walks up the iframe chain, checking the offset of each one till it reaches top
  - Only works with friendly iframes.
  - Takes into account scrolling, but comes up with a result relative to
  top iframe, regardless of being visibile withing intervening frames.
  
  @param window win    the iframe we're interested in (e.g. window)
  @param object pos   an object containing the offset so far:
  { left: [x], top: [y] }
  (optional - initializes with 0,0 if undefined)
  @return pos object above
  
  via http://stackoverflow.com/a/9676655
  */

  computeFrameOffset: function(win, pos) {
    var found, frame, frames, rect, _i, _len;
    if (pos == null) {
      pos = {
        top: 0,
        left: 0
      };
    }
    frames = win.parent.document.getElementsByTagName("iframe");
    found = false;
    for (_i = 0, _len = frames.length; _i < _len; _i++) {
      frame = frames[_i];
      if (frame.contentWindow === win) {
        found = true;
        break;
      }
    }
    if (found) {
      rect = frame.getBoundingClientRect();
      pos.left += rect.left;
      pos.top += rect.top;
      if (win !== top) {
        this.computeFrameOffset(win.parent, pos);
      }
    }
    return pos;
  },
  getOffset: function($target) {
    var doc, pos, win;
    pos = $target.offset();
    doc = $target[0].ownerDocument;
    win = doc.defaultView;
    return this.computeFrameOffset(win, pos);
  },
  snapToPosition: function() {
    var $target, actualHeight, actualWidth, pos;
    $target = $(this.get('targetElement'));
    if ((this.get('_state') || this.get('state')) !== 'inDOM') {
      return;
    }
    actualWidth = this.$()[0].offsetWidth;
    actualHeight = this.$()[0].offsetHeight;
    if (Ember.isEmpty($target)) {
      pos = {
        top: this.get('top'),
        left: this.get('left'),
        width: 0,
        height: 0
      };
    } else {
      pos = this.getOffset($target);
      pos.width = $target[0].offsetWidth;
      pos.height = $target[0].offsetHeight;
    }
    switch (this.get('placement')) {
      case 'bottom':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left + pos.width / 2 - actualWidth / 2);
        break;
      case 'top':
        this.set('top', pos.top - actualHeight);
        this.set('left', pos.left + pos.width / 2 - actualWidth / 2);
        break;
      case 'top-right':
        this.set('top', pos.top);
        this.set('left', pos.left + pos.width);
        break;
      case 'top-left':
        this.set('top', pos.top);
        this.set('left', pos.left - actualWidth);
        break;
      case 'bottom-right':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left + pos.width - actualWidth);
        break;
      case 'bottom-left':
        this.set('top', pos.top + pos.height);
        this.set('left', pos.left);
        break;
      case 'left':
        this.set('top', pos.top - this.get('marginTop'));
        this.set('left', pos.left - actualWidth);
        break;
      case 'right':
        this.set('top', pos.top - this.get('marginTop'));
        this.set('left', pos.left + pos.width);
        break;
    }
    this.correctIfOffscreen();
    if (!Ember.isEmpty($target)) {
      return this.positionArrow();
    }
  },
  positionArrow: function() {
    var $target, arrowSize, left, pos, top;
    $target = $(this.get('targetElement'));
    pos = this.getOffset($target);
    pos.width = $target[0].offsetWidth;
    pos.height = $target[0].offsetHeight;
    arrowSize = 22;
    switch (this.get('placement')) {
      case 'left':
      case 'right':
        top = pos.top + pos.height / 2 - this.get('top') - arrowSize / 2;
        return this.set('arrowStyle', "margin-top:" + top + "px;");
      case 'top':
      case 'bottom':
        left = pos.left + pos.width / 2 - this.get('left') - arrowSize / 2;
        return this.set('arrowStyle', "margin-left:" + left + "px;");
    }
  },
  correctIfOffscreen: function() {
    var actualHeight, actualWidth, bodyHeight, bodyWidth;
    bodyWidth = $('body').width();
    bodyHeight = $('body').height();
    actualWidth = this.$()[0].offsetWidth;
    actualHeight = this.$()[0].offsetHeight;
    if (this.get('left') + actualWidth > bodyWidth) {
      this.set('left', bodyWidth - actualWidth - this.get('marginLeft'));
    }
    if (this.get('left') < 0) {
      this.set('left', this.get('marginLeft'));
    }
    if (this.get('top') + actualHeight > bodyHeight) {
      this.set('top', bodyHeight - actualHeight - this.get('marginTop'));
    }
    if (this.get('top') < 0) {
      return this.set('top', this.get('marginTop'));
    }
  },
  keyHandler: Ember.computed(function() {
    var _this = this;
    return function(event) {
      if (event.keyCode === 27 && _this.get('escToCancel')) {
        return _this.hide();
      }
    };
  }),
  debounceSnapToPosition: Ember.computed(function() {
    var _this = this;
    return function() {
      return Ember.run.debounce(_this, _this.snapToPosition, _this.get('debounceTime'));
    };
  }),
  _setupDocumentHandlers: function() {
    var _this = this;
    this._super();
    if (!this._hideHandler) {
      this._hideHandler = function() {
        return _this.hide();
      };
      $(document).on('popover:hide', this._hideHandler);
    }
    if (!this._resizeHandler) {
      this._resizeHandler = this.get('debounceSnapToPosition');
      $(document).on('resize', this._resizeHandler);
    }
    if (!this._scrollHandler) {
      this._scrollHandler = this.get('debounceSnapToPosition');
      $(document).on('scroll', this._scrollHandler);
    }
    return $(document).on('keyup', this.get('keyHandler'));
  },
  _removeDocumentHandlers: function() {
    this._super();
    $(document).off('popover:hide', this._hideHandler);
    this._hideHandler = null;
    $(document).off('resize', this._resizeHandler);
    this._resizeHandler = null;
    $(document).off('scroll', this._scrollHandler);
    this._scrollHandler = null;
    return $(document).off('keyup', this.get('keyHandler'));
  }
});

Ember.Widgets.PopoverComponent = Ember.Component.extend(Ember.Widgets.PopoverMixin);

Ember.Widgets.PopoverComponent.reopenClass({
  rootElement: '.ember-application',
  hideAll: function() {
    return $(document).trigger('popover:hide');
  },
  /**
   * Shows a popup with options used for PopoverComponent.
   * @param {Object} options All options used for PopoverComponent.
   * @param {boolean} [hideOthers=true] Indicates if other popover should be hidden when a new one
   *    is shown. By default, it's set to true.
  */

  popup: function(options, hideOthers) {
    var popover, rootElement;
    if (hideOthers == null) {
      hideOthers = true;
    }
    if (hideOthers) {
      this.hideAll();
    }
    rootElement = options.rootElement || this.rootElement;
    popover = this.create(options);
    if (popover.get('targetObject.container')) {
      popover.set('container', popover.get('targetObject.container'));
    }
    popover.appendTo(rootElement);
    return popover;
  }
});

Ember.Handlebars.helper('popover-component', Ember.Widgets.PopoverComponent);


})();

(function() {

Ember.Widgets.PopoverLinkComponent = Ember.Component.extend({
  classNames: ['popover-link'],
  classNameBindings: ['disabled'],
  placement: 'top',
  content: null,
  title: null,
  contentViewClass: null,
  disabled: false,
  popoverClassNames: [],
  rootElement: '.ember-application',
  fade: true,
  openOnLeftClick: true,
  openOnRightClick: false,
  hideOthers: false,
  _popover: null,
  willDestroyElement: function() {
    var _ref;
    if ((_ref = this.get('_popover')) != null) {
      _ref.destroy();
    }
    return this._super();
  },
  _contentViewClass: Ember.computed(function() {
    var contentViewClass;
    contentViewClass = this.get('contentViewClass');
    if (typeof contentViewClass === 'string') {
      return Ember.get(contentViewClass);
    }
    return contentViewClass;
  }).property('contentViewClass'),
  _openPopover: function() {
    var popover, popoverView;
    if (this.get('disabled')) {
      return;
    }
    popover = this.get('_popover');
    if (((popover != null ? popover.get('_state') : void 0) || (popover != null ? popover.get('state') : void 0)) === 'inDOM') {
      return popover.hide();
    } else {
      if (this.get('hideOthers')) {
        Ember.Widgets.PopoverComponent.hideAll();
      }
      popoverView = Ember.View.extend(Ember.Widgets.PopoverMixin, {
        layoutName: 'popover-link-popover',
        classNames: this.get('popoverClassNames'),
        controller: this,
        targetElement: this.get('element'),
        container: this.get('container'),
        placement: Ember.computed.alias('controller.placement'),
        title: Ember.computed.alias('controller.title'),
        contentViewClass: this.get('_contentViewClass'),
        fade: this.get('fade')
      });
      popover = popoverView.create();
      this.set('_popover', popover);
      return popover.appendTo(this.get('rootElement'));
    }
  },
  click: function() {
    if (!this.get('openOnLeftClick')) {
      return true;
    }
    this._openPopover();
    return false;
  },
  contextMenu: function() {
    if (!this.get('openOnRightClick')) {
      return true;
    }
    this._openPopover();
    return false;
  }
});

Ember.Handlebars.helper('popover-link-component', Ember.Widgets.PopoverLinkComponent);


})();

(function() {

Ember.Widgets.SelectOptionView = Ember.ListItemView.extend({
  tagName: 'li',
  templateName: 'select-item',
  layoutName: 'select-item-layout',
  classNames: 'ember-select-result-item',
  classNameBindings: Ember.A(['content.isGroupOption:ember-select-group', 'isHighlighted:highlighted']),
  labelPath: Ember.computed.alias('controller.optionLabelPath'),
  isHighlighted: Ember.computed(function() {
    return this.get('controller.highlighted') === this.get('content');
  }).property('controller.highlighted', 'content'),
  labelPathDidChange: Ember.observer(function() {
    var labelPath, path;
    labelPath = this.get('labelPath');
    path = labelPath ? "content." + labelPath : 'content';
    Ember.defineProperty(this, 'label', Ember.computed.alias(path));
    return this.notifyPropertyChange('label');
  }, 'content', 'labelPath'),
  processDropDownShown: function() {
    return this.get('controller').send('hideDropdown');
  },
  didInsertElement: function() {
    this._super();
    return this.labelPathDidChange();
  },
  updateContext: function(context) {
    this._super(context);
    return this.set('content', context);
  },
  click: function() {
    if (this.get('content.isGroupOption')) {
      return;
    }
    this.set('controller.selection', this.get('content'));
    this.get('controller').userDidSelect(this.get('content'));
    if (this.get('controller.showDropdown')) {
      this.processDropDownShown();
      return false;
    }
  },
  mouseEnter: function() {
    if (this.get('content.isGroupOption')) {
      return;
    }
    return this.set('controller.highlighted', this.get('content'));
  }
});

Ember.Widgets.SelectTooltipOptionView = Ember.Widgets.SelectOptionView.extend({
  attributeBindings: ['contentLabel:title'],
  contentLabel: Ember.computed(function() {
    var labelPath;
    labelPath = this.get('labelPath');
    return this.get("content." + labelPath);
  }).property('content', 'labelPath')
});

Ember.Widgets.SelectComponent = Ember.Component.extend(Ember.Widgets.BodyEventListener, Ember.AddeparMixins.ResizeHandlerMixin, Ember.Widgets.KeyboardHelper, {
  layoutName: 'select',
  classNames: 'ember-select',
  attributeBindings: Ember.A(['tabindex']),
  classNameBindings: Ember.A(['showDropdown:open', 'isDropup:dropup']),
  prompt: 'Select a Value',
  placeholder: void 0,
  disabled: false,
  hasFocus: false,
  showTooltip: true,
  highlightedIndex: -1,
  tabindex: 0,
  showDropdown: false,
  dropdownHeight: 300,
  rowHeight: 26,
  sortLabels: true,
  titleOnOptions: false,
  isSelect: false,
  isDropup: false,
  isDropdownMenuPulledRight: false,
  dropdownToggleIcon: 'fa fa-caret-down',
  buttonClass: 'btn btn-default',
  dropdownMenuClass: '',
  content: Ember.A([]),
  selection: null,
  query: '',
  optionLabelPath: '',
  optionValuePath: '',
  optionGroupPath: '',
  optionDefaultPath: '',
  selectMenuView: null,
  tooltipItemViewClass: 'Ember.Widgets.SelectTooltipOptionView',
  originalItemViewClass: 'Ember.Widgets.SelectOptionView',
  acceptedKeys: Ember.computed(function() {
    var keySet, mappedKeys, _i, _j, _results, _results1;
    mappedKeys = Ember.Map.create();
    keySet = _.union([this.KEY_CODES.ENTER, this.KEY_CODES.SPACEBAR], [this.KEY_CODES.DOWN, this.KEY_CODES.UP], (function() {
      _results = [];
      for (_i = 65; _i <= 90; _i++){ _results.push(_i); }
      return _results;
    }).apply(this), (function() {
      _results1 = [];
      for (_j = 97; _j <= 122; _j++){ _results1.push(_j); }
      return _results1;
    }).apply(this), [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
    keySet.forEach(function(key) {
      return mappedKeys[key] = true;
    });
    return mappedKeys;
  }).property(),
  itemViewClass: Ember.computed(function() {
    if (this.get('showTooltip')) {
      return this.get('tooltipItemViewClass');
    } else {
      return this.get('originalItemViewClass');
    }
  }).property('showTooltip'),
  emptyContentView: null,
  willDestroy: function() {
    var contentProxy, propertyName;
    propertyName = 'contentProxy';
    if (this.cacheFor(propertyName)) {
      contentProxy = this.get(propertyName);
      contentProxy.destroy();
    }
    return this._super();
  },
  updateDropdownLayout: Ember.observer(function() {
    var dropdownButton, dropdownButtonHeight, dropdownButtonOffset, dropdownMargin, dropdownMenu, dropdownMenuBottom, dropdownMenuHeight, dropdownMenuOffset, dropdownMenuWidth, dropupMenuTop;
    if ((this.get('_state') || this.get('state')) !== 'inDOM' || this.get('showDropdown') === false) {
      return;
    }
    this.$('.js-dropdown-menu').css('visibility', 'hidden');
    dropdownButton = this.$('.js-dropdown-toggle')[0];
    dropdownButtonHeight = this.$(dropdownButton).outerHeight();
    dropdownButtonOffset = this.$(dropdownButton).offset();
    dropdownMenu = this.$('.js-dropdown-menu')[0];
    dropdownMenuHeight = this.$(dropdownMenu).outerHeight();
    dropdownMenuWidth = this.$(dropdownMenu).outerWidth();
    dropdownMenuOffset = this.$(dropdownMenu).offset();
    dropdownMargin = 15;
    if (this.get('isDropup')) {
      dropdownMenuBottom = dropdownButtonOffset.top + dropdownButtonHeight + dropdownMenuHeight + dropdownMargin;
    } else {
      dropdownMenuBottom = dropdownMenuOffset.top + dropdownMenuHeight;
    }
    dropupMenuTop = dropdownButtonOffset.top - dropdownMenuHeight - dropdownMargin;
    this.set('isDropup', dropupMenuTop > window.scrollY && dropdownMenuBottom > window.innerHeight);
    this.set('isDropdownMenuPulledRight', dropdownButtonOffset.left + dropdownMenuWidth + dropdownMargin > window.innerWidth);
    return this.$('.js-dropdown-menu').css('visibility', 'visible');
  }, 'showDropdown'),
  onResizeEnd: function() {
    return Ember.run(this, this.updateDropdownLayout);
  },
  itemView: Ember.computed(function() {
    var itemViewClass;
    itemViewClass = this.get('itemViewClass');
    if (typeof itemViewClass === 'string') {
      return Ember.get(itemViewClass);
    }
    return itemViewClass;
  }).property('itemViewClass'),
  selectedItemView: Ember.computed(function() {
    return this.get('itemView').extend({
      tagName: 'span',
      labelPath: Ember.computed.alias('controller.optionLabelPath'),
      context: Ember.computed.alias('controller.selection'),
      /**
      * Note: This view is an extension of the view used to display
      * each option in the dropdown list.
      * We would like to override the click event in the SelectOptionView
      * so that we can make sure that only when we click on a new option in the
      * list, the click event in the SelectOptionView is fired, not when we open
      * the dropdown. It will allow us to trigger the change item event when we
      * click to select a new option in the dropdown.
      * @override
      */

      click: Ember.K
    });
  }).property('itemView'),
  optionLabelPathChanges: Ember.on('init', Ember.observer(function() {
    var labelPath, path;
    labelPath = this.get('optionLabelPath');
    path = labelPath ? "selection." + labelPath : 'selection';
    return Ember.defineProperty(this, 'selectedLabel', Ember.computed.alias(path));
  }, 'selection', 'optionLabelPath')),
  searchView: Ember.TextField.extend({
    placeholder: Ember.computed.alias('parentView.placeholder'),
    valueBinding: 'parentView.query',
    showDropdownDidChange: Ember.observer(function() {
      if (this.get('parentView.showDropdown')) {
        return Ember.run.schedule('afterRender', this, function() {
          if ((this.get('_state') || this.get('state')) === 'inDOM') {
            return this.$().focus();
          }
        });
      } else {
        return this.set('value', '');
      }
    }, 'parentView.showDropdown')
  }),
  listView: Ember.ListView.extend({
    style: Ember.computed(function() {
      var height;
      height = Math.min(this.get('height'), this.get('totalHeight'));
      return "height: " + height + "px";
    }).property('height', 'totalHeight')
  }),
  preparedContent: Ember.computed(function() {
    if (this.get('sortLabels')) {
      return this.get('sortedFilteredContent');
    } else {
      return this.get('filteredContent');
    }
  }).property('sortLabels', 'filteredContent.[]', 'sortedFilteredContent.[]', 'filteredContent', 'sortedFilteredContent'),
  contentProxy: Ember.computed(function() {
    var ContentProxy, observableString, optionLabelPath;
    optionLabelPath = this.get('optionLabelPath');
    if (optionLabelPath) {
      observableString = "content.@each." + optionLabelPath;
    } else {
      observableString = 'content.[]';
    }
    ContentProxy = Ember.ObjectProxy.extend({
      _select: null,
      content: Ember.computed.alias('_select.content'),
      query: Ember.computed.alias('_select.query'),
      filteredContent: Ember.computed(function() {
        var query, selectComponent;
        selectComponent = this.get('_select');
        query = this.get('query');
        return (this.get('content') || []).filter(function(item) {
          return selectComponent.matcher(query, item);
        });
      }).property(observableString, 'query'),
      sortedFilteredContent: Ember.computed(function() {
        return _.sortBy(this.get('filteredContent'), function(item) {
          var _ref;
          return (_ref = Ember.get(item, optionLabelPath)) != null ? _ref.toLowerCase() : void 0;
        });
      }).property('filteredContent.[]')
    });
    return ContentProxy.create({
      _select: this
    });
  }).property('optionLabelPath'),
  filteredContent: Ember.computed.alias('contentProxy.filteredContent'),
  sortedFilteredContent: Ember.computed.alias('contentProxy.sortedFilteredContent'),
  groupedContent: Ember.computed(function() {
    var content, groups, path, result;
    path = this.get('optionGroupPath');
    content = this.get('preparedContent');
    if (!path) {
      return Ember.A(content);
    }
    groups = _.groupBy(content, function(item) {
      return Ember.get(item, path);
    });
    result = Ember.A();
    _.keys(groups).sort().forEach(function(key) {
      result.pushObject(Ember.Object.create({
        isGroupOption: true,
        name: key
      }));
      return result.pushObjects(groups[key]);
    });
    return result;
  }).property('preparedContent.[]', 'optionGroupPath', 'labels.[]'),
  isLoading: false,
  isLoaded: Ember.computed.not('isLoading'),
  filteredContentIsEmpty: Ember.computed.empty('filteredContent'),
  contentIsEmpty: Ember.computed.empty('content'),
  hasNoResults: Ember.computed.and('isLoaded', 'filteredContentIsEmpty'),
  value: Ember.computed(function(key, value) {
    var content, selection, valuePath;
    if (arguments.length === 2) {
      valuePath = this.get('optionValuePath');
      selection = value;
      content = this.get('content');
      if (valuePath && content) {
        if (typeof content.findProperty === 'function') {
          selection = content.findProperty(valuePath, value);
        } else {
          selection = _.find(content, valuePath, value);
        }
      }
      this.set('selection', selection);
      return value;
    } else {
      valuePath = this.get('optionValuePath');
      selection = this.get('selection');
      if (valuePath) {
        return Ember.get(selection, valuePath);
      } else {
        return selection;
      }
    }
  }).property('selection'),
  didInsertElement: function() {
    this._super();
    return this.setDefaultSelection();
  },
  matcher: function(searchText, item) {
    var escapedSearchText, label, regex, trimmedLabel, trimmedSearchText;
    if (!searchText) {
      return true;
    }
    label = Ember.get(item, this.get('optionLabelPath'));
    if (!label) {
      return false;
    }
    trimmedLabel = label.trim().replace(/\s{2,}/g, ' ');
    trimmedSearchText = searchText.trim().replace(/\s{2,}/g, ' ');
    escapedSearchText = trimmedSearchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    regex = new RegExp(escapedSearchText, 'i');
    return regex.test(trimmedLabel);
  },
  setDefaultSelection: Ember.observer(function() {
    var content, defaultPath;
    if (this.get('selection')) {
      return;
    }
    content = this.get('content');
    defaultPath = this.get('optionDefaultPath');
    if (!(content && defaultPath)) {
      return;
    }
    return this.set('selection', content.findProperty(defaultPath));
  }, 'content.[]'),
  selectableOptionsDidChange: Ember.observer(function() {
    var highlighted;
    if (this.get('showDropdown')) {
      highlighted = this.get('highlighted');
      if (!this.get('selectableOptions').contains(highlighted)) {
        return this.set('highlighted', this.get('selectableOptions.firstObject'));
      }
    }
  }, 'selectableOptions.[]', 'showDropdown'),
  /*
  # SELECTION RELATED
  */

  KEY_EVENTS: {
    8: 'deletePressed',
    27: 'escapePressed',
    13: 'enterPressed',
    38: 'upArrowPressed',
    40: 'downArrowPressed',
    9: 'tabPressed'
  },
  selectableOptions: Ember.computed(function() {
    return Ember.A((this.get('groupedContent') || []).filter(function(item) {
      return !Ember.get(item, 'isGroupOption');
    }));
  }).property('groupedContent.[]'),
  shouldEnsureVisible: true,
  highlighted: Ember.computed(function(key, value) {
    var content, index;
    content = this.get('selectableOptions') || Ember.A();
    value = value || Ember.A();
    if (arguments.length === 1) {
      index = this.get('highlightedIndex');
      value = content.objectAt(index);
    } else {
      index = content.indexOf(value);
      this.setHighlightedIndex(index, this.get('shouldEnsureVisible'));
    }
    return value;
  }).property('selectableOptions.[]', 'highlightedIndex', 'shouldEnsureVisible'),
  setFocus: function() {
    var activeElem, selectComponent;
    activeElem = document.activeElement;
    selectComponent = this.$()[0];
    if (selectComponent.contains(activeElem) || selectComponent === activeElem) {
      return this.set('hasFocus', true);
    } else {
      return this.set('hasFocus', false);
    }
  },
  bodyClick: function() {
    return this.send('hideDropdown');
  },
  keyDown: function(event) {
    var acceptedKeys, map, method, _ref;
    if (this.get('isDestroyed') || this.get('isDestroying')) {
      return;
    }
    this.setFocus();
    acceptedKeys = this.get('acceptedKeys');
    if (acceptedKeys[event.keyCode] && !this.get('showDropdown')) {
      this.set('showDropdown', true);
      return;
    }
    map = this.get('KEY_EVENTS');
    method = map[event.keyCode];
    if (method) {
      return (_ref = this.get(method)) != null ? _ref.apply(this, arguments) : void 0;
    }
  },
  deletePressed: Ember.K,
  escapePressed: function(event) {
    if (this.get('showDropdown')) {
      this.send('hideDropdown');
      this.$().focus();
      return event.preventDefault();
    }
  },
  tabPressed: function(event) {
    if (this.get('showDropdown')) {
      return this.send('hideDropdown');
    }
  },
  enterPressed: function(event) {
    var item, _ref;
    item = this.get('highlighted');
    if (!Ember.isEmpty(item)) {
      this.set('selection', item);
    }
    if (!Ember.isEmpty(item)) {
      this.userDidSelect(item);
    }
    if ((_ref = this.$()) != null) {
      _ref.focus();
    }
    if (this.get('showDropdown')) {
      this.send('hideDropdown');
    }
    return event.preventDefault();
  },
  upArrowPressed: function(event) {
    var index, sel;
    sel = this.get('highlightedIndex');
    index = event.ctrlKey || event.metaKey ? 0 : sel - 1;
    this.setHighlightedIndex(index, true);
    return event.preventDefault();
  },
  downArrowPressed: function(event) {
    var clen, index, sel;
    sel = this.get('highlightedIndex');
    clen = this.get('selectableOptions.length');
    index = event.ctrlKey || event.metaKey ? clen - 1 : sel + 1;
    this.setHighlightedIndex(index, true);
    return event.preventDefault();
  },
  setHighlightedIndex: function(index, ensureVisible) {
    if (!this.ensureIndex(index)) {
      return;
    }
    this.set('highlightedIndex', index);
    if (ensureVisible) {
      return this.ensureVisible(index);
    }
  },
  ensureIndex: function(index) {
    var clen;
    clen = this.get('selectableOptions.length');
    return index >= 0 && index < clen;
  },
  ensureVisible: function(index) {
    var $listView, endIndex, item, listView, newIndex, numRows, startIndex;
    $listView = this.$('.ember-list-view');
    listView = Ember.View.views[$listView.attr('id')];
    if (!listView) {
      return;
    }
    startIndex = listView._startingIndex();
    numRows = listView._childViewCount() - 1;
    endIndex = startIndex + numRows;
    item = this.get('selectableOptions').objectAt(index);
    newIndex = this.get('groupedContent').indexOf(item);
    if (index === 0) {
      return $listView.scrollTop(0);
    } else if (newIndex < startIndex) {
      return $listView.scrollTop(newIndex * this.get('rowHeight'));
    } else if (newIndex >= endIndex) {
      return $listView.scrollTop((newIndex - numRows + 1.5) * this.get('rowHeight'));
    }
  },
  userDidSelect: function(selection) {
    return this.sendAction('userSelected', selection);
  },
  focusIn: function(event) {
    return this.set('hasFocus', true);
  },
  focusOut: function(event) {
    return this.set('hasFocus', false);
  },
  actions: {
    toggleDropdown: function(event) {
      if (this.get('disabled')) {
        return;
      }
      return this.toggleProperty('showDropdown');
    },
    hideDropdown: function(event) {
      if (this.get('isDestroyed') || this.get('isDestroying')) {
        return;
      }
      return this.set('showDropdown', false);
    }
  }
});

Ember.Handlebars.helper('select-component', Ember.Widgets.SelectComponent);


})();

(function() {

Ember.Widgets.MultiSelectOptionView = Ember.View.extend({
  tagName: 'li',
  templateName: 'multi-select-item',
  classNames: 'ember-select-search-choice',
  labelPath: Ember.computed.alias('controller.optionLabelPath'),
  didInsertElement: function() {
    this._super();
    return this.labelPathDidChange();
  },
  labelPathDidChange: Ember.observer(function() {
    var labelPath, path;
    labelPath = this.get('labelPath');
    path = labelPath ? "context." + labelPath : 'context';
    Ember.defineProperty(this, 'label', Ember.computed.alias(path));
    return this.notifyPropertyChange('label');
  }, 'context', 'labelPath')
});

Ember.Widgets.MultiSelectTooltipItemView = Ember.Widgets.SelectTooltipOptionView.extend({
  processDropDownShown: function() {
    this._super();
    return this.get('controller').focusTextField();
  }
});

Ember.Widgets.MultiSelectItemView = Ember.Widgets.SelectOptionView.extend({
  processDropDownShown: function() {
    this._super();
    return this.get('controller').focusTextField();
  }
});

Ember.Widgets.MultiSelectComponent = Ember.Widgets.SelectComponent.extend({
  layoutName: 'multi-select',
  selections: void 0,
  choicesFieldClass: '',
  placeholder: void 0,
  persistentPlaceholder: void 0,
  resetQueryOnSelect: true,
  showTooltip: true,
  tooltipItemViewClass: 'Ember.Widgets.MultiSelectTooltipItemView',
  originalItemViewClass: 'Ember.Widgets.MultiSelectItemView',
  tabindex: -1,
  values: Ember.computed(function(key, value) {
    var selections, valuePath;
    if (arguments.length === 2) {
      if (!value) {
        return;
      }
      valuePath = this.get('optionValuePath');
      this.set('selections', Ember.A(this.get('content').filter(function(item) {
        return value.contains(Ember.get(item, valuePath));
      })));
      return value;
    } else {
      valuePath = this.get('optionValuePath');
      selections = this.get('selections');
      if (valuePath) {
        return selections.getEach(valuePath);
      } else {
        return selections;
      }
    }
  }).property('selections.[]'),
  selectionItemView: Ember.Widgets.MultiSelectOptionView,
  invisiblePlaceholderText: Ember.computed(function() {
    if (this.get('query')) {
      return this.get('query');
    }
    if (this.get('selections.length')) {
      return this.get('persistentPlaceholder');
    }
    return this.get('placeholder') || this.get('persistentPlaceholder');
  }).property('query', 'placeholder', 'persistentPlaceholder', 'selections.length'),
  searchView: Ember.TextField.extend({
    "class": 'ember-select-input',
    valueBinding: 'parentView.query',
    placeholder: Ember.computed(function() {
      if (this.get('parentView.selections.length')) {
        return this.get('parentView.persistentPlaceholder');
      }
      return this.get('parentView.placeholder') || this.get('parentView.persistentPlaceholder');
    }).property('parentView.placeholder', 'parentView.persistentPlaceholder', 'parentView.selections.length'),
    click: function(event) {
      return this.set('parentView.showDropdown', true);
    }
  }),
  preparedContent: Ember.computed(function() {
    var basedArray, content, emberArray, selections, sortFn;
    content = this.get('content');
    selections = this.get('selections');
    if (!(content && selections)) {
      return Ember.A([]);
    }
    emberArray = Em.A();
    sortFn = function(item) {
      return !emberArray.contains.call(selections, item);
    };
    if (this.get('sortLabels')) {
      basedArray = this.get('sortedFilteredContent');
    } else {
      basedArray = this.get('filteredContent');
    }
    return emberArray.filter.call(basedArray, sortFn);
  }).property('content.[]', 'filteredContent.[]', 'sortedFilteredContent.[]', 'selections.[]', 'sortLabels', 'filteredContent', 'sortedFilteredContent'),
  selectionDidChange: Ember.observer(function() {
    var selection, selections;
    selections = this.get('selections');
    selection = this.get('selection');
    if (this.get('resetQueryOnSelect')) {
      this.set('query', '');
    }
    this.set('selection', null);
    if (!Ember.isEmpty(selection) && !selections.contains(selection)) {
      return selections.pushObject(selection);
    }
  }, 'selection', 'selections.[]'),
  focusTextField: function() {
    var _ref;
    return (_ref = this.$('.ember-text-field')) != null ? _ref.focus() : void 0;
  },
  didInsertElement: function() {
    this._super();
    if (!this.get('selections')) {
      this.set('selections', Ember.A([]));
    }
    if (!this.get('values')) {
      return this.set('values', Ember.A([]));
    }
  },
  deletePressed: function(event) {
    if (event.target.selectionStart === 0 && event.target.selectionEnd === 0) {
      this.removeSelectItem(this.get('selections.lastObject'));
      return event.preventDefault();
    }
  },
  removeSelectItem: function(item) {
    var dropdownIsShowing;
    dropdownIsShowing = this.get('showDropdown');
    this.focusTextField();
    if (!dropdownIsShowing) {
      this.send('hideDropdown');
    }
    return this.get('selections').removeObject(item);
  },
  escapePressed: function(event) {
    if (this.get('showDropdown')) {
      this.focusTextField();
      this.send('hideDropdown');
      return event.preventDefault();
    }
  },
  enterPressed: function(event) {
    this._super(event);
    return this.focusTextField();
  },
  actions: {
    removeSelectItem: function(item) {
      return this.removeSelectItem(item);
    }
  }
});

Ember.Handlebars.helper('multi-select-component', Ember.Widgets.MultiSelectComponent);


})();

(function() {

Ember.Widgets.RadioButtonComponent = Ember.Component.extend({
  attributeBindings: ['type', 'checked', 'disabled'],
  classNames: ['radio-input'],
  tagName: 'input',
  type: 'radio',
  checked: Ember.computed.alias('parentView.checked'),
  disabled: Ember.computed.alias('parentView._disabled')
});

Ember.Widgets.RadioButtonWrapperComponent = Ember.Component.extend({
  layoutName: 'radio-button-layout',
  value: null,
  disabled: false,
  selectedValue: Ember.computed.alias('parentView.selectedValue'),
  classNames: ['radio-button'],
  checked: false,
  _disabled: Ember.computed.or('parentView.disabled', 'disabled'),
  selectedValueChanged: Ember.on('init', Ember.observer(function() {
    var selectedValue;
    selectedValue = this.get('selectedValue');
    if (!Ember.isEmpty(selectedValue) && this.get('value') === selectedValue) {
      return this.set('checked', true);
    } else {
      return this.set('checked', false);
    }
  }, 'selectedValue')),
  click: function(event) {
    if (this.get('_disabled')) {
      return;
    }
    this.set('checked', true);
    return this.set('selectedValue', this.get('value'));
  }
});

Ember.Widgets.RadioButtonGroupComponent = Ember.Component.extend({
  classNames: ['ember-radio-button-group'],
  selectedValue: null,
  disabled: false,
  selectedValueChanged: Ember.on('init', Ember.observer(function() {
    return this.sendAction('action', this.get('selectedValue'));
  }, 'selectedValue'))
});

Ember.Handlebars.helper('radio-button-group-component', Ember.Widgets.RadioButtonGroupComponent);

Ember.Handlebars.helper('radio-button', Ember.Widgets.RadioButtonWrapperComponent);


})();

(function() {

/**
 * A mixin to convert between color name and hex value.
 * It is used in color picker component and sub-components.
 * @mixin
*/

Ember.Widgets.ColorPickerMixin = Ember.Mixin.create({
  colorNameToHexMap: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /**
   * Convert RGB color to Hex string
   * @param  {number} r Red channel, integer value range [0..255]
   * @param  {number} g Green channel, integer value range [0..255]
   * @param  {number} b Blue channel, integer value range [0..255]
   * @return {string}
  */

  rgbToHex: function(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },
  /**
   * Function to convert from color name to hex string value
   * @param  {string} color the name of a color
   * @return {string}       the hex value of the input color name
  */

  colorToHex: function(color) {
    var blue, colorNameToHexMap, digits, green, opacity, red;
    if (!color) {
      return color;
    }
    if (color.substr(0, 1) === "#" || color === "transparent") {
      return color.toLowerCase();
    }
    colorNameToHexMap = this.get('colorNameToHexMap');
    if (color in colorNameToHexMap) {
      return colorNameToHexMap[color.toLowerCase()];
    }
    digits = /(.*?)rgb(a)?\((\d+), (\d+), (\d+)(, (\d+))?\)/.exec(color);
    if ((digits != null ? digits.length : void 0) === 8) {
      red = parseInt(digits[3]);
      green = parseInt(digits[4]);
      blue = parseInt(digits[5]);
      opacity = parseInt(digits[7]);
      if (opacity === 0) {
        return "transparent";
      }
      return this.rgbToHex(red, green, blue);
    }
    return null;
  }
});


})();

(function() {

/**
 * ColorPickerComponent
 *
 * This is the default color picker component. The color picker button showing
 * the selected color is split as a partial so that it can be customized
 * easily. The dropdown component containing the color palette will only be
 * rendered when needed.
 *
 * @class
 * @augments {Ember.Component, Ember.Widgets.ColorPickerMixin}
*/

Ember.Widgets.ColorPickerComponent = Ember.Component.extend(Ember.Widgets.ColorPickerMixin, {
  layoutName: 'color-picker',
  classNames: ['color-picker-button'],
  colorPickerPlacement: 'right',
  dropdownClass: null,
  /**
   * The color palette preset. It is passed in from the ColorPickerComponent.
   * @type {array} an array of two arrays of hex color strings. The two arrays
   * corresponding to the two color palettes displayed in the dropdown.
  */

  colorRows: Ember.computed(function() {
    return Ember.A([Ember.A(['#000000', '#111111', '#434343', '#666666', '#999999', '#AAAAAA', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF']), Ember.A(['#001F3F', '#0074D9', '#7FDBFF', '#39CCCC', '#2ECC40', '#01FF70', '#FFDC00', '#FF851B', '#FF4136', '#85144B', '#B10DC9', 'transparent'])]);
  }),
  /**
   * This is the partial template for the colorPicker button.
   * It allows developers to override/style this component differently
   * @type {string}
  */

  colorPickerButtonPartial: 'color-picker-button-partial',
  /**
   * This is a boolean to control if we should render the colorPicker dropdown
   * or not. Instead of hiding it using CSS, we use this flag to control the
   * rendering.
   * @type {boolean}
  */

  isDropdownOpen: false,
  selectedColor: '#0074D9',
  customColor: '',
  /**
   * The property indicates that we have a custom color selected or a color
   * from color palette selected.
   * @type {boolean}
  */

  isCustomColor: Ember.computed.notEmpty('customColor'),
  /**
   * Determines whether the color is transparent so the cell renders the
   * transparent style properly
   * @type {Boolean}
  */

  isColorTransparent: Ember.computed.equal('selectedColorRGB', 'transparent'),
  selectedColorRGB: Ember.computed(function() {
    var selectedColor;
    selectedColor = this.get('selectedColor');
    return this.colorToHex(selectedColor);
  }).property('selectedColor'),
  actions: {
    /**
     * This action is bound to the colorPicker button to hide/show the dropdown
     * when users click on it.
    */

    toggleDropdown: function() {
      return this.toggleProperty('isDropdownOpen');
    },
    /**
     * Send an action outside of the component to inform that a new
     * color is select and also to hide the dropdown.
     * @param {String} selection the selected color hex string
    */

    userSelected: function(selection) {
      this.sendAction('userSelected', selection);
      return this.set('isDropdownOpen', false);
    },
    /**
     * Hide the color picker dropdown
    */

    hideDropdown: function() {
      return this.set('isDropdownOpen', false);
    },
    /**
     * Set the selected color and update the custom color accordingly
     * @param {string}  color the selected color to be updated
     * @param {boolean} isCustomColor the flag to indicate if it is a custom
     *                  color
    */

    setSelectedColor: function(color, isCustomColor) {
      this.set('selectedColor', color);
      if (isCustomColor) {
        return this.set('customColor', color);
      } else {
        return this.set('customColor', '');
      }
    }
  }
});

Ember.Widgets.ColorPicker = Ember.Widgets.ColorPickerComponent;


})();

(function() {

/**
 * ColorPickerDropdownComponent
 *
 * This is an internal-use component to control the logic of the dropdown of
 * the color picker. It contains the color palette and the custom color input
 * @class
 * @augments {Ember.Component, Ember.Widgets.BodyEventListener,
 *            Ember.Widgets.ColorPickerMixin}
*/

var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Ember.Widgets.ColorPickerDropdownComponent = Ember.Component.extend(Ember.Widgets.BodyEventListener, Ember.Widgets.ColorPickerMixin, {
  layoutName: 'color-picker-dropdown',
  dropdownClass: null,
  selectedColor: '',
  customColor: '',
  /**
   * The color palette preset. It is passed in from the ColorPickerComponent.
   * @type {array}
  */

  colorRows: Ember.computed(function() {
    return Ember.A();
  }),
  setCustomColor: Ember.on('init', Ember.observer(function() {
    var selectedColor;
    selectedColor = this.get('selectedColor');
    selectedColor = this.colorToHex(selectedColor);
    if (this.get('colorRows').find(function(row) {
      return __indexOf.call(row.invoke('toLowerCase'), selectedColor) >= 0;
    })) {
      return this.set('customColor', '');
    }
    return this.set('customColor', selectedColor);
  }, 'selectedColor', 'colorRows')),
  /**
   * This is the formatted string of the input color, for which a hashtag "#"
   * is automatically added if it is not present.
   * @type {string}
  */

  formattedCustomColor: Ember.computed(function() {
    var customColor;
    customColor = this.get('customColor').trim();
    if (customColor.charAt(0) !== '#') {
      customColor = '#' + customColor;
    }
    return customColor;
  }).property('customColor'),
  isCustomColorValid: Ember.computed(function() {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.get('formattedCustomColor'));
  }).property('formattedCustomColor'),
  customColorCSS: Ember.computed(function() {
    return "background-color: " + (this.get('formattedCustomColor'));
  }).property('formattedCustomColor'),
  userDidSelect: function(selection) {
    return this.sendAction('userSelected', selection);
  },
  /**
   * Handle the body click event, i.e. click outside of the component. Here,
   * an action is sent up to inform the color picker component to close the
   * dropdown.
   * @override
   * @function
  */

  bodyClick: function() {
    return this.sendAction('hideDropdown');
  },
  actions: {
    setColor: function(color) {
      this.set('customColor', '');
      this.set('selectedColor', color);
      this.sendAction('setSelectedColor', color, false);
      return this.userDidSelect(color);
    },
    setCustomColor: function() {
      var color;
      if (this.get('isCustomColorValid')) {
        color = this.get('formattedCustomColor');
        this.sendAction('setSelectedColor', color, true);
        return this.userDidSelect(color);
      }
    }
  }
});


})();

(function() {

/**
 * ColorPickerCell
 *
 * This is an internal-use view to control the logic of a color cell in
 * the color picker.
 * @class
 * @augments {Ember.View, Ember.Widgets.StyleBindingMixin,
 *            Ember.Widgets.ColorPickerMixin}
*/

Ember.Widgets.ColorPickerCellComponent = Ember.Component.extend(Ember.Widgets.StyleBindingsMixin, Ember.Widgets.ColorPickerMixin, {
  layoutName: 'color-picker-cell',
  classNames: ['pull-left', 'color-picker-cell'],
  classNameBindings: 'isActive:active:inactive',
  styleBindings: 'color:background-color',
  /**
   * The color name of the cell, e.g. 'yellow'
   * @see  Ember.Widgets.ColorPickerMixin
   * @type { string }
  */

  color: null,
  /**
   * Determines whether the state of the cell is active if the picker selected
   * color matches this cell's color
   * @type {Boolean}
  */

  isActive: Ember.computed(function() {
    return this.get('selectedColor') === this.get('color');
  }).property('selectedColor', 'color'),
  click: function() {
    return this.sendAction('setColor', this.get('color'));
  }
});


})();

(function() {

Ember.Widgets.TypeaheadComponent = Ember.Widgets.SelectComponent.extend({
  layoutName: 'typeahead',
  searchFieldClass: 'form-control',
  disabled: false,
  searchView: Ember.TextField.extend({
    "class": 'ember-select-input',
    valueBinding: 'parentView.query',
    focusIn: function(event) {
      return this.set('parentView.showDropdown', true);
    }
  }),
  userDidSelect: function(selection) {
    this._super(selection);
    return this.set('query', this.get('selection'));
  }
});

Ember.Handlebars.helper('typeahead-component', Ember.Widgets.TypeaheadComponent);


})();

(function() {

/**
 * Register all the color picker component and sub-components to the application
 * when loading, so that we can use the dash-style in handlebars.
*/

Ember.onLoad('Ember.Application', function(application) {
  var name;
  name = 'ember-widgets';
  if (application.initializers[name]) {
    return;
  }
  return application.initializer({
    name: name,
    initialize: function(container, application) {
      application.register('component:color-picker', Ember.Widgets.ColorPickerComponent);
      application.register('component:color-picker-dropdown', Ember.Widgets.ColorPickerDropdownComponent);
      return application.register('component:color-picker-cell', Ember.Widgets.ColorPickerCellComponent);
    }
  });
});


})();