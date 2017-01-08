'use strict';

import HelpScreen from './HelpScreen';
import HelpSequence from './HelpSequence';
import HelpSequences from './HelpSequences';

/**
 * Set up SOE specific help screens.
 **/
const getSoeHelpSequences = function() {
    var options = {
        menuTitle: ' What would you like to do? '
    };
    let helpSequences = new HelpSequences(options);

    helpSequences.sequences.push(getLoadDataFromCatalogSequence());
    helpSequences.sequences.push(getLoadDataFromExternal());
    helpSequences.sequences.push(getChangeMapSettings());
    helpSequences.sequences.push(getShareExportPrintMap());

    return helpSequences;
};

/**
 * @private
 */
function getLoadDataFromCatalogSequence() {
    var screenOneMessage = '<div><strong>Click here to:</strong><ul><li>Browse all of the additional data sets within the State of the Environment catalogue</li><li>Add selected data sets to the map</li></ul></div>';
    var screenOneComponentId = 'tjs-side-panel__button tjs-_buttons__btn tjs-_buttons__btn-primary';

    var screenTwoMessage = '<div>All of your active data sets will appear in your data workbench.</div>';
    var screenTwoComponentId = 'tjs-side-panel__workbenchEmpty';

    var helpScreenList = [
        new HelpScreen({
            message: screenOneMessage,
            highlightedComponentId: screenOneComponentId,
            positionLeft: HelpSequences.RelativePosition.RECT_LEFT,
            positionTop: HelpSequences.RelativePosition.RECT_BOTTOM,
            offsetTop: 10,
            caretTop: -5,
            caretLeft: 10
        }),
        new HelpScreen({
            message: screenTwoMessage,
            highlightedComponentId: screenTwoComponentId,
            positionLeft: HelpSequences.RelativePosition.RECT_RIGHT,
            positionTop: HelpSequences.RelativePosition.RECT_TOP,
            offsetLeft: 15,
            offsetTop: -3,
            caretTop: 5,
            caretLeft: -5
        })
    ];

    var options = {
        title: 'Load data from the catalogue',
        screens: helpScreenList
    };

    return new HelpSequence(options);
}

/**
 * @private
 */
function getLoadDataFromExternal() {
    var screenOneMessage = '<div><strong>Click here to:</strong><ul><li>Browse all of the additional data sets within the State of the Environment catalogue</li><li>Add selected data sets to the map</li></ul></div>';
    var screenOneComponentId = 'tjs-side-panel__button tjs-_buttons__btn tjs-_buttons__btn-primary';

    var screenTwoMessage = '<div>All of your active data sets will appear in your data workbench.</div>';
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
        title: 'Load data from a file or external source',
        screens: helpScreenList
    };

    return new HelpSequence(options);
}

/**
 * @private
 */
function getChangeMapSettings() {
    var screenOneMessage = '<div><strong>Click here to:</strong><ul><li>Set your preferred map projection (2D/3D Smooth/3D Terrain)</li><li>Select your preferred base map style</li></ul></div>';
    var screenOneComponentId = 'tjs-panel__button tjs-_buttons__btn tjs-_buttons__btn--map tjs-setting-panel__btn--dropdown undefined';

    var helpScreenList = [
        new HelpScreen({
            message: screenOneMessage,
            highlightedComponentId: screenOneComponentId,
            positionLeft: HelpSequences.RelativePosition.RECT_LEFT,
            positionTop: HelpSequences.RelativePosition.RECT_BOTTOM,
            offsetTop: 10,
            offsetLeft: -113,
            caretTop: -5,
            caretLeft: 133
        })
    ];

    var options = {
        title: 'Change the map settings',
        screens: helpScreenList
    };

    return new HelpSequence(options);
}

/**
 * @private
 */
function getShareExportPrintMap() {
    var screenOneMessage = '<div><strong>Click here to:</strong><ul><li>Browse all of the additional data sets within the State of the Environment catalogue</li><li>Add selected data sets to the map</li></ul></div>';
    var screenOneComponentId = 'tjs-side-panel__button tjs-_buttons__btn tjs-_buttons__btn-primary';

    var screenTwoMessage = '<div>All of your active data sets will appear in your data workbench.</div>';
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
        title: 'Share/Export/Print my map',
        screens: helpScreenList
    };

    return new HelpSequence(options);
}

module.exports = getSoeHelpSequences;
