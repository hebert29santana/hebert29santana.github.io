import { useState } from "react";

export type EconomiaCriativa = {
  depositosDeMarcas: number;
  depositosDeDesenhoIndustrial: number;
  registroDeSoftware: number;
};

export const initialEconomiaCriativa: EconomiaCriativa = {
  depositosDeMarcas: 0,
  depositosDeDesenhoIndustrial: 0,
  registroDeSoftware: 0,
};

export const useEconomiaCriativa = () => {
  const [economiaCriativa, setEconomiaCriativa] = useState(
    initialEconomiaCriativa
  );
  const updateEconomiaCriativa = (value: Partial<EconomiaCriativa>) => {
    setEconomiaCriativa((current) => ({ ...current, ...value }));
  };

  const getEconomiaCriativa = () => {
    const resultado =
      (economiaCriativa.depositosDeMarcas +
        economiaCriativa.depositosDeDesenhoIndustrial +
        economiaCriativa.registroDeSoftware) /
      3;

    return resultado;
  };

  return { economiaCriativa, updateEconomiaCriativa, getEconomiaCriativa };
};
