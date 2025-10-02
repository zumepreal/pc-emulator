var autoStartApp_keyboardEvents_app = {
	
	"init": function(){
		var id = helpers.rnd(1000 * 1000 * 1000);
		var ind = pc.runningProcesses.length;
		pc.runningProcesses[ind] = {
			"id": id,
			"name": "autoStartApp_keyboardEvents_app",
			"codeList": [
				"set screen out screen_1",
				"console run autoStart app keyboard events",
				"set event keyboard up changeScreen body"
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

autoStartApp_keyboardEvents_app.init();