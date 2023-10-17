module.exports = class HomeController{ 
    static index(req, res, next) {
        res.status(200).send({
            mensagem: 'API de Eventos em Nodejs',
            doc:"/api-docs"
        });
    }
}
