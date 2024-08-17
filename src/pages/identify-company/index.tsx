import styles from "./identify.module.scss";
import { useForm } from "react-hook-form";
import { InputGroup } from "@/components/inputGroup";
import { Checkbox } from "@/components/checkbox";
import { Button } from "@/components/button";

type Form = {
  name: string;
  sigla: string;
  cep: string;
  number: string;
  complement?: string;
  acept: boolean;
};

const IdentifyCompany = () => {
  const { register, handleSubmit } = useForm<Form>({ mode: "onChange" });
  const onSubmit = (data: Form) => {
    alert(JSON.stringify(data, null, 4));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputGroup {...register("name")} id="name" label="Nome da instituição" />
      <InputGroup
        {...register("sigla")}
        id="sigla"
        label="Sigla da instituição"
      />
      <hr />
      <InputGroup {...register("cep")} id="cep" label="CEP" />
      <InputGroup {...register("number")} id="number" label="Número" />
      <InputGroup
        {...register("complement")}
        id="complement"
        label="Complemento"
      />
      <Checkbox {...register("acept")} id="acept" label="Aceitar termos" />
      <Button fullWidth>Confirmar</Button>
    </form>
  );
};

export default IdentifyCompany;
