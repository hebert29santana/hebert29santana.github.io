"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { RadioButton } from "@/components/radioButton";
import { useGrupoContexto } from "../useGrupoContexto";
import { useFormContext } from "../formContext";
import { Economia } from "@/hooks/useEconomia";

export default function EtapaEconomia() {
  const router = useRouter();
  const { setGrupoContexto, setProgress } = useGrupoContexto();
  const { economia, updateEconomia } = useFormContext();
  useEffect(() => {
    setGrupoContexto("GRUPO CONTEXTO - Economia");
    setProgress(75);
  }, []);
  const handleChange = (
    key: keyof Economia,
    value: Economia[keyof Economia]
  ) => {
    updateEconomia({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form/conhecimento_e_tecnologia");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <RadioButton
        value={
          economia.possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado
        }
        onChange={(value) =>
          handleChange(
            "possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado",
            value
          )
        }
        label="Possui algum financiamento através da Fundação de Amparo à Pesquisa do seu Estado?"
      />
      <RadioButton
        value={
          economia.possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento
        }
        onChange={(value) =>
          handleChange(
            "possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento",
            value
          )
        }
        label="Possui algum financiamento através do Banco Nacional do Desenvolvimento?"
      />
      <RadioButton
        value={economia.possuiFinanciamentoAtravesDeEmendasParlamentares}
        onChange={(value) =>
          handleChange(
            "possuiFinanciamentoAtravesDeEmendasParlamentares",
            value
          )
        }
        label="Possui algum financiamento através de Emendas Parlamentares?"
      />
      <RadioButton
        label="Possui algum financiamento através da FINEP?"
        value={
          economia.possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos
        }
        onChange={(value) =>
          handleChange(
            "possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos",
            value
          )
        }
      />

      <SubmitContainer type="submit" text="Próximo" />
    </form>
  );
}
