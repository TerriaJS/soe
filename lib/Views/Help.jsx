'use strict';

import React from 'react';
import ObserverModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import HelpScreen from './HelpScreen';
import defined from 'terriajs-cesium/Source/Core/defined';
import classNames from 'classnames';
import MenuPanel from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx';

import Styles from './help.scss';
import NotificationStyles from './notification-window.scss';
import DropdownStyles from 'terriajs/lib/ReactViews/Map/Panels/panel.scss';
import helpIcon from '../../wwwroot/images/icons/help.svg';

const HelpPanel = React.createClass({
    mixins: [ObserverModelMixin],

    propTypes: {
        terria: React.PropTypes.object,
        isOpen: React.PropTypes.bool,
        viewState: React.PropTypes.object.isRequired,
        helpSequences: React.PropTypes.object
    },

    componentWillMount() {
        var that = this;
        setInterval(function() {
            if (!defined(that.state.screens)) {
                return;
            }
            var i = that.state.index;
            var currentScreen = that.state.screens[i];
            if (defined(that.state.previousRectangle) && that.state.previousRectangle === that.state.currentRectangle) {
                // Rectangle hasn't changed so we don't want to redraw everything, but update rectangle in case it has changed now.
                updateCurrentRectangle(that, currentScreen);
                return;
            }

            // If we get here, we have a new rectangle.
            if (typeof currentScreen.preDisplayHook === 'function') {
                currentScreen.preDisplayHook(that.props.viewState);
            }
            updateCurrentRectangle(that, currentScreen);

            if (defined(that.state.currentRectangle)) {
                currentScreen.rectangle = that.state.currentRectangle;
                currentScreen.currentScreenNumber = i+1;
                currentScreen.totalNumberOfScreens = that.state.screens.length;
                currentScreen.onNext = function() {
                    if (typeof currentScreen.postDisplayHook === 'function') {
                        currentScreen.postDisplayHook(that.props.viewState);
                    }
                    if ((i+1) >= that.state.screens.length) {
                        that.cancel();
                    } else {
                        that.help(that.state.screens, i+1);
                    }
                };
                that.props.helpSequences.currentScreen = currentScreen;
                // Processed current rectangle, set as previous.
                that.setState({previousRectangle: that.state.currentRectangle});
            }
        }, 10);
    },

    getDefaultProps() {
        return {
            isOpen: false
        };
    },

    getInitialState() {
        return {
            isOpen: false,
            screens: undefined,
            index: undefined,
            currentRectangle: undefined,
            previousRectangle: undefined
        };
    },

    onOpenChanged(open) {
        this.setState({
            isOpen: open
        });
    },

    cancel() {
        this.props.helpSequences.currentScreen = undefined;
        this.setState({
            screens: undefined,
            index: undefined,
            currentRectangle: undefined,
            previousRectangle: undefined
        });
    },

    help(screens, i) {
        this.setState({
            screens: screens,
            index: i,
            currentRectangle: undefined,
            previousRectangle: undefined
        });

    },

    render() {
        const dropdownTheme = {
            btn: Styles.btnShare,
            outer: Styles.sharePanel,
            inner: Styles.dropdownInner,
            icon: helpIcon
        };

        return (
            <MenuPanel theme={dropdownTheme}
                       btnText="Help"
                       viewState={this.props.viewState}
                       btnTitle="get help"
                       onOpenChanged={this.onOpenChanged}
                       smallScreen={this.props.viewState.useSmallScreenInterface}>
                <If condition={this.state.isOpen}>
                    <div className={classNames(Styles.viewer, DropdownStyles.section)}>
                        <label className={DropdownStyles.heading}>{this.props.helpSequences.menuTitle}</label>
                        <ul className={Styles.viewerSelector}>
                            <For each="sequence" index="i" of={this.props.helpSequences.sequences}>
                                <li key={i} className={Styles.listItem}>
                                    <button onClick={this.help.bind(this, {sequence}.sequence.screens, 0)}
                                            className={Styles.btnViewer}>
                                        {sequence.title}
                                    </button>
                                </li>
                            </For>
                        </ul>
                    </div>
                </If>
            </MenuPanel>
        );
    }
});

function updateCurrentRectangle(component, currentScreen) {
    var highlightedElement = document.getElementsByClassName(currentScreen.highlightedComponentId);
    if (defined(highlightedElement[0])) {
        var screenRect = highlightedElement[0].getBoundingClientRect();
        component.setState({currentRectangle: screenRect});
    }
};


export default HelpPanel;
