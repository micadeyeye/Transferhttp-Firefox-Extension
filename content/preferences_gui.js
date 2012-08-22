function profileDataInit() {



			//init elements in profile form

			this.yourName = document.getElementById("urn:mozilla:httpsession:yourNameValue");

			this.yourEmailAddress = document.getElementById("urn:mozilla:httpsession:emailAddressValue");

			this.yourOrganization = document.getElementById("urn:mozilla:httpsession:organizationValue");

			this.yourPortNumber = document.getElementById("urn:mozilla:httpsession:portNumberValue");

			this.yourMode = document.getElementById("urn:mozilla:httpsession:modeValue");



				}



function sipDataInit() {



			//init elements in profile form

			this.sipAddress = document.getElementById("urn:mozilla:httpsession:sipAddressValue");

			this.sipProxy = document.getElementById("urn:mozilla:httpsession:sipProxyValue");

			this.sipPassword = document.getElementById("urn:mozilla:httpsession:sipPasswordValue");

			}



function imsDataInit() {



			//init elements in profile form

			this.imsPublicUserIdentity = document.getElementById("urn:mozilla:httpsession:imsPublicUserIdentityValue");

			this.imsPrivateUserIdentity = document.getElementById("urn:mozilla:httpsession:imsPrivateUserIdentityValue");

			this.imsProxyCSCF = document.getElementById("urn:mozilla:httpsession:imsProxyCSCFValue");

			this.imsRealm = document.getElementById("urn:mozilla:httpsession:imsRealmValue");

			this.imsPassword = document.getElementById("urn:mozilla:httpsession:imsPasswordValue");

			}



function SipToAddrInit() {



			//init element in statusbar

			this.sipToAddr = document.getElementById("urn:mozilla:httpsession:sipToAddrValue");

			

				}





function loadProfileInfo() {



				//use Preferences data in OOP manner

				sipDataInit.prototype = new profileDataInit;

				

				imsDataInit.prototype = new sipDataInit;

				

				var allProfileData = new imsDataInit;



				//initialize pref service

				this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");



if (this.prefService.getPrefType(prefPrefix + "yourName") == this.prefService.PREF_STRING) {

	allProfileData.yourName.value = this.prefService.getCharPref(prefPrefix + "yourName");

								 }



if (this.prefService.getPrefType(prefPrefix + "yourEmailAddress") == this.prefService.PREF_STRING) {

	allProfileData.yourEmailAddress.value = this.prefService.getCharPref(prefPrefix + "yourEmailAddress");

								 }



if (this.prefService.getPrefType(prefPrefix + "yourOrganization") == this.prefService.PREF_STRING) {

	allProfileData.yourOrganization.value = this.prefService.getCharPref(prefPrefix + "yourOrganization");

								 }



if (this.prefService.getPrefType(prefPrefix + "yourPortNumber") == this.prefService.PREF_INT) {

	allProfileData.yourPortNumber.value = this.prefService.getIntPref(prefPrefix + "yourPortNumber");

								 }



if (this.prefService.getPrefType(prefPrefix + "yourMode") == this.prefService.PREF_STRING) {

				//activate appropriate radio button

					allProfileData.yourMode.value = this.prefService.getCharPref(prefPrefix + "yourMode");

					if (allProfileData.yourMode.value == "SIP") {

						allProfileData.yourMode.selectedIndex = 0;						}

					else if (allProfileData.yourMode.value == "IMS") {

						allProfileData.yourMode.selectedIndex = 1;						}

					else {

						//Default mode is SIP

						allProfileData.yourMode.selectedIndex = 0;						}

												}



						if (this.prefService.getPrefType(prefPrefix + "sipAddress") == this.prefService.PREF_STRING) {

							allProfileData.sipAddress.value = this.prefService.getCharPref(prefPrefix + "sipAddress");

														}

						

						if (this.prefService.getPrefType(prefPrefix + "sipProxy") == this.prefService.PREF_STRING) {

							allProfileData.sipProxy.value = this.prefService.getCharPref(prefPrefix + "sipProxy");

														}

						

						if (this.prefService.getPrefType(prefPrefix + "imsPublicUserIdentity") == this.prefService.PREF_STRING) {

							allProfileData.imsPublicUserIdentity.value = this.prefService.getCharPref(prefPrefix + "imsPublicUserIdentity");

														}

						

						if (this.prefService.getPrefType(prefPrefix + "imsPrivateUserIdentity") == this.prefService.PREF_STRING) {

							allProfileData.imsPrivateUserIdentity.value = this.prefService.getCharPref(prefPrefix + "imsPrivateUserIdentity");

														}

						

						if (this.prefService.getPrefType(prefPrefix + "imsProxyCSCF") == this.prefService.PREF_STRING) {

							allProfileData.imsProxyCSCF.value = this.prefService.getCharPref(prefPrefix + "imsProxyCSCF");

														}

						

						if (this.prefService.getPrefType(prefPrefix + "imsRealm") == this.prefService.PREF_STRING) {

							allProfileData.imsRealm.value = this.prefService.getCharPref(prefPrefix + "imsRealm");

														}

			

			//load pwds for user

			loadPasswords();

			

			}





function loadSipToAddrValue() {



				//use Preferences data in OOP manner

				var sipToAddrData = new SipToAddrInit;



				//initialize pref service

				this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");



if (this.prefService.getPrefType(prefPrefix + "sipToAddr") == this.prefService.PREF_STRING) {

	sipToAddrData.sipToAddr.value = this.prefService.getCharPref(prefPrefix + "sipToAddr");

								 }

				}







function storeProfileInfo() {



				//use Preferences data in OOP manner

				sipDataInit.prototype = new profileDataInit;

				

				imsDataInit.prototype = new sipDataInit;

				

				var allProfileData = new imsDataInit;

					

					//initialize pref service

					this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");

					

					if (typeof(allProfileData.yourName.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "yourName", allProfileData.yourName.value);

										}

					

					if (typeof(allProfileData.yourEmailAddress.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "yourEmailAddress", allProfileData.yourEmailAddress.value);

										}

					

					if (typeof(allProfileData.yourOrganization.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "yourOrganization", allProfileData.yourOrganization.value);

										}

					

					//convert port number to integer (idle function call)

					allProfileData.yourPortNumber.value = convertToInteger(allProfileData.yourPortNumber.value);

					

					if (typeof(parseInt(allProfileData.yourPortNumber.value)) == "number") {

					this.prefService.setIntPref(prefPrefix + "yourPortNumber", parseInt(allProfileData.yourPortNumber.value));

										}

					

					if (typeof(allProfileData.yourMode.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "yourMode", allProfileData.yourMode.value);

										}

					

					if (typeof(allProfileData.sipAddress.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "sipAddress", allProfileData.sipAddress.value);

										}

					

					if (typeof(allProfileData.sipProxy.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "sipProxy", allProfileData.sipProxy.value);

										}

					

					if (typeof(allProfileData.imsPublicUserIdentity.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "imsPublicUserIdentity", allProfileData.imsPublicUserIdentity.value);

										}

					

					if (typeof(allProfileData.imsPrivateUserIdentity.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "imsPrivateUserIdentity", allProfileData.imsPrivateUserIdentity.value);

										}

					

					if (typeof(allProfileData.imsProxyCSCF.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "imsProxyCSCF", allProfileData.imsProxyCSCF.value);

										}

					

					if (typeof(allProfileData.imsRealm.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "imsRealm", allProfileData.imsRealm.value);

										}

					

					//store pwd for user

					storePasswords();



			}





