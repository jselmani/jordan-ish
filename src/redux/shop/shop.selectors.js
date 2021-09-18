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

export const selectAreShoesFetching = createSelector(
    selectShoes,
    shoes => shoes.isFetching
);

export const selectAreShoesLoaded = createSelector(
    [selectShoes],
    shoes => !!shoes
);
