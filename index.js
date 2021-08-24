let myhttp = require("http");

let myserver = myhttp.createServer( 

  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url === "/hola" ) {
      mytext = "Welcome to the ThunderDome!";
    } else {
      mytext = "This is not the thunderdome.";
    }

    mytext = mytext + " I am new to JavaScript.";

    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext + "\n" );
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server is running");