function storeSipToAddrValue() {



				//use Preferences data in OOP manner

				var sipToAddrData = new SipToAddrInit;



					//initialize pref service

					this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");

					

					if (typeof(sipToAddrData.sipToAddr.value) == "string") {

					this.prefService.setCharPref(prefPrefix + "sipToAddr", sipToAddrData.sipToAddr.value);

										}

				}







function storePasswords() {



			

			//use Preferences data in OOP manner

			sipDataInit.prototype = new profileDataInit;

			

			imsDataInit.prototype = new sipDataInit;

			

			var allProfileData = new imsDataInit;

			

			

			var httprealm = null;

			

			var usernameField = null;

			

			var passwordField = null;

			

			

			// for ff2 backward compatibility





			if (Components.classes["@mozilla.org/passwordmanager;1"] != null){

					

					//initialize pwd service

					this.pwdService = xpcomgS("@mozilla.org/passwordmanager;1", "nsIPasswordManager");

					

					

					//convert parameters to string

					allProfileData.sipAddress.value = convertToString(allProfileData.sipAddress.value);

					allProfileData.sipProxy.value = convertToString(allProfileData.sipProxy.value);

					allProfileData.sipPassword.value = convertToString(allProfileData.sipPassword.value);

					allProfileData.imsPrivateUserIdentity.value = convertToString(allProfileData.imsPrivateUserIdentity.value);

					allProfileData.imsProxyCSCF.value = convertToString(allProfileData.imsProxyCSCF.value);

					allProfileData.imsPassword.value = convertToString(allProfileData.imsPassword.value);

					

					

					

					//for sip account

					this.pwdService.addUser(allProfileData.sipProxy.value, allProfileData.sipAddress.value, allProfileData.sipPassword.value);

											

					//for ims account

					this.pwdService.addUser(allProfileData.imsProxyCSCF.value, allProfileData.imsPrivateUserIdentity.value, allProfileData.imsPassword.value);



				}

		else {

					//for ff3 - login Manager

					

					

					var _hostname = "chrome://httpsessionmobility/content/preferences_gui.xul";

					

					

					/* for SIP

					*/

					

					var formSubmitURL = "Preferences Settings - SIP";

					

					var username = convertToString(allProfileData.sipAddress.value); // the username

					

					var password = convertToString(allProfileData.sipPassword.value);

					

					

					//earlier Component declaration uses it sub

					

					var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1", Components.interfaces.nsILoginInfo, "init");

					

					var loginInfo = new nsLoginInfo(_hostname, formSubmitURL, httprealm, username, password, usernameField, passwordField);

					

					this.pwdService = xpcomgS("@mozilla.org/login-manager;1", "nsILoginManager");

					

					

					this.pwdService.addLogin(loginInfo);

					

					

					/* for IMS

					*/

					

					var formSubmitURL = "Preferences Settings - IMS";

					

					var username = convertToString(allProfileData.imsPrivateUserIdentity.value); // the username

					

					var password = convertToString(allProfileData.imsPassword.value);

					

					//earlier Component declaration uses it sub

					

					var nsLoginInfo = new Components.Constructor("@mozilla.org/login-manager/loginInfo;1", Components.interfaces.nsILoginInfo, "init");

					

					var loginInfo = new nsLoginInfo(_hostname, formSubmitURL, httprealm, username, password, usernameField, passwordField);

					

					

					this.pwdService.addLogin(loginInfo);

					

			}





	}





