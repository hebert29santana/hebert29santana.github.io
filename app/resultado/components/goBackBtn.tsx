"use client";
import { ChevronLeft } from "@geist-ui/icons";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export const ResultadoGoBackBtn = () => {
  const router = useRouter();
  return (
    <div className="flex gap-2 items-center" data-ignore-print="true">
      <Button
        onClick={() => router.back()}
        isIconOnly
        variant="ghost"
        size="sm"
      >
        <ChevronLeft />
      </Button>
    </div>
  );
};
