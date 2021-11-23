import { Fragment, useState, useEffect } from 'react';

import './App.css';
import SpgInput from './components/SpgInput/SpgInput.js';
import { v4 as uuidv4 } from 'uuid';
import {fetchData} from './controllers/controller.js'
import Card from './components/Card/Card.js';


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
	}

	const handleMakeChange = (event) => {
		setMake(event.currentTarget.value);
	}

	const handleSubmit = (event) => {
		callout();
	}
	
	const callout = async () => {
		try {
			const data = await fetchData(year, make, model);
			console.log('data', data);
			setVehicles(priorState => [...data.Trims]);
			console.log(vehicles);
		} catch(error) {
			setError(true);
			alert(error);
		}
	}

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
					<SpgInput
						name='submit'
						type='submit'
						value='Search'
						size='xlarge'
						handler={handleSubmit}>
					</SpgInput>
				</div>
				
			</div>
			<div data-id='cards'>
				{!loading && vehicles.map((vehicle) => 
					// <div>
					// 	<li key={uuidv4()}>{vehicle.model_name}</li>
					// 	<li key={uuidv4()}>{vehicle.make_display}</li>
					// </div>
					
					<Card key={uuidv4()} object={vehicle}/>
					)}
			</div>
		</Fragment>
  );
}

export default App;