function loadPasswords() {



				//use Preferences data in OOP manner

				sipDataInit.prototype = new profileDataInit;

				

				imsDataInit.prototype = new sipDataInit;

				

				var allProfileData = new imsDataInit;

				

				

				var httprealm = null;

				

				var usernameField = null;

				

				var passwordField = null;





		// for ff2 backward compatibility

		

		if (Components.classes["@mozilla.org/passwordmanager;1"] != null){



		//initialize pwd service

		this.pwdService = xpcomgS("@mozilla.org/passwordmanager;1", "nsIPasswordManager");

		

		/*load SIP Acct Password

		////////////////////////////////////////////////////////////////////////////////////////////////////////

						*/

		

		// the host name of the password we are looking for

		allProfileData.sipProxy.value = convertToString(allProfileData.sipProxy.value);

		

		this.queryString = allProfileData.sipProxy.value;

		

		// ask the password manager for an enumerator:

		this.pwdServiceEmunerator = this.pwdService.enumerator;

		

		// step through each password in the password manager until we find the one we want:

		while (this.pwdServiceEmunerator.hasMoreElements()) {

			try {

				// get an nsIPassword object out of the password manager.

				// This contains the actual password...

				var pass = this.pwdServiceEmunerator.getNext().QueryInterface(Components.interfaces.nsIPassword);

				if (pass.host == this.queryString) {

				// found it!

				allProfileData.sipAddress.value = pass.user; // the username

				allProfileData.sipPassword.value = pass.password; // the password

				break;

				}

			} catch (ex) {

				// do something if decrypting the password failed--probably a continue

				Components.utils.reportError("Cannot retrieve password via nsIPasswordManager");

			}

			}

			

			/*load IMS Acct Password

			////////////////////////////////////////////////////////////////////////////////////////////////////////

							*/

			

			

			// the host name of the password we are looking for

			allProfileData.imsProxyCSCF.value = convertToString(allProfileData.imsProxyCSCF.value);

			

			this.queryString = allProfileData.imsProxyCSCF.value;

			

			// ask the password manager for an enumerator:

			this.pwdServiceEmunerator = this.pwdService.enumerator;

			

			// step through each password in the password manager until we find the one we want:

			while (this.pwdServiceEmunerator.hasMoreElements()) {

			try {

				// get an nsIPassword object out of the password manager.

				// This contains the actual password...

				var pass = this.pwdServiceEmunerator.getNext().QueryInterface(Components.interfaces.nsIPassword);

				if (pass.host == this.queryString) {

				// found it!

					allProfileData.imsPrivateUserIdentity.value = pass.user; // the username

					allProfileData.imsPassword.value = pass.password; // the password

				break;

				}

			} catch (ex) {

				// do something if decrypting the password failed--probably a continue

				Components.utils.reportError("Cannot retrieve password via nsIPasswordManager");

			}

			}

		}

	else {

			

			// for ff3 - loginmanager Component

			

			

			/*load SIP Acct Password

			////////////////////////////////////////////////////////////////////////////////////////////////////////

							*/

			

			// the host name of the password we are looking for

			allProfileData.sipProxy.value = convertToString(allProfileData.sipProxy.value);

			

			var _hostname = "chrome://httpsessionmobility/content/preferences_gui.xul";

			

			var formSubmitURL = "Preferences Settings - SIP";

			

			this.queryString = allProfileData.sipAddress.value; // the username

			

			

			

			try {

			

			//initialize pwd service

				this.pwdService = xpcomgS("@mozilla.org/login-manager;1", "nsILoginManager");

			

				

			// Find users for the given parameters

			var logins = this.pwdService.findLogins({}, _hostname, formSubmitURL, httprealm);

			

			// Find user from returned array of nsILoginInfo objects

			for (var i = 0; i < logins.length; i++) {

			if (logins[i].username == this.queryString) {

				allProfileData.sipPassword.value = logins[i].password;

				break;

			}

			}

			}

			catch(ex) {

			// This will only happen if there is no nsILoginManager component class

			}

			

			

			

			

			

			/*load IMS Acct Password

			////////////////////////////////////////////////////////////////////////////////////////////////////////

							*/

			

			// the host name of the password we are looking for

			allProfileData.imsProxyCSCF.value = convertToString(allProfileData.imsProxyCSCF.value);

			

			var _hostname = "chrome://httpsessionmobility/content/preferences_gui.xul";

			

			var formSubmitURL = "Preferences Settings - IMS";

			

			this.queryString = allProfileData.imsPrivateUserIdentity.value;

			

			try {

			

			//initialize pwd service

				this.pwdService = xpcomgS("@mozilla.org/login-manager;1", "nsILoginManager");

			

			// Get Login Manager 

			//var myLoginManager = this.pwdService;

				

			// Find users for the given parameters

			var logins = this.pwdService.findLogins({}, _hostname, formSubmitURL, httprealm);

			

			// Find user from returned array of nsILoginInfo objects

			for (var i = 0; i < logins.length; i++) {

			if (logins[i].username == this.queryString) {

				allProfileData.imsPassword.value = logins[i].password;

				break;

			}

			}

			}

			catch(ex) {

			// This will only happen if there is no nsILoginManager component class

			}

			

			

									}



	}





	//returnPasswordsOnly added on Jan. 22, 2008

	

	function returnPasswordsOnly() {



			//use Preferences data in OOP manner

			sipDataInit.prototype = new profileDataInit;

			

			imsDataInit.prototype = new sipDataInit;

			

			var allProfileData = new imsDataInit;

			

			

			var httprealm = null;

			

			var usernameField = null;

			

			var passwordField = null;

			

			

			//initialize pref service

			this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");

			

			if (this.prefService.getPrefType(prefPrefix + "sipProxy") == this.prefService.PREF_STRING) {

				allProfileData_sipProxy_value = this.prefService.getCharPref(prefPrefix + "sipProxy");

											}

			

			// for ff2 backward compatibility



			if (Components.classes["@mozilla.org/passwordmanager;1"] != null){

				

				//initialize pwd service

				this.pwdService = xpcomgS("@mozilla.org/passwordmanager;1", "nsIPasswordManager");

				

				/*load SIP Acct Password

				////////////////////////////////////////////////////////////////////////////////////////////////////////

								*/

				

				// the host name of the password we are looking for

				allProfileData_sipProxy_value = convertToString(allProfileData_sipProxy_value);

				

				this.queryString = allProfileData_sipProxy_value;

				

				// ask the password manager for an enumerator:

				this.pwdServiceEmunerator = this.pwdService.enumerator;

				

				// step through each password in the password manager until we find the one we want:

				while (this.pwdServiceEmunerator.hasMoreElements()) {

				try {

					// get an nsIPassword object out of the password manager.

					// This contains the actual password...

					var pass = this.pwdServiceEmunerator.getNext().QueryInterface(Components.interfaces.nsIPassword);

					if (pass.host == this.queryString) {

					// found it!

					allProfileData_sipAddress_value = pass.user; // the username

					allProfileData_sipPassword_value = pass.password; // the password

					

					//Return added on Jan. 22, 2008

					return allProfileData_sipPassword_value;

					break;

					}

				} catch (ex) {

					// do something if decrypting the password failed--probably a continue

					Components.utils.reportError("Cannot retrieve password via nsIPasswordManager");

				}

				}

				

				/*load IMS Acct Password

				////////////////////////////////////////////////////////////////////////////////////////////////////////

								*/

				

				

				if (this.prefService.getPrefType(prefPrefix + "imsProxyCSCF") == this.prefService.PREF_STRING) {

					allProfileData_imsProxyCSCF_value = this.prefService.getCharPref(prefPrefix + "imsProxyCSCF");

								}

				

				// the host name of the password we are looking for

				allProfileData_imsProxyCSCF_value = convertToString(allProfileData_imsProxyCSCF_value);

				

				this.queryString = allProfileData_imsProxyCSCF_value;

				

				// ask the password manager for an enumerator:

				this.pwdServiceEmunerator = this.pwdService.enumerator;

				

				// step through each password in the password manager until we find the one we want:

				while (this.pwdServiceEmunerator.hasMoreElements()) {

				try {

					// get an nsIPassword object out of the password manager.

					// This contains the actual password...

					var pass = this.pwdServiceEmunerator.getNext().QueryInterface(Components.interfaces.nsIPassword);

					if (pass.host == this.queryString) {

					// found it!

						allProfileData_imsPrivateUserIdentity_value = pass.user; // the username

						allProfileData_imsPassword_value = pass.password; // the password

					

					//Edited on Jan. 22, 2008

					return allProfileData_imsPassword_value;

						break;

					}

				} catch (ex) {

					// do something if decrypting the password failed--probably a continue

					Components.utils.reportError("Cannot retrieve password via nsIPasswordManager");

				}

				}

			}//if password manager

	else {



			// for ff3 - loginmanager Component

			

			

			/*load SIP Acct Password

			////////////////////////////////////////////////////////////////////////////////////////////////////////

							*/

			

			// the host name of the password we are looking for

			allProfileData_sipProxy_value = convertToString(allProfileData_sipProxy_value);

			

			var _hostname = "chrome://httpsessionmobility/content/preferences_gui.xul";

			

			var formSubmitURL = "Preferences Settings - SIP";

			

			if (this.prefService.getPrefType(prefPrefix + "sipAddress") == this.prefService.PREF_STRING) {

				allProfileData_sipAddress_value = this.prefService.getCharPref(prefPrefix + "sipAddress");

						}

			

			this.queryString = allProfileData_sipAddress_value; // the username

			

			

			

			try {

			

			//initialize pwd service

				this.pwdService = xpcomgS("@mozilla.org/login-manager;1", "nsILoginManager");

			

				

			// Find users for the given parameters

			var logins = this.pwdService.findLogins({}, _hostname, formSubmitURL, httprealm);

			

			// Find user from returned array of nsILoginInfo objects

			for (var i = 0; i < logins.length; i++) {

			if (logins[i].username == this.queryString) {

				var allProfileData_sipPassword_value = logins[i].password;

			

				//Edited on Jan. 22, 2008

				return allProfileData_sipPassword_value;

					break;

			}

			}

			}

			catch(ex) {

			// This will only happen if there is no nsILoginManager component class

			}

			

			

			

			

			

			/*load IMS Acct Password

			////////////////////////////////////////////////////////////////////////////////////////////////////////

							*/

			

			// the host name of the password we are looking for

			var allProfileData_imsProxyCSCF_value = convertToString(allProfileData_imsProxyCSCF_value);

			

			var _hostname = "chrome://httpsessionmobility/content/preferences_gui.xul";

			

			var formSubmitURL = "Preferences Settings - IMS";

			

			

			if (this.prefService.getPrefType(prefPrefix + "imsPrivateUserIdentity") == this.prefService.PREF_STRING) {

				var allProfileData_imsPrivateUserIdentity_value = this.prefService.getCharPref(prefPrefix + "imsPrivateUserIdentity");

							}

			

			this.queryString = allProfileData_imsPrivateUserIdentity_value;



			try {

					

					//initialize pwd service

						this.pwdService = xpcomgS("@mozilla.org/login-manager;1", "nsILoginManager");

					

					// Get Login Manager 

					//var myLoginManager = this.pwdService;

						

					// Find users for the given parameters

					var logins = this.pwdService.findLogins({}, _hostname, formSubmitURL, httprealm);

					

					// Find user from returned array of nsILoginInfo objects

					for (var i = 0; i < logins.length; i++) {

					if (logins[i].username == this.queryString) {

					var   allProfileData_imsPassword_value = logins[i].password;

					

						//Edited on Jan. 22, 2008

						return allProfileData_imsPassword_value;

							break;

					}

					}

			}

			catch(ex) {

			// This will only happen if there is no nsILoginManager component class

			}





		}



				}







