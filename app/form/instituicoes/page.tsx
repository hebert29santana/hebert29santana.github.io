"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { RadioButton } from "@/components/radioButton";
import { useGrupoContexto } from "../useGrupoContexto";
import { useFormContext } from "../formContext";
import { Instituicoes } from "@/hooks/useInstituicoes";

export default function EtapaInstituicoes() {
  const router = useRouter();
  const { setGrupoContexto, setProgress } = useGrupoContexto();
  const { instituicoes, updateInstituicoes } = useFormContext();
  useEffect(() => {
    setGrupoContexto("GRUPO CONTEXTO - Instituicoes");
    setProgress(60);
  }, []);
  const handleChange = (
    key: keyof Instituicoes,
    value: Instituicoes[keyof Instituicoes]
  ) => {
    updateInstituicoes({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form/economia");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <RadioButton
        value={instituicoes.possuiProximidadeComParqueTecnologico}
        onChange={(value) =>
          handleChange("possuiProximidadeComParqueTecnologico", value)
        }
        label="Possui proximidade com Parque Tecnológico?"
        hint="Considera-se proximidade com Parque Tecnológico a distância de até 80km"
      />
      <RadioButton
        value={instituicoes.possuiProximidadeComParqueIndustrial}
        onChange={(value) =>
          handleChange("possuiProximidadeComParqueIndustrial", value)
        }
        label="Possui proximidade com Parque Industrial?"
        hint="Considera-se proximidade com Parque Tecnológico a distância de até 80km"
      />
      <RadioButton
        value={instituicoes.possuiProximidadeComCentroDeInovacao}
        onChange={(value) =>
          handleChange("possuiProximidadeComCentroDeInovacao", value)
        }
        label="Possui proximidade com Centro de Inovação?"
        hint="Considera-se proximidade com Centro de Inovação a distância de até 50km."
      />
      <RadioButton
        value={instituicoes.possuiPoliticaDeInovacaoInstituicional}
        onChange={(value) =>
          handleChange("possuiPoliticaDeInovacaoInstituicional", value)
        }
        label="Possui Política de Inovação Institucional?"
      />

      <SubmitContainer type="submit" text="Próximo" />
    </form>
  );
}
