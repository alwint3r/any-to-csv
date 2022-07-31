export type CsvDataValue = number | string | Date | null | undefined;

type CsvDataInputItem = {
  [key: string]: CsvDataValue;
};

type DataInput = CsvDataInputItem[];

export type CsvValueTransformerFunction = (value: CsvDataValue) => CsvDataValue;

export type HeaderSpec = {
  name: string;
  as?: string;
  transform?: CsvValueTransformerFunction;
};

export function toCsv(data: DataInput, headers: HeaderSpec[]): string {
  const headerLine = headers
    .map((header) => header.as || header.name)
    .join(",");
  const lines = [headerLine];

  for (const datum of data) {
    const row = headers.map((header) => {
      const value = datum[header.name];
      return header.transform ? header.transform(value) : value;
    });

    lines.push(row.join(','));
  }

  return lines.join('\r\n');
}
