'use strict';

import HelpScreen from './HelpScreen';
import HelpSequences from './HelpSequences';

/**
 * Set up SOE specific help screens.
 **/
const getSoeHelpSequences = function() {
    let helpSequences = new HelpSequences();

    // Load data
    helpSequences.sequences.loadData = getSoeLoadDataSequence();

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
            positionLeft: HelpSequences.RECT_LEFT,
            positionTop: HelpSequences.RECT_BOTTOM,
            offsetTop: 10,
            caret: 'top'
        }),
        new HelpScreen({
            message: screenTwoMessage,
            highlightedComponentId: screenTwoComponentId,
            positionLeft: HelpSequences.RECT_RIGHT,
            positionTop: HelpSequences.RECT_TOP,
            offsetLeft: 15,
            offsetTop: -3,
            caret: 'left'
        })
    ];
    return helpScreenList;
}

module.exports = getSoeHelpSequences;
