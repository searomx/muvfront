import Papa from "papaparse";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import TableRow from "../TableRow";
import TableHeader from "../TableHeader";

interface Idados {
	id: number;
	cnpj: string; // Added optional property
}

const Home = () => {
	const [dados, setDados] = useState<Idados[]>([]);
	const readDataFile = (event: ChangeEvent<HTMLInputElement>) => {
		const arquivo = event.target.files![0];
		if (arquivo) {
			Papa.parse(arquivo, {
				header: true,
				dynamicTyping: true,
				complete: (result) => {
					setDados(result.data as Idados[]);
				},
				error: (error) => {
					alert("Erro ao analisar o CSV: " + error.message);
				},
			});
		}
	};
	useEffect(() => {
		readDataFile;
	}, [dados]);

	const onHandlerSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		// <div className='flex h-[calc(100vh_-_4rem)] justify-center items-center bg-orange-500'>

		// </div>

		<main className='flex flex-col w-full h-[calc(100vh_-_4rem)] bg-slate-200'>
			<div className='flex w-full h-16 bg-slate-200 justify-center items-center'>
				<div className='bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
					<h1 className='font-bold text-6xl lg:text-3xl md:text-sm shadow-title'>
						Muvstok
					</h1>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-between'>
				<div className='flex w-full h-full mx-1 p-2 justify-center'>
					<table>
						<div className='w-full h-[calc(100vh_-_9.5rem)] p-3 border-gray-500 overflow-hidden bg-slate-100 rounded-md'>
							<div className='w-full justify-center items-center p-1 bg-slate-200 border border-slate-600 rounded-md shadow-red-700'>
								<TableHeader />
							</div>

							<tbody>
								{dados.map((row, index) => (
									<TableRow key={index} row={row} />
								))}
							</tbody>
						</div>
					</table>
				</div>

				<form onSubmit={onHandlerSubmit}>
					<div className='w-full p-3'>
						<label
							className='text-gray-700 text-sm font-bold mb-2'
							htmlFor='token'>
							Token
						</label>
						<div className='flex w-full items-center'>
							<textarea
								id='txtoken'
								name='txtoken'
								cols={30}
								rows={10}
								className={`flex p-2.5 w-full text-sm text-gray-900 bg-gray-50 
  rounded-lg`}
								placeholder='Insira o Token...'></textarea>
							<div className={`flex ml-1`}>
								<button id='btn' type='button' className='btn btn-blue'>
									Enviar
								</button>
							</div>
						</div>

						<label
							className='text-gray-700 text-sm font-bold mb-1 mt-2'
							htmlFor='txtcnpj'>
							CNPJ - INDIVIDUAL
						</label>
						<div className={`flex mt-4`}>
							<input
								type='text'
								id='txtcnpj'
								name='txtcnpj'
								className={`flex w-[28rem] p-2.5 text-sm text-gray-900 bg-gray-50 
												rounded-lg`}
								placeholder='Digite o Cnpj...'
							/>
							<div className={`flex ml-1`}>
								<button id='btn-enviar-individual' className='btn btn-blue'>
									Enviar
								</button>
							</div>
						</div>
					</div>
					<div className={`flex mt-4`}>
						<input
							accept='.csv'
							id='upload'
							type='file'
							className='form-control botao'
							onChange={readDataFile}
						/>
					</div>
				</form>
				<div className='flex w-full h-full mx-1 p-2 justify-center'>
					<table>
						<div className='w-full h-[calc(100vh_-_9.5rem)] p-3 border-gray-500 overflow-hidden bg-slate-100 rounded-md'>
							<div className='w-full justify-center items-center p-1 bg-slate-200 border border-slate-600 rounded-md shadow-red-700'>
								<TableHeader />
							</div>

							<tbody>
								{dados.map((row, index) => (
									<TableRow key={index} row={row} />
								))}
							</tbody>
						</div>
					</table>
				</div>
			</div>
		</main>
	);
};

export default Home;
