'use strict';

import ObserverModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import parseCustomHtmlToReact from 'terriajs/lib/ReactViews/Custom/parseCustomHtmlToReact';
import Styles from './obscure-overlay.scss';
import classNames from 'classnames';

const ObscureOverlay = React.createClass({
    mixins: [ObserverModelMixin],

    propTypes: {
        terria: React.PropTypes.object,
        viewState: React.PropTypes.object,
        helpSequences: React.PropTypes.object
    },

    render() {
        const helpScreen = this.props.helpSequences.currentScreen;

        //topDiv = (xMin, yMin), (xMax, yMin), (xMin, highlightedElementTop), (xMax, highlightedElementTop)
        const topOverlayPositionLeft = 0;
        const topOverlayPositionTop = 0;
        const topOverlayHeight = "calc(100% - " + helpScreen.rectangle.top;
        const topOverlayWidth = "100%";

        //leftDiv = (xMin, highlightedElementTop), (highlightedElementLeft, highlightedElementTop), (xMin, highlightedElementBottom), (highlightedElementLeft, highlightedElementBottom)

        //rightDiv = (highlightedElementRight, highlightedElementTop), (xMax, highlightedElementTop), (highlightedElementRight, highlightedElementBottom), (xMax, highlightedElementBottom)

        //bottomDiv = (xMin, highlightedElementBottom), (xMax, highlightedElementBottom), (xMin, yMax), (xMax, yMax)
        const windowClass = classNames(Styles.window, {
            [Styles.isActive]: helpScreen
        });
        return (
            <div className={windowClass} aria-hidden={ !helpScreen }>
                <div style={{left: topOverlayPositionLeft + 'px', top: topOverlayPositionTop + 'px', width: topOverlayWidth, height: topOverlayHeight }} className={Styles.topOverlay}></div>
                <div className={Styles.leftOverlay}></div>
                <div className={Styles.rightOverlay}></div>
                <div className={Styles.bottomOverlay}></div>
            </div>);
    }
});

module.exports = ObscureOverlay;
