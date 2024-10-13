import {
  EstadoSigla,
  getEstadoByValue,
} from "@/app/form/identification/adress/estados";
import { maskCNPJ } from "@/utils/cnpjMask";
import { phoneMask } from "@/utils/phoneMask";
import { zipCodeMask } from "@/utils/zipcodeMask";

type Props = {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
  complemento: string;
  cnpj: string;
  telefone: string;
};

export const ResultadoIdentificacao = ({
  rua,
  numero,
  cidade,
  estado,
  cep,
  complemento,
  cnpj,
  telefone,
}: Props) => (
  <div className="flex gap-2 md:gap-4 justify-between flex-wrap  text-xs sm:text-sm">
    <div className="mt-2 flex flex-col gap-2">
      <span>
        <span className="!font-bold">{"Endereço: "}</span>

        <span>{`${rua}, ${numero !== 0 ? numero : "S/Nº"}`}</span>
      </span>

      <span>{`${cidade} ${getEstadoByValue(
        estado as EstadoSigla
      )}, CEP: ${zipCodeMask(cep)}`}</span>
      <span>{complemento}</span>
    </div>
    <div className="mt-2 flex flex-col gap-2">
      <span>
        <span className="!font-bold">{"CNPJ:"}</span>
        {` ${maskCNPJ(cnpj)}`}
      </span>
      <span>
        <span className="!font-bold">{"Telefone:"}</span>
        {` ${phoneMask(telefone)}`}
      </span>
    </div>
  </div>
);
