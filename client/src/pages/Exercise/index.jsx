import { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import right_answer from "../../assets/audios/right_answer.wav";
import wrong_answer from "../../assets/audios/wrong_answer.wav";
import { ExerciseHeader } from "../../components/ExerciseHeader";
import { GifCard } from "../../components/GifCard";
import { QuestionResult } from "../../components/QuestionResult";
import { QuestionContext } from "../../contexts/QuestionContext";
import courses from "../../data/courses.json";
import styles from "./styles.module.scss";

export const Exercise = ({ questionData }) => {
  const { course_name, unity_difficulty } = useParams();

  const navigate = useNavigate();

  const course = courses.filter(({ path }) => path === course_name)[0];
  const unity = course.units.filter(({ path }) => path === unity_difficulty)[0];

  const {
    index,
    handlePercentage,
    handleIndex,
    isCorrectAnswer,
    acceptAnswer,
    denyAnswer,
    cleanResult,
  } = useContext(QuestionContext);

  const onAlternativeSelected = (answer) => {
    if (answer) {
      acceptAnswer();

      const audio = new Audio(right_answer);

      audio.play();

      footerElement.current.classList.remove(styles.wrong_answer);
      footerElement.current.classList.add(styles.right_answer);
    }

    if (answer === false) {
      denyAnswer();

      const audio = new Audio(wrong_answer);

      audio.play();

      footerElement.current.classList.remove(styles.right_answer);
      footerElement.current.classList.add(styles.wrong_answer);
    }
  };

  const onFinishExercise = () => navigate("/aprender");

  const handleNextQuestion = () => {
    handlePercentage();
    handleIndex();
    cleanResult();

    footerElement.current.classList.remove(styles.right_answer);
    footerElement.current.classList.remove(styles.wrong_answer);
    footerElement.current.classList.add(styles.empty_answer);
  };

  const footerElement = useRef(null);

  return (
    <>
      <Helmet>
        <title>Atividade | Glossário de Libras</title>
      </Helmet>
      <div className={styles.layout}>
        <ExerciseHeader />
        {index < 5 ? (
          <>
            <main className={styles.main}>
              <section className={styles.container}>
                <div className={styles.question_container}>
                  <div className={styles.question_content}>
                    <p className={styles.question}>
                      Traduza a palavra:{" "}
                      <span id="questionExercise" className={styles.word}>
                        {unity.questions[index].word}
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles.gifs_container}>
                  <div className={styles.gifs}>
                    {unity.questions[index].answers.map((answer) => (
                      <GifCard
                        gif={answer.path}
                        onClick={() =>
                          onAlternativeSelected(answer.right_answer)
                        }
                      />
                    ))}
                  </div>
                </div>
              </section>
            </main>
            <footer className={styles.footer}>
              <div className={styles.footer_container} ref={footerElement}>
                <QuestionResult />
                <Button
                  primary
                  className={styles.button}
                  disabled={!isCorrectAnswer}
                  onClick={handleNextQuestion}
                >
                  Próxima pergunta
                </Button>
              </div>
            </footer>
          </>
        ) : (
          <div className={styles.finish_container}>
            <h2>PARABÉNS! Você completou o exercício</h2>
            <p>
              Você recebeu <strong>5 pontos de XP!</strong>
            </p>
            <Button
              primary
              className={styles.button}
              onClick={onFinishExercise}
            >
              Sair
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
