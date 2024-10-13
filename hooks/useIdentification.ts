import { useState } from "react";

export type Identificacao = {
  nome: string;
  sigla: string;
  telefone: string;
  cnpj: string;
  cep: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: number;
  complemento: string;
};

export const initialIdentificacao: Identificacao = {
  nome: "",
  sigla: "",
  telefone: "",
  cnpj: "",
  cep: "",
  estado: "",
  cidade: "",
  rua: "",
  numero: 0,
  complemento: "",
};

export const useIdentification = () => {
  const [identificacao, setIdentificacao] = useState(initialIdentificacao);
  const updateIdentificacao = (value: Partial<Identificacao>) => {
    setIdentificacao((current) => ({ ...current, ...value }));
  };

  return { identificacao, updateIdentificacao };
};
