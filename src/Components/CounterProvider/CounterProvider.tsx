'use client';

import { createContext, useState, useContext } from "react";

interface IContext {
  count: number;
  addCount: () => void;
  minusCount: () => void;
}

const CounterContext = createContext<IContext | undefined>(undefined);

const CountProvider = ({children}: {children: React.ReactNode}) => {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount(count + 1);
}

const minusCount = () => {
    if (count === 0 ) return;
    setCount(count - 1);
}

  const defaultValues:IContext = {
    addCount,
    minusCount,
    count
  }

  return (
    <CounterContext.Provider value={defaultValues}>
      {children}
    </CounterContext.Provider>
  )
} 

export default CountProvider;

export const useCount = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;


}