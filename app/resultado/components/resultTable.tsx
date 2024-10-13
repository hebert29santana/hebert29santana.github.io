import { useFormContext } from "@/app/form/formContext";

export const ResultTable = ({ loadPdf }: { loadPdf?: boolean }) => {
  const {
    getCapitalHumano,
    getInfraestrutura,
    getInstituicoes,
    getConhecimentoETecnologia,
    getEconomia,
    getEconomiaCriativa,
  } = useFormContext();
  return (
    <div
      className={`${
        loadPdf ? "" : "sm:bg-gradient-to-b from-[#2c2c2c] to-[#292929]"
      } rounded-xl sm:px-5`}
    >
      <div className={`${row} border-b border-b-[#3c3c3c]`}>
        <span className={`${title} border-r border-r-[#3c3c3c]`}>Grupo</span>
        <span>Pilar</span>
        <span className="border-l border-l-[#3c3c3c]">CALMATI²</span>
      </div>
      <div className={`${row} border-b border-b-[#3c3c3c]`}>
        <span
          className={`${title} bg-teal-500/5 rounded-xl py-3 h-full grid content-center row-start-1 row-end-5`}
        >
          Contexto
        </span>
        <Pair
          additionalClass={classContexto}
          title="Capital Humano"
          value={getCapitalHumano()}
        />
        <Pair
          additionalClass={classContexto}
          title="Infraestrutura"
          value={getInfraestrutura()}
        />
        <Pair
          additionalClass={classContexto}
          title="Instituições"
          value={getInstituicoes()}
        />
        <Pair
          additionalClass={classContexto}
          title="Economia"
          value={getEconomia()}
        />
      </div>
      <div className={row}>
        <span
          className={`${title} bg-amber-700/10 rounded-xl py-3 grid content-center h-full row-start-1 row-end-3`}
        >
          Resultados
        </span>
        <Pair
          additionalClass={classResultado}
          title="Conhecimento e Tecnologia"
          value={getConhecimentoETecnologia()}
        />
        <Pair
          additionalClass={classResultado}
          title="Economia criativa"
          value={getEconomiaCriativa()}
        />
      </div>
    </div>
  );
};

const row = "grid grid-cols-3 sm:p-2 gap-2 sm:gap-3 text-center py-3";
const title = "self-center";

const Pair = ({
  title,
  value,
  additionalClass,
}: {
  title: string;
  value: number;
  additionalClass?: string;
}) => {
  return (
    <span
      className={`flex justify-around col-start-2 col-span-2 ${additionalClass}`}
    >
      <div className="w-full text-start pl-2 py-3 h-full grid content-center">
        {title}
      </div>
      <div className="w-full py-3 h-full grid content-center">
        {value.toFixed(2)}
      </div>
    </span>
  );
};

const classContexto = "border-dotted border border-teal-100/20 rounded-md";
const classResultado = "border-dotted border border-amber-50/20 rounded-md";
