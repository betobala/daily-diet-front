export function separateDateAndHourString(dataHora: string): {
  date: string
  hour: string
} {
  console.log(dataHora)
  // Separando a data e hora da string original
  const [dataCompleta, horaCompleta] = dataHora.split(' ')

  // Separando o ano, mês e dia da data completa
  const [ano, mes, dia] = dataCompleta.split('-')

  // Formatando a data no formato desejado "DD.MM.YY"
  const date = `${dia}.${mes}.${ano}`

  // Formatando a hora no formato desejado "HH:mm"
  const hour = horaCompleta.slice(0, 5) // Pegando apenas os primeiros 5 caracteres (HH:mm)

  return { date, hour }
}
