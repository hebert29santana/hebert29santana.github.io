import { useForm } from "react-hook-form";
import styles from "./index.module.scss";
import { InputGroup } from "@/components/inputGroup";
import { Button } from "@/components/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Form = {
  name: string;
  sigla: string;
  cep: string;
  number: string;
  complement?: string;
  acept: boolean;
};

export default function Home() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({ mode: "onChange" });
  const onSubmit = (data: Form) => {
    localStorage.setItem("institution", JSON.stringify(data));
    navigate("/essay");
  };

  useEffect(() => {
    const formData = localStorage.getItem("institution");
    if (formData) {
      reset(JSON.parse(formData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.form_container}>
        <h1 className={styles.title}>Indentificação da instituição</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <InputGroup
              {...register("name", { required: "Campo obrigatório" })}
              autoFocus
              id="name"
              label="Nome da instituição*"
              {...(errors.name?.message && { hint: errors.name.message })}
            />
            <InputGroup
              {...register("sigla", { required: "Campo obrigatório" })}
              id="sigla"
              label="Sigla da instituição*"
              {...(errors.sigla?.message && { hint: errors.sigla.message })}
            />
            <InputGroup
              {...register("cep", { required: "Campo obrigatório" })}
              id="cep"
              label="CEP*"
              {...(errors.cep?.message && { hint: errors.cep.message })}
            />
            <InputGroup
              {...register("number", { required: "Campo obrigatório" })}
              id="number"
              label="Número*"
              {...(errors.number?.message && { hint: errors.number.message })}
            />
            <InputGroup
              {...register("complement")}
              id="complement"
              label="Complemento"
            />
          </div>
          <Button fullWidth>Confirmar</Button>
        </form>
      </div>
    </main>
  );
}
