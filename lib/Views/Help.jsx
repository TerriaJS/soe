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
        helpScreen: React.PropTypes.object
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
        this.props.helpScreen.helpScreen = undefined;
    },

    help(screens, i) {
        var that = this;
        var highlightedElement = document.getElementsByClassName(screens[i].highlightedComponentId);
        var rect = highlightedElement[0].getBoundingClientRect();
        console.log("Add data rect");
        console.log(rect);
        screens[i].currentScreenNumber = i+1;
        screens[i].totalNumberOfScreens = screens.length;
        screens[i].onNext = function() {
            if ((i+1) >= screens.length) {
                that.cancel();
            } else {
                that.help(screens, i+1);
            }
        };
        this.props.helpScreen.helpScreen = screens[i];
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
//this.greyScreen();
        var screenOneMessage = "<div><strong>Click here to:</strong><ul><li>Browse all of the additional data sets within the State of the Environment catalogue</li><li>Add selected data sets to the map</li></ul></div>";
        var screenOneComponentId = 'tjs-side-panel__button tjs-_buttons__btn tjs-_buttons__btn-primary';
        var highlightedElement = document.getElementsByClassName(screenOneComponentId);
        var screenOneRect = highlightedElement[0].getBoundingClientRect();

        var screenTwoMessage = "<div>All of your active data sets will appear in your data workbench.</div>";
        var screenTwoComponentId = 'tjs-side-panel__workbenchEmpty';
        highlightedElement = document.getElementsByClassName(screenTwoComponentId);
        var screenTwoRect = highlightedElement[0].getBoundingClientRect();

        this.help([new HelpScreen({
                message: screenOneMessage,
                highlightedComponentId: screenOneComponentId,
                left: screenOneRect.left,
                top: screenOneRect.bottom + 10,
                caret: 'top'
              }),
              new HelpScreen({
                message: screenTwoMessage,
                highlightedComponentId: screenTwoComponentId,
                left: screenTwoRect.right + 15,
                top: screenTwoRect.top - 3,
                caret: 'left'
              })], 0);
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
