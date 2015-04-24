Roost Chrome Installation Files - April 16, 2015

------

3 files need to be installed at the root level of your site's server.  These files work together with the Roost system to enable the opt-in and sending process for Chrome notifications.

These files are generated based on your site's settings, and should not be modified. The purpose and content of each file is described below. 

------

roost.html:  This drives the whole process, installs the service worker and handles notification clicks.

roost_manifest.json:  This identifies your site to Google and drives some of the backend push components.

roost_worker.js:  This file receives the pushes, communicates with Roost, and shows the actual notifications.

------

Troubleshooting:

- Check out the JavaScript console for any errors.  In Chrome navigate to View -> Developer -> JavaScript Console.

- Make sure you are using the latest Chrome Browser (M42).

- Refresh your page a couple more times (the Internet is like that).

- Are you using multiple domains or odd subdomain configurations? Contact support and we’ll take a look.

- Did you install the files somewhere other than root (“/”)?  Contact support and we’ll help you with that. 


------

If you have any issues, contact support@goroost.com.
