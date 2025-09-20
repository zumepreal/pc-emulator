var taskList_app = {
	
	"init": function(){
		var id = helpers.rnd(1000 * 1000 * 1000);
		var ind = pc.runningProcesses.length;
		pc.runningProcesses[ind] = {
			"id": id,
			"name": "taskList_app",
			"codeList": [
				"set screen out screen_1",
				"console run taskList_app",
				"screenBlock taskList_block 0px 0px",
				"screenBlockStyle taskList_block width 100%",
				"screenBlockStyle taskList_block height 100%",
				"screenBlockStyle taskList_block background #ffffffee",
				"screenBlock2Parent taskList_block taskList_block_label",
				"screenBlock2Parent taskList_block taskList_block_countLoadedProcessLabel",
				"screenBlock2Parent taskList_block taskList_block_countLoadedProcess",
				"screenBlock2Parent taskList_block taskList_block_countWorkProcessLabel",
				"screenBlock2Parent taskList_block taskList_block_countWorkProcess",
				"screenBlock2Parent taskList_block taskList_block_listWorkProcessLabel",
				"screenBlock2Parent taskList_block taskList_block_listWorkProcess",
				"screenBlockStyle taskList_block_countLoadedProcessLabel position relative",
				"screenBlockStyle taskList_block_countLoadedProcessLabel float left",
				"screenBlockStyle taskList_block_countWorkProcessLabel position relative",
				"screenBlockStyle taskList_block_countWorkProcessLabel float left",
				"screenBlockStyle taskList_block_listWorkProcessLabel position relative",
				"screenBlockStyle taskList_block_listWorkProcessLabel float left",
				"print taskList_block_label Диспетчер задач",
				"print taskList_block_countLoadedProcessLabel Кол-во загруженных процессов:&nbsp;",
				"print taskList_block_countWorkProcessLabel Кол-во работающих процессов:&nbsp;",
				"print taskList_block_listWorkProcessLabel Список работающих процессов:&nbsp;",
				"step loop",
				"get count loadedProcess countLoadedProcess",
				"get count workProcess countWorkProcess",
				"get list namesWorkProcess listNamesWorkProcess",
				"printVar taskList_block_countLoadedProcess countLoadedProcess",
				"printVar taskList_block_countWorkProcess countWorkProcess",
				"printVar taskList_block_listWorkProcess listNamesWorkProcess",
				"sleep 250",
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

taskList_app.init();