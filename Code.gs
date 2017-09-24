/**
 * Creates a custom menu in Google Docs when the document opens.
 */
function onOpen() {
  DocumentApp.getUi().createMenu('Roobric')
      .addItem('Start', 'launchRoobric')
      .addToUi();
}

/**
 * Finds the linked rubric and launches the sidebar 
 */
function launchRoobric() {
  var html = HtmlService.createHtmlOutputFromFile('Picker.html')
      .setWidth(600)
      .setHeight(425)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  DocumentApp.getUi().showModalDialog(html, 'Select a rubric to link to the paper:');
  // TODO: Launch the sidebar
}

/**
 * Gets the user's OAuth 2.0 access token so that it can be passed to Picker.
 * This technique keeps Picker from needing to show its own authorization
 * dialog, but is only possible if the OAuth scope that Picker needs is
 * available in Apps Script. In this case, the function includes an unused call
 * to a DriveApp method to ensure that Apps Script requests access to all files
 * in the user's Drive.
 *
 * @return {string} The user's OAuth 2.0 access token.
 */
function getOAuthToken() {
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}