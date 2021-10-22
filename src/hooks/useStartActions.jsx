import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllShoesStart,
  fetchProductByIdStart,
} from "../redux/shop/shop.actions";
import {
  selectIsFetching,
  selectAllShoes,
  selectIsProductLoaded,
} from "../redux/shop/shop.selectors";

export const FetchTypes = {
  COLLECTION: "COLLECTION",
  PRODUCT: "PRODUCT",
};

export const useStartActions = (type, productId) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);
  const isProductLoaded = useSelector(selectIsProductLoaded);
  const shoes = useSelector(selectAllShoes);

  useEffect(() => {
    const fetchData = () => {
      if (type === FetchTypes.COLLECTION) {
        if (shoes.length === 0) {
          dispatch(fetchAllShoesStart());
        }
      } else {
        dispatch(fetchProductByIdStart(productId));
      }
    };

    fetchData();
  }, [dispatch, type, productId, shoes]);

  return { isFetching, isProductLoaded };
};

export default useStartActions;
