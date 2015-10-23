/// <reference path="../common/logging.ts" />
namespace RYR {
	export class ContactForm{
		constructor(){
			Logger.log('Contact Form ctor');
		}
		
		static onSave() : void {
			Logger.log('Contact Form onSave');
		}
		
		static onLoad() : void {
			Logger.log('Contact Form onLoad');
		}	
	}
}