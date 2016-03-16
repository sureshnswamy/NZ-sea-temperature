var $ = require ('jquery')

$.get({url:'http://api.open-notify.org/iss-now.json', dataType:'jsonp'})
  .done(function(data) {
    $('#position').append('ISS Latitude: ',  data.iss_position.latitude,'<br><br>', 'ISS Longitude: ', data.iss_position.longitude)
    // console.log('ISS Latitute',  data.iss_position.latitude,'\n', 'ISS Longitude', data.iss_position.longitude);
})
$.get({url:'http://api.koordinates.com/api/rasterQuery.jason/?key=keyd&layer=3316&x=134.3&y=63.5', dataType:'json'})
  .done(function(data) {
    console.log (data)
    $('#col1').append('NZ Sea Temperature: ',data.rasterQuery)

})



console.log("welcome to nzseatemp")
