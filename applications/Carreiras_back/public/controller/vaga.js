exports.buscarVaga = (req, res) => {
    // const { pesquisa } = req.body;
    const pesquisa = 'Analista de Sistemas';

    console.log(pesquisa);
    res.json({ sucess: true, pesquisa: pesquisa });
};