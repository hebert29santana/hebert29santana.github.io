import styles from "./essay.module.scss";
import { Checkbox } from "@/components/checkbox";
import { Button } from "@/components/button";
import { Question, questions } from "./questions";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const IdentifyCompany = () => {
  const navigate = useNavigate();
  const [addedCodes, setAddedCodes] = useState<string[]>([]);

  const add = (code: string) => {
    setAddedCodes((all) => {
      if (all.some((value) => value === code)) {
        return all;
      }

      return [...all, code];
    });
  };
  const remove = (code: string) => {
    setAddedCodes((all) => {
      if (all.some((value) => value === code)) {
        return all.filter((value) => value !== code);
      }

      return all;
    });
  };

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    let finalValue = 0;
    questions.forEach((question) => {
      if (addedCodes.some((code) => code === question.code)) {
        finalValue += question.value;
      }
    });

    localStorage.setItem(
      "essay_result",
      String((finalValue / questions.length).toFixed(1))
    );

    navigate("/result");
  };

  return (
    <form className={styles.form} {...{ onSubmit }}>
      <Button onClick={() => navigate("/")}>Voltar</Button>
      {questions.map((question) => {
        return (
          <div key={question.code} className={styles.question__container}>
            <QuestionField
              {...{ question, add, remove }}
              selected={addedCodes.some((value) => value === question.code)}
            />
          </div>
        );
      })}

      <Button fullWidth type="submit">Confirmar</Button>
    </form>
  );
};

type QuestionFieldProps = {
  question: Question;
  add: (code: string) => void;
  remove: (code: string) => void;
  selected?: boolean;
};

const QuestionField = ({
  question,
  add,
  remove,
  selected,
}: QuestionFieldProps) => {
  return (
    <div>
      <div className={styles.question__field}>
        {question.title}
        <div className={styles.answer_container}>
          <Checkbox
            name={question.code}
            type="radio"
            onChange={() => {
              add(question.code);
            }}
            id={`accept-${question.code}`}
            label="Sim"
          />
          <Checkbox
            name={question.code}
            type="radio"
            onChange={() => {
              remove(question.code);
            }}
            id={`deny-${question.code}`}
            label="Não"
          />
        </div>
      </div>
      {selected &&
        question?.children?.map((quest) => (
          <div key={quest.code} className={styles.children}>
            <QuestionField {...{ add, remove, question: quest }} />
          </div>
        ))}
    </div>
  );
};

export default IdentifyCompany;
