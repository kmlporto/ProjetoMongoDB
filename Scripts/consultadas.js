// Consulta com cola��o inteira - Mostrar tdas as pessoas
db.Pessoas.find({});

// Consulta com contagem de documentos na cole��o - Contar quantoas pessoas foram cadastradas
db.Pessoas.find().count();

// 03 consultas com filtros diversos (IN, GT, etc), sem proje��o
// Pessoas que trabalham na clinica, seja dentista ou funcionario 
db.Pessoas.find({tipo: {$in: ["dentista", "funcionario"]}});

// Pessoas que trabalham na clinica, e que n�o possuem endereco cadastrado
db.Pessoas.find({tipo: {$in: ["dentista", "funcionario"]}, endereco: {$exists: false}});

// Pessoas que possuem apenas um telefone cadastrado
db.Pessoas.find({telefone: {$size:1}});


// 03 consultas com filtros diversos, com proje��o
// nome e numero de telefone de funcionarios que n�o possuem endereco cadastrado
db.Pessoas.find({tipo:"funcionario" , endereco: {$exists:false}},
                {nome:1, telefone:1, _id:0});

// nome e endereco da paciente que possui numero de teleone (83) 99598-6095
db.Pessoas.find({"telefone": {$in: ["(83) 99598-6095"]}}, 
                {nome:1, endereco:1, _id:0});

// nome das pacientes do sexo femenino
db.Pessoas.find({tipo: "paciente", sexo:"f"}, {nome:1, _id:0});
               

// consulta com filtro, proje��o e uso de express�o regular - numero de telefone da paciente que possui Stella no nome
db.Pessoas.find({tipo: "paciente", nome: /Stella/}, {telefone:1, _id:0});

// consulta com acesso a array de elementos - primeiro numero de telefone que � (83) 3557-4043
db.Pessoas.find({"telefone.0":"(83) 3557-4043"},{nome:1, _id:0});

// consulta com acesso a estrutura embutida - ver dados do paciente que mora no bairro Gramame 
db.Pessoas.find({tipo:"paciente", "endereco.bairro":"Gramame"});

// consulta com fun��o de agrega��o (sum, avg, max ou min) - quantidade de pessoas pelo tipo
db.Pessoas.aggregate([

    {
        $group: {
            _id: "$tipo",   
            qnt: {$sum: 1 }
         } 
    },
]);

// consulta que use distinct ou limit - mostrar 5 pessoas que n�o possuem cadastro de endereco
db.Pessoas.find({endereco: {$exists:false}},
            {nome:1, telefone:1, _id:0}).limit(5);
            

// consulta qualquer - rela��o do nome dos pacientes e seus dentistas
db.Pessoas.aggregate([
    {
        $lookup:
            {
                from: "Pessoas",
                localField: "_id",
                foreignField: "pacientes",
                as: "dentistas"
            }
    },
    {
        $match:
            {tipo: "paciente"}
    },
    {    
        $project:
            {_id:0,nome:1, "dentistas.nome":1}
    }
]);
    
