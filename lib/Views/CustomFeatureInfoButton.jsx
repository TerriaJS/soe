import React from 'react';
import classNames from 'classnames';
import Styles from 'terriajs/lib/ReactViews/FeatureInfo/feature-info-download.scss';
import ddStyles from 'terriajs/lib/ReactViews/Generic/dropdown.scss';
import Icon from "terriajs/lib/ReactViews/Icon.jsx";
import defined from 'terriajs-cesium/Source/Core/defined';

class CustomFeatureInfoButton extends React.Component {
    render() {
        if (!defined(this.props.catalogItem) || !defined(this.props.catalogItem.creatorCatalogItem) || !defined(this.props.catalogItem.creatorCatalogItem.datasetId)) {
            return null;
        }

        return (<div className={classNames(ddStyles.dropdown, Styles.download)} style={{paddingRight: '5px'}}>
                    <a style={{color: 'white'}} href={'http://data.gov.au/dataset/' + this.props.catalogItem.creatorCatalogItem.datasetId}
                           target='_blank'
                           className={classNames(Styles.dropdownButton, ddStyles.btnDropdown)}>
                    <span className={Styles.iconDownload}><Icon glyph={Icon.GLYPHS.download}/></span> Download Entire Dataset</a>
                </div>
                );
        }
}

module.exports = CustomFeatureInfoButton;
