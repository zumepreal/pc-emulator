autoStart_app_config.console_read = {
	"init": function(ind, id){
		this["id"] = id;
		this["name"] = ind + "_" + id;
		this["codeCurrentPosition"] = -1;
		this["codeStatus"] = null;
		this["codeStatusExt"] = null;
		this["statusWork"] = null;
		this["lastDtCpuUsed"] = null;
		this["marks"] = "";
		this["typeApp"] = "autoStartApp";
		this["vars"] = {};
		this["configs"] = {};
		this.setCodeList();
	},
	"setCodeList": function(){
		this["codeList"] = [
			"console run autoStart app console read ([time])",
			"screenBlock bottom 20px 0px black",
			"input bottom local inputValParam"
		];
	}
};