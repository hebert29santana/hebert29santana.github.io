"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { useGrupoContexto } from "../useGrupoContexto";
import { useFormContext } from "../formContext";
import { ConhecimentoETecnologia } from "@/hooks/useConhecimentoETecnologia";
import { SuperSelect } from "@/components/superSelect";

export default function EtapaConhecimentoETecnologia() {
  const router = useRouter();
  const { setGrupoContexto, setProgress } = useGrupoContexto();
  const { conhecimentoETecnologia, updateConhecimentoETecnologia } =
    useFormContext();
  useEffect(() => {
    setGrupoContexto("GRUPO RESULTADO - Conhecimento e Tecnologia");
    setProgress(85);
  }, []);
  const handleChange = (
    key: keyof ConhecimentoETecnologia,
    value: ConhecimentoETecnologia[keyof ConhecimentoETecnologia]
  ) => {
    updateConhecimentoETecnologia({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form/economia_criativa");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <SuperSelect
        required
        label="Depósitos de Patentes de Invenção"
        value={String(conhecimentoETecnologia.depositosDePatentesDeInovacao)}
        options={[
          { label: "0 depósitos", value: 0 },
          { label: "De 1 a 30 depósitos", value: 0.3 },
          { label: "De 31 a 60 depósitos", value: 0.6 },
          { label: "Acima de 60 depósitos", value: 1 },
        ]}
        onChange={(value: string) => {
          handleChange("depositosDePatentesDeInovacao", Number(value));
        }}
      />
      <SuperSelect
        required
        label="Depósitos de Patentes de Modelo de Utilidade"
        value={String(
          conhecimentoETecnologia.depositosDePatentesDeModeloDeUtilidade
        )}
        options={[
          { label: "0 depósitos", value: 0 },
          { label: "De 1 a 30 depósitos", value: 0.3 },
          { label: "De 31 a 60 depósitos", value: 0.6 },
          { label: "Acima de 60 depósitos", value: 1 },
        ]}
        onChange={(value: string) => {
          handleChange("depositosDePatentesDeModeloDeUtilidade", Number(value));
        }}
      />
      <SuperSelect
        required
        label="Produção Científica em Áreas Tecnológicas"
        value={String(
          conhecimentoETecnologia.producaoCientificaEmAreasTecnologicas
        )}
        options={[
          { label: "0 publicações", value: 0 },
          { label: "De 1 a 50 publicações", value: 0.3 },
          { label: "De 51 a 100 publicações", value: 0.6 },
          { label: "Acima de 100 publicações", value: 1 },
        ]}
        onChange={(value: string) => {
          handleChange("producaoCientificaEmAreasTecnologicas", Number(value));
        }}
      />
      <SuperSelect
        required
        label="Contratos de Transferência de Tecnologia Averbados"
        value={String(
          conhecimentoETecnologia.contratosDeTransferenciaDeTecnologiaAverbados
        )}
        options={[
          { label: "0 contratos", value: 0 },
          { label: "De 1 a 5 contratos", value: 0.3 },
          { label: "De 6 a 15 contratos", value: 0.6 },
          { label: "De 15 a 30 contratos", value: 0.9 },
          { label: "Acima de 30 contratos", value: 1 },
        ]}
        onChange={(value: string) => {
          handleChange(
            "contratosDeTransferenciaDeTecnologiaAverbados",
            Number(value)
          );
        }}
      />

      <SubmitContainer type="submit" text="Próximo" />
    </form>
  );
}
