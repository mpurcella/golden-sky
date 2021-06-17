import React, { useState } from 'react';
import Button from '../../components/Button';
import './Contact.scss';

let Contact = ({ button, showButton }) => {
	let onSubmit = (e) => {
		e.preventDefault();
		setName('');
		setEmail('');
		setPhone('');
		setMessage('');
		alert('Message Submitted');
	};

	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [phone, setPhone] = useState('');
	let [message, setMessage] = useState('');

	return (
		<div className='contact-container' id='contact'>
			<div className='contact-container-wrapper'>
				<h2 className='contact-heading'>We would love to hear from you!</h2>
				<h3 className='contact-text'>
					If you have any questions about what we do, the buildings that we create, or
					would like to work together in the future, please fill out the form below.
				</h3>
				<form className='contact-form'>
					<div className='contact-form-left'>
						<label className='form-name-label'>
							Name*
							<input
								type='text'
								className='form-name-input'
								autoCorrect='off'
								required='required'
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
						</label>

						<label className='form-email-label'>
							Email Address*
							<input
								type='email'
								className='form-email-input'
								autoCorrect='off'
								autoCapitalize='off'
								autoComplete='email'
								required='required'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</label>

						<label className='form-phone-label'>
							Phone Number
							<input
								type='tel'
								className='form-phone-input'
								pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
								onChange={(e) => setPhone(e.target.value)}
								value={phone}
							/>
						</label>
					</div>
					<div className='contact-form-right'>
						<label className='form-message-label'>
							Message*
							<textarea
								className='form-message-input'
								cols='70'
								rows='9'
								required='required'
								onChange={(e) => setMessage(e.target.value)}
								value={message}
							></textarea>
						</label>
					</div>
					<div className='contact-form-submit-btn-container'>
						<Button value='submit' btnClassName='btn-small' onClick={onSubmit} />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
