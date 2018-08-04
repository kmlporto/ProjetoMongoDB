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
        endereço:{
                bairro: "Bessa",
                rua: "Rua Francisco Gonçalves"
            }
        }
    },
    {upsert: true}
)
    
db.Pessoas.update( 
    {"endereço.bairro": "Bessa" , "endereço.rua": /Francisco Gonçalves/},
    {$set: {
        "endereço.bairro": "Jardim Oceania"}}
)  