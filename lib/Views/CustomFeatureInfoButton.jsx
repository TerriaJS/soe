import React from 'react';
import classNames from 'classnames';
import Styles from 'terriajs/lib/ReactViews/FeatureInfo/feature-info-download.scss';
import ddStyles from 'terriajs/lib/ReactViews/Generic/dropdown.scss';
import Icon from "terriajs/lib/ReactViews/Icon.jsx";

class CustomFeatureInfoButton extends React.Component {
    render() {
        return (<div className={classNames(ddStyles.dropdown, Styles.download)} style={{paddingRight: '5px'}}>
                    <a style={{color: 'white'}} href={'http://data.gov.au/dataset/' + this.props.viewState.previewedItem.datasetId}
                           target='_blank'
                           className={classNames(Styles.dropdownButton, ddStyles.btnDropdown)}>
                    <span className={Styles.iconDownload}><Icon glyph={Icon.GLYPHS.download}/></span> Download Entire Dataset</a>
                </div>
                );
        }
}

module.exports = CustomFeatureInfoButton;
