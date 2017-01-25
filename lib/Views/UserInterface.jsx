import React from 'react';

import version from '../../version';

import StandardUserInterface from 'terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx';
import MenuItem from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem';
import HelpMenuPanel from 'terriajs/lib/ReactViews/HelpScreens/HelpMenuPanel';
import { Menu } from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups';
import HelpOverlay from 'terriajs/lib/ReactViews/HelpScreens/HelpOverlay.jsx';

import './global.scss';

export default function UserInterface(props) {
    return (
        <div>
        <StandardUserInterface {... props} version={version}>
            <Menu>
                <HelpMenuPanel helpViewState={props.helpViewState} helpSequences={props.helpSequences} viewState={props.viewState}/>
                <MenuItem caption="About" href="about.html" key="about-link"/>
            </Menu>
        </StandardUserInterface>
        <HelpOverlay helpViewState={props.helpViewState} helpSequences={props.helpSequences} viewState={props.viewState}/>
        </div>
    );
}
