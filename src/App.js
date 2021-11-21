import { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SpgInput from './components/SpgInput/SpgInput.js';
import { v4 as uuidv4 } from 'uuid';
import {fetchData} from './controllers/controller.js'


function App() {

	const [vehicles, setVehicles] = useState([])
	const [score, setScore] = useState(null);
	const [year, setYear] = useState('');
	const [make, setMake] = useState('');
	const [model, setModel] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');

	const handleYearChange = (event) => {
		setYear(event.currentTarget.value);
	}

	const handleModelChange = async (event) => {
		setModel(event.currentTarget.value);
		if (make && (year.length === 4)) {
			console.log('sl');
			const data = await callout();
			console.log(data);
		} 
	}

	const handleMakeChange = (event) => {
		setMake(event.currentTarget.value);

		
	}
	
	const callout = () => {
		fetchData(year, make, model);
	}

	useEffect(() => {
		setLoading(true);
		try {
			async function fetchApi() {
				const cars = await fetchData();
				setLoading(false);
				setVehicles(priorState => [...priorState, ...cars.Trims]);
				console.log(vehicles);
		   }
		   fetchApi();
		} catch (error) {
			setError(true);
			setMessage(error);
		}
		
	}, []);


  return (
		<Fragment>
			<h1 style={{textAlign: 'center'}}>Smiles Per Gallon</h1>
			<div style={{
				display: 'flex', 
				flexDirection: 'column', 
				justifyItems: 'center', 
				alignItems: 'center', 
				width: '100%'
				}}>
				<div style={{width: '50%'}}>
					<SpgInput 
						label='Year' 
						name='year'
						type='text'
						handler={handleYearChange}
						size='xlarge'>
					</SpgInput>
					<SpgInput
						name='make'
						type='text'
						label='Make'
						size='xlarge'
						handler={handleMakeChange}>
					</SpgInput>
					<SpgInput
						name='model'
						type='text'
						label='Model'
						size='xlarge'
						handler={handleModelChange}>
					</SpgInput>
				</div>
				
			</div>
			<div>
				{!loading && vehicles.map((vehicle) => <li key={uuidv4()}>{vehicle.model_name}</li>)}
			</div>
		</Fragment>
  );
}

export default App;
