import React from 'react';
import faker from 'community-faker';
import { LineChart } from './LineChart';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const defaultDataset = [
  {
    label: 'Dataset 1',
    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Dataset 2',
    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
];

export default function Form() {
  // eslint-disable-next-line no-unused-vars
  const [datasets, setDatasets] = React.useState(defaultDataset);
  return (

    <form
      style={{ padding: '100px 300px' }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ name: e.target.name.value });
      }}
    >
      <label htmlFor="name" style={{ fontSize: 24 }}>
        Name
        <input type="text" name="name" id="name" style={{ margin: 8 }} />
      </label>
      <LineChart labels={labels} datasets={datasets} />
    </form>
  );
}
