'use client'
import { ReactNode, createContext, useState } from 'react';

type CartContextType = {
    items: any[],
    insertItem: (item: any) => boolean,
    deleteItem: () => boolean,
}

export const CartContext = createContext<CartContextType>({
    items: [],
    insertItem: () => false,
    deleteItem: () => false,
});

export default function CartProvider({
    children
}: { children: ReactNode }) {
    const [items, setItems] = useState<any[]>([]);

    function insertItem(item: any) {
        setItems((oldItems) => [
            ...oldItems,
            item,
        ]);

        return true;
    }

    function deleteItem() {
        // fazer dps
        return true;
    }

    return (
        <CartContext.Provider
            value={{
                items,
                insertItem,
                deleteItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
}