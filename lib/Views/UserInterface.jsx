import React from 'react';

import version from '../../version';

import StandardUserInterface from 'terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx';
import MenuItem from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem';
import Help from './Help';
import { Menu } from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups';

import './global.scss';

export default function UserInterface(props) {
    return (
        <StandardUserInterface {... props} version={version}>
            <Menu>
                <Help viewState={props.viewState} terria={props.terria} />
                <MenuItem caption="About" href="about.html" key="about-link"/>
            </Menu>
        </StandardUserInterface>
    );
}
