type Detail = { component: string; description: string };

export function ProductDetailsTable({ details }: { details: Detail[] }) {
  return (
    <div className="mt-10">
      <table className="w-full border-separate border-spacing-y-4">
        <tbody>
          {details.map(({ component, description }, i) => (
            <tr key={i} className="align-top">
              <th
                scope="row"
                className="w-48 pr-4 text-left text-gray-500 font-medium"
              >
                {component}:
              </th>
              <td className="text-gray-900 leading-6 break-words">
                {description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
