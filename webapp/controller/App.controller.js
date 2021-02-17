sap.ui.define([
	"com/delaware/vlnm/trac201919/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.delaware.vlnm.trac2019.controller.App", {
		onInit: function(){
			this.getModel("appView").setProperty("/layout", "OneColumn");
		}
	});
});