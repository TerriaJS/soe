'use strict';

/*global require*/
var defaultValue = require('terriajs-cesium/Source/Core/defaultValue');
var knockout = require('terriajs-cesium/Source/ThirdParty/knockout');

/**
 * TODO
 *
 * @alias HelpScreen
 * @constructor
 *
 * @param {Object} [options] Object with the following properties:
 * @param {Function} [options.onCancel] The function to invoke if the user cancels the interaction mode.  The cancel button will
 *                                      only appear if this property is specified.
 * @param {String} [options.message] The message to display over the map while the interaction mode is active.
 **/
function HelpScreen(options) {
    /**
     * Gets or sets a callback that is invoked when the user cancels the interaction mode.  If this property is undefined,
     * the interaction mode cannot be canceled.
     * @type {Function}
     */
    this.message = options.message;
    this.highlightedComponentId = options.highlightedComponentId;
    this.left = options.left;
    this.top = options.top;
    this.caret = options.caret;
}

module.exports = HelpScreen;
