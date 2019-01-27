$(function () {
  var images
  images = data
  $.ajax({
    type: 'GET',
    url: "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2&count=5",
    success: function(images) {
    $.each(images, function(i, image) {
      $images.append('<Li>name: '=IMAGE.url</Li>');
    });
  }
  });
})
