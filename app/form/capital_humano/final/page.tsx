"use client";

import { CustomInput } from "@/components/input";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";
import { SubmitContainer } from "@/components/submitcontainer";
import { useFormContext } from "../../formContext";
import { CapitalHumano } from "@/hooks/useCapitalHumano";
import { RadioButton } from "@/components/radioButton";
import { TextLabel } from "@/components/textLabel";

export default function Servidores() {
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
    router.push("/form/infraestrutura");
  };

  const ofertaDePosGraduacaoInvalida =
    capitalHumano.quantidadeDeProgramasDePosGraduacao >
    capitalHumano.totalProgramasPosGraduacao;

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col justify-center gap-3"
    >
      <CustomInput
        value={String(capitalHumano.quantidadeDeProgramasDePosGraduacao)}
        onChange={(event) =>
          handleChange(
            "quantidadeDeProgramasDePosGraduacao",
            Number(event.target.value)
          )
        }
        type="number"
        autoFocus
        label="Quantidade de programas de pós-graduação"
        description="(Mestrado, Mestrado Profissional e Doutorado) com avaliação nota 5, 6 ou 7 pela CAPES."
      />
      <RadioButton
        value={capitalHumano.possuiBolsaDePesquisaEFomentoPelaCAPES}
        onChange={(value) =>
          handleChange("possuiBolsaDePesquisaEFomentoPelaCAPES", value)
        }
        label="A instituição tem Bolsa de Pesquisa e Fomento pela CAPES?"
      />
      <RadioButton
        value={capitalHumano.possuiBolsaDeProdutividadeEPesquisaPelaCNPQ}
        onChange={(value) =>
          handleChange("possuiBolsaDeProdutividadeEPesquisaPelaCNPQ", value)
        }
        label="A instituição tem Bolsa de Produtividade e Pesquisa pela CNPq?"
      />
      <RadioButton
        value={capitalHumano.possuiBolsaAtravesDaFAPEstadual}
        onChange={(value) =>
          handleChange("possuiBolsaAtravesDaFAPEstadual", value)
        }
        label="A instituição tem Bolsa através da FAP (Fundação de Amparo à Pesquisa) do seu Estado?"
      />
      <RadioButton
        value={capitalHumano.possuiBolsaDePesquisaFornecidaPelaInstituicao}
        onChange={(value) =>
          handleChange("possuiBolsaDePesquisaFornecidaPelaInstituicao", value)
        }
        label="A instituição tem Bolsa de Pesquisa fornecida pela Instituição?"
      />

      {ofertaDePosGraduacaoInvalida && (
        <>
          <TextLabel
            text="A quantidade de programas de pós-graduação (Mestrado, Mestrado Profissional e Doutorado) com avaliação nota 5, 6 ou 7 pela CAPES.
            não pode ser superior
            ao total de programas de pós graduação"
            className="text-rose-600 mt-3"
          />
          <TextLabel
            text={`total de programas de pós graduação: ${capitalHumano.totalProgramasPosGraduacao}`}
            className="text-rose-600"
          />
        </>
      )}

      <SubmitContainer
        disabled={ofertaDePosGraduacaoInvalida}
        type="submit"
        text="Próximo"
      />
    </form>
  );
}
