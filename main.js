function doGet(e) {
    var page = e.parameter.page ? e.parameter.page : "index";
    var pagesArray = ["index", "settings", "setup"];
    if (pagesArray.includes(page)) {
        return HtmlService.createTemplateFromFile(page).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    } else {
        return HtmlService.createTemplateFromFile("404").evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
}

function getWebAppURL() {
    return ScriptApp.getService().getUrl()
}