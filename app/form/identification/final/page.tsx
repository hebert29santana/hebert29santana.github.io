"use client";

import { CustomInput } from "@/components/input";
import { useRouter } from "next/navigation";
import { useFormContext } from "../../formContext";
import { CapitalHumano } from "@/hooks/useCapitalHumano";
import { SyntheticEvent } from "react";
import { SubmitContainer } from "@/components/submitcontainer";

export default function AdressFinal() {
  const router = useRouter();
  const { capitalHumano, updateCapitalHumano } = useFormContext();
  const handleChange = (
    key: keyof CapitalHumano,
    value: CapitalHumano[keyof CapitalHumano]
  ) => {
    updateCapitalHumano({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form/capital_humano");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <CustomInput
        required
        value={String(capitalHumano.totalDeServidores)}
        onChange={(event) =>
          handleChange("totalDeServidores", Number(event.target.value))
        }
        type="number"
        autoFocus
        label="Total de servidores"
      />
      <CustomInput
        required
        value={String(capitalHumano.totalCursosSuperioresCertificados)}
        onChange={(event) =>
          handleChange(
            "totalCursosSuperioresCertificados",
            Number(event.target.value)
          )
        }
        type="number"
        label="Total de cursos superiores certificados pelo MEC"
      />
      <CustomInput
        required
        value={String(capitalHumano.totalProgramasPosGraduacao)}
        onChange={(event) =>
          handleChange("totalProgramasPosGraduacao", Number(event.target.value))
        }
        type="number"
        label="Total de programas de pós graduação oferecidos"
      />
      <CustomInput
        required
        value={String(capitalHumano.totalEmpresasJunior)}
        onChange={(event) =>
          handleChange("totalEmpresasJunior", Number(event.target.value))
        }
        type="number"
        label="Total de Empresas Juniores na instituição"
      />
      <SubmitContainer type="submit" text="Concluir" />
    </form>
  );
}
