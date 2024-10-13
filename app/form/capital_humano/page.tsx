"use client";

import { CustomInput } from "@/components/input";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { useFormContext } from "../formContext";
import { CapitalHumano } from "@/hooks/useCapitalHumano";
import { RadioButton } from "@/components/radioButton";
import { useGrupoContexto } from "../useGrupoContexto";
import { TextLabel } from "@/components/textLabel";

export default function Servidores() {
  const router = useRouter();
  const { setGrupoContexto, setProgress } = useGrupoContexto();
  useEffect(() => {
    setGrupoContexto("GRUPO CONTEXTO - Capital Humano");
    setProgress(30);
  }, []);
  const { capitalHumano, updateCapitalHumano } = useFormContext();
  const handleChange = (
    key: keyof CapitalHumano,
    value: CapitalHumano[keyof CapitalHumano]
  ) => {
    updateCapitalHumano({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form/capital_humano/final");
  };

  const somaTotalServidoresInvalida =
    capitalHumano.totalServidoresDoutores +
      capitalHumano.totalServidoresMestres >
    capitalHumano.totalDeServidores;

  const somaTotalCursosSuperioresInvalida =
    capitalHumano.totalCursosSuperioresEmTecnologia >
    capitalHumano.totalCursosSuperioresCertificados;

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <CustomInput
        value={String(capitalHumano.totalServidoresDoutores)}
        onChange={(event) =>
          handleChange("totalServidoresDoutores", Number(event.target.value))
        }
        min={0}
        max={capitalHumano.totalDeServidores}
        type="number"
        autoFocus
        label="Total de servidores doutores"
      />
      <CustomInput
        value={String(capitalHumano.totalServidoresMestres)}
        onChange={(event) =>
          handleChange("totalServidoresMestres", Number(event.target.value))
        }
        min={0}
        max={capitalHumano.totalDeServidores}
        type="number"
        label="Total de servidores mestres"
      />
      <CustomInput
        value={String(capitalHumano.totalCursosSuperioresEmTecnologia)}
        onChange={(event) =>
          handleChange(
            "totalCursosSuperioresEmTecnologia",
            Number(event.target.value)
          )
        }
        type="number"
        label="Cursos Superiores em Áreas Tecnológicas"
      />
      <RadioButton
        value={
          capitalHumano.forneceCapacitacaoEmPropriedadeIntelectualParaServidores
        }
        onChange={(value) =>
          handleChange(
            "forneceCapacitacaoEmPropriedadeIntelectualParaServidores",
            value
          )
        }
        label="A instituição fornece Capacitação em Propriedade Intelectual para servidores e discentes?"
      />

      {somaTotalServidoresInvalida && (
        <>
          <TextLabel
            text="A soma entre servidores doutores e servidores mestres não pode ser superior
            ao total de servidores da instituição"
            className="text-rose-600 mt-3"
          />
          <TextLabel
            text={`total de servidores: ${capitalHumano.totalDeServidores}`}
            className="text-rose-600"
          />
        </>
      )}

      {somaTotalCursosSuperioresInvalida && (
        <>
          <TextLabel
            text="A quantidade de Cursos Superiores em Áreas Tecnológicas
                  não pode ser maior que a quantidade de cursos superiores certificados pelo MEC"
            className="text-rose-600 mt-3"
          />
          <TextLabel
            text={`total de cursos certificados: ${capitalHumano.totalCursosSuperioresCertificados}`}
            className="text-rose-600"
          />
        </>
      )}

      <SubmitContainer
        disabled={
          somaTotalServidoresInvalida || somaTotalCursosSuperioresInvalida
        }
        variant="bordered"
        type="submit"
        text="Próximo"
      />
    </form>
  );
}
