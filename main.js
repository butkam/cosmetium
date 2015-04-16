Parse.initialize("vsqeYKxDyEoRReTnfrzRy8ix9SWcvpiiwlNLxEc1", "DtolEKfbrDkvzdKSn80xm7zX9HS9yHYhGF30YhML");

var Mailgun = require('mailgun');
Mailgun.initialize('kozmetium.co', 'key-f6b34411303a1be37cbfa45ec26b6663');

function subscribe() {
	var email = document.getElementById("email").value;
	
	var Subscribers = Parse.Object.extend("Subscribers");
	var subscribers = new Subscribers();
	 
	subscribers.save({
	  email: email
	}, {
	  success: function(subscribers) {
	    // The object was saved successfully.
	  },
	  error: function(subscribers, error) {
	    // The save failed.
	    // error is a Parse.Error with an error code and message.
	  }
	});
}