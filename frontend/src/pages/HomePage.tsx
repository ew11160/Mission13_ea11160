import React from 'react';

function Home(props: any) {
  return (
    <>
      <div className="text-center">
        <h1>{props.saying}</h1>
        <h4>
          Joel loves to make podcasts and watch movies, check out his latest
          interests on this site!
        </h4>
      </div>
      <div className="text-center">
        <img src="./JoelHiltonHeadshot.jpg" alt="JoelHiltonHeadshot"></img>
      </div>
    </>
  );
}

export default Home;

// className="col align-items-center text-start"
