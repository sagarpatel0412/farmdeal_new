import React from "react";
import item from '../kishanyojana';
import {Alert} from 'react-bootstrap'

function KishanYojana() {
  return (
   
    <div>
      <div className="alert alert-info" role="alert">
          <marquee direction="right">Daily check for latest updates on schemes.</marquee>
      </div>
      {/* <div className="alert alert-success" role="alert">
          <marquee><a href="https://farmer.gov.in/mspstatements.aspx">Check Minimum Support Price</a></marquee>
      </div> */}

      <div className="container">
        <h1 style={{ fontWeight: "bolder", fontSize: "40px" }}>
          Kishan Yojana
        </h1>
        <div className="row">
          <div className="col-6">
          <h1>Total {item.length} schemes are available on our website</h1>
         { item.map((items) => {
      console.log("items===>",item)
      return(
        <div key={item.id}>
         
        <h1>{items.scheme}</h1>
        <p>
        {items.description}
        </p>
        <p>
          For more details check{" "}
          <a href={items.link}>{items.link}</a>
        </p>

        <iframe
          width="500"
          height="400"
          src={items.video}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
        <hr />
        </div>
      )
    })}
            {/* <h1>PM-Kisan Scheme</h1>
            <p>
              Pradhan Mantri Kisan Samman Nidhi Yojana is an initiative of the
              Government wherein 120 million small and marginal farmers of India
              with less than two hectares of landholding will get up to Rs.
              6,000 per year as minimum income support. PM-Kisan scheme has
              become operational since 1st December 2018. Under this scheme,
              cultivators will get Rs. 6000 in three installments.
            </p>
            <p>
              For more details check{" "}
              <a href="https://www.pmkisan.gov.in/">www.pmkisan.gov.in/</a>
            </p>

            <iframe
              width="500"
              height="400"
              src="https://www.youtube.com/embed/XjzMpnCyfMI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
            <hr /> */}
            {/* <h1>Pradhan Mantri Kisan Maandhan yojana </h1>
            <p>
              Prime Minister Narendra Modi launched a pension scheme for the
              small & marginal farmers of India last September. Under PM Kisan
              Maandhan scheme about 5 crore marginalised farmers will get a
              minimum pension of Rs 3000 / month on attaining the age of 60.
              Those who fall in the age group of 18 - 40 years will be eligible
              to apply for the scheme. Under this scheme, the farmers will be
              required to make a monthly contribution of Rs 55 to 200, depending
              on their age of entry, in the Pension Fund till they reach the
              retirement date, 60 years. The Government will make an equal
              contribution of the same amount in the pension fund for the
              cultivators.
            </p>
            <p>
              For more details check{" "}
              <a href="https://pmkmy.gov.in/">https://pmkmy.gov.in/</a>
            </p>

            <iframe
              width="500"
              height="400"
              src="https://www.youtube.com/embed/xkKRb-xG8dc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <hr /> */}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default KishanYojana;
