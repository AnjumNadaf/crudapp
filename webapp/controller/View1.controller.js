sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("crudapp.controller.View1", {
			onInit: function () {
             
				debugger;
				var oJSONModel = new JSONModel();
				var that = this;

				// that.getOwnerComponent().setModel(oJSONModel,"myModel");
				var sURL = "/sap/opu/odata/sap/ZAPP_EMP1_SRV/";
				var oModel9 = new sap.ui.model.odata.ODataModel(sURL,true);
				oModel9.read("/PROJECTSet",{
					success:function(data){
						debugger;
					 oJSONModel.setData({
						PROJECT:data.results
					   
					 });
					 console.log(data.results);
					 debugger
					 that.getOwnerComponent().setModel(oJSONModel,"myModel");


			},error:function(){
				alert("Error");

			}

		});



     },

	 onCallData:function(){
		 debugger;
		 var oJSONModel = new JSONModel();
		 var that = this;

		 var sURL = "/sap/opu/odata/sap/ZAPP_EMP1_SRV/";
		 var oModel9 = new sap.ui.model.odata.ODataModel(sURL,true);
		 oModel9.read("/PROJECTSet",{
			 success:function(data){
				 debugger;
			  oJSONModel.setData({
				 PROJECT:data.results
				
			  });
			  console.log(data.results);
			  debugger
			  that.getOwnerComponent().setModel(oJSONModel,"myModel");


	 },error:function(){
		 alert("Error");

	 }

 });

      this.getView().byId("idList").setVisible(true);

	 },
	//  empSelected:function(oEvent){
	// 	 debugger;
	// 	 var id = oEvent.getParameter("listItem").mProperties.intro;

	// 	 var oJSONModel = new JSONModel();
	// 			var that = this;

	// 			// that.getOwnerComponent().setModel(oJSONModel,"myModel");
	// 			var sURL = "/sap/opu/odata/sap/ZAPP_EMP1_SRV/";
	// 			var oModel9 = new sap.ui.model.odata.ODataModel(sURL,true);
	// 			oModel9.read("/PROJECTSet('" +  id +"')",{
	// 				success:function(data){
	// 					debugger;

	// 				 oJSONModel.setData({
	// 					PROJECTData:data.results
					   
	// 				 });
	// 				 console.log(data.results);
	// 				 debugger
	// 				 that.getOwnerComponent().setModel(oJSONModel,"myModel2");
	// 				 that.getView().byId("simpleformid").bindElement("myModel2>/PROJECTData")


	// 		},error:function(){
	// 			alert("Error");

	// 		}

	// 	});






	//  },

	 onCreate:function(){
		 debugger;
		 var id = this.getView().byId("pid").getValue();
		 var name = this.getView().byId("name").getValue();
		 var projectname = this.getView().byId("projectname").getValue();
		 var projectdetails = this.getView().byId("projectdetails").getValue();
		 var startdate = this.getView().byId("startdate").getValue();
		 var enddate = this.getView().byId("enddate").getValue();
		 var status = this.getView().byId("projectstatus").getValue();
		 

		 var payload = {
			Pid:id,
			Eid:"",
			Name:name,
			Projectname:projectname,
			Projectdetails:projectdetails,
			Startdate:startdate,
			Enddate:enddate,
			Status:status,
			
     }


	 


		var oModel = this.getOwnerComponent().getModel();
		var that = this
		oModel.create('/PROJECTSet', payload,{
			method:"POST",
			success:function(oData){
			 sap.m.MessageBox.success("New Data Has been Created");
			 
			 var oList = that.getView().byId("idList");
			 var oBinding = oList.getBinding("items");
			 oBinding.refresh(true);
			 debugger;

			},
			error:function(){
				console.log("Error");
				sap.m.MessageBox.error("New Entry Not Created");
			}
		});
		 

	 },

	//  onUpdate:function(){
	// 	 debugger;
	// 	 var id = this.getView().byId("pid").getValue();
	// 	 var name = this.getView().byId("name").getValue();
	// 	 var projectname = this.getView().byId("projectname").getValue();
	// 	 var projectdetails = this.getView().byId("projectdetails").getValue();
	// 	 var startdate = this.getView().byId("startdate").getValue();
	// 	 var enddate = this.getView().byId("enddate").getValue();
	// 	 var status = this.getView().byId("projectstatus").getValue();
		 

	// 	 var payload = {
	// 		Pid:id,
	// 		Eid:"1000",
	// 		Name:name,
	// 		Projectname:projectname,
	// 		Projectdetails:projectdetails,
	// 		Startdate:startdate,
	// 		Enddate:enddate,
	// 		Status:status,
			
    //  }

	 
	//  var jModel= this.getOwnerComponent().getModel();
	 
	//  jModel.update("/PROJECTSet('" +  id +"')",payload, {​
	// 	sucess: function (data) {​
	// 		debugger;
	// 	sap.m.MessageToast.show(" updated Successfully" +  id);
	// 	}​,
	// 	error: function (error) {​
	// 		debugger;
	// 	sap.m.MessageToast.show("update Failed" +  id);
	// 	}​
	// }​);

     



	//  }


	

		});
	});
