const splitCsvLine = (line: string) => {
  const cells: string[] = []
  let current = ''
  let insideQuotes = false

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]
    const nextCharacter = line[index + 1]

    if (character === '"') {
      if (insideQuotes && nextCharacter === '"') {
        current += '"'
        index += 1
      } else {
        insideQuotes = !insideQuotes
      }

      continue
    }

    if (character === ',' && !insideQuotes) {
      cells.push(current.trim())
      current = ''
      continue
    }

    current += character
  }

  cells.push(current.trim())
  return cells
}

export const parseCsv = (csv: string) => {
  const lines = csv
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length === 0) {
    return []
  }

  const headers = splitCsvLine(lines[0]).map((header) => header.toLowerCase())

  return lines.slice(1).map((line) => {
    const values = splitCsvLine(line)

    return headers.reduce<Record<string, string>>((record, header, index) => {
      record[header] = values[index] ?? ''
      return record
    }, {})
  })
}
