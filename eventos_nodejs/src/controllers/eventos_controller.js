const Evento = require("../models/evento");


module.exports = class EventosController{ 
  static async index(req, res, next) {
    let eventos = await Evento.findAll();
    res.status(200).send(eventos);
  }


  static async get(req, res, next) {
    const id = req.params.id;
    let eventos = await Evento.findOne({ where: {id: id}});
    res.status(200).send(eventos);
  }

  static async create(req, res, next){
    const {id_usuario, titulo, descricao, data_inicio, data_fim} = req.body;
    if(!id_usuario || !titulo || !data_inicio || !data_fim ){
      return res.status(400).send({
        mensagem: "Os campos id_usuario, titulo, data_inicio, data_fim, são obrigatórios"
      })
    }

    let evento = await Evento.create({ 
      idUsuario: id_usuario, 
      titulo: titulo,
      descricao: descricao,
      dataInicio: data_inicio,
      dataFim: data_fim
    });

    res.status(201).send(evento);
  }


  static async update(req, res, next){
    const id = req.params.id;
    const {id_usuario, titulo, descricao, data_inicio, data_fim} = req.body;

    if(!id_usuario || !titulo || !data_inicio || !data_fim ){
      return res.status(400).send({
        mensagem: "Os campos id_usuario, titulo, data_inicio, data_fim, são obrigatórios"
      })
    }

    let evento_base = await Evento.findByPk(id);
    if(!evento_base) return res.status(400).send({ mensagem: "O id passado não existe" });

    let evento = await evento_base.update({ 
      idUsuario: id_usuario, 
      titulo: titulo,
      descricao: descricao,
      dataInicio: data_inicio,
      dataFim: data_fim
    });

    res.status(200).send(evento);
  }

  static async delete(req, res, next){
    const id = req.params.id;

    let evento_base = await Evento.findByPk(id);
    if(!evento_base) return res.status(400).send({ mensagem: "O id passado não existe" });

    evento_base.destroy();
    res.status(204).send("");
  }



}
