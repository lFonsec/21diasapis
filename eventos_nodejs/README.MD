cd src (De src)
npx sequelize-cli model:generate --name Evento --attributes idUsuario:INTEGER,titulo:string,descricao:text,dataInicio:date,dataFim:date


npx sequelize-cli db:migrate

    await Evento.create({ 
      idUsuario: 1, 
      titulo: "Aula 21APIS",
      descricao: "NodeJS + Sequelize",
      dataInicio: new Date(),
      dataFim: new Date()
    });
