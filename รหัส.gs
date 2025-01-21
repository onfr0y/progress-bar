function doGet() {
  return HtmlService.createTemplateFromFile('main')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function get_data () {
  var data = [10,60,100]
  return data
}
