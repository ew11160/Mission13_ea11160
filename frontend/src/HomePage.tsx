import React from 'react';

function Home(props: any) {
  return (
    <>
      <div>
        <img
          src="./public/JoelHiltonHeadshot.jpg"
          alt="JoelHiltonHeadshot"
        ></img>
      </div>
      <div className="col align-self-center text-start">
        <h1>{props.saying}</h1>
        <h4>
          Joel loves to make podcasts and watch movies, check out his latest
          interests on this site!
        </h4>
      </div>
    </>
  );
}

export default Home;
