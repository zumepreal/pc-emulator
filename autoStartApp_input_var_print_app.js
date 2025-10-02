var autoStartApp_input_var_print_app = {
	
	"init": function(){
		var id = helpers.rnd(1000 * 1000 * 1000);
		var ind = pc.runningProcesses.length;
		pc.runningProcesses[ind] = {
			"id": id,
			"name": "autoStartApp_input_var_print_app",
			"codeList": [
				"set screen out screen_2",
				"console run autoStart app console read ([time])",
				"screenBlock bottom 20px 0px",
				//"inputStyle border 0px",
				"step loop",
				"clear var local inputValParam",
				"clear block bottom",
				"input bottom local inputValParam",
				"wait var inputValParam",
				"printVar bottom inputValParam",
				"console sleep... ([time])",
				"sleep 500",
				"console sleep...ok ([time])",
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

autoStartApp_input_var_print_app.init();