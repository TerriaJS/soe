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
import HelpSequences from './HelpSequences';

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
        var overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        var clearOverlay = document.getElementById("clearoverlay");
        clearOverlay.style.display = "none";
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

    greyScreen() {
        var overlay = document.getElementById("overlay");
        overlay.style.display = "block";

        // To protect any elements we shift above the overlay from being clicked on, because they're for display only.
        var clearOverlay = document.getElementById("clearoverlay");
        clearOverlay.style.display = "block";
        clearOverlay.onclick = this.cancel;
    },

    helpLoadData() {
        this.help(this.props.helpSequences.sequences.loadData, 0);
        //this.greyScreen();
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
                        <label className={DropdownStyles.heading}> What would you like to do? </label>
                        <ul className={Styles.viewerSelector}>
                            <li key={0} className={Styles.listItem}>
                                <button onClick={this.helpLoadData}
                                        className={Styles.btnViewer}>
                                    Load data from the catalogue
                                </button>
                            </li>
                            <li key={1} className={Styles.listItem}>
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Load data from a file or external source
                                </button>
                            </li>
                            <li key={2} className={Styles.listItem}>
                                <button onClick={this.helpMapSettings}
                                        className={Styles.btnViewer}>
                                    Change the map settings
                                </button>
                            </li>
                            <li key={3} className={Styles.listItem}>
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Share/Export/Print my map
                                </button>
                            </li>
                        </ul>
                    </div>
                </If>
            </MenuPanel>
        );
    }
});


export default HelpPanel;
