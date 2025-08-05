"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, CartState } from '@/types/product';

interface CartStore extends CartState {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,
      
      addItem: (product: Product) => {
        const { items } = get();
        const existingItem = items.find(item => item.product.id === product.id);
        
        if (existingItem) {
          set(state => ({
            items: state.items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + product.price,
            itemCount: state.itemCount + 1
          }));
        } else {
          set(state => ({
            items: [...state.items, { product, quantity: 1 }],
            total: state.total + product.price,
            itemCount: state.itemCount + 1
          }));
        }
      },
      
      removeItem: (productId: string) => {
        const { items } = get();
        const item = items.find(item => item.product.id === productId);
        
        if (item) {
          set(state => ({
            items: state.items.filter(item => item.product.id !== productId),
            total: state.total - (item.product.price * item.quantity),
            itemCount: state.itemCount - item.quantity
          }));
        }
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        const { items } = get();
        const item = items.find(item => item.product.id === productId);
        
        if (item) {
          const quantityDiff = quantity - item.quantity;
          set(state => ({
            items: state.items.map(item =>
              item.product.id === productId
                ? { ...item, quantity }
                : item
            ),
            total: state.total + (item.product.price * quantityDiff),
            itemCount: state.itemCount + quantityDiff
          }));
        }
      },
      
      clearCart: () => {
        set({ items: [], total: 0, itemCount: 0 });
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);