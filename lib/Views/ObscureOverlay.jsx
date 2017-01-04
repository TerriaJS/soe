'use strict';

import ObserveModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import React from 'react';
import parseCustomHtmlToReact from 'terriajs/lib/ReactViews/Custom/parseCustomHtmlToReact';
import Styles from './obscure-overlay.scss';
import classNames from 'classnames';

const ObscureOverlay = React.createClass({
    mixins: [ObserveModelMixin],

    propTypes: {
        terria: React.PropTypes.object,
        viewState: React.PropTypes.object,
        helpScreen: React.PropTypes.object
    },

    getInitialState() {
        return { helpScreen: undefined };
    },

    componentWillReceiveProps(nextProps) {
        this.setState({helpScreen : nextProps.helpScreen.helpScreen});
    },

    render() {
        const helpScreen = this.state.helpScreen;
        const windowClass = classNames(Styles.window, {
            [Styles.isActive]: helpScreen
        });
        return (
            <div className={windowClass} aria-hidden={ !helpScreen }>
                <div className={Styles.topOverlay}></div>
                <div className={Styles.leftOverlay}></div>
                <div className={Styles.rightOverlay}></div>
                <div className={Styles.bottomOverlay}></div>
            </div>);
    }
});

module.exports = ObscureOverlay;
