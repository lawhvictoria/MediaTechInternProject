// JavaScript Document
alert("This is the background script!");
chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function checkVid() {
		chrome.declarativeContent.onPageChanged.addRules([{ 
			conditions: [
			new chrome.declarativeContent.PageStateMatcher({
				css: ["video"], //Seems generic enough but doesn't work with nbc.com videos, so I stuck with YT.
				}),
			],
			actions: [new chrome.declarativeContent.RequestContentScript({js: ["content.js"]})]
		
	}]);
  });
});

	


