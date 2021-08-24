let myhttp = require("http");


let myserver = myhttp.createServer( 
  
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url === "/hola" ) {
      mytext = "Good Day.";
    } else {
      mytext = "Wrong Place.";
    }

    mytext = mytext + " Brand new to JavaScript.";

    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext + "\n" );
  }

 );
