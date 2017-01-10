'use strict';

/*global require*/
var defaultValue = require('terriajs-cesium/Source/Core/defaultValue');
var knockout = require('terriajs-cesium/Source/ThirdParty/knockout');

var RelativePosition = {RECT_LEFT: 0, RECT_RIGHT: 1, RECT_TOP: 2, RECT_BOTTOM: 3};

/**
 * A mode for showing help screens, which move around the UI, pointing out features to the user.
 *
 * @alias HelpSequences
 * @constructor
 **/
var HelpSequences = function(options) {
    /**
     * List of HelpSequence
     */
    this.sequences = [];

    /**
     * Title in the help dropdown.
     */
    this.menuTitle = defaultValue(options.menuTitle, 'Help');

    /**
     * Which screen is currently showing
     */
    this.currentScreen = undefined;

    this.cancel = false;

    knockout.track(this, ['currentScreen']);
};

HelpSequences.RelativePosition = RelativePosition;
module.exports = HelpSequences;
