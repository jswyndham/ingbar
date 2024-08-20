import { TailSpin } from 'react-loading-icons';

export default function loading() {
	return (
		<div className="h-screen bg-black flex flex-col items-center justify-center align-middle">
			<TailSpin />
			<div className="text-2xl text-red-700">Loading...</div>
		</div>
	);
}