function sipRegisterCommand(){

								

				//initialize pref service

				this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");

				

				if (this.prefService.getPrefType(prefPrefix + "yourPortNumber") == this.prefService.PREF_INT) {

					var sipPortNumberValue = this.prefService.getIntPref(prefPrefix + "yourPortNumber");

									}

				if (this.prefService.getPrefType(prefPrefix + "sipAddress") == this.prefService.PREF_STRING) {

					var sipAddressValue = this.prefService.getCharPref(prefPrefix + "sipAddress");

												}

				

				if (this.prefService.getPrefType(prefPrefix + "sipProxy") == this.prefService.PREF_STRING) {

					var sipProxyValue = this.prefService.getCharPref(prefPrefix + "sipProxy");

												}

				//retrieve password from return value of its function

				var sipPwdValue = returnPasswordsOnly();

				

				//Using the SIP Stack in ff 2.x

				

				if ((Components.classes["@mozilla.org/thread;1"] != null) && (Components.classes["@mozilla.org/thread;1"] != undefined)){

				

				function threadProc() {

				//call sipregister or sipreregister

			

				

				

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				

				

				var sipcall = kInst.sipregister(sipProxyValue, sipAddressValue, sipPwdValue, sipPortNumberValue);

									





							

						};

				

				var runable = {run : threadProc, id : 1};

				

				var thread = Components.classes["@mozilla.org/thread;1"];

				var threadInf = thread.createInstance(Components.interfaces.nsIThread);

				var inf = Components.interfaces.nsIThread;

				var instThreadInf = threadInf.init(runable, 0, inf.PRIORITY_NORMAL, inf.SCOPE_GLOBAL, inf.STATE_JOINABLE);

					}

		else {

			//Using the SIP Stack in ff 3.x

			

			function MyEvent() {

			}

			MyEvent.prototype = {

			QueryInterface: function(iid) {

			if (iid.equals(Components.interfaces.nsIRunnable) ||

				iid.equals(Components.interfaces.nsISupports))

			return this;

			throw Components.results.NS_ERROR_NO_INTERFACE;

			},

			run: function() {

			// do stuff

			



			

			var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

			var kInst = k.createInstance(Components.interfaces.IMyStack);



			

			var sipcall = kInst.sipregister(sipProxyValue, sipAddressValue, sipPwdValue, sipPortNumberValue);

				

		

			

						

					}

			};

			

			function DispatchMyEvent() {

			var target = 

			Components.classes["@mozilla.org/thread-manager;1"].getService().currentThread;

			

			target.dispatch(new MyEvent(), target.DISPATCH_NORMAL);

			}

			

			// Calling the executor

				DispatchMyEvent();



		}// close of SIP Stack call for ff 3.x

		/*
		//Add an observerService

		var observerService = Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);

		observerService.addObserver(msgNotification, "change-statusbar-message", false);

		//observerService.notifyObservers(null, "change-statusbar-message", null);

		*/

		//initialize sentURL

		String = (Components.Constructor("@mozilla.org/supports-string;1", "nsISupportsString"));

			var strSentURL = new String;

			strSentURL.data = "";

		var dirComp = Components.classes["@mozilla.org/properties;1"].getService(Components.interfaces.nsIProperties);

			dirComp.set("sentURL", strSentURL);

		

		//Use a Timer Component for msgNotification

		var timerComp = Components.classes["@mozilla.org/timer;1"].getService(Components.interfaces.nsITimer);

		var addTimer = timerComp.init(msgNotification, 5000, 1);

		

		

	}//end of sipRegisterCommand function









function sipmakecallCommand(){

								

				//initialize pref service

				this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");

				

				

				

				if (this.prefService.getPrefType(prefPrefix + "sipToAddr") == this.prefService.PREF_STRING) {

									var sipToAddrValue = this.prefService.getCharPref(prefPrefix + "sipToAddr");

																}

				//retrieve password from return value of its function

				var sipPwdValue = returnPasswordsOnly();

				

				

				

				//Using the SIP Stack in ff 2.x

				

				if ((Components.classes["@mozilla.org/thread;1"] != null) && (Components.classes["@mozilla.org/thread;1"] != undefined)){

				

				function threadProc() {

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				//var browser = gBrowser.selectedBrowser;

				//var addressbarURLValue = browser.currentURI.spec;

				var sipmakecall = kInst.sipmakecall(sipToAddrValue);

					};

				

				var runable = {run : threadProc, id : 1};

				

				var thread = Components.classes["@mozilla.org/thread;1"];

				var threadInf = thread.createInstance(Components.interfaces.nsIThread);

				var inf = Components.interfaces.nsIThread;

				var instThreadInf = threadInf.init(runable, 0, inf.PRIORITY_NORMAL, inf.SCOPE_GLOBAL, inf.STATE_JOINABLE);

					}

		else {

			//Using the SIP Stack in ff 3.x

			

			function MyEvent() {

			}

			MyEvent.prototype = {

			QueryInterface: function(iid) {

			if (iid.equals(Components.interfaces.nsIRunnable) ||

				iid.equals(Components.interfaces.nsISupports))

			return this;

			throw Components.results.NS_ERROR_NO_INTERFACE;

			},

			run: function() {

			// do stuff

			

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				//var browser = gBrowser.selectedBrowser;

				//var addressbarURLValue = browser.currentURI.spec;

				var sipmakecall = kInst.sipmakecall(sipToAddrValue);

						

			}

			};

			

			function DispatchMyEvent() {

			var target = 

			Components.classes["@mozilla.org/thread-manager;1"].getService().currentThread;

			

			target.dispatch(new MyEvent(), target.DISPATCH_NORMAL);

			}

			

			// Calling the executor

				DispatchMyEvent();



		}// close of SIP Stack call for ff 3.x

	}//end of sipmakecallCommand function

function hiddenInputElement(){};
				hiddenInputElement.prototype = {
							inputStr: '',
							getHiddenElementString: function (){
										var someXMLDoc = content.document;
	  									var hiddenInput = someXMLDoc.evaluate("//input[@type='hidden']", someXMLDoc, null, XPathResult.ANY_TYPE,null);
										var thisHiddenInput = hiddenInput.iterateNext();

										while (thisHiddenInput) {
											inputName = thisHiddenInput.name;
											inputId = thisHiddenInput.id;
											//first encode the input value
											inputValue = encodeURIComponent(thisHiddenInput.value);
											
											/* Input Concatenation */
											eachHiddenInput = "<input type=\"hidden\" name = \"" + inputName + "\" id = \"" + inputId + "\">" + inputValue + "</input>";
											this.inputStr = this.inputStr + eachHiddenInput;

											thisHiddenInput = hiddenInput.iterateNext();
										}
										return this.inputStr;
											} 

								};


