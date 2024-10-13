"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { useGrupoContexto } from "../useGrupoContexto";
import { useFormContext } from "../formContext";
import { EconomiaCriativa } from "@/hooks/useEconomiaCriativa";
import { SuperSelect } from "@/components/superSelect";

export default function EtapaEconomiaCriativa() {
  const router = useRouter();
  const { setGrupoContexto, setProgress } = useGrupoContexto();
  const { economiaCriativa, updateEconomiaCriativa } = useFormContext();
  useEffect(() => {
    setGrupoContexto("GRUPO RESULTADO - Economia criativa");
    setProgress(100);
  }, []);
  const handleChange = (
    key: keyof EconomiaCriativa,
    value: EconomiaCriativa[keyof EconomiaCriativa]
  ) => {
    updateEconomiaCriativa({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/resultado");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <SuperSelect
        required
        label="Depósitos de Marcas"
        value={String(economiaCriativa.depositosDeMarcas)}
        options={[
          { label: "0 depósitos", value: 0 },
          { label: "De 1 a 10 depósitos", value: 0.3 },
          { label: "De 11 a 20 depósitos", value: 0.6 },
          { label: "Acima de 20 depósitos", value: 1 },
        ]}
        onChange={(value: string) => {
          handleChange("depositosDeMarcas", Number(value));
        }}
      />
      <SuperSelect
        required
        label="Depósitos de Desenho Industrial"
        value={String(economiaCriativa.depositosDeDesenhoIndustrial)}
        options={[
          { label: "0 depósitos", value: 0 },
          { label: "De 1 a 10 depósitos", value: 0.3 },
          { label: "De 11 a 20 depósitos", value: 0.6 },
          { label: "Acima de 20 depósitos", value: 1 },
        ]}
        onChange={(value: string) => {
          handleChange("depositosDeDesenhoIndustrial", Number(value));
        }}
      />
      <SuperSelect
        required
        label="Registro de Software"
        value={String(economiaCriativa.registroDeSoftware)}
        options={[
          { label: "0 depósitos", value: 0 },
          { label: "De 1 a 10 depósitos", value: 0.3 },
          { label: "De 11 a 20 depósitos", value: 0.6 },
          { label: "Acima de 20 depósitos", value: 1 },
        ]}
        onChange={(value: string) => {
          handleChange("registroDeSoftware", Number(value));
        }}
      />
      <SubmitContainer type="submit" text="Emitir relatório" />
    </form>
  );
}
