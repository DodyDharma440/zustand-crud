import React from "react";
import { usePeopleStore } from "store";

type Props = {
  data: string;
  index: number;
};

const ListItem: React.FC<Props> = ({ data, index }) => {
  const { deletePerson } = usePeopleStore();

  return (
    <div className="bg-gray-800 rounded-md p-4 text-white my-2 flex items-center">
      <div className="flex-1">{data}</div>
      <button
        className="bg-indigo-600 py-2 px-4 rounded-sm"
        onClick={() => deletePerson(index)}
      >
        Del
      </button>
    </div>
  );
};

export default ListItem;
