var autoStartApp_print_time_app = {
	
	"init": function(){
		var id = helpers.rnd(1000 * 1000 * 1000);
		var ind = pc.runningProcesses.length;
		pc.runningProcesses[ind] = {
			"id": id,
			"name": "autoStartApp_print_time_app",
			"codeList": [
				"set screen out screen_2",
				"console run autoStart app timer ([time])",
				"screenBlock top 0px 0px",
				"step loop",
				"print top [time]",
				"sleep 50",
				"goto loop"
			],
			"codeCurrentPosition": -1,
			"codeStatusChk": null,
			"codeStatusChkExt": null,
			"statusWork": null,
			"lastDtCpuUsed": null,
			"marks": "",
			"typeApp": "autoStartApp",
			"vars": {},
			"configs": {}
		};
		setDefaultFunctionsInInd(ind);
	}

};

autoStartApp_print_time_app.init();