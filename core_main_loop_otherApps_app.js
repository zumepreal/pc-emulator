var core_main_loop_otherApps_app = {
	
	"init": function(){
		var id = helpers.rnd(1000 * 1000 * 1000);
		var ind = pc.runningProcesses.length;
		pc.runningProcesses[ind] = {
			"id": id,
			"name": "core_main_loop_otherApps_app",
			"codeList": [
				"set screen out screen_1",
				"console run core_main_loop_otherApps_app",
				"step loop",
				"cpu nextCodeLine otherApps",
				"goto loop"
			],
			"codeCurrentPosition": -1,
			"codeStatusChk": null,
			"codeStatusChkExt": null,
			"statusWork": null,
			"lastDtCpuUsed": null,
			"marks": "",
			"typeApp": "coreApp",
			"vars": {},
			"configs": {}
		};
		setDefaultFunctionsInInd(ind);
	}

};

core_main_loop_otherApps_app.init();