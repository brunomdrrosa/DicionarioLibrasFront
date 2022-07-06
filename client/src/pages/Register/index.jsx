import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "../../components/InputBox";
import api from "../../services/api";
import styles from "./styles.module.scss";

// Página de cadastro
export const Register = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const createUser = async (data) => {
    try {
      await api.post("/", data);

      alert("Cadastro realizado com sucesso!");

      navigate(`${data.name}/aprender`);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitForm = (data) => {
    if (
      data.email !== data.email_confirm ||
      data.password !== data.password_confirm
    ) {
      alert("Dados inválidos! Por favor, preencha os campos corretamente.");
    } else {
      const user = {
        name: data.name,
        email: data.email,
        password: data.password,
        xp_points: 0,
      };

      createUser(user);
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastro | Glossário de Libras</title>
      </Helmet>
      <div className={styles.layout}>
        <div className={styles.card}>
          <h1 className={styles.title}>Crie sua conta</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
            <InputBox
              title="Nome"
              message="Insira seu nome"
              onSubmitData={register("name")}
            />
            <InputBox
              type="email"
              title="E-mail"
              message="Insira seu e-mail"
              onSubmitData={register("email")}
            />
            <InputBox
              type="email"
              title="Confirme seu e-mail"
              message="Insira seu e-mail novamente"
              onSubmitData={register("email_confirm")}
            />
            <InputBox
              type="password"
              title="Senha"
              message="Insira sua senha"
              onSubmitData={register("password")}
            />
            <InputBox
              type="password"
              title="Confirme sua senha"
              message="Insira sua senha novamente"
              onSubmitData={register("password_confirm")}
            />
            <Button type="submit" className={styles.button}>
              Cadastrar
            </Button>
            <div className={styles.account_question}>
              <span>Já tem uma conta?</span>
              <Link to="/login" className={styles.link}>
                Entre
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
