import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SpgInput from './components/SpgInput/SpgInput.js';

function App() {

	const [header, setHeader] = useState('default');

	const handleClick = (event) => {
		setHeader(event.currentTarget.value);
	}

  return (
	  /**
	   * Blanking out Create React App Boilerplate
	   * 
	   * */
	   <div className=''>
		   <SpgInput 
		   		label='gato' 
				name='react'
				type='text'
				jedi='Anakin'
				cloneAge='42'
				handler={handleClick}
				size='medium'>
			</SpgInput>
			<SpgInput
				name='year'
				type='text'
				label='Year'>
			</SpgInput>
			<SpgInput
				name='year'
				type='text'
				label='Year'>
			</SpgInput>

	   </div>
  );
}

export default App;
