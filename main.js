$(function () {
  $.ajax({
    type: 'GET',
    url: "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2&count=5",
    success: function(response) {
      console.log(response.data._embedded.media)
      let mediaJSON = response.data._embedded.media;
      console.log(mediaJSON)
      $.each(mediaJSON, function(i, image) {
        console.log(mediaJSON[i].images.normal);
        let imgURL = mediaJSON[i].images.normal;
        console.log(imgURL);
        $("#gallery-img-" + i).attr("src", imgURL);
      }
    )
    }
  });
});
