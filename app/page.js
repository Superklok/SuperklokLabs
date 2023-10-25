import { Navbar } from '@/src/components/Navbar/Navbar';
import Landing from '@/src/components/Landing/Landing';
import './page.css';

export default function Home() {
	return (
		<div className='app'>
			<Navbar/>
			<Landing/>
		</div>
	);
}
