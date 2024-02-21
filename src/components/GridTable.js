import React from 'react';

const GridTable = ({ items }) => {
  return (
    <table className="table-auto mx-auto sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 border border-gray-50">
      <tbody>
      {items.map((item, index) => (
        index % 2 === 0 ? (
          <tr className="border border-b-gray-50" key={item.id}>
            <td className="p-5 border border-r-gray-50">{item.label}</td>
            {items[index + 1] && <td className="p-5" >{items[index + 1].label}</td>}
          </tr>
        ) : null
      ))}
      </tbody>
    </table>
  );
};

export default GridTable;