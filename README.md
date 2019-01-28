# Olapic-Test

I have added comments into the files themselves to highlight my reasoning and rationale behind why I chose to build it the way I did. I will say that some of the structures I did not know off hand but was able to figure out using various videos and resources across the web, primarily to accomplish the AJAX and the CSS Grid. I have outlined the steps below that I took to complete this project. I have also included this in the README fiel in the GitHub repository as well.

Steps to Create Experience:
1.	Generate Request URL using the Olapic API developer resources and postman to test the API configuration
2.	Set up a new GitHub repository for the Olapic Test  and initiate it
3.	Commit the index.html, style.css, and main.js files to the GitHub repository using Command-Line.
4.	Open the index.html, style.css, and main.js files in Atom to begin contracting the files.
5.	Set up index.html file and link style.css, main.js, and JQuery library to the file.
6.	AJAX  the images to the webpage by making a GET request on the API using the request URL generated in Step 1 and isolate the image URLs to be attributed to the index.html file.
7.	Construct the <div> container that the images will live within and add the image obejcts in the html file assigning an Id that will be used to attribute the URL to the <img> tag using the JavaScript function.
8.	Create a CSS grid format using the CSS Grid template to display the images on the page.

What was most important was being able to identify which endpoint was best to use for the API to make sure I was able to generate the response that had the data that I could pull from using AJAX. Because we were given the API key and we were looking to retrieve media content that displayed the most recent photos, I used the “Get Media by Customer” endpoint and specified the sorting option to be recent so that it would give me the most recent photos and added a parameter that limited the count of the response to 5. Once I was able to generate the request URL, I just needed to create the repository on GitHub and set up the documents to commit to my GitHub repository using command-line and work on setting up the individual files. 
