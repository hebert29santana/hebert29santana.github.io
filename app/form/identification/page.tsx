"use client";

import { CustomInput } from "@/components/input";
import { useRouter } from "next/navigation";
import { useFormContext } from "../formContext";
import { Identificacao } from "@/hooks/useIdentification";
import { SyntheticEvent } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { maskCNPJ } from "@/utils/cnpjMask";
import { phoneMask } from "@/utils/phoneMask";

export default function Identification() {
  const router = useRouter();
  const { identificacao, updateIdentificacao } = useFormContext();
  const handleChange = (key: keyof Identificacao, value: string) => {
    updateIdentificacao({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("identification/adress");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <CustomInput
        required
        value={identificacao.nome}
        onChange={(event) => handleChange("nome", event.target.value)}
        autoFocus
        label="Nome da Instituição"
      />
      <CustomInput
        required
        value={identificacao.sigla}
        onChange={(event) =>
          handleChange("sigla", event.target.value.toUpperCase())
        }
        label="Sigla"
      />
      <CustomInput
        required
        type="tel"
        maxLength={18}
        value={identificacao.telefone}
        onChange={(event) =>
          handleChange("telefone", phoneMask(event.target.value))
        }
        label="Telefone"
      />
      <CustomInput
        required
        maxLength={18}
        value={identificacao.cnpj}
        onChange={(event) => handleChange("cnpj", maskCNPJ(event.target.value))}
        label="CNPJ"
      />
      <SubmitContainer type="submit" text="Próximo" />
    </form>
  );
}
