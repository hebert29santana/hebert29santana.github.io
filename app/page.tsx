"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ChevronRight, Lambda } from "@geist-ui/icons";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push("/form/identification");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 sm:border-2 border-[#333333] max-w-md sm:bg-gradient-to-b from-[#2c2c2c] to-[#292929] p-4 md:p-8 rounded-xl mt-[10px] sm:mt-[50px]">
      <div className="flex flex-col gap-6 text-sm font-light pb-0 sm:pb-3 text-xs">
        <div className="flex items-center gap-2 justify-between w-fullp-2 sm:py-4 rounded-lg">
          <h3 className="text-4xl font-bold text-neutral-100 text-center">
            CALMATI²
          </h3>
          <Button isDisabled isIconOnly variant="ghost" size="sm">
            <Lambda size={15} />
          </Button>
        </div>

        <p className="sm:text-xl text-lg text-justify">
          Olá, sejam bem vindos à CALMATI², Calculadora de Maturidade de
          Inovação Institucional.
        </p>
        <p className="text-xs text-justify">
          A CALMATI² é um software que permite ao usuário mensurar a maturidade
          da inovação dentro da Instituição de Ensino Superior (IES), fornecendo
          dados importantes para a tomada de decisões relacionadas a inovação.
        </p>
        <p className="text-xs text-justify">
          Esta calculadora analisa 31 indicadores, divididos em 9 dimensões, 6
          pilares e 2 grupos. O resultado informado pela calculadora varia de 0
          a 1, sendo 0 como pior nota e 1 como melhor nota. Essas notas são
          transformadas em porcentagem de 0% até 100%.
        </p>
        <p className="text-xs text-justify">
          A CALMATI² foi desenvolvida seguindo a metodologia já utilizada pelo
          recém lançado Índice Brasil de Inovação e Desenvolvimento (IBID), que
          por sua vez tem como metodologia o Índice Global de Inovação (GII)
          publicado anualmente pela Organização Mundial da Propriedade
          Intelectual (OMPI) medindo o desempenho dos ecossistemas de inovação
          em 132 países (IBID, 2024).
        </p>
        <p className="text-xs text-justify">
          O resultado informado pela calculadora varia de 0 a 1, sendo 0 como
          pior nota e 1 como melhor nota. Essas notas são transformadas em
          porcentagem de 0% até 100%.
        </p>
      </div>
      <Button
        fullWidth
        className="rounded p-6"
        onClick={onClick}
        endContent={<ChevronRight size={15} />}
      >
        Iniciar avaliação
      </Button>
    </section>
  );
}
