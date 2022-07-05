const createUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);

    res
      .status(400)
      .send({ message: "Não foi possível realizar o cadastro", error });
  }
};
