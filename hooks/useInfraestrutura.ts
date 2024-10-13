import { useFormContext } from "@/app/form/formContext";
import { divide } from "@/utils/divide";
import { getBooleanValue } from "@/utils/getBooleanValue";
import { useState } from "react";

export type Infraestrutura = {
  possuiLaboratorioMaker: boolean;
  possuiPreIncubadoraDeProjetos: boolean;
  possuiIncubadoraDeProjetos: boolean;
  possuiNucleoDeInovacaoTecnologica: boolean;
  possuiEmpresaJuniorEmAreaDeTecnologia: boolean;
  quantidadeDeEmpresasJuniorEmAreaDeTecnologia: number;
  velocidadeInternetBandaLarga: number;
  possuiLaboratorioMultidisciplinarInformatizado: boolean;
};

export const initialInfraestrutura: Infraestrutura = {
  possuiLaboratorioMaker: false,
  possuiPreIncubadoraDeProjetos: false,
  possuiIncubadoraDeProjetos: false,
  possuiNucleoDeInovacaoTecnologica: false,
  possuiEmpresaJuniorEmAreaDeTecnologia: false,
  quantidadeDeEmpresasJuniorEmAreaDeTecnologia: 0,
  velocidadeInternetBandaLarga: 0,
  possuiLaboratorioMultidisciplinarInformatizado: false,
};

export const useInfraestrutura = ({
  totalEmpresasJunior,
}: {
  totalEmpresasJunior: number;
}) => {
  const [infraestrutura, setInfraestrutura] = useState(initialInfraestrutura);
  const updateInfraestrutura = (value: Partial<Infraestrutura>) => {
    setInfraestrutura((current) => ({ ...current, ...value }));
  };

  const valorEmpresaJunior = divide(
    infraestrutura.quantidadeDeEmpresasJuniorEmAreaDeTecnologia,
    totalEmpresasJunior
  );

  const getInfraestrutura = () => {
    return (
      (getBooleanValue(infraestrutura.possuiLaboratorioMaker) + // Laboratório Maker +
        (infraestrutura.possuiPreIncubadoraDeProjetos ? 0.5 : 0) + // Pré Incubadora +
        getBooleanValue(infraestrutura.possuiIncubadoraDeProjetos) + // Incubadora +
        getBooleanValue(infraestrutura.possuiNucleoDeInovacaoTecnologica) + // NIT +
        valorEmpresaJunior + // Empresa Junior +
        infraestrutura.velocidadeInternetBandaLarga + // Velocidade Banda Larga +
        getBooleanValue(
          infraestrutura.possuiLaboratorioMultidisciplinarInformatizado // Laboratórios Multidisciplinares Informatizados
        )) /
      6.5
    );
  };

  return { infraestrutura, updateInfraestrutura, getInfraestrutura };
};
