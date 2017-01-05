'use strict';

/**
 * A collection of help screens and metadata, for a single sequence of help. TODO
 *
 * @alias HelpSequence
 * @constructor
 * TODO more options!!
 * @param {String} [options.caret] Direction caret should point. Valid options are: top, left.
 **/
function HelpSequence(options) {
    /**
     * Gets or sets a callback that is invoked when the user goes to the next screen. If this property is undefined,
     * the interaction mode cannot be canceled.
     * @type {Function}
     */
    this.screens = options.screens;

    /**
     * Gets or sets the html formatted message displayed on the help screen.
     * @type {Function}
     */
    this.title = options.title;
}

module.exports = HelpSequence;
