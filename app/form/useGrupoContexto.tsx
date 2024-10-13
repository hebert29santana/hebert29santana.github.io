import React, { createContext, useContext, useState } from "react";

export type GrupoContexto = {
  grupoContexto: string;
  setGrupoContexto: (value: string) => void;
  progress: number;
  setProgress: (value: number) => void;
};

export const initialGrupoContexto: GrupoContexto = {
  grupoContexto: "Identificação da instituição",
  setGrupoContexto: () => {
    throw new Error(" not implemented.");
  },
  progress: 0,
  setProgress: () => {
    throw new Error(" not implemented.");
  },
};

const GrupoContextoCtx = createContext(initialGrupoContexto);

export const GrupoContextoProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [grupoContexto, setGrupoContexto] = useState(
    initialGrupoContexto.grupoContexto
  );
  const [progress, setProgress] = useState(20);

  return (
    <GrupoContextoCtx.Provider
      value={{ grupoContexto, setGrupoContexto, progress, setProgress }}
    >
      {children}
    </GrupoContextoCtx.Provider>
  );
};

export const useGrupoContexto = () => useContext(GrupoContextoCtx);
