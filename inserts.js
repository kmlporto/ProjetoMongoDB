db.createCollection("Pessoas",{
        validator:{
            $jsonSchema:{
                bsonType: "objetc",
                required: ["nome", "cpf", "telefone", "dataNasc","tipo"]
             }
        }
})

db.Pessoas.insertMany(
    [
        {
            _id : ObjectId("5b64f3b42ff0d9a341ac1ad0"),
            nome: "Jaqueline Yasmin Emanuelly Nascimento",
            sexo: "f",
            cpf: "830.786.044-03",
            telefone: [
                {numero: "(83) 3557-4043"}, 
                {numero: "(83) 99999-9999"}],
            dataNasc: new Date ("1983-08-19"),
            endereço: {
                bairro: "Ernesto Geisel",
                rua: "Granja Socorro n 1000",
            },
            tipo: "paciente"
        },
        {
            _id : ObjectId("5b64f3b42ff0d9a341ac1ad1"),
            nome: "Miguel Vitor Luís Melo",
            sexo: "m",
            cpf: "607.799.684-09",
            telefone: [{numero: "(83) 3976-1933"}],
            dataNasc: new Date ("1990-02-22"),
            tipo: "paciente"
        },
        {   
            _id : ObjectId("5b64f3b42ff0d9a341ac1ad2"),
            nome: "Stella Alessandra Rebeca da Rosa",
            sexo: "f",
            cpf: "802.563.944-40",
            telefone: [
                {numero: "(83) 99598-6095"}, 
                {numero: "(83) 3557-4043"}],
            dataNasc: new Date ("1998-08-17"),
            endereço: {
                bairro: "Muçumagro",
                rua: "Rua das Goiabeiras n 237"
            },
            tipo: "paciente"
         },
         {
             _id: ObjectId("5b64f3b42ff0d9a341ac1ad3"),
            nome: "Sandra Carolina Almeida",
            sexo: "f",
            cpf: "894.513.534-02",
            telefone: [
                {numero: "(83) 3994-6368"}, 
                {numero: "(83) 99488-8481"}],
            dataNasc: new Date ("1961-05-06"),
            tipo: "paciente"
        },
        {
            _id: ObjectId("5b64f3b42ff0d9a341ac1ad4"),
            nome: "Victor Yuri da Luz",
            sexo: "m",
            cpf: "822.840.294-50",
            telefone: [{numero: "(83) 3634-7860"}],
            dataNasc: new Date ("1957-09-23"),
            tipo: "paciente"
        },
        {
            _id: ObjectId("5b64f3b42ff0d9a341ac1ad5"),
            nome: "Carlos Eduardo Joaquim",
            sexo: "m",
            cpf: "620.891.724-79",
            telefone: [{numero: "(83) 3746-4690"}],
            dataNasc: new Date ("1972-01-27"),
            tipo: "paciente"
        },
        {
            _id: ObjectId("5b64f3b42ff0d9a341ac1ad6"),
            nome: "Nelson Caio Ferreira",
            sexo: "m",
            cpf: "931.910.504-93",
            telefone: [
                {numero: "(83) 99598-6095"}, 
                {numero: "(83) 3557-4043"}],
            dataNasc: new Date ("1988-10-25"),
            endereço: {
                bairro: "Gramame",
                rua: "Rua Francisca Tereza de Carvalho n 296"
            },
            tipo: "paciente"
        },
       {
            _id: ObjectId("5b64f3b42ff0d9a341ac1ad7"),
            nome: "Elisa Vitória da Mata",
            sexo: "f",
            cpf: "028.200.744-05",
            telefone: [
                {numero: "(83) 2627-2535"}, 
                {numero: "(83) 99669-0592"}],
            dataNasc: new Date ("1966-03-12"),
            endereço: {
                bairro: "Anatólia",
                rua: "Rua das Seringueiras n 696]"
            },
            tipo: "paciente"
        },
        {
            _id: ObjectId("5b64f3b42ff0d9a341ac1ad8"),
            nome: "João Renato Moraes",
            sexo: "m",
            cpf: "100.405.334-76",
            telefone: [{numero: "(83) 99814-0652"}],
            dataNasc: new Date ("2000-07-26"),
            tipo: "paciente"
        },
        {
            _id: ObjectId("5b64f3b42ff0d9a341ac1ad9"),
            nome: "Lucca Enrico Ruan dos Santos",
            sexo: "m",
            cpf: "",
            telefone: [{numero: "(83) 98974-0539"}],
            dataNasc: new Date ("2001-09-25"),
            endereço: {
                bairro: "Anatólia",
                rua: "Rua das Seringueiras n 696"
            },
            tipo: "paciente"
        },
        {
            _id: ObjectId("5b64f3b42ff0d9a341ac1ada"),
            nome: "Tânia Carolina Alessandra",
            sexo: "f",
            cpf: "743.234.624-09",
            telefone: [{numero: "(83) 98635-4904"}],
            dataNasc: new Date ("1955-01-02"),
            endereço: {
                bairro: "Jaguaribe",
                rua: "Rua Doutor Oscar Soares n 510"
            },
            tipo: "paciente"
        }
    ]
)
db.Pessoas.find({tipo: "funcionario"})
//         funcionarios
db.Pessoas.insertMany(
    [
        {
            _id: ObjectId("5b64fe442ff0d9a341ac1adb"),
            nome: "Geraldo Bryan Moraes",
            sexo: "m",
            cpf: "078.875.984-19",
            telefone: [{numero: "(83) 99382-4026"}],
            dataNasc: new Date ("1985-09-02"),
            tipo: "funcionario"                
        },
        {
            _id: ObjectId("5b64fe442ff0d9a341ac1adc"),
            nome: "Sabrina Sara Letícia",
            sexo: "f",
            cpf: "372.089.034-17",
            telefone: [
                {numero: "(83) 2627-2535"}, 
                {numero: "(83) 99669-0592"}],
            dataNasc: new Date ("1990-05-24"),
            endereço: {
                bairro: "Jardim Veneza",
                rua: "Rua Severino Manoel do Nascimento n 814"
            },
            tipo: "funcionario",
            matricula: 10022010,
            dataAdmin: new Date ("2010-02-10")
        },
       {
            _id: ObjectId("5b64fe442ff0d9a341ac1add"),
            nome: "Mateus Kevin da Cruz",
            sexo: "m",
            cpf: "259.870.464-91",
            telefone: [{numero: "(83) 99791-6891"}],
            dataNasc: new Date ("1993-03=20"),
            tipo: "funcionario",
            matricula: 01122014,
            dataAdmin: new Date ("2014-12-01")
        },
       {
            _id: ObjectId("5b64fe442ff0d9a341ac1ade"),
            nome: "Jaqueline Cláudia Teixeira",
            sexo: "f",
            cpf: "366.136.634-33",
            telefone: [{numero: "(83) 98831-8959"}],
            dataNasc: new Date ("1985-12-23"),
            tipo: "funcionario",
            matricula: 01082018,
            dataAdmin: new Date ("2018-08-01")
        },
       {
            _id: ObjectId("5b64fe442ff0d9a341ac1adf"),
            nome: "Tatiane Kamilly Souza",
            sexo: "f",
            cpf: "349.686.354-43",
            telefone: [{numero: "(83) 99545-2226"}],
            dataNasc: new Date ("1989-07-20"),
            endereço: {
                bairro: "Valentina de Figueiredo",
                rua: "Rua Antônio Cunha Filho n 834"
            },
            tipo: "funcionario",
            matricula: 17102011,
            dataAdmin: new Date ("2011-10-17")
        }
    ]
)
        //  dentistas
