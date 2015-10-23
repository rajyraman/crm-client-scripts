import * as Logger from '../common/logging';

export class AccountForm {
	constructor(){
		Logger.log('Account Form');
	}
	
	static onSave() {
		Logger.log('Account Form onSave');
	}
	
	static onLoad() {
		Logger.log('Account Form onLoad');
	}
}