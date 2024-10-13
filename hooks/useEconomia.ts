import { useState } from "react";

export type Economia = {
  possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado: boolean;
  possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento: boolean;
  possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos: boolean;
  possuiFinanciamentoAtravesDeEmendasParlamentares: boolean;
};

export const initialEconomia: Economia = {
  possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado: false,
  possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento: false,
  possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos: false,
  possuiFinanciamentoAtravesDeEmendasParlamentares: false,
};

export const useEconomia = () => {
  const [economia, setEconomia] = useState(initialEconomia);
  const updateEconomia = (value: Partial<Economia>) => {
    setEconomia((current) => ({ ...current, ...value }));
  };

  const valorFinanciamentoFaps =
    economia.possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado
      ? 0.9
      : 0;
  const valorBNDES =
    economia.possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento
      ? 0.5
      : 0;

  const valorEmendasParlamentares =
    economia.possuiFinanciamentoAtravesDeEmendasParlamentares ? 0.5 : 0;

  const valorFinep =
    economia.possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos ? 1 : 0;

  const getEconomia = () => {
    const resultado =
      (valorFinanciamentoFaps +
        valorBNDES +
        valorEmendasParlamentares +
        valorFinep) /
      2.9;

    return resultado;
  };

  return { economia, updateEconomia, getEconomia };
};
