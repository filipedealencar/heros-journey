import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface GlobalContextData {
  setSizeScreen: Dispatch<SetStateAction<{ width: number; height: number }>>;
  sizeScreen: { width: number; height: number };
  setDuel: Dispatch<SetStateAction<DuelOpponent>>;
  duel: DuelOpponent;
  setMode: Dispatch<SetStateAction<Mode>>;
  mode: Mode;
}

interface GlobalProps {
  children: ReactNode;
}

interface DuelOpponent {
  opponentOne: TypeOpponent;
  opponentTwo: TypeOpponent;
  duelConfirmed: boolean;
}

type TypeOpponent = { id: number | undefined; name: string | undefined };

type Mode = "list" | "duel";

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalContextProvider = ({ children }: GlobalProps) => {
  const [mode, setMode] = useState<Mode>("list");
  const [duel, setDuel] = useState<DuelOpponent>({
    opponentOne: { id: undefined, name: undefined },
    opponentTwo: { id: undefined, name: undefined },
    duelConfirmed: false,
  });
  const [sizeScreen, setSizeScreen] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window === "object" ? window.innerWidth : 0,
    height: typeof window === "object" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", () =>
        setSizeScreen({ width: window.innerWidth, height: window.innerHeight })
      );

      return () => {
        window.removeEventListener("resize", () =>
          setSizeScreen({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        );
      };
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setDuel,
        duel,
        setMode,
        mode,
        setSizeScreen,
        sizeScreen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
