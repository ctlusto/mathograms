;

$(function() {

  var parseUrl = function() {
    var queryParams = {};
    var queryString = window.location.href.split('?')[1];
    var params = queryString.split('&');
    for (var i = 0; i < params.length; i++){
      var index = params[i].indexOf('=');
      var key = decodeURIComponent(params[i].slice(0, index));
      var value = decodeURIComponent(params[i].slice(index + 1));
      queryParams[key] = value;
    }
    return queryParams
  };
  //all the information needed to render a math-o-gram is stored
  //in the URL, so read off of the URL
  var queryParams = parseUrl();

  //instantiate a desmos graph
  var graphPaper = $('.graph-paper')[0];
  var desmosGraph = Desmos.Calculator(graphPaper, {keypad: false, border: false});
  desmosGraph.setState(JSON.parse(queryParams.state));

  //write in the message
  $('.message').val(queryParams.message);
  $('.from').val(queryParams.from);
  $('body').removeClass('is-loading');
})