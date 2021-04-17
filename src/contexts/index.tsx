/* eslint-disable react/require-default-props */
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useRef,
  useState,
} from 'react';

interface IProvider {
  children?: ReactNode;
}

interface IContext {
  totalCharacters: number;
  totalLocations: number;
  charactersRef: RefObject<HTMLInputElement>;
  locationsRef: RefObject<HTMLInputElement>;
  randomCharacters: number[];
  randomLocations: number[];
  setRandomCharacters(ids: number[]): void;
  setRandomLocations(ids: number[]): void;
}

const ContextData = createContext<IContext>({} as IContext);

export function ContextProvider({ children }: IProvider) {
  const totalCharacters = 671;
  const totalLocations = 108;

  const charactersRef = useRef<HTMLInputElement>(null);
  const locationsRef = useRef<HTMLInputElement>(null);

  const [randomCharacters, setRandomCharacters] = useState<number[]>([]);
  const [randomLocations, setRandomLocations] = useState<number[]>([]);

  return (
    <ContextData.Provider
      value={{
        totalCharacters,
        totalLocations,
        charactersRef,
        locationsRef,
        randomCharacters,
        randomLocations,
        setRandomCharacters,
        setRandomLocations,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

export function useContextData() {
  const contextData = useContext(ContextData);

  return contextData;
}

const Provider: React.FC = ({ children }: IProvider) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default Provider;
