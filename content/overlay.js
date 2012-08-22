function preferences_listener(event){
		window.openDialog("chrome://httpsessionmobility/content/preferences_gui.xul", "HttpSessionMobility", "dialog=no");}

function otherAttributes(){
var httpMobilityStatusIconValue = document.getElementById("urn:mozilla:httpsession:StatusIcon");
httpMobilityStatusIconValue.src = "chrome://httpsessionmobility/skin/errorIcon-sm.png";
}

