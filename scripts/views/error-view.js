'use strict'

var app = app || {};

(function(module){
  const errorView = {};

  errorView.initErrorView = function (err) {
    $('.container').hide()//hide all other sections
    $('error-view').show()//show error section
    $('#error-message').empty()//empty out error section, so new errors can display in future
    $('#error-message').append(template(err))
  }
  module.errorView = errorView;
})
