import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  fetchAllShoesStart,
  fetchProductByIdStart,
} from "../redux/shop/shop.actions";

export const FetchTypes = {
  COLLECTION: "COLLECTION",
  PRODUCT: "PRODUCT",
};

export const useStartActions = (type, productId) => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (type === FetchTypes.COLLECTION) {
        dispatch(fetchAllShoesStart());
      } else {
        dispatch(fetchProductByIdStart(productId));
      }
    };
    // gnarly code, can be improved significantly
    fetchData().then(() => setTimeout(() => setIsFetching(false), 1500));
  }, [dispatch, type, productId]);

  return { isFetching: isFetching };
};

export default useStartActions;
