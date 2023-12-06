import React from "react";

interface TableRowProps {
	row: {
		id: number;
		cnpj: string;
	};
}

const TableRow: React.FC<TableRowProps> = ({ row }) => {
	return (
		<>
			<tr>
				<td className='flex justify-center items-center'>{row.id}</td>
				<td>{row.cnpj}</td>
			</tr>
		</>
	);
};

export default TableRow;
