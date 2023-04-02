/*global QUnit*/

sap.ui.define([
	"codigo_barras/controller/Viewca01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Viewca01 Controller");

	QUnit.test("I should test the Viewca01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
