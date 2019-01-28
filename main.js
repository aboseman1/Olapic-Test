$(function () {
/*Allows me to do a GET request on the API to pull in a favorable response to work from */
  $.ajax({
    type: 'GET',

/*Using the API documentation I was able to generate this request URL using the API Key which meant that the customer was already defined. SO I was able to use the Get Media by Customer media endpoint and used the sorting option field to pull the most recent images. To limit this to only 5 images, I specified a count of 6 in the parameters.*/
    url: "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2&count=5",
    success: function(response) {
      console.log(response.data._embedded.media)

/*Wanted to shorten the value so that I did not have to retype that long value everytime. After looking at the JSON response, I notice that the Image URL that we will need to pull lives under the "media" object so I wanted to give it a value so that I can call on that onject more easily. */
      let mediaJSON = response.data._embedded.media;
      console.log(mediaJSON)

/*I wanted to make sure that for each of the media object that were going to be added to the page, we were able to pull in the image URL based on the index number given for the object which in this case started at 0 and I wanted to define that function as an image. */
      $.each(mediaJSON, function(i, image) {
        console.log(mediaJSON[i].images.normal);

/*In order to retrive the urls that we needed to attribute to the Id's we have created in the index.html file, I needed to find the url which was located underneath the images object. I logged to the console to see if this format would return me the URLs which is did so I gave this a value of imgURL to reuse when we attribute the url to the id.*/
        let imgURL = mediaJSON[i].images.normal;
        console.log(imgURL);

/*Now that we have the URLs we can attribute them to the Ids we created dynamically by cashing the id dynamically and applying the imgURL as the value.*/

        $("#gallery-img-" + i).attr("src", imgURL);
      }
    )
    }
  });
});
