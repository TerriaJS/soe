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

    getDefaultProps() {
        return {
            isOpen: false
        };
    },

    getInitialState() {
        return {
            isOpen: false
        };
    },

    onOpenChanged(open) {
        this.setState({
            isOpen: open
        });
    },

    cancel() {
        this.props.helpSequences.currentScreen = undefined;
    },

    help(screens, i) {
        var that = this;
        var highlightedElement = document.getElementsByClassName(screens[i].highlightedComponentId);
        var screenRect = highlightedElement[0].getBoundingClientRect();

        screens[i].rectangle = screenRect;
        screens[i].currentScreenNumber = i+1;
        screens[i].totalNumberOfScreens = screens.length;
        screens[i].onNext = function() {
            if ((i+1) >= screens.length) {
                that.cancel();
            } else {
                that.help(screens, i+1);
            }
        };
        this.props.helpSequences.currentScreen = screens[i];
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


export default HelpPanel;
