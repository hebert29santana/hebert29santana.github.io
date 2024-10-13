import { useState } from "react";

export type ConhecimentoETecnologia = {
  depositosDePatentesDeInovacao: number;
  depositosDePatentesDeModeloDeUtilidade: number;
  producaoCientificaEmAreasTecnologicas: number;
  contratosDeTransferenciaDeTecnologiaAverbados: number;
};

export const initialConhecimentoETecnologia: ConhecimentoETecnologia = {
  depositosDePatentesDeInovacao: 0,
  depositosDePatentesDeModeloDeUtilidade: 0,
  producaoCientificaEmAreasTecnologicas: 0,
  contratosDeTransferenciaDeTecnologiaAverbados: 0,
};

export const useConhecimentoETecnologia = () => {
  const [conhecimentoETecnologia, setConhecimentoETecnologia] = useState(
    initialConhecimentoETecnologia
  );
  const updateConhecimentoETecnologia = (
    value: Partial<ConhecimentoETecnologia>
  ) => {
    setConhecimentoETecnologia((current) => ({ ...current, ...value }));
  };

  const getConhecimentoETecnologia = () => {
    const resultado = // FÓRMULA QUE FAZ A NOTA DO PILAR CONHECIMENTO E TECNOLOGIA
      (conhecimentoETecnologia.depositosDePatentesDeInovacao + // Depósitos de Patentes de Inovação +
        conhecimentoETecnologia.depositosDePatentesDeModeloDeUtilidade + // Depósitos de Patentes de Modelo de Utilidade +
        conhecimentoETecnologia.producaoCientificaEmAreasTecnologicas + // Produção Científica em Áreas Tecnológicas +
        conhecimentoETecnologia.contratosDeTransferenciaDeTecnologiaAverbados) / // Contratos de Transferência de Tecnologia Averbados
      4;

    return resultado;
  };

  return {
    conhecimentoETecnologia,
    updateConhecimentoETecnologia,
    getConhecimentoETecnologia,
  };
};
