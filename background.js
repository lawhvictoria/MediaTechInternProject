chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://www.fandango.com/account/joinnow";
  chrome.tabs.create({ url: newURL });
});