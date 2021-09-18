import React from 'react';
import { useSelector } from 'react-redux';

import './CollectionsOverview.styles.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);
    const sections = useSelector(selectDirectorySections);

    return (
        <div className="collections-overview">
            {
                collections.map((collection, index) => {
                    return <CollectionPreview key={index} title={sections[index].title} collection={collection} />
                })
            }
        </div>
    );
};

export default CollectionsOverview;
