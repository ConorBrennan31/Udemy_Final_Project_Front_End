import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				This magic astronaut will detect faces in your pictures. Give it a link.
			</p>
			<div className='pa4 shadow-5 w-50 center form'>
				<input className='w-70 f4 pa2 center' type='text' placeholder='Enter a URL' onChange={onInputChange}/>
				<button className='w4 grow f4 link ph3 pv2 dib white bg-light-blue center' onClick={onButtonSubmit}>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;