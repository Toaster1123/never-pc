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
                className="w-56 pr-6 text-left text-emerald-300 font-semibold text-lg"
              >
                {component}:
              </th>
              <td className="text-gray-200 leading-6 break-words text-base">
                {description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
