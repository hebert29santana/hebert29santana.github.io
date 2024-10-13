"use client";
import { useFormContext } from "@/app/form/formContext";
import { FooterResultado } from "./components/footer";
import { ResultadoIdentificacao } from "./components/identificacao";
import { ResultadoGoBackBtn } from "./components/goBackBtn";
import { CustomRadarChart } from "./components/radar";
import { decimalToPercentage } from "@/utils/decimalToPercentage";
import { ResultTable } from "./components/resultTable";
import { Button } from "@nextui-org/button";
import { FileText } from "@geist-ui/icons";
import generatePDF, { Margin, Options } from "react-to-pdf";
import { useState } from "react";

export default function Home() {
  const {
    identificacao,
    capitalHumano,
    getNívelDeMaturidade,
    getCapitalHumano,
    getInfraestrutura,
    getInstituicoes,
    getConhecimentoETecnologia,
    getEconomia,
    getEconomiaCriativa,
  } = useFormContext();

  const {
    nome,
    sigla,
    cep,
    cidade,
    cnpj,
    complemento,
    estado,
    numero,
    rua,
    telefone,
  } = identificacao;

  const {
    totalDeServidores,
    totalCursosSuperioresCertificados,
    totalProgramasPosGraduacao,
    totalEmpresasJunior,
  } = capitalHumano;

  // const nome = "Instituto federal da Bahia";
  // const sigla = "IFBA";
  // const cep = "45.661-700";
  // const cidade = "Ilhéus";
  // const cnpj = "10.764.307/0014-37";
  // const complemento = "";
  // const estado = "BA";
  // const numero = 0;
  // const rua = "Rodovia BR 415";
  // const telefone = "1140028922";

  // const totalDeServidores = 2;
  // const totalCursosSuperioresCertificados = 2;
  // const totalProgramasPosGraduacao = 2;
  // const totalEmpresasJunior = 2;

  const onClick = () => {
    // imprimir relatório
  };

  const data = [
    {
      subject: `Conhecimento e tecnologia`,
      A: decimalToPercentage(getConhecimentoETecnologia()),
    },
    {
      subject: "Infraestrutura",
      A: decimalToPercentage(getInfraestrutura()),
    },
    {
      subject: "Instituições",
      A: decimalToPercentage(getInstituicoes()),
    },
    {
      subject: "Capital Humano",
      A: decimalToPercentage(getCapitalHumano()),
    },
    {
      subject: "Economia",
      A: decimalToPercentage(getEconomia()),
    },
    {
      subject: "Economia criativa",
      A: decimalToPercentage(getEconomiaCriativa()),
    },
  ];

  const [loadPdf, setLoadPdf] = useState(false);

  const getIgnoreElements = (element: Element | null) => {
    return element?.getAttribute("data-ignore-print") === "true";
  };

  const baixarRelatorio = () => {
    setLoadPdf(true);

    const getTargetElement = () => document.getElementById("element-to-print");
    const height = getTargetElement()?.offsetHeight;
    const width = getTargetElement()?.offsetWidth;
    const options: Options = {
      method: "open",
      canvas: { qualityRatio: 1, mimeType: "image/png", logging: true },
      filename: `CAMATI² - Relatório ${sigla}`,
      page: { margin: Margin.NONE },
      resolution: 1.5,
      overrides: {
        canvas: {
          height,
          width: 1080,
          windowHeight: height,
          windowWidth: 1400,
          ignoreElements: getIgnoreElements,
        },
      },
    };
    setTimeout(() => {
      generatePDF(getTargetElement, options).then(() => setLoadPdf(false));
    }, 1000);
  };

  return (
    <section
      className={`flex flex-col items-center justify-center gap-4 ${loadPdf ? "!text-slate-950" : "!text-slate-200"
        } w-full max-w-screen-lg`}
      id="element-to-print"
    >
      <div className="flex flex-col gap-6 max-w-[720px] p-4 md:p-10 text-sm font-light pb-12">
        <ResultadoGoBackBtn />
        <h2 className="text-lg font-normal">{`${nome.toUpperCase()} - ${sigla}`}</h2>
        <ResultadoIdentificacao
          cep={cep}
          cidade={cidade}
          cnpj={cnpj}
          complemento={complemento}
          estado={estado}
          numero={numero}
          rua={rua}
          telefone={telefone}
        />
        <div
          className={`mt-2 flex flex-col gap-2 ${loadPdf ? "" : "bg-[#343434]"
            }  p-6 sm:p-8 rounded-lg  text-xs sm:text-sm`}
        >
          <span>
            {`Total de servidores da Instituição: ${totalDeServidores}`}{" "}
          </span>
          <span>
            {`Total de cursos Superiores Certificados pelo MEC: ${totalCursosSuperioresCertificados}`}
          </span>
          <span>
            {`Total de Programas de Pós Graduação Oferecido pela Instituição: ${totalProgramasPosGraduacao}`}
          </span>
          <span>{`Total de Empresas Juniores: ${totalEmpresasJunior}`}</span>
        </div>
        <div
          className={`flex sm:justify-between items-center gap-2 flex-wrap ${loadPdf ? "" : "bg-[#343434]"
            } p-6 sm:p-8 rounded-lg font-normal  text-xs sm:text-sm`}
        >
          <h2>NÍVEL DE MATURIDADE DE INOVAÇÃO INSTITUCIONAL</h2>
          <h2
            className={`font-bold ${loadPdf ? "" : "bg-[#494949]"
              } p-2 rounded-md`}
          >
            {getNívelDeMaturidade()}%
          </h2>
        </div>
        <CustomRadarChart data={data} />
        <ResultTable loadPdf={loadPdf} />
        <div
          className="flex gap-4 mb-[-20px]"
          id="ignore"
          data-ignore-print="true"
        >
          <Button
            isLoading={loadPdf}
            onClick={baixarRelatorio}
            endContent={<FileText size={15} />}
            variant="flat"
          >
            Visualizar PDF
          </Button>
        </div>
        <FooterResultado />
      </div>
    </section>
  );
}
