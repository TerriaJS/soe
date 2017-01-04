import React from 'react';

import version from '../../version';

import StandardUserInterface from 'terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx';
import MenuItem from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem';
import Help from './Help';
import { Menu } from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups';
import HelpScreenWindow from './HelpScreenWindow.jsx';
//import ObscureOverlay from './ObscureOverlay.jsx';

import './global.scss';

export default function UserInterface(props) {
    return (
        <StandardUserInterface {... props} version={version}>
            <Menu>
                <Help helpScreen={props.helpScreen} viewState={props.viewState} terria={props.terria} />
                <MenuItem caption="About" href="about.html" key="about-link"/>
                <HelpScreenWindow helpScreen={props.helpScreen} terria={props.terria} viewState={props.viewState}/>
            </Menu>
        </StandardUserInterface>
    );
}
