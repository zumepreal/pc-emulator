var fps_app = {
	
	"init": function(){
		var id = helpers.rnd(1000 * 1000 * 1000);
		var ind = pc.runningProcesses.length;
		pc.runningProcesses[ind] = {
			"id": id,
			"name": "fps_app",
			"codeList": [
				"set screen out screen_2",
				"console run fps_app",
				"step loop",
				"print top fps_app",
				//"printVar top inputValParam",
				"sleep 25",
				"goto loop"
			],
			"codeCurrentPosition": -1,
			"codeStatusChk": null,
			"codeStatusChkExt": null,
			"statusWork": null,
			"lastDtCpuUsed": null,
			"marks": "",
			"typeApp": "privatePropertyApp",
			"vars": {},
			"configs": {}
		};
		setDefaultFunctionsInInd(ind);
	}

};

fps_app.init();