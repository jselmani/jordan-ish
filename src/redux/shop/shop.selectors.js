import { createSelector } from "reselect";

const selectShoes = state => state.shop.shoes;

export const selectAllShoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes : []
);

export const selectMensShoes = createSelector(
    selectShoes,
    shoes => shoes ? shoes.filter(shoe => shoe.gender === 'men' || shoe.gender === 'unisex') : []
);

export const selectWomensShoes = createSelector(
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

export const selectAreShoesFetching = createSelector(
    selectShoes,
    shoes => shoes.isFetching
);

export const selectAreShoesLoaded = createSelector(
    [selectShoes],
    shoes => !!shoes
);
