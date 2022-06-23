import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import { TitleBox } from "../../components/TitleBox";
import { SectionTitle } from "../../components/SectionTitle";
import stories from "./stories.json";
import { StoryCard } from "../../components/StoryCard";

export const Stories = () => (
  <>
    <Helmet>
      <title>Histórias | Glossário de LIBRAS</title>
    </Helmet>
    <Header />
    <main className={styles.main}>
      <TitleBox
        title="Histórias em LIBRAS"
        subtitle="Melhore a sua comunicação com essas histórias curtas!"
      />
      <section className={styles.section}>
        <SectionTitle title="Nível 1" />
        <div className={styles.container}>
          <div className={styles.cards_container}>
            {stories.map(({ name, xp_points, exercise_path, image_url }, i) => (
              <StoryCard
                title={name}
                exp={xp_points}
                path={exercise_path}
                image={image_url}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <SectionTitle title="Nível 2" />
      </section>
    </main>
  </>
);