function cookieDetails(){};
				cookieDetails.prototype = {
				obj: null,
				browser: null,
				uri: null,
				varObj: null,
				cookieobj: null,
				cookieStr: '',
				uriDefinition: 	function(){
								//extract session or state information

								this.browser = gBrowser.selectedBrowser;

								this.uri = this.browser.currentURI.spec;

								this.obj=Components.classes["@mozilla.org/network/io-service;1"].getService				(Components.interfaces.nsIIOService).newURI(this.uri,null,null)
								return this.obj;
								},
				host: 		function(){
							this.obj = this.uriDefinition();
							return this.obj.host;
							},
				getCookieString: function(){
/*
								this.obj = this.uriDefinition();
								this.cookieobj = Components.classes["@mozilla.org/cookieService;1"].getService(Components.interfaces.nsICookieService);  

								return this.cookieobj.getCookieStringFromHttp(this.obj,null,null);
*/
								this.cookieobj = Components.classes["@mozilla.org/cookiemanager;1"].getService();
				this.cookieobj = this.cookieobj.QueryInterface(Components.interfaces.nsICookieManager);
								//alert(objCookieInfo.host());
								var iter = this.cookieobj.enumerator;
								while (iter.hasMoreElements()){
								    var nextCookie = iter.getNext();
									nextCookie = nextCookie.QueryInterface(Components.interfaces.nsICookie);
									var browserAddrValue = this.host();
									var arrbrowserAddrValue = browserAddrValue.split(".");
									//pick second to the last value
									var strDomainValue = arrbrowserAddrValue[arrbrowserAddrValue.length-2];
									//remove leading dot in hostname as sometimes found in a cookie
									var cookieHostValue = nextCookie.host;
									if(cookieHostValue[0] == "."){cookieHostValue = cookieHostValue.substr(1, cookieHostValue.length-1);}
									//extract domain/host name from cookie
									arrcookieHostValue = cookieHostValue.split(".");
									//pick second to the last value also
									var strcookieHostValue = arrcookieHostValue[arrcookieHostValue.length-2];
									//check if strDomainValue matches the strcookieHostValue
									//alert('strcookieHostValue: ' + strcookieHostValue + ', strDomainValue: ' + strDomainValue);
														
								if (strcookieHostValue == strDomainValue){
												//alert('host:' + nextCookie.host + ', name :' + nextCookie.name + ', path :' + nextCookie.path);
												cookieName = nextCookie.name;
												//first encode the cookie value
												cookieValue = encodeURIComponent(nextCookie.value);
												cookieIsDomain = nextCookie.isDomain;
												cookieHost = nextCookie.host;
												cookiePath = nextCookie.path;
												cookieIsSecure = nextCookie.isSecure;
												cookieExpires = nextCookie.expires;
												/* Cookie Concatenation  */
												eachCookieStr = "<cookie name = \"" + cookieName + "\" domain = \"" + cookieIsDomain + "\" host = \"" + cookieHost + "\" path = \"" + cookiePath + "\" isSecure = \"" + cookieIsSecure + "\" expires = \""+ cookieExpires + "\">" + cookieValue + "</cookie>";
												this.cookieStr = this.cookieStr + eachCookieStr;
												
												//delete the line of cookie
												blockFutureCookies = false;
												this.cookieobj.remove(nextCookie.host, nextCookie.name, nextCookie.path, blockFutureCookies);
									}
				    
				 				 }
								return this.cookieStr;   
								}


				};







function webSessionTransferCommand(){
				//Get cookies details
				var objCookieInfo = new cookieDetails;
				var cookieInfo = objCookieInfo.getCookieString();

				//Get Hidden Input details
				var objHiddenInputElement = new hiddenInputElement;
				var hiddenInputElementInfo = objHiddenInputElement.getHiddenElementString();

				//Get textarea details
				var objtextarea = new formElements;
				var textareaInfo = objtextarea.textareaFunction();

				//Get textarea details
				var objinput = new formElements;
				var inputInfo = objinput.inputFunction();

				//initialize pref service

				this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");

				

				

				

				if (this.prefService.getPrefType(prefPrefix + "sipToAddr") == this.prefService.PREF_STRING) {

									var sipToAddrValue = this.prefService.getCharPref(prefPrefix + "sipToAddr");

																}

				//retrieve password from return value of its function

				var sipPwdValue = returnPasswordsOnly();

				

				

				

				//Using the SIP Stack in ff 2.x

				

				if ((Components.classes["@mozilla.org/thread;1"] != null) && (Components.classes["@mozilla.org/thread;1"] != undefined)){

				

				function threadProc() {

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				var browser = gBrowser.selectedBrowser;

				var addressbarURLValue = browser.currentURI.spec;

				//first encode URL
				var addressbarURLValue = encodeURIComponent(addressbarURLValue);

				//send HTTP Session Info in XML format
				/**
				*
				* The message format
				*<xml version="1.0">
				*<httpsession>
				*<url>http://www.ngportal.com/request.com?pid=30</url>
				*<inputs>
				*<input type="text" name="en" id="">english</input>
				*<textarea name="compose" id="compose">Hello</textarea>
				*<input type="hidden" name="_VIEWSTATE" id="_VIEWSTATE">ghdydusks</input>
				*</inputs>
				*<cookies>
				*<cookie name="color" domain="/ngportal.com" path="/" expires="1218326401">blue</cookie>
				*<cookie name="PHPSESSIONID">HDYDKJAI07DJ6DK3</cookie>
				*</cookies>
				*</httpsession>
				*/

				var xmlStr = "<xml version = \"1.0\"><httpsession><url>" + addressbarURLValue + "</url>" + "<inputs>"  + inputInfo + textareaInfo + hiddenInputElementInfo + "</inputs><cookies>" + cookieInfo + "</cookies></httpsession>";


				var sipsendimonly = kInst.sipsendimonly(sipToAddrValue, xmlStr);

					};

				

				var runable = {run : threadProc, id : 1};content.window.getSelection()

				

				var thread = Components.classes["@mozilla.org/thread;1"];

				var threadInf = thread.createInstance(Components.interfaces.nsIThread);

				var inf = Components.interfaces.nsIThread;

				var instThreadInf = threadInf.init(runable, 0, inf.PRIORITY_NORMAL, inf.SCOPE_GLOBAL, inf.STATE_JOINABLE);
				

					//remove current Tab
					if(gBrowser.browsers.length != 1){
									gBrowser.removeCurrentTab();
									}else{
									var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);

									var result = prompts.confirm(null, "HTTP Session Mobility Service", "Do you want to close the web browser? ");
					
									if(result){
										window.close();	}
										}


				}

		else {

			//Using the SIP Stack in ff 3.x

			

			function MyEvent() {

			}

			MyEvent.prototype = {

			QueryInterface: function(iid) {

			if (iid.equals(Components.interfaces.nsIRunnable) ||

				iid.equals(Components.interfaces.nsISupports))

			return this;

			throw Components.results.NS_ERROR_NO_INTERFACE;

			},

			run: function() {

			// do stuff

			

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				var browser = gBrowser.selectedBrowser;

				var addressbarURLValue = browser.currentURI.spec;
				//first encode URL
				var addressbarURLValue = encodeURIComponent(addressbarURLValue);

				var xmlStr = "<xml version = \"1.0\"><httpsession><url>" + addressbarURLValue + "</url>" + "<inputs>"  + inputInfo + textareaInfo + hiddenInputElementInfo + "</inputs><cookies>" + cookieInfo + "</cookies></httpsession>";

				var sipsendimonly = kInst.sipsendimonly(sipToAddrValue, xmlStr);
						

			}

			};

			

			function DispatchMyEvent() {

			var target = 

			Components.classes["@mozilla.org/thread-manager;1"].getService().currentThread;

			

			target.dispatch(new MyEvent(), target.DISPATCH_NORMAL);

			}

			

			// Calling the executor

				DispatchMyEvent();


		}// close of SIP Stack call for ff 3.x

	}//end of session hand-off function










