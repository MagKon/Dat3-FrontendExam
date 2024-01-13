# Explain the concept of event bubbling in JavaScript.

Events in JavaScript referrers to an action that happens on the client. Event listeners are the ears that listen to when an event happens, and executes a given function for that listener. When a child element is clicked and the parent has an onClick event, the event on the parent will trigger, as it was, technically, also clicked. This is called bubbling.

# List and keys

## What is the purpose of the key attribute in React lists?

The key attribute in React lists helps React identify which items have changed, been added, or been removed. It aids in efficient rendering by helping React reconcile the component efficiently.

## Explain how the map function is used for rendering lists in React.

In JavaScript, the map function is used to iterate over an array and perform operations on each element. In the context of React, it's often used to create new array of JSX elements.

When rendering lists in React, you can use the map function to transform each item in the array into a JSX element. Each item in the array will correspond to a DOM element on the page.

# Describe conceptually what HTTPS is and how we got it working on our deployed websites.

HTTPS stands for Hyper Text Transfer Protocol Secure. It is the secure version of HTTP, the protocol over which data is sent between your browser and the website that you are connected to. The 'S' at the end of HTTPS stands for 'Secure'. It means all communications between your browser and the website are encrypted.

As HTTPS is sequred, a certificate is required. This is made with "Let's Encrypt", which automatically creates a certificate. Automatic Certificate Management Environment (ACME) is then used by Traefik to work with LE, so it can obtain the certificates and renew them.

Copilot:

Let's Encrypt for SSL certificates: You have configured Traefik to use Let's Encrypt for automatic SSL certificate generation. Let's Encrypt is a free, automated, and open certificate authority that provides SSL certificates required for HTTPS.

ACME Protocol: The Automatic Certificate Management Environment (ACME) protocol is used by Traefik to communicate with Let's Encrypt and handle the tasks of obtaining certificates, as well as the automatic renewal of certificates.
