'use strict';

import ObserverModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import parseCustomHtmlToReact from 'terriajs/lib/ReactViews/Custom/parseCustomHtmlToReact';
import Styles from './obscure-overlay.scss';
import classNames from 'classnames';
import defined from 'terriajs-cesium/Source/Core/defined';

/**
* This provides five panels. Four are rectangle elements that go above, left, right, and below the highlighted element
* to grey out the rest of the screen. A fifth panel, which is clear, covers the whole screen to prevent the highlighted
* element from being selectable.
*/
const ObscureOverlay = React.createClass({
    mixins: [ObserverModelMixin],

    propTypes: {
        helpSequences: React.PropTypes.object
    },

    cancel() {
        this.props.helpSequences.cancel = true;
    },

    render() {
        const helpScreen = this.props.helpSequences.currentScreen;
        if (!defined(helpScreen)) {
            return false;
        }

        // Top
        const topOverlayPositionLeft = 0 + "px";
        const topOverlayPositionTop = 0 + "px";
        const topOverlayHeight = helpScreen.rectangle.top + "px";
        const topOverlayWidth = "100%";

        // Left
        const leftOverlayPositionLeft = 0 + "px";
        const leftOverlayPositionTop = helpScreen.rectangle.top + "px";
        const leftOverlayHeight = helpScreen.rectangle.height + "px";
        const leftOverlayWidth = helpScreen.rectangle.left + "px";

        // Right
        const rightOverlayPositionLeft = helpScreen.rectangle.right + "px";
        const rightOverlayPositionTop = helpScreen.rectangle.top + "px";
        const rightOverlayHeight = helpScreen.rectangle.height + "px";
        const rightOverlayWidth = "100%";

        // Bottom
        const bottomOverlayPositionLeft = 0 + "px";
        const bottomOverlayPositionTop = helpScreen.rectangle.bottom + "px";
        const bottomOverlayHeight = "100%";
        const bottomOverlayWidth = "100%";

        const windowClass = classNames(Styles.window, {
            [Styles.isActive]: helpScreen
        });
        return (
            <div className={windowClass} aria-hidden={ !helpScreen }>
                <div className={Styles.topOverlay} style={{left: topOverlayPositionLeft, top: topOverlayPositionTop, width: topOverlayWidth, height: topOverlayHeight }} onClick={this.cancel}></div>
                <div className={Styles.leftOverlay} style={{left: leftOverlayPositionLeft, top: leftOverlayPositionTop, width: leftOverlayWidth, height: leftOverlayHeight }} onClick={this.cancel}></div>
                <div className={Styles.rightOverlay} style={{left: rightOverlayPositionLeft, top: rightOverlayPositionTop, width: rightOverlayWidth, height: rightOverlayHeight }} onClick={this.cancel}></div>
                <div className={Styles.bottomOverlay} style={{left: bottomOverlayPositionLeft, top: bottomOverlayPositionTop, width: bottomOverlayWidth, height: bottomOverlayHeight }} onClick={this.cancel}></div>
                <div className={Styles.clearOverlay} onClick={this.cancel}></div>
            </div>);
    }
});

module.exports = ObscureOverlay;
