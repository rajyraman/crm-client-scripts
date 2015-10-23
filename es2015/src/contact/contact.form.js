import * as Logger from '../common/logging';

export class ContactForm {
	constructor(){
		Logger.log('Contact Form ctor');
	}
	
	static onSave() {
		Logger.log('Contact Form onSave');
	}
	
	static onLoad() {
		Logger.log('Contact Form onLoad');
	}	
}