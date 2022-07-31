# Any Data to CSV

Convert any kind of data to a CSV format with a straightforward API.

## Supported Platforms

* Deno

## Usage

```ts
import { toCsv, HeaderSpec, CsvDataValue } from 'https://raw.githubusercontent.com/alwint3r/any-to-csv/mod.ts';

const data = [
    { name: 'Anakin', job: 'Padawan' },
    { name: 'Obi-Wan', job: 'Jedi Master' },
];

const headers: HeaderSpec[] = [
    { name: 'name', as: 'Name', transform: (value: CsvDataValue) => (value as string).toUpperCase() },
    { name: 'job', as: 'Job' },
];

const csv = toCsv(data, headers);

console.log(csv);
// will print

// Name,Job
// ANAKIN,Padawan
// OBI-WAN,Jedi Master
```