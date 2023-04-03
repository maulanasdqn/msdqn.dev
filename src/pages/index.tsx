import { ReactElement, FC, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const HomePages: FC = (): ReactElement => {
  const randomId = faker.datatype.uuid();
  const randomName = faker.name.fullName();
  const randomEmail = faker.internet.email();
  const [data, setData] = useState<Array<IData>>([]);

  interface IData {
    id: string;
    name: string;
    email: string;
  }

  const addData = (payload: IData) => setData((prev) => [...prev, payload]);

  const deleteData = (index: number) =>
    index > -1 && setData((prev) => [...prev.splice(index, 1), ...prev]);

  return (
    <Fragment>
      <div className="flex w-full justify-start gap-x-4">
        <button
          onClick={() =>
            addData({
              id: randomId,
              name: randomName,
              email: randomEmail,
            })
          }
          className="flex hover:bg-green-500 focus:outline-none bg-green-400 p-3 rounded-lg text-white w-auto h-auto"
        >
          Add +
        </button>
        <button
          onClick={() => setData([] as IData[])}
          className="flex hover:bg-red-500 focus:outline-none bg-red-400 p-3 rounded-lg text-white w-auto h-auto"
        >
          Remove All Data
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-lg">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
          <tr>
            <th scope="col" className="px-6 py-3">
              Number
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Division
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <motion.tbody>
          <AnimatePresence mode="sync" initial={false}>
            {data.map((item, key) => (
              <motion.tr
                key={key}
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  height: {
                    duration: 0.1,
                  },
                  opacity: {
                    duration: 0.5,
                  },
                }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {key + 1}
                </th>
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4 flex gap-x-4">
                  <span
                    className="text-red-400 cursor-pointer"
                    onClick={() => deleteData(key)}
                  >
                    Delete
                  </span>
                  <span className="text-yellow-400">Update</span>
                  <span className="text-blue-400">View</span>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </motion.tbody>
      </table>
    </Fragment>
  );
};

export default HomePages;
