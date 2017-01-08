'use strict';

/*global require*/
var defaultValue = require('terriajs-cesium/Source/Core/defaultValue');
var knockout = require('terriajs-cesium/Source/ThirdParty/knockout');

/**
 * A mode for showing help screens, which move around the UI, pointing out features to the user.
 *
 * @alias HelpScreen
 * @constructor
 *
 * @param {Object} [options] Object with the following properties:
 * @param {Function} [options.onNext] The function to invoke when the user wants to go to next screen.
 * @param {String} [options.message] The message to display in the help screen.
 * @param {Number} [options.currentScreenNumber] The screen that this represents, e.g. the second in a series (zero
 *                                               indexed)
 * @param {Number} [options.totalNumberOfScreens] Number of screens in this help series.
 * @param {Number} [options.left] Left screen coords in pixels, for positioning dialog.
 * @param {Number} [options.top] Top screen coords in pixels, for positioning dialog.
 * TODO more options!!
 * @param {String} [options.caret] Direction caret should point. Valid options are: top, left.
 **/
function HelpScreen(options) {
    /**
     * Gets or sets a callback that is invoked when the user goes to the next screen. If this property is undefined,
     * the interaction mode cannot be canceled.
     * @type {Function}
     */
    this.onNext = defaultValue(options.onNext, undefined);

    /**
     * Gets or sets the html formatted message displayed on the help screen.
     * @type {Function}
     */
    this.message = function() { return options.message; };

    /**
     * The component id of the highlighted component this screen is associated with.
     * @type {String}
     */
    this.highlightedComponentId = defaultValue(options.highlightedComponentId, undefined);

    /**
     * Which is the current screen the user is on?
     * @type {Number}
     */
    this.currentScreenNumber = defaultValue(options.currentScreenNumber, 0);

    /**
     * How many screens in this series?
     * @type {Number}
     */
    this.totalNumberOfScreens = defaultValue(options.totalNumberOfScreens, 0);

    /**
     * Bounding rectangle for element help is describing
     */
    this.rectangle = options.rectangle;

    /**
     * Left position relative to rectangle
     * @type {RelativePosition}
     */
    this.positionLeft = defaultValue(options.positionLeft, 0);

    /**
     * Top position relative to rectangle
     * @type {RelativePosition}
     */
    this.positionTop = defaultValue(options.positionTop, 0);

    /**
     * Left offset in pixels, relative to positionLeft
     * @type {Number}
     */
    this.offsetLeft = defaultValue(options.offsetLeft, 0);

    /**
     * Top offset in pixels, relative to positionTop
     * @type {Number}
     */
    this.offsetTop = defaultValue(options.offsetTop, 0);

    /**
     * Left screen coords in pixels, for positioning dialog.
     * @type {Number}
     */
    this.left = defaultValue(options.left, undefined);

    /**
     * Top screen coords in pixels, for positioning dialog.
     * @type {Number}
     */
    this.top = defaultValue(options.top, undefined);

    /**
     * Top position of the caret in pixels
     * @type {Number}
     */
    this.caretTop = defaultValue(options.caretTop, -5);

    /**
     * Left position of the caret in pixels
     * @type {Number}
     */
    this.caretLeft = defaultValue(options.caretLeft, -5);

    knockout.track(this, ['message']);
}

module.exports = HelpScreen;
