// Consulta com colação inteira - Mostrar tdas as pessoas
db.getCollection('Pessoas').find({})

// Consulta com contagem de documentos na coleção - Contar quantoas pessoas foram cadastradas
db.Pessoas.find().count()

// 03 consultas com filtros diversos (IN, GT, etc), sem projeção
// 