import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<header className='rounded-md'>
			<nav
				className={`flex w-full h-16 p-4 items-center
						bg-gradient-to-r 
						from-blue-500 to-gray-900 text-white shadow-md`}>
				<h1 className='text-3xl font-bold'>Muvstock</h1>
				<nav className='flex w-full items-center justify-end '>
					<ul className='flex space-x-4 gap-5'>
						<li>
							<Link to='/' className='hover:text-gray-200'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/about' className='hover:text-gray-200'>
								About
							</Link>
						</li>
						<li>
							<Link to='/services' className='hover:text-gray-200'>
								Serviços
							</Link>
						</li>
					</ul>
				</nav>
				<div className='flex items-center justify-end'></div>
			</nav>
		</header>
	);
}
