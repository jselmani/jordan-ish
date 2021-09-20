import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import './CollectionPage.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import ProductCard from '../../components/ProductCard/ProductCard.component';

const CollectionPage = () => {
    const history = useHistory();
    let { collectionId } = useParams();
    let collection = useSelector(selectCollection(collectionId));
    const title = collectionId.replaceAll('-', ' ').toUpperCase();

    return (
        <div className="collection-page">
            <h1 className="title">{ title }</h1>
            <div className="products">
                {
                    collection.map(product => {
                        return (
                            <ProductCard 
                                key={product.id}
                                routeToProduct={() => history.push(`../products/${product.id}`)}
                                {...product} 
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CollectionPage;
