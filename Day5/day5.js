// *5. Day5 [Form Handling, Sessions & Cookies]
//!    a)Form handling
// Form handling in the backend refers to the process by which a server receives, validates, and processes data submitted from a web form (typically via HTTP POST or GET methods).
// It includes actions such as retrieving user input, performing validation and sanitization, and optionally storing the data in a database.

//!    b)What is Session & Cookies theoretical
// 🍪 Cookies:
// Cookies are small pieces of data stored on the user's browser by the website. They are used to remember information between page loads or visits.
//* Stored on the client-side (browser).

// 💾 Session:
// A session is a way to store information on the server-side for a specific user during a visit (session lifecycle).
//* Data is stored on the server, not in the browser.
//                  cookie                                  session
// Security	    Less secure	                            More secure
// Lifetime	    Can persist after browser closes	    Ends when user logs out or times out

//!    c)express.json & express.urlencoded
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
