import React from "react";

interface TableRowClienteProps {
	row: {
		id: number;
		nome: string;
		cnpj: string;
		cidade: string;
	};
}

const TableRowCliente: React.FC<TableRowClienteProps> = ({ row }) => {
	return (
		<>
			<tr>
				<td className='flex justify-center items-center'>{row.id}</td>
				<td>{row.nome}</td>
				<td>{row.cnpj}</td>
				<td>{row.cidade}</td>
			</tr>
		</>
	);
};

export default TableRowCliente;
