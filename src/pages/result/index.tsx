import { Button } from "@/components/button";
import styles from "./result.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Institution = {
  name: string;
  sigla: string;
  cep: string;
  number: string;
  complement?: string;
  acept: boolean;
};

export default function Home() {
  const navigate = useNavigate();
  const [insitution, setInstitutio] = useState<Institution>();
  const [result, setResult] = useState("");

  useEffect(() => {
    const institutionData = localStorage.getItem("institution");
    if (institutionData) {
      setInstitutio(JSON.parse(institutionData));
    }
    const resultData = localStorage.getItem("essay_result");
    if (resultData) {
      setResult(resultData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.form_container}>
        <Button style={{ width: '150px' }} onClick={() => navigate("/essay")}>Voltar</Button>
        <h1 className={styles.title}>{insitution?.name}</h1>
        <h2 className={styles.title}>Nota: {result}</h2>
        <form className={styles.form}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex
            libero, suscipit id ex vel, vehicula molestie augue. Cras ut
            malesuada nunc. Sed fermentum dolor tempor ex fringilla hendrerit.
            Vestibulum erat diam, feugiat eget dictum eget, efficitur id augue.
            Nunc quis libero pellentesque, rhoncus nibh et, porttitor leo. Nunc
            vulputate pulvinar nunc ac suscipit. Nam ultrices, erat id pretium
            efficitur, elit justo semper purus, tempus suscipit metus mauris
            vitae massa.
          </p>
          <p>
            Vivamus mauris massa, volutpat semper neque rhoncus, egestas ornare
            nibh. Vivamus efficitur nisi tortor, ut venenatis mi suscipit eget.
            Suspendisse vitae eleifend lacus. Mauris eros lectus, tincidunt ut
            nibh non, condimentum tristique odio. Vivamus vitae mi ex. Cras
            sagittis fringilla nisi. Nam consequat lobortis velit, non eleifend
            dui mollis dictum. Fusce finibus consectetur justo, sit amet iaculis
            urna. Suspendisse potenti. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Morbi feugiat dictum
            cursus. Proin dictum ornare erat, nec tempus felis porta eget. Sed
            venenatis enim in convallis egestas. Aliquam a nunc sit amet nisi
            pulvinar porta ultrices ac ante. Aliquam ullamcorper, felis id
            dapibus rutrum, sem leo elementum lorem, in varius orci velit non
            leo. Donec lectus nunc, eleifend in ligula in, pellentesque placerat
            massa.
          </p>
          <p>
            Cras placerat dolor eget massa commodo, non consectetur ipsum
            posuere. Donec molestie, lectus quis rhoncus aliquet, justo neque
            ornare dolor, ut iaculis massa massa elementum arcu. Vivamus
            aliquet, odio a aliquam lobortis, felis libero dapibus urna, at
            elementum enim enim malesuada dui. Duis suscipit elit vel arcu
            porttitor scelerisque sed a leo. Etiam aliquam tellus eget pretium
            ultrices. Aenean erat lorem, interdum et faucibus vitae, lacinia
            eget risus. Donec tempor tristique ante, ullamcorper luctus nisl
            molestie nec. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Pellentesque accumsan vestibulum
            nulla vel posuere. Mauris condimentum tristique nulla, eget mattis
            urna porttitor in. Curabitur accumsan, leo ac vulputate suscipit,
            enim purus porta odio, in pulvinar elit elit eu erat. Maecenas
            volutpat libero ac ante porttitor, et ultrices diam rhoncus. Sed
            rutrum vulputate luctus. Mauris dapibus aliquam arcu vitae
            imperdiet.
          </p>
        </form>
        <Button fullWidth onClick={() => { localStorage.clear(); navigate("/") }}>Início</Button>
      </div>
    </main>
  );
}
