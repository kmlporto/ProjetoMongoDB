// Consulta com cola��o inteira - Mostrar tdas as pessoas
db.getCollection('Pessoas').find({})

// Consulta com contagem de documentos na cole��o - Contar quantoas pessoas foram cadastradas
db.Pessoas.find().count()

// 03 consultas com filtros diversos (IN, GT, etc), sem proje��o
// 