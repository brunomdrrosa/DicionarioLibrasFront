import { Header } from "../../components/Header/index.jsx";
import TodasUnidades from "../../components/TodasUnidades/index.jsx";
import { Helmet } from "react-helmet";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aprender | Glossário de LIBRAS</title>
      </Helmet>
      <Header />
      <div className="home">
        <TodasUnidades />
        {/* <Ranking /> */}
      </div>
    </>
  );
}
