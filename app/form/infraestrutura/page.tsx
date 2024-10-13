"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { RadioButton } from "@/components/radioButton";
import { useGrupoContexto } from "../useGrupoContexto";
import { useFormContext } from "../formContext";
import { Infraestrutura } from "@/hooks/useInfraestrutura";
import { SuperSelect } from "@/components/superSelect";
import { TextLabel } from "@/components/textLabel";
import { CustomInput } from "@/components/input";

export default function InfraestruturaDaInstituicao() {
  const router = useRouter();
  const { setGrupoContexto, setProgress } = useGrupoContexto();
  const { infraestrutura, updateInfraestrutura, capitalHumano } =
    useFormContext();
  useEffect(() => {
    setGrupoContexto("GRUPO CONTEXTO - Infraestrutura");
    setProgress(40);
  }, []);
  const handleChange = (
    key: keyof Infraestrutura,
    value: Infraestrutura[keyof Infraestrutura]
  ) => {
    updateInfraestrutura({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form/instituicoes");
  };

  const options = [
    { label: "De 0 a 50mbps", value: 0 },
    { label: "De 51 a 300mbps", value: 0.3 },
    { label: "De 301mbps a 500mbps", value: 0.6 },
    { label: "De 501mbps a 1gbps", value: 0.9 },
    { label: "Acima de 1gbps", value: 1 },
  ];

  const quantidadeDeEmpresasJuniorInvalida =
    infraestrutura.quantidadeDeEmpresasJuniorEmAreaDeTecnologia >
    capitalHumano.totalEmpresasJunior;

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <RadioButton
        value={infraestrutura.possuiLaboratorioMaker}
        onChange={(value) => handleChange("possuiLaboratorioMaker", value)}
        label="Possui laboratório maker?"
      />
      <RadioButton
        value={infraestrutura.possuiPreIncubadoraDeProjetos}
        onChange={(value) =>
          handleChange("possuiPreIncubadoraDeProjetos", value)
        }
        label="Possui pré incubadora de projetos ou então um hotel de projetos?"
      />
      <RadioButton
        value={infraestrutura.possuiIncubadoraDeProjetos}
        onChange={(value) => handleChange("possuiIncubadoraDeProjetos", value)}
        label="Possui incubadora de projetos?"
      />
      <RadioButton
        value={infraestrutura.possuiNucleoDeInovacaoTecnologica}
        onChange={(value) =>
          handleChange("possuiNucleoDeInovacaoTecnologica", value)
        }
        label="Possui Núcleo de Inovação Tecnológica (NIT)?"
      />
      <RadioButton
        value={infraestrutura.possuiEmpresaJuniorEmAreaDeTecnologia}
        onChange={(value) =>
          handleChange("possuiEmpresaJuniorEmAreaDeTecnologia", value)
        }
        label="Possui Empresa Junior em Área Tecnológica?"
      />
      {infraestrutura.possuiEmpresaJuniorEmAreaDeTecnologia && (
        <CustomInput
          required
          min={1}
          value={String(
            infraestrutura.quantidadeDeEmpresasJuniorEmAreaDeTecnologia
          )}
          onChange={(event) =>
            handleChange(
              "quantidadeDeEmpresasJuniorEmAreaDeTecnologia",
              Number(event.target.value)
            )
          }
          type="number"
          label="Quantidade de empresas júnior em área de tecnologia"
        />
      )}
      <SuperSelect
        label="Velocidade Internet Banda Larga"
        value={String(infraestrutura.velocidadeInternetBandaLarga)}
        options={options}
        onChange={(value: string) => {
          handleChange("velocidadeInternetBandaLarga", Number(value));
        }}
      />
      <RadioButton
        value={infraestrutura.possuiLaboratorioMultidisciplinarInformatizado}
        onChange={(value) =>
          handleChange("possuiLaboratorioMultidisciplinarInformatizado", value)
        }
        label="Possui Laboratório Multidisciplinar Informatizado?"
      />

      {quantidadeDeEmpresasJuniorInvalida && (
        <>
          <TextLabel
            text="A quantidade empresas júnior em área tecnológica não pode ser superior ao total de empresas júnior da instituição"
            className="text-rose-600 mt-3"
          />
          <TextLabel
            text={`total de empresas júnior da instituição: ${capitalHumano.totalEmpresasJunior}`}
            className="text-rose-600"
          />
        </>
      )}

      <SubmitContainer
        disabled={quantidadeDeEmpresasJuniorInvalida}
        type="submit"
        text="Próximo"
      />
    </form>
  );
}
