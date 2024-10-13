import { createContext, PropsWithChildren, useContext } from "react";
import {
  initialIdentificacao,
  useIdentification,
} from "@/hooks/useIdentification";
import {
  initialCapitalHumano,
  useCapitalHumano,
} from "@/hooks/useCapitalHumano";
import {
  initialInfraestrutura,
  useInfraestrutura,
} from "@/hooks/useInfraestrutura";
import { initialInstituicoes, useInstituicoes } from "@/hooks/useInstituicoes";
import { initialEconomia, useEconomia } from "@/hooks/useEconomia";
import {
  initialConhecimentoETecnologia,
  useConhecimentoETecnologia,
} from "@/hooks/useConhecimentoETecnologia";
import {
  initialEconomiaCriativa,
  useEconomiaCriativa,
} from "@/hooks/useEconomiaCriativa";
import { decimalToPercentage } from "@/utils/decimalToPercentage";

const initialValue = {
  identificacao: initialIdentificacao,
  updateIdentificacao: ({}) => {},
  capitalHumano: initialCapitalHumano,
  updateCapitalHumano: ({}) => {},
  getCapitalHumano: () => 0,
  infraestrutura: initialInfraestrutura,
  updateInfraestrutura: ({}) => {},
  getInfraestrutura: () => 0,
  instituicoes: initialInstituicoes,
  updateInstituicoes: ({}) => {},
  getInstituicoes: () => 0,
  economia: initialEconomia,
  updateEconomia: ({}) => {},
  getEconomia: () => 0,
  conhecimentoETecnologia: initialConhecimentoETecnologia,
  updateConhecimentoETecnologia: ({}) => {},
  getConhecimentoETecnologia: () => 0,
  economiaCriativa: initialEconomiaCriativa,
  updateEconomiaCriativa: ({}) => {},
  getEconomiaCriativa: () => 0,
  getNívelDeMaturidade: () => 0,
};
const FormContext = createContext(initialValue);

export const FormContextProvider = ({ children }: PropsWithChildren) => {
  const { identificacao, updateIdentificacao } = useIdentification();
  const { capitalHumano, updateCapitalHumano, getCapitalHumano } =
    useCapitalHumano();
  const { infraestrutura, updateInfraestrutura, getInfraestrutura } =
    useInfraestrutura({
      totalEmpresasJunior: capitalHumano.totalEmpresasJunior,
    });
  const { instituicoes, updateInstituicoes, getInstituicoes } =
    useInstituicoes();
  const { economia, updateEconomia, getEconomia } = useEconomia();
  const {
    conhecimentoETecnologia,
    updateConhecimentoETecnologia,
    getConhecimentoETecnologia,
  } = useConhecimentoETecnologia();
  const { economiaCriativa, updateEconomiaCriativa, getEconomiaCriativa } =
    useEconomiaCriativa();

  const getNívelDeMaturidade = () => {
    const maturidade =
      (getCapitalHumano() +
        getInfraestrutura() +
        getInstituicoes() +
        getEconomia() +
        getConhecimentoETecnologia() +
        getEconomiaCriativa()) /
      6;

    return decimalToPercentage(maturidade);
  };
  return (
    <FormContext.Provider
      value={{
        identificacao,
        updateIdentificacao,
        capitalHumano,
        updateCapitalHumano,
        getCapitalHumano,
        infraestrutura,
        updateInfraestrutura,
        getInfraestrutura,
        instituicoes,
        updateInstituicoes,
        getInstituicoes,
        economia,
        updateEconomia,
        getEconomia,
        conhecimentoETecnologia,
        updateConhecimentoETecnologia,
        getConhecimentoETecnologia,
        economiaCriativa,
        updateEconomiaCriativa,
        getEconomiaCriativa,
        getNívelDeMaturidade,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
