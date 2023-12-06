import { BrowserRouter as Router, Link } from "react-router-dom";

export default async function Header() {
	return (
		<Router>
			<header
				className={`flex w-full h-16 p-4 items-center
						bg-gradient-to-r 
						from-blue-500 to-gray-900 text-white`}>
				<h1 className='text-3xl font-bold'>Muvstock</h1>
				<nav className='flex w-full items-center justify-evenly '>
					<ul className='flex space-x-4 gap-5'>
						<li>
							<Link to='/' className='hover:text-gray-200'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/public' className='hover:text-gray-200'>
								Publica
							</Link>
						</li>
						<li>
							<Link to='/private' className='hover:text-gray-200'>
								Privada
							</Link>
						</li>
					</ul>
				</nav>

				<div className='flex items-center justify-end'></div>
			</header>
		</Router>
	);
}
