import { TextLabel } from "@/components/textLabel";

export const FooterResultado = () => (
  <div
    id="footer"
    className="relative sm:p-0 z-40 bottom-0 left-0 w-full flex flex-col items-center justify-center gap-2 p-3 mt-[24px]"
  >
    <div className="flex flex-col gap-0">
      <TextLabel
        className="leading-loose text-center"
        text="CALMATI² - Calculadora de Maturidade de Inovação Institucional – 2024"
      />
      <TextLabel
        className="leading-loose text-center"
        text="Universidade Estadual de Santa Cruz – UESC Ilhéus Bahia"
      />
    </div>
    <TextLabel
      className="leading-loose text-center"
      text="PROFNIT - Programa de Mestrado Profissional em Propriedade Intelectual e Transferência de Tecnologia na Inovação"
    />
  </div>
);
