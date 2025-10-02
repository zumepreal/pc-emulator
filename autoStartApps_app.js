var autoStartApps_app = {
	
	"init": function(){
		var id = helpers.rnd(1000 * 1000 * 1000);
		var ind = pc.runningProcesses.length;
		pc.runningProcesses[ind] = {
			"id": id,
			"name": "autoStartApps_app",
			"codeList": [
				"set screen out screen_1",
				"console run autoStartApps_app",
				"screenBlock2Parent top top_autoStartApps",
				"print top_autoStartApps autoStartApps_app [time]",
				"println top_autoStartApps autoStartApps_app run",
				"sleep 10",
				//"println top_autoStartApps [time]",
				"println top_autoStartApps autoStartApps_app loading auto start apps...",
				"screenBlock2Parent top top_autoStartApps_btns",
				//
				"start app autoStartApp_input_var_print_app",
				"println top_autoStartApps autoStartApp_input_var_print_app loaded",
				"start app autoStartApp_print_time_app",
				"println top_autoStartApps autoStartApp_print_time_app loaded",
				"start app autoStartApp_keyboardEvents_app",
				"println top_autoStartApps autoStartApp_keyboardEvents_app loaded",
				//
				"println top_autoStartApps autoStartApps_app [time]",
				"println top_autoStartApps autoStartApps_app auto start apps is loaded",
				"sleep 10",
				"println top_autoStartApps ",
				// btn gotoScreen2
				"btn top_autoStartApps_btns gotoScreen2 onclick setScreenActive screen_2",
				"btnEvent gotoScreen2 mouseover style backgroundColor red",
				"btnEvent gotoScreen2 mouseout style backgroundColor white",
				// btn startFpsApp
				"btn top_autoStartApps_btns startAppFps onclick startApp fps_app",
				// btn startAppTaskList
				"btn top_autoStartApps_btns startAppTaskList onclick startApp taskList_app",
				// btn setStyleDarkMode
				"btn top_autoStartApps_btns setStyleDarkMode onclick setStyleMode dark",
				"btnStyle setStyleDarkMode background grey",
				"btnEvent setStyleDarkMode mouseover style backgroundColor white",
				"btnEvent setStyleDarkMode mouseout style backgroundColor grey",
				// btn setStyleWhiteMode
				"btn top_autoStartApps_btns setStyleWhiteMode onclick setStyleMode white",
				"btnStyle setStyleWhiteMode background white",
				"btnEvent setStyleWhiteMode mouseover style backgroundColor grey",
				"btnEvent setStyleWhiteMode mouseout style backgroundColor white",
				// btn startGlSampleApp
				"btn top_autoStartApps_btns startAppGlSample onclick startApp gl_sample_app",
				//
				"println top_loading autoStartApps_app is loaded"
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

autoStartApps_app.init();