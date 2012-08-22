// -*- Mode: javascript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2; moz-jssh-buffer-globalobj: "getWindows()[0]" -*-
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is the Mozilla SIP client project.
 *
 * The Initial Developer of the Original Code is 8x8 Inc.
 * Portions created by the Initial Developer are Copyright (C) 2005
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
  *   Adeyeye Michael <micadeyeye@crg.ee.uct.ac.za> (Extended it to support HTTP SEssion Mobility)
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

////////////////////////////////////////////////////////////////////////
// extension variables

var yourName;
var yourEmailAddress;
var yourOrganization;
var yourPortNumber;
var sipAddress;
var sipProxy;
var imsPublicUserIdentity;
var imsPrivateUserIdentity;
var imsRealm;
var sipPassword;
var imsPassword;


////////////////////////////////////////////////////////////////////////
// self-generated variables
var inValue;
var wUserAgent = "mobilehttp/0.2.3"; // String to be sent in User-Agent
                              // header for SIP requests

var _hostname;

var formSubmitURL; // = 'http://www.example.com' not http://www.example.com/foo/auth.cgi

var httprealm = null;

var username;

var password;

var usernameField = null;

var passwordField = null;


var loadModuleService;

var nsLoginInfo;

var loginInfo;


////////////////////////////////////////////////////////////////////////
// set preferences prefix

const prefPrefix = "extensions.httpsessionmobility@adeyeye.michael.";

////////////////////////////////////////////////////////////////////////
// component instantiation

function defineConstants() {
this.CC = "Components.classes";
this.CI = "Components.interfaces";
}
function gS() {
this.GS = "getService";
}
function cI() {
this.CreateI = "createInstance";
}

gS.prototype = new defineConstants;
cI.prototype = new defineConstants;

function xpcomgS(componentID, interfaceID) {

var initialize = new gS; 

return eval(initialize.CC + "['" + componentID + "']" + "." + initialize.GS + "(" + initialize.CI + "['" + interfaceID + "']" + ");");
};

function xpcomcI(componentID, interfaceID) {

var initialize = new cI; 

return eval(initialize.CC + "['" + componentID + "']" + "." + initialize.CreateI + "(" + initialize.CI + "['" + interfaceID + "']" + ");");
};

//Conversion to String
function convertToString(inValue) {

this.inValue = new String(inValue);

return this.inValue.toString();
				
				}

//Conversion to Integer (idle function)
function convertToInteger(inValue) {

this.inValue = new Number(inValue);

return this.inValue.valueOf();
				
				}
