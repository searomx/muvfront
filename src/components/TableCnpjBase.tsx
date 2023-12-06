export function TableCnpjBase() {
	return (
		<div className='flex flex-col'>
			<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									<th
										scope='col'
										className={`px-6 py-3 text-left
                                        text-xs font-medium text-gray-500
                                        uppercase tracking-wider`}>
										CNPJ-BASE
									</th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* <tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<div className='flex items-center'>
											<div className='ml-4'>
												<div className='text-sm font-medium text-gray-900'>
													113213213131321321
												</div>
												<div className='text-sm text-gray-500'></div>
											</div>
										</div>
									</td>
									<td className='px-6 py-4 whitespace-nowrap'></td>
									<td className='px-6 py-4 whitespace-nowrap'></td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