db.Pessoas.find({tipo: "paciente"})
db.Pessoas.insertMany([
        {
            _id: ObjectId("5b64ff502ff0d9a341ac1ae0"),
            nome: "Rafael Osvaldo Benício Campos",
            sexo: "m",
            cpf: "853.282.644-01",
            telefone: [{numero: "((83) 3659-6778"}],
            dataNasc: new Date ("1966-03-12"),
            endereço: {
                bairro: "Costa e Silva",
                rua: "Rua Maria de Fátima Alves n 899"            
            },
            tipo: "dentista",
            cro: "PB-CD-2228",
            pacientes:[
                ObjectId("5b64f3b42ff0d9a341ac1ad0"),
                ObjectId("5b64f3b42ff0d9a341ac1ad1"),
                ObjectId("5b64f3b42ff0d9a341ac1ad2"),
                ObjectId("5b64f3b42ff0d9a341ac1ad3")],
            auxiliares:[
                ObjectId("5b64fe442ff0d9a341ac1adf")]
        },
        {
            _id: ObjectId("5b64ff502ff0d9a341ac1ae1"),
            nome: "Eloá Hadassa Assunção",
            sexo: "f",
            cpf: "619.965.214-20",
            telefone: [
                {numero: "(83) 2855-6242"}, 
                {numero: "(83) 99453-5834"}, 
                {numero: "(83) 98810-4769"}],
            dataNasc: new Date ("1971-05-18"),
            endereço: {
                bairro: "Ernani Sátiro",
                rua: "Rua Severina Ferreira n 137"
            },
            tipo: "dentista",
            cro: "PB-CD-3291",
            pacientes:[
                ObjectId("5b64f3b42ff0d9a341ac1ad3"),
                ObjectId("5b64f3b42ff0d9a341ac1ad7"),
                ObjectId("5b64f3b42ff0d9a341ac1ad8"),
                ObjectId("5b64f3b42ff0d9a341ac1ad4")],
            auxiliares:[
                ObjectId("5b64fe442ff0d9a341ac1ade")]
        },
       {
            _id:ObjectId("5b64ff502ff0d9a341ac1ae2"),
            nome: "Rosângela Renata Ramos",
            sexo: "f",
            cpf: "592.697.194-21",
            telefone: [
                {numero: "(83) 2627-2535"}, 
                {numero: "(83) 99669-0592"}],
            dataNasc: new Date ("1993-04-01"),
            endereço: {
                bairro: "Alto do Céu",
                rua: "Rua Francisco Barbosa da Silva n 901"
            },
            tipo: "dentista",
            cro: "PB-CD-3872",
            pacientes:[
                ObjectId("5b64f3b42ff0d9a341ac1ad2"),
                ObjectId("5b64f3b42ff0d9a341ac1ad4"),
                ObjectId("5b64f3b42ff0d9a341ac1ad5"),
                ObjectId("5b64f3b42ff0d9a341ac1ad7")],
            auxiliares:[
                ObjectId("5b64fe442ff0d9a341ac1adf")]
        },
        {
            _id: ObjectId("5b64ff502ff0d9a341ac1ae3"),
            nome: "Aline Alícia Cardoso",
            sexo: "f",
            cpf: "044.010.904-38",
            telefone: [
                {numero: "(83) 2955-8324"}],
            dataNasc: new Date ("1989-04-11"),
            tipo: "dentista",
            cro: "PB-CD-4285",
            pacientes:[
                ObjectId("5b64f3b42ff0d9a341ac1ad7"),
                ObjectId("5b64f3b42ff0d9a341ac1ad8"),
                ObjectId("5b64f3b42ff0d9a341ac1ad4")],
            auxiliares:[
                ObjectId("5b64fe442ff0d9a341ac1ade")]
        }
    ]
)