function contentSharingCommand(){

				//Get textarea details
				var objtextarea = new formElements;
				var textareaInfo = objtextarea.textareaFunction();

				//Get textarea details
				var objinput = new formElements;
				var inputInfo = objinput.inputFunction();


				//initialize pref service

				this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");

				

				

				

				if (this.prefService.getPrefType(prefPrefix + "sipToAddr") == this.prefService.PREF_STRING) {

									var sipToAddrValue = this.prefService.getCharPref(prefPrefix + "sipToAddr");

																}

				//retrieve password from return value of its function

				var sipPwdValue = returnPasswordsOnly();

				

				

				

				//Using the SIP Stack in ff 2.x

				

				if ((Components.classes["@mozilla.org/thread;1"] != null) && (Components.classes["@mozilla.org/thread;1"] != undefined)){

				

				function threadProc() {

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				var browser = gBrowser.selectedBrowser;

				var addressbarURLValue = browser.currentURI.spec;
				//first encode URL
				var addressbarURLValue = encodeURIComponent(addressbarURLValue);

				//send HTTP Session Info in XML format
				/**
				*
				* The message format
				*<xml version="1.0">
				*<httpsession>
				*<url>http://www.ngportal.com/request.com?pid=30</url>
				*<inputs>
				*<input type="text" name="fname" id="fname">mike</input>
				*<textarea name="fname" id="fname">mike</textarea>
				*</inputs>
				*</httpsession>
				*/

				var xmlStr = "<xml version = \"1.0\"><httpsession><url>" + addressbarURLValue + "</url>" + "<inputs>"  + inputInfo + textareaInfo + "</inputs></httpsession>";
				var sipsendimonly = kInst.sipsendimonly(sipToAddrValue, xmlStr);

					};

				

				var runable = {run : threadProc, id : 1};

				

				var thread = Components.classes["@mozilla.org/thread;1"];

				var threadInf = thread.createInstance(Components.interfaces.nsIThread);

				var inf = Components.interfaces.nsIThread;

				var instThreadInf = threadInf.init(runable, 0, inf.PRIORITY_NORMAL, inf.SCOPE_GLOBAL, inf.STATE_JOINABLE);

				

				}

		else {

			//Using the SIP Stack in ff 3.x

			

			function MyEvent() {

			}

			MyEvent.prototype = {

			QueryInterface: function(iid) {

			if (iid.equals(Components.interfaces.nsIRunnable) ||

				iid.equals(Components.interfaces.nsISupports))

			return this;

			throw Components.results.NS_ERROR_NO_INTERFACE;

			},

			run: function() {

			// do stuff

			

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				var browser = gBrowser.selectedBrowser;

				var addressbarURLValue = browser.currentURI.spec;
				//first encode URL
				var addressbarURLValue = encodeURIComponent(addressbarURLValue);

				//send HTTP Session Info in XML format
				var xmlStr = "<xml version = \"1.0\"><httpsession><url>" + addressbarURLValue +  "</url></httpsession>";

				var sipsendimonly = kInst.sipsendimonly(sipToAddrValue, xmlStr);

						

			}

			};

			

			function DispatchMyEvent() {

			var target = 

			Components.classes["@mozilla.org/thread-manager;1"].getService().currentThread;

			

			target.dispatch(new MyEvent(), target.DISPATCH_NORMAL);

			}

			

			// Calling the executor

				DispatchMyEvent();



		}// close of SIP Stack call for ff 3.x

	}//end of contentSharingCommand function




function sipDeregisterCommand(){
				/*
				//remove the observer msgNotification:observe
				var observerService = Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);

		observerService.removeObserver(msgNotification, "change-statusbar-message");

				*/

				
				//Destroy the Timer Component for msgNotification

				var timerComp = Components.classes["@mozilla.org/timer;1"].getService(Components.interfaces.nsITimer);

				var destroyTimer = timerComp.cancel();
			
				//set nsIProperties to keep current URL

				String = (Components.Constructor("@mozilla.org/supports-string;1", "nsISupportsString"));

				strSentURL = new String;

				strSentURL.data = "SIPSessionDestroyed"; //in order to reset the statusbar message to null



				var dirComp = Components.classes["@mozilla.org/properties;1"].getService(Components.interfaces.nsIProperties);

				dirComp.set("sentURL", strSentURL);
				
				//reset statusbar message to null
				msgLabel = document.getElementById("urn:mozilla:httpsession:msgNotification");
				msgLabel.value = null;


				//Using the SIP Stack in ff 2.x

				

				if ((Components.classes["@mozilla.org/thread;1"] != null) && (Components.classes["@mozilla.org/thread;1"] != undefined)){

				

				function threadProc() {

				// do stuff

				

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				var sipcall = kInst.sipderegister();

				

					

				};

				

				var runable = {run : threadProc, id : 1};

				

				var thread = Components.classes["@mozilla.org/thread;1"];

				var threadInf = thread.createInstance(Components.interfaces.nsIThread);

				var inf = Components.interfaces.nsIThread;

				var instThreadInf = threadInf.init(runable, 0, inf.PRIORITY_NORMAL, inf.SCOPE_GLOBAL, inf.STATE_JOINABLE);

					}

		else {

				//Using the SIP Stack in ff 3.x

				

				function MyEvent() {	}

				MyEvent.prototype = {

				QueryInterface: function(iid) {

				if (iid.equals(Components.interfaces.nsIRunnable) ||

					iid.equals(Components.interfaces.nsISupports))

				return this;

				throw Components.results.NS_ERROR_NO_INTERFACE;

				},

				run: function() {

				// do stuff

				

				var k = Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"];

				var kInst = k.createInstance(Components.interfaces.IMyStack);

				var sipcall = kInst.sipderegister();

				

				

				

				}

				};

				

				function DispatchMyEvent() {

				var target = 

				Components.classes["@mozilla.org/thread-manager;1"].getService().currentThread;

				

				target.dispatch(new MyEvent(), target.DISPATCH_NORMAL);

				}

				

				// Calling the executor

					DispatchMyEvent();

					}
				
				
				}//end of sipDeregisterCommand function

			



		function basefunc(){};

		basefunc.prototype = {

		urlInst: Components.classes["@ngportal.com/SIPStack/SIPStackInit;1"].createInstance(Components.interfaces.IMyStack),

		urlValue: null,

		iniurlValue: null,

		msgLabel: document.getElementById("urn:mozilla:httpsession:msgNotification"),

		

		getURL: function() {

		

				this.urlValue = this.urlInst.sipreceiveimonly();

				

				return this.urlValue;

					},



		setURL: function(sentURLValue) {



				this.iniurlValue = sentURLValue;

				

						},



		getSenderSipAddress: function() {

		

				this.urlValue = this.urlInst.sipimsenderaddronly();

				

				return this.urlValue;

					},

							

		

				}//close of basefunc function





