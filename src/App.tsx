import { Fragment, Key, useState } from "react";

function App() {
  const [data, setData] = useState<Array<IData>>([
    {
      id: 3210039423,
      nama: "Maulana Sodiqin",
      divisi: "Teknologi",
    },
  ]);

  interface IData {
    id: number;
    nama: string;
    divisi: string;
  }

  return (
    <div className="App">
      <span className="flex flex-col"></span>
      <h1 className="text-xl">Anjay Mabar</h1>
      <div className="flex flex-col justify-between">
        <h1 className="flex-col flex text-red-400"></h1>
        <h1 className="text-2xl">
          <p className="flex">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Id</th>
                  <th>Nama</th>
                  <th>Divisi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {data.map((x: IData, i: Key) => (
                    <Fragment key={i}>
                      <td>{x.id}</td>
                      <td>{x.nama}</td>
                      <td>{x.divisi}</td>
                      <td>
                        <button className="w-auto bg-red-400 text-white h-auto p-2 rounded-md">
                          Delete
                        </button>
                        <button className="w-auto bg-yellow-400 text-white h-auto p-2 rounded-md">
                          View
                        </button>
                      </td>
                    </Fragment>
                  ))}
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </p>
        </h1>
      </div>
    </div>
  );
}

export default App;
