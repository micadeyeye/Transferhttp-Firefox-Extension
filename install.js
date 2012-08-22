initInstall("HTTP Mobility","/Adeyeye Michael/HTTP Mobility","0.0.0.1");

findDir = getFolder("Chrome","httpsessionmobility");
setPackageFolder(findDir);

addDirectory("httpsessionmobility");

registerChrome(Install.CONTENT | Install.DELAYED_CHROME, getFolder(findDir, "content"));
registerChrome(Install.SKIN | Install.DELAYED_CHROME, getFolder(findDir, "skin"));
registerChrome(Install.LOCALE | Install.DELAYED_CHROME, getFolder(findDir, "locale"));

var componentsDir = getFolder("Components");



performInstall();
