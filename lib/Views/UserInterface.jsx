import React from 'react';

import version from '../../version';

import StandardUserInterface from 'terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx';
import MenuItem from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem';
import HelpPanel from 'terriajs/lib/ReactViews/HelpScreens/HelpPanel';
import { Menu } from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups';
import HelpScreenWindow from 'terriajs/lib/ReactViews/HelpScreens/HelpScreenWindow.jsx';
import ObscureOverlay from 'terriajs/lib/ReactViews/HelpScreens/ObscureOverlay.jsx';

import './global.scss';

export default function UserInterface(props) {
    return (
        <div>
        <StandardUserInterface {... props} version={version}>
            <Menu>
                <HelpPanel helpSequences={props.helpSequences} viewState={props.viewState}/>
                <MenuItem caption="About" href="about.html" key="about-link"/>
            </Menu>
        </StandardUserInterface>
        <ObscureOverlay helpSequences={props.helpSequences}/>
        <HelpScreenWindow helpSequences={props.helpSequences}/>
        </div>
    );
}
