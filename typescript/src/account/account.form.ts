/// <reference path="../common/logging.ts" />
/// <reference path="../../typings/xrm/xrm.d.ts" />
namespace RYR {
	export class AccountForm {
		constructor(){
			Logger.log('Account Form ctor');
		}
		
		static onSave() : void {
			Logger.log('Account Form onSave');
		}
		
		static onLoad() : void {
			let c = Xrm.Page.context.client;
			Logger.log(`Script is executing in ${c.getClient()} context`);
			Logger.log('Account Form onLoad');
		}
	}
}