var msgNotification = {



		observe:	function(subject, topic, data){

			

			msgNotification = new basefunc();
			var senderSipAddress = msgNotification.getSenderSipAddress();

			msgLabel = document.getElementById("urn:mozilla:httpsession:msgNotification");

			/* Added on June 28, 2009
			* Pull SIP proxy address from the nsIPrefService
			*/
			this.prefService = xpcomgS("@mozilla.org/preferences-service;1", "nsIPrefBranch");
			if (this.prefService.getPrefType(prefPrefix + "sipProxy") == this.prefService.PREF_STRING) {
			sipProxyValue = this.prefService.getCharPref(prefPrefix + "sipProxy");
								 }
			
			

				//instBasefunc = new basefunc();

				var sentURL = msgNotification.getURL();
			
				if(sentURL.length != 0){
				
				var xmlstring = sentURL
				//extract '<xml version = "1.0">' from the string
				var arrString = xmlstring.split('<xml version = "1.0">');
				//need the index [1] value
				var xmlSubStr = arrString[1];	
				//alert(xmlSubStr);	

				var parser = new DOMParser();
				var doc = parser.parseFromString(xmlSubStr, "text/xml");

				var urlInfo = doc.evaluate("//url", doc, null, XPathResult.ANY_TYPE, null);
				var thisUrlInfo = urlInfo.iterateNext();
				var sentURL = thisUrlInfo.textContent;

				
				
				//retrieve existing URL from nsIProperties

				var dirComp = Components.classes["@mozilla.org/properties;1"].getService(Components.interfaces.nsIProperties);

				var storedURL = dirComp.get("sentURL", Components.interfaces.nsISupports);

				if( (sentURL.length != 0) && ((sentURL != storedURL) && (storedURL != "SIPSessionDestroyed"))){
				if(sentURL == "0"){
					msgLabel.value = "** Response: Unsuccessful **";}
					else if(sentURL == "100"){
					msgLabel.value = "** Trying (100) **";}
					else if(sentURL == "180"){
					msgLabel.value = "** Response: Ringing (180) **";}
					else if(sentURL == "181"){
					msgLabel.value = "** Response: Call Being Forwarded (181) **";}
					else if(sentURL == "182"){
					msgLabel.value = "** Response: Call Queued (182) **";}
					else if(sentURL == "183"){
					msgLabel.value = "** Response: Session Progress (183) **";}
					else if(sentURL == "200"){
					msgLabel.value = "** Response: Successful (200) **";}
					else if(sentURL == "202"){
					msgLabel.value = "** Response: Accepted (202) **";}
					else if(sentURL == "300"){
					msgLabel.value = "** Response: Multiple Choices (300) **";}
					else if(sentURL == "301"){
					msgLabel.value = "** Response: Moved Permanently (301) **";}
					else if(sentURL == "302"){
					msgLabel.value = "** Response: Moved Temporarily (302) **";}
					else if(sentURL == "305"){
					msgLabel.value = "** Response: Use Proxy (305) **";}
					else if(sentURL == "380"){
					msgLabel.value = "** Response: Alternative Service (380) **";}
					else if(sentURL == "400"){
					msgLabel.value = "** Response: Bad Request (400) **";}
					else if(sentURL == "401"){
					msgLabel.value = "** Response: Unauthorized (401) **";}
					else if(sentURL == "402"){
					msgLabel.value = "** Response: Payment Required (402) **";}
					else if(sentURL == "403"){
					msgLabel.value = "** Response: Forbidden (403) **";}
					else if(sentURL == "404"){
					msgLabel.value = "** Response: Not Found (404) **";}
					else if(sentURL == "405"){
					msgLabel.value = "** Response: Method Not Allowed (405) **";}
					else if(sentURL == "406"){
					msgLabel.value = "** Response: Not Acceptable (406) **";}
					else if(sentURL == "407"){
					msgLabel.value = "** Response: Proxy Authentication Required (407) **";}
					else if(sentURL == "408"){
					msgLabel.value = "** Response: Request Timeout (408) **";}
					else if(sentURL == "409"){
					msgLabel.value = "** Response: Conflict (409) **";}
					else if(sentURL == "410"){
					msgLabel.value = "** Response: Gone (410) **";}
					else if(sentURL == "411"){
					msgLabel.value = "** Response: Length Required (411) **";}
					else if(sentURL == "413"){
					msgLabel.value = "** Response: Request Entity Too Large (413) **";}
					else if(sentURL == "414"){
					msgLabel.value = "** Response: Request URI Too Long (414) **";}
					else if(sentURL == "415"){
					msgLabel.value = "** Response: Unsupported Media Type (415) **";}
					else if(sentURL == "416"){
					msgLabel.value = "** Response: Unsupported URI Scheme (416) **";}
					else if(sentURL == "420"){
					msgLabel.value = "** Response: Bad Extension (420) **";}
					else if(sentURL == "421"){
					msgLabel.value = "** Response: Extension Required (421) **";}
					else if(sentURL == "423"){
					msgLabel.value = "** Response: Interval Too Brief (423) **";}
					else if(sentURL == "480"){
					msgLabel.value = "** Response: Temporarily Unavailable (480) **";}
					else if(sentURL == "481"){
					msgLabel.value = "** Response: Call/Transaction Does Not Exist (481) **";}
					else if(sentURL == "482"){
					msgLabel.value = "** Response: Loop Detected (482) **";}
					else if(sentURL == "483"){
					msgLabel.value = "** Response: Too Many Hops (483) **";}
					else if(sentURL == "484"){
					msgLabel.value = "** Response: Address Incomplete (484) **";}
					else if(sentURL == "485"){
					msgLabel.value = "** Response: Ambiguous (485) **";}
					else if(sentURL == "486"){
					msgLabel.value = "** Response: Busy Here (486) **";}
					else if(sentURL == "487"){
					msgLabel.value = "** Response: Request Terminated (487) **";}
					else if(sentURL == "488"){
					msgLabel.value = "** Response: Not Acceptable Here (488) **";}
					else if(sentURL == "491"){
					msgLabel.value = "** Response: Request Pending (491) **";}
					else if(sentURL == "493"){
					msgLabel.value = "** Response: Undecipherable (493) **";}
					else if(sentURL == "500"){
					msgLabel.value = "** Response: Server Internal Error (500) **";}
					else if(sentURL == "501"){
					msgLabel.value = "** Response: Not Implemented (501) **";}
					else if(sentURL == "502"){
					msgLabel.value = "** Response: Bad Gateway (502) **";}
					else if(sentURL == "503"){
					msgLabel.value = "** Response: Service Unavailable (503) **";}
					else if(sentURL == "504"){
					msgLabel.value = "** Response: Server Time-Out (504) **";}
					else if(sentURL == "505"){
					msgLabel.value = "** Response: Version Not Supported (505) **";}
					else if(sentURL == "513"){
					msgLabel.value = "** Response: Message Too Large (513) **";}
					else if(sentURL == "600"){
					msgLabel.value = "** Response: Busy Everywhere (600) **";}
					else if(sentURL == "603"){
					msgLabel.value = "** Response: Declined (603) **";}
					else if(sentURL == "604"){
					msgLabel.value = "** Response: Does Not Exist Anywhere (604) **";}
					else if(sentURL == "605"){
					msgLabel.value = "** Response: Not Acceptable (605) **";}
					else if((sentURL.substring(0, 4) == "http") || (sentURL.substring(0, 3) == "ftp")
					|| (sentURL.substring(0, 6) == "chrome")){
						msgLabel.value = "** Request: session transfer/call from " + senderSipAddress + "**";}
					else{msgLabel.value = null;}


				}//end - if sentURL != 0
				else{
					msgLabel.value = null;
					}
				
			}
		}
	}

//set up a channel for HTTP RequestHeader Generation

function makeChan(sentURL) {

		  var ios = Components.classes["@mozilla.org/network/io-service;1"]

		                      .getService(Components.interfaces.nsIIOService);

		  var chan = ios.newChannel(sentURL, null, null)

		                .QueryInterface(Components.interfaces.nsIHttpChannel);



		  return chan;

}





			

