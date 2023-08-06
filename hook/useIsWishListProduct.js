'use client'

import { useSelector } from "react-redux";

const useIsWishListProduct = (id) => {
    const user = useSelector(state => state.user.user);

    const isExist = user?.wishList?.find(product => product._id === id);

    return isExist;
};

export default useIsWishListProduct;