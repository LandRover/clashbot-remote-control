export default function fbInit(Directive) {
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk'))
         return;

     // Get the first script element, which we'll use to find the parent node
     let el = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     let fb = document.createElement('script'); 
     fb.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     fb.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     el.parentNode.insertBefore(fb, el);
}