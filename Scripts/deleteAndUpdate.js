// Delete 
db.Pessoas.deleteOne(
    {cpf: ""}
)

// Updates
db.Pessoas.update(
    {nome: "Kamila Freitas Porto"},
    {$set: {
        cpf: "829.120.918-98",
        sexo: "f",
        telefone: [{numero: "(83) 9942-8182"}],
        dataNasc: new Date("1991-06-17"),
        tipo: "paciente",
        endere�o:{
                bairro: "Bessa",
                rua: "Rua Francisco Gon�alves"
            }
        }
    },
    {upsert: true}
)
    
db.Pessoas.update( 
    {"endere�o.bairro": "Bessa" , "endere�o.rua": /Francisco Gon�alves/},
    {$set: {
        "endere�o.bairro": "Jardim Oceania"}}
)  