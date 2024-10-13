enum QuestionType {
  NUMBER,
  BOOLEAN,
  SELECT,
}

type Question = {
  code: string;
  type: QuestionType;
  title: string;
  placeholder?: string;
  value?: number;
  hint?: string;
  options?: Array<{
    label: string;
    value: number;
  }>;
};

export const questions: Question[] = [
  {
    type: QuestionType.NUMBER,
    title: "Questão do tipo Numérico",
    placeholder: "Insira o número",
    value: 0,
    code: "",
  },
  {
    type: QuestionType.BOOLEAN,
    title: "Questão do tipo booleano",
    value: 0,
    code: "",
  },
  {
    type: QuestionType.SELECT,
    title: "Questão do tipo select",
    placeholder: "Selecione a opção adequada",
    hint: "seleciona a opção que mais se adequa à sua escolha",
    options: [
      { label: "Opção 1", value: 1 },
      { label: "Opção 2", value: 2 },
      { label: "Opção 3", value: 3 },
      { label: "Opção 4", value: 4 },
    ],
    code: "",
  },
];
