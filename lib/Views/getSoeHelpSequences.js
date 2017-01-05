'use strict';

import HelpScreen from './HelpScreen';
import HelpSequence from './HelpSequence';
import HelpSequences from './HelpSequences';

/**
 * Set up SOE specific help screens.
 **/
const getSoeHelpSequences = function() {
    var options = {
        menuTitle: " What would you like to do? "
    };
    let helpSequences = new HelpSequences(options);

    helpSequences.sequences.push(getSoeLoadDataSequence());

    return helpSequences;
};

/**
 * @private
 */
function getSoeLoadDataSequence() {
    var screenOneMessage = "<div><strong>Click here to:</strong><ul><li>Browse all of the additional data sets within the State of the Environment catalogue</li><li>Add selected data sets to the map</li></ul></div>";
    var screenOneComponentId = 'tjs-side-panel__button tjs-_buttons__btn tjs-_buttons__btn-primary';

    var screenTwoMessage = "<div>All of your active data sets will appear in your data workbench.</div>";
    var screenTwoComponentId = 'tjs-side-panel__workbenchEmpty';

    var helpScreenList = [
        new HelpScreen({
            message: screenOneMessage,
            highlightedComponentId: screenOneComponentId,
            positionLeft: HelpSequences.RelativePosition.RECT_LEFT,
            positionTop: HelpSequences.RelativePosition.RECT_BOTTOM,
            offsetTop: 10,
            caret: 'top'
        }),
        new HelpScreen({
            message: screenTwoMessage,
            highlightedComponentId: screenTwoComponentId,
            positionLeft: HelpSequences.RelativePosition.RECT_RIGHT,
            positionTop: HelpSequences.RelativePosition.RECT_TOP,
            offsetLeft: 15,
            offsetTop: -3,
            caret: 'left'
        })
    ];

    var options = {
        title: "Load data from the catalogue",
        screens: helpScreenList
    };

    return new HelpSequence(options);
}

module.exports = getSoeHelpSequences;
