import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectAllShoes = createSelector(
    [selectShop],
    shop => shop.shoes
);

export const selectMensCollection = createSelector(
    [selectShop],
    shop => {
        const { shoes } = shop;
        console.log(shoes);
    }
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);
