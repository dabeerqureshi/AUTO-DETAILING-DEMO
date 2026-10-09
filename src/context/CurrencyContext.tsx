'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency } from '@/types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdPrice: number, cadPrice?: number) => string;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('USD');

  useEffect(() => {
    // Check if user previously selected a preference
    const saved = localStorage.getItem('apex_currency') as Currency;
    if (saved === 'USD' || saved === 'CAD') {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('apex_currency', c);
  };

  const formatPrice = (usdPrice: number, cadPrice?: number): string => {
    if (currency === 'CAD') {
      const val = cadPrice ?? Math.round(usdPrice * 1.35);
      return `CA$${val.toLocaleString()}`;
    }
    return `$${usdPrice.toLocaleString()}`;
  };

  const symbol = currency === 'CAD' ? 'CA$' : '$';

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

