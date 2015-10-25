/// <reference path="../common/logging.ts" />
/// <reference path="../../typings/xrm/xrm.d.ts" />
namespace RYR {
	export class AccountForm {
		constructor(){
			Common.Logger.log('Account Form ctor');
		}
		
		static onSave() : void {
			Common.Logger.log('Account Form onSave');
		}
		
		static onLoad() : void {
			let c = Xrm.Page.context.client;
			Common.Logger.log(`Script is executing in ${c.getClient()} context`);
			Common.Logger.log('Account Form onLoad');
		}
	}
}