'use strict';

import ObserverModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import parseCustomHtmlToReact from 'terriajs/lib/ReactViews/Custom/parseCustomHtmlToReact';
import Styles from './help-screen-window.scss';
import classNames from 'classnames';
import defined from 'terriajs-cesium/Source/Core/defined';
import HelpSequences from './HelpSequences';

const HelpScreenWindow = React.createClass({
    mixins: [ObserverModelMixin],

    propTypes: {
        terria: React.PropTypes.object,
        viewState: React.PropTypes.object,
        helpSequences: React.PropTypes.object
    },

    render() {
        const currentScreen = this.props.helpSequences.currentScreen;

        const windowClass = classNames(Styles.window, {
            [Styles.isActive]: currentScreen
        });
        const buttonText = currentScreen && currentScreen.totalNumberOfScreens === currentScreen.currentScreenNumber ? 'DONE' : 'NEXT';
        calculatePosition(currentScreen);
        const positionLeft = currentScreen && currentScreen.left;
        const positionTop = currentScreen && currentScreen.top;

        const caretTop = currentScreen && currentScreen.caret === 'top';
        const caretLeft = currentScreen && currentScreen.caret === 'left';

        return (
            <div style={{left: positionLeft + 'px', top: positionTop + 'px'}} className={windowClass} aria-hidden={ !currentScreen }>
              <span className={classNames(Styles.caret, {[Styles.caretTop]: caretTop, [Styles.caretLeft]: caretLeft})}/>
              <div className={Styles.content}>
                  {currentScreen && parseCustomHtmlToReact(currentScreen.message())}
              </div>
              <div className={Styles.screenCount}>
                  <strong>{currentScreen && currentScreen.currentScreenNumber + '/' + currentScreen.totalNumberOfScreens}</strong>
              </div>
              <div className={Styles.nextButton}>
                  <button type='button' onClick={currentScreen && currentScreen.onNext}
                      className={Styles.btn}><strong>{buttonText}</strong></button>
              </div>
            </div>);
    }
});

/**
 * @private
 */
function calculatePosition(helpScreen) {
    if (!defined(helpScreen)) {
        return;
    }
    const screenRect = helpScreen.rectangle;
    if (helpScreen.positionLeft === HelpSequences.RelativePosition.RECT_LEFT) {
        helpScreen.left = screenRect.left;
    } else if (helpScreen.positionLeft === HelpSequences.RelativePosition.RECT_RIGHT) {
        helpScreen.left = screenRect.right;
    } else if (helpScreen.positionLeft === HelpSequences.RelativePosition.RECT_TOP) {
        helpScreen.left = screenRect.top;
    } else if (helpScreen.positionLeft === HelpSequences.RelativePosition.RECT_BOTTOM) {
        helpScreen.left = screenRect.bottom;
    }

    if (helpScreen.positionTop === HelpSequences.RelativePosition.RECT_LEFT) {
        helpScreen.top = screenRect.left;
    } else if (helpScreen.positionTop === HelpSequences.RelativePosition.RECT_RIGHT) {
        helpScreen.top = screenRect.right;
    } else if (helpScreen.positionTop === HelpSequences.RelativePosition.RECT_TOP) {
        helpScreen.top = screenRect.top;
    } else if (helpScreen.positionTop === HelpSequences.RelativePosition.RECT_BOTTOM) {
        helpScreen.top = screenRect.bottom;
    }

    helpScreen.left += helpScreen.offsetLeft;
    helpScreen.top += helpScreen.offsetTop;
};


module.exports = HelpScreenWindow;
