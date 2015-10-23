namespace RYR {
	export class Logger {
		constructor() {
			console.log('Logging ctor');
		}
		
		static log(msg: string) {
			console.log(msg);
		}
	}	
}