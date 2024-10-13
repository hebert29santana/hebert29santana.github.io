"use client";

import { useGrupoContexto } from "@/app/form/useGrupoContexto";
import { ChevronLeft } from "@geist-ui/icons";
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";
import { useRouter } from "next/navigation";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { grupoContexto, progress } = useGrupoContexto();
  return (
    <section className="w-full sm:mt-[50px] max-w-md p-4 md:p-8 rounded-xl flex flex-col justify-center gap-3 py-4 px-4 pb-24 max-w-md">
      <div className="flex gap-2 items-center py-4">
        <Button
          onClick={() => router.back()}
          isIconOnly
          variant="ghost"
          size="sm"
        >
          <ChevronLeft />
        </Button>
        <h3 className="text-4xl font-bold text-neutral-100">CALMATI²</h3>
      </div>
      <h4 className="text-sm font-normal text-neutral-500">{grupoContexto}</h4>
      <Slider
        isDisabled
        hideThumb
        value={progress}
        className="w-full"
        size="sm"
        color="primary"
      />
      {children}
    </section>
  );
}
