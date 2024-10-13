import { divide } from "@/utils/divide";
import { getBooleanValue } from "@/utils/getBooleanValue";
import { useState } from "react";

export type CapitalHumano = {
  totalDeServidores: number;
  totalCursosSuperioresCertificados: number;
  totalProgramasPosGraduacao: number;
  totalEmpresasJunior: number;
  totalServidoresDoutores: number;
  totalServidoresMestres: number;
  totalCursosSuperioresEmTecnologia: number;
  forneceCapacitacaoEmPropriedadeIntelectualParaServidores: boolean;
  quantidadeDeProgramasDePosGraduacao: number;
  possuiBolsaDePesquisaEFomentoPelaCAPES: boolean;
  possuiBolsaDeProdutividadeEPesquisaPelaCNPQ: boolean;
  possuiBolsaAtravesDaFAPEstadual: boolean;
  possuiBolsaDePesquisaFornecidaPelaInstituicao: boolean;
};

export const initialCapitalHumano: CapitalHumano = {
  totalDeServidores: 0,
  totalCursosSuperioresCertificados: 0,
  totalProgramasPosGraduacao: 0,
  totalEmpresasJunior: 0,
  totalServidoresDoutores: 0,
  totalServidoresMestres: 0,
  totalCursosSuperioresEmTecnologia: 0,
  forneceCapacitacaoEmPropriedadeIntelectualParaServidores: false,
  quantidadeDeProgramasDePosGraduacao: 0,
  possuiBolsaDePesquisaEFomentoPelaCAPES: false,
  possuiBolsaDeProdutividadeEPesquisaPelaCNPQ: false,
  possuiBolsaAtravesDaFAPEstadual: false,
  possuiBolsaDePesquisaFornecidaPelaInstituicao: false,
};

export const useCapitalHumano = () => {
  const [capitalHumano, setCapitalHumano] = useState(initialCapitalHumano);
  const updateCapitalHumano = (value: Partial<CapitalHumano>) => {
    setCapitalHumano((current) => ({ ...current, ...value }));
  };

  const valorDoutores = divide(
    capitalHumano.totalServidoresDoutores,
    capitalHumano.totalDeServidores
  );

  const valorMestres = divide(
    capitalHumano.totalServidoresMestres,
    capitalHumano.totalDeServidores
  );

  const valorCursosEmAreaDeTecnologia = divide(
    capitalHumano.totalCursosSuperioresEmTecnologia,
    capitalHumano.totalCursosSuperioresCertificados
  );

  const valorOfertaDePosGraduacao = divide(
    capitalHumano.quantidadeDeProgramasDePosGraduacao,
    capitalHumano.totalProgramasPosGraduacao
  );

  const getCapitalHumano = () => {
    //     FÓRMULA QUE FAZ A NOTA DO PILAR CAPITAL HUMANO
    // X = (Servidores Doutores +
    // Servidores Mestres +
    // Quantidade de Cursos Superiores em Área Tecnológica +
    // Capacitação em PI +
    // Oferta de Pós Graduação +
    // Bolsa de Pesquisa e Fomento CAPES +
    // Bolsa Produtividade Pesquisa CNPq +
    // Bolsa FAPs +
    // Bolsa pela Instituição)
    const resultadoCapitalHumano =
      (valorDoutores +
        valorMestres +
        valorCursosEmAreaDeTecnologia +
        getBooleanValue(
          capitalHumano.forneceCapacitacaoEmPropriedadeIntelectualParaServidores
        ) +
        valorOfertaDePosGraduacao +
        getBooleanValue(capitalHumano.possuiBolsaDePesquisaEFomentoPelaCAPES) +
        getBooleanValue(
          capitalHumano.possuiBolsaDeProdutividadeEPesquisaPelaCNPQ
        ) +
        getBooleanValue(capitalHumano.possuiBolsaAtravesDaFAPEstadual) +
        getBooleanValue(
          capitalHumano.possuiBolsaDePesquisaFornecidaPelaInstituicao
        )) /
      8.3;

    return resultadoCapitalHumano;
  };

  return { capitalHumano, updateCapitalHumano, getCapitalHumano };
};
