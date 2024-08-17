export type QuestionType = "check" | "number";

export type Question = {
  title: string;
  code: string;
  type: QuestionType;
  value: number;
  children?: Question[];
};

export const questions: Question[] = [
  {
    title: "Possui Política de Inovação?",
    value: 1,
    code: "q_001",
    type: "check",
  },
  {
    title: "Possui Capacitação em Inovação ou Propriedade Intelectual?",
    value: 1,
    code: "q_002",
    type: "check",
  },
  {
    title: "Proximidade com Distrito Industrial",
    value: 1,
    code: "q_003",
    type: "check",
  },
  {
    title: "Proximidade com Parque Tecnológico?",
    value: 1,
    code: "q_004",
    type: "check",
  },
  {
    title: "Possui Núcleo de Inovação Tecnológica",
    value: 1,
    code: "q_005",
    children: [
      {
        title: "NIT possui Vitrine Tecnológica?",
        value: 1,
        code: "q_005.1",
        type: "check",
      },
    ],
    type: "check",
  },
  {
    title: "Possui Empresas Juniores?",
    value: 1,
    code: "q_006",
    children: [
      {
        title: "Quantas?",
        value: 1,
        code: "q_006.1",
        type: "number",
      },
    ],
    type: "check",
  },
  {
    title: "Possui Laboratório Maker?",
    value: 1,
    code: "q_007",
    type: "check",
  },
  {
    title: "Possui Pré Incubadora/Hotel de Projetos?",
    value: 1,
    code: "q_008",
    type: "check",
  },
  {
    title: "Possui Incubadora?",
    value: 1,
    code: "q_009",
    type: "check",
  },
];