function retrieveURL(){

			var instBasefunc = new basefunc();

			var sentURL = instBasefunc.getURL();

			if(sentURL.length != 0){
				var newsentURL;
				var xmlstring = sentURL
				//extract '<xml version = "1.0">' from the string
				arrString = xmlstring.split('<xml version = "1.0">');
				//need the index [1] value
				xmlSubStr = arrString[1];	
				//alert(xmlSubStr);	

				var parser = new DOMParser();
				var doc = parser.parseFromString(xmlSubStr, "text/xml");

				var urlInfo = doc.evaluate("//url", doc, null, XPathResult.ANY_TYPE, null);
				var thisUrlInfo = urlInfo.iterateNext();
				var sentURL = thisUrlInfo.textContent;

									//set nsIProperties to keep current URL

				String = (Components.Constructor("@mozilla.org/supports-string;1", "nsISupportsString"));

				var strSentURL = new String;

				strSentURL.data = sentURL; //obtained from urlInfo in line 2519



				var dirComp = Components.classes["@mozilla.org/properties;1"].getService(Components.interfaces.nsIProperties);

				dirComp.set("sentURL", strSentURL);



				//decode sentURL
				var sentURL = decodeURIComponent(sentURL);
				
				var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);
				//ostracize the sentURL if quiet long
				if(sentURL.length > 70){
					newsentURL = sentURL.substring(0, 70);
					newsentURL = newsentURL + ".................";
							}
				else{
				newsentURL = sentURL;
					}
				/**Edited on June 28, 2009
				*Report all error messages
				*
				*/
				if((newsentURL != "0") && (newsentURL != "200") && (newsentURL != "403") && (newsentURL != "408") && (newsentURL != "503")){
				var result = prompts.confirm(null, "HTTP Session Mobility Service", "Do you want to accept this web session? \n" + newsentURL);

				if(result){
					var cookieInfo = doc.evaluate("//cookie", doc, null, XPathResult.ANY_TYPE, null);
					var thisCookieInfo = cookieInfo.iterateNext();
					//create a channel to load web session i.e. set requestheader
					var chan = makeChan(sentURL);
					
					//alert(cookieInfo.length);
					//check if cookie was sent

							while (thisCookieInfo) {

									//Extract Cookie items
									var aDomain = thisCookieInfo.getAttribute("domain");
									var aPath = thisCookieInfo.getAttribute("path");
									var aName = thisCookieInfo.getAttribute("name");
									//decode cookie value
									var aValue = decodeURIComponent(thisCookieInfo.textContent);
									var aHost = thisCookieInfo.getAttribute("host");
									var aSecure = thisCookieInfo.getAttribute("isSecure");
									var aExpiry = thisCookieInfo.getAttribute("expires");

									//set cookie string -- keep "secure" blank  -- Using nsICookieService -- shorter way and only stores name and value -i.e.  session-based cookies.

									obj=Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI(sentURL,null,null)

									cookieobj = Components.classes["@mozilla.org/cookieService;1"].getService(Components.interfaces.nsICookieService);  

									//set aIsSession to false
									aIsSession = false;

									//aHost is used as the first argument in place of aDomain - aDomain is either true or false while ".xyz.com" - domain cookie or "xyz.com" - non-domain cookie value is expected (i.e aHost)
									
									//eachCookieStr = aName + "=" + aValue;
									eachCookieStr = aName + "=" + aValue + ";" + "domain=" + aHost + ";" + "expires=" + aExpiry + ";" + "path=" + aPath;
									//alert(eachCookieStr);

									//create a channel to load web session i.e. set requestheader

									var chan = makeChan(sentURL);

									var cookieManager = Components.classes["@mozilla.org/cookiemanager;1"].getService(Components.interfaces.nsICookieManager2);

									
									//set cookie string -- keep "secure" blank  -- Using nsICookieManager2 -- supports saving other parameters such as path, domain, expires, e.t.c. -- persistent cookies

									//use nsICookieService if aExpiry = 0

									if(parseInt(aExpiry) != 0){
											
  									cookieManager.add(aHost, aPath, aName, aValue, false, false, parseInt(aExpiry));
									}
									else if(parseInt(aExpiry) == 0){

									cookieobj.setCookieString(obj,null, eachCookieStr, chan);
									}

									
									//cookieManager.add(".zzz.com", "/", "TestCookie2", "CookieData2", false, false, parseInt(new Date().getTime() / 1000) + 1000);

									

									chan.setRequestHeader("Cookie", eachCookieStr, false);	


									thisCookieInfo = cookieInfo.iterateNext();
										}	

					chan.Open;
					gBrowser.selectedTab = gBrowser.addTab(sentURL);
					//gBrowser.selectedTab = gBrowser.addTab();
							
					/**
					*Insert back the input values using asynchronous XMLHttpRequest
					*
					*/
							
					var xmlhttpreq = new XMLHttpRequest();
					xmlhttpreq.open('GET', sentURL, true);	
					
					/*
					var objinsert = new formElements;			
					xmlhttpreq.onload = objinsert.insertfields(doc);
					
					xmlhttpreq.onreadystatechange = function (aEVt) {
										if (xmlhttpreq.readyState == 4) {
													if(xmlhttpreq.status == 200){
													var objinsert = new formElements;			
													objinsert.insertfields(doc);
												}//close of if xmlhttpreq.status = 200
																else{}
																}//close of if xmlhttpreq.readyState = 4
																
										};//close of onreadystatechange function
					*/					
							xmlhttpreq.send(null);
							
	
						}//end of while - thisCookieInfo
					}//end of if - result is true


				}//end of else - reporting error
							
			}//retrieveURL function ends



function formElements(){};
	formElements.prototype = {
			strtextarea :	null,
			strinputtext :	null,
			strcheckbox :	null,
			strradio :	null,
			doc :		null,

			xpathFunction :		function(xpathexpression){
			var someXMLDoc = content.document;
			
								return	someXMLDoc.evaluate(xpathexpression, someXMLDoc, null, XPathResult.ANY_TYPE, null);
								},

			textareaFunction :	function(){
							var arr_textarea = this.xpathFunction("//textarea");
							var thistextarea = arr_textarea.iterateNext();
							this.strtextarea = '';
							while (thistextarea) {

									//Extract textarea items
									var textareastrname = thistextarea.getAttribute("name");
									var textareastrid = thistextarea.getAttribute("id");
									var textareastrvalue = thistextarea.textContent;
									this.strtextarea = this.strtextarea + "<textarea name=\"" + textareastrname + "\" id=\"" + textareastrid + "\">" + encodeURIComponent(textareastrvalue) + "</textarea>";

									thistextarea = arr_textarea.iterateNext();
									}
							return this.strtextarea;
							},
			
			inputFunction :	function(){
						var arr_input = this.xpathFunction("//input[@type='text']");
						var thisinput = arr_input.iterateNext();
						this.strinput = '';
						while (thisinput) {

								//Extract textarea items
								var inputstrname = thisinput.getAttribute("name");
								var inputstrid = thisinput.getAttribute("id");
								var inputstrvalue = thisinput.getAttribute("value");
								this.strinput = this.strinput + "<input type=\"text\" name=\"" + inputstrname + "\" id=\"" + inputstrid + "\">" + encodeURIComponent(inputstrvalue) + "</input>";

								thisinput = arr_input.iterateNext();
									}
						return this.strinput;
							},

			insertfields : function(doc){
						this.doc = doc;
						/**
						*iterate through the input tags
						*
						*/
						//input = "text"
						var inputtextInfo = document.evaluate("//input[@type='text']", this.doc, null, XPathResult.ANY_TYPE, null);
						var thisinputtextInfo = inputtextInfo.iterateNext();
						while (thisinputtextInfo) {

								//Extract Cookie items
								var inputnamevalue = thisinputtextInfo.getAttribute("name");
								var inputidvalue = thisinputtextInfo.getAttribute("id");
								var inputtextvalue = decodeURIComponent(thisinputtextInfo.textContent);

								//insert the variable using DOM
								var inputvalue = content.document.getElementById(inputidvalue);
								inputvalue.setAttribute("value", inputtextvalue);
								thisinputtextInfo = inputtextInfo.iterateNext();

								
									}//close of while statement

						/**
						*iterate through the textarea tags
						*
						*/
						//<textarea name= "fname">mike</textarea>
						var textareaInfo = document.evaluate("//textarea", this.doc, null, XPathResult.ANY_TYPE, null);
						var thistextareaInfo = textareaInfo.iterateNext();
						while (thistextareaInfo) {

								//Extract Cookie items
								var textareanamevalue = thistextareaInfo.getAttribute("name");
								var textareaidvalue = thistextareaInfo.getAttribute("id");
								var textareatextvalue = decodeURIComponent(thistextareaInfo.textContent);

								//insert the variable using DOM
								var textareavalue = content.document.getElementById(textareaidvalue);
								textareavalue.value = textareatextvalue;
								thistextareaInfo = textareaInfo.iterateNext();

								
									}//close of while statement
													
						},
		
				}




