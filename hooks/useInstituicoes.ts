import { getBooleanValue } from "@/utils/getBooleanValue";
import { useState } from "react";

export type Instituicoes = {
  possuiProximidadeComParqueTecnologico: boolean;
  possuiProximidadeComParqueIndustrial: boolean;
  possuiProximidadeComCentroDeInovacao: boolean;
  possuiPoliticaDeInovacaoInstituicional: boolean;
};

export const initialInstituicoes: Instituicoes = {
  possuiProximidadeComParqueTecnologico: false,
  possuiProximidadeComParqueIndustrial: false,
  possuiProximidadeComCentroDeInovacao: false,
  possuiPoliticaDeInovacaoInstituicional: false,
};

export const useInstituicoes = () => {
  const [instituicoes, setInstituicoes] = useState(initialInstituicoes);
  const updateInstituicoes = (value: Partial<Instituicoes>) => {
    setInstituicoes((current) => ({ ...current, ...value }));
  };

  const getInstituicoes = () => {
    //FÓRMULA QUE FAZ A NOTA DO PILAR INSTITUIÇÕES
    return (
      (getBooleanValue(instituicoes.possuiProximidadeComParqueTecnologico) + // Proximidade com Parque Tecnológico +
        getBooleanValue(instituicoes.possuiProximidadeComParqueIndustrial) + // Proximidade com Parque Industrial +
        getBooleanValue(instituicoes.possuiProximidadeComCentroDeInovacao) + // Proximidade com Centro de Inovação +
        getBooleanValue(instituicoes.possuiPoliticaDeInovacaoInstituicional)) / // Política de Inovação Institucional
      4
    );
  };

  return { instituicoes, updateInstituicoes, getInstituicoes };
};
