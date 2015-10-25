/// <reference path="../common/logging.ts" />
namespace RYR {
	export class ContactForm{
		constructor(){
			Common.Logger.log('Contact Form ctor');
		}
		
		static onSave() : void {
			Common.Logger.log('Contact Form onSave');
		}
		
		static onLoad() : void {
			Common.Logger.log('Contact Form onLoad');
		}	
	}
}