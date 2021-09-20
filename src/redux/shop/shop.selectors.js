import { createSelector } from "reselect";

const selectShoes = state => state.shop.shoes;

export const selectAllShoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes : []
);

export const selectMensShoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.gender === 'men') : []
);

export const selectMensShoesWithUnisex = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.gender === 'men' || shoe.gender === 'unisex') : []
);

export const selectWomensShoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.gender === 'women') : []
);

export const selectWomensShoesWithUnisex = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.gender === 'women' || shoe.gender === 'unisex') : []
);

export const selectBasketballShoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.type === 'basketball') : []
);

export const selectAirJordan1Shoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.type === 'air-jordan-1') : []
);

export const selectSNKRSShoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.type === 'SNKRS') : []
);

export const selectCollectionsForPreview = createSelector(
    selectMensShoes,
    selectWomensShoes,
    selectAirJordan1Shoes,
    selectBasketballShoes,
    selectSNKRSShoes,
    
    (mensShoes, womensShoes, aj1Shoes, basketballShoes, SNKRSShoes) => {
        let collectionsArray = [];
        collectionsArray.push(mensShoes, womensShoes, aj1Shoes, basketballShoes, SNKRSShoes);
        return collectionsArray;
    }
);

export const selectCollection = collectionUrlParam => {
    switch(collectionUrlParam) {
        case 'mens':
            return selectMensShoesWithUnisex;
        case 'womens':
            return selectWomensShoesWithUnisex;
        case 'air-jordan-1':
            return selectAirJordan1Shoes;
        case 'basketball':
            return selectBasketballShoes;
        case 'SNKRS':
            return selectSNKRSShoes;
        default:
            return selectAllShoes;
    }
};

export const selectShoeById = shoeId => createSelector(
    selectAllShoes,
    shoes => shoes ? shoes[shoeId - 1] : null
);

export const selectAreShoesFetching = createSelector(
    selectShoes,
    shoes => shoes.isFetching
);

export const selectAreShoesLoaded = createSelector(
    selectShoes,
    shoes => !!shoes
);
