import React, {useState} from 'react';

const WishContext = React.createContext(
    {
        wishList : [],
    }
); 

export default function WishListProvider({children}){
    const [wishList, setWishList] = useState([]);

    function updateWishList(wish) {
        setWishList([...wishList, wish])
    }

    return (
        <WishContext.Provider value={{wishList, updateWishList}}>
            {children}
        </WishContext.Provider>
    )
}
export {WishContext};
