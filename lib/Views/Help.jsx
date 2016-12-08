'use strict';

import React from 'react';
import ObserverModelMixin from 'terriajs/lib/ReactViews/ObserveModelMixin';
import defined from 'terriajs-cesium/Source/Core/defined';
import classNames from 'classnames';
import MenuPanel from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx';

import Styles from './help.scss';
import NotificationStyles from './notification-window.scss';
import DropdownStyles from 'terriajs/lib/ReactViews/Map/Panels/panel.scss';
import Icon from 'terriajs/lib/ReactViews/Icon.jsx';

const HelpPanel = React.createClass({
    mixins: [ObserverModelMixin],

    propTypes: {
        terria: React.PropTypes.object,
        isOpen: React.PropTypes.bool,
        viewState: React.PropTypes.object.isRequired
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

    cancel(div) {
        var overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        var clearOverlay = document.getElementById("clearoverlay");
        clearOverlay.style.display = "none";

        var addDataButton = document.getElementsByClassName("tjs-side-panel__button tjs-_buttons__btn tjs-_buttons__btn-primary");
        addDataButton[0].style.zIndex = 100;
    },

    help() {
        console.log("help!");
        var overlay = document.getElementById("overlay");
        overlay.style.display = "block";

        var addDataButton = document.getElementsByClassName("tjs-side-panel__button tjs-_buttons__btn tjs-_buttons__btn-primary");
        console.log(addDataButton);
        addDataButton[0].style.zIndex = 1500;
        addDataButton[0].style.position = "relative";

        // To protect any elements we shift above the overlay from being clicked on, because they're for display only.
        var clearOverlay = document.getElementById("clearoverlay");
        clearOverlay.style.display = "block";
        clearOverlay.onclick = this.cancel;
    },

    render() {
        const dropdownTheme = {
            btn: Styles.btnShare,
            outer: Styles.sharePanel,
            inner: Styles.dropdownInner,
            icon: 'help'
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
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Load data from the catalogue
                                </button>
                            </li>
                            <li key={1} className={Styles.listItem}>
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Load data from an external source
                                </button>
                            </li>
                            <li key={2} className={Styles.listItem}>
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Change the map settings
                                </button>
                            </li>
                            <li key={3} className={Styles.listItem}>
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Save/print
                                </button>
                            </li>
                            <li key={4} className={Styles.listItem}>
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Download the data
                                </button>
                            </li>
                            <li key={5} className={Styles.listItem}>
                                <button onClick={this.help}
                                        className={Styles.btnViewer}>
                                    Go back to the topic I was reading
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
