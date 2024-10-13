"use client";
import { CustomInput } from "@/components/input";
import { useRouter } from "next/navigation";
import { useFormContext } from "../../formContext";
import { Identificacao } from "@/hooks/useIdentification";
import { SyntheticEvent, useEffect, useState } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { SuperSelect } from "@/components/superSelect";
import { estados } from "./estados";
import { zipCodeMask } from "@/utils/zipcodeMask";

export default function Adress() {
  const router = useRouter();
  const { identificacao, updateIdentificacao } = useFormContext();
  const handleChange = (key: keyof Identificacao, value: string) => {
    updateIdentificacao({ [key]: value });
  };
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/form/identification/final");
  };

  const [ultimoCEP, setUltimoCEP] = useState("");

  const [localAdress, setLocalAdress] = useState({
    cidade: "",
    estado: "",
    rua: "",
  });

  async function getData(cep: string) {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    try {
      setLoading(true);
      const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (!response.ok) {
        setErroCep("Dados referentes ao CEP não foram encontrados");
        setLocalAdress({ cidade: "", estado: "", rua: "" });
        throw new Error(`Response status: ${response.status}`);
      } else {
        setErroCep("");
      }

      const json = await response.json();
      const endereco = {
        estado: json.state ?? "",
        cidade: json.city ?? "",
        rua: json.street ?? "",
      };
      updateIdentificacao(endereco);
      setLocalAdress(endereco);
      setLoading(false);
    } catch (error) {
      console.error({ error });
      setLoading(false);
    }
  }

  const [loading, setLoading] = useState(false);
  const [erroCep, setErroCep] = useState("");

  useEffect(() => {
    if (identificacao.cep.length === 9 && identificacao.cep !== ultimoCEP) {
      setUltimoCEP(identificacao.cep);
      getData(identificacao.cep);
    }
  }, [identificacao.cep]);

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <CustomInput
        required
        maxLength={9}
        isInvalid={erroCep.length > 0}
        value={identificacao.cep}
        onChange={(event) =>
          handleChange("cep", zipCodeMask(event.target.value))
        }
        errorMessage={erroCep}
        autoFocus
        label="Endereço"
        placeholder="CEP"
      />
      <SuperSelect
        variant="flat"
        label="Estado"
        placeholder=" "
        value={identificacao.estado}
        options={estados}
        onChange={(value) => handleChange("estado", value)}
        isDisabled={Boolean(localAdress.estado)}
      />
      <CustomInput
        value={identificacao.cidade}
        onChange={(event) => handleChange("cidade", event.target.value)}
        label="Cidade"
        placeholder="preenchimento automático"
        required
        disabled={Boolean(localAdress.cidade)}
      />
      <CustomInput
        value={identificacao.rua}
        onChange={(event) => handleChange("rua", event.target.value)}
        label="Rua"
        placeholder="preenchimento automático"
        required
        disabled={Boolean(localAdress.rua)}
      />
      <CustomInput
        value={String(identificacao.numero)}
        onChange={(event) => handleChange("numero", event.target.value)}
        label="Número"
        type="number"
        min={0}
        placeholder="Número"
        required
      />
      <CustomInput
        value={identificacao.complemento}
        onChange={(event) => handleChange("complemento", event.target.value)}
        label="Complemento"
        placeholder="Complemento"
      />
      <SubmitContainer isLoading={loading} type="submit" text="Próximo" />
    </form>
  );
}
