import React from "react";
import AboutUsImages from "./AboutUsImages";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <h2 style={{ marginTop: "100px"}}>
        Scholarly Development Team
      </h2>
      <div className="ImageContainer">
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1014411312433995816/sih1.JPG?width=809&height=607"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "475px",
            top: "331px",
          }}
        />
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1014413224684294267/sih3.JPG?width=809&height=607"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "52px",
            top: "542px",
          }}
        />
        <AboutUsImages
          src="https://media-exp1.licdn.com/dms/image/C5622AQFgmTKDJL4d5g/feedshare-shrink_1280/0/1661409317568?e=1665014400&v=beta&t=lrT9AbHsjbbgjM9W4FIGYJ78l3gbISe72jJs_MzIyDI"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "898px",
            top: "402px",
          }}
        />
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1014411840064860160/sih2.JPG?width=809&height=607"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "475px",
            top: "612px",
          }}
          
        />
        
      </div>
      <h2>Our Story</h2>
      <div className="ourStory">
        The Team of Scholarly, having seen the
        need, have established this scholarship scheme, the purpose of which is
        to provide scholarship grants for tertiary education in National as well as International
        universities to brilliant but needy students who have completed 
        Senior Secondary School or Graduation and were officially assigned
        to, and resident in India during their period of stay in the
        school.
      </div>
      <h1>Our Developers</h1>
      <div className="details">
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1009875901464449165/unknown.png"
          styles={{
            position: "absolute",
            width: "250px",
            height: "250px",
            left: "128px",
            top: "1535px",
          }}
        />
        <div className="Allen">
          <h3>Devesh Mani Tripathi</h3>
          <p>
            Allen Quaye Allen QUAYE (OAA 1988) is a product of University of
            Ghana and Leicester University. <br /> He is a marketer by training and
            work. He sells his service and skills to Groupe Nduom. He is
            interested in staff training and development, marketing and sales.
            He has proven sales experience across banking, Telecommunication and
            FMCG. His hobbies include reading, walking and local and
            international tourism. He enjoys watching football and his favourite
            football clubs are Asante Kotoko, Arsenal, Barcelona and Bayern
            Munich.
          </p>
        </div>
        <div className="details">
          <AboutUsImages
            src="https://media.discordapp.net/attachments/891025496601661504/1009876160404013106/unknown.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "601px",
              top: "1835px",
            }}
          />
          <div className="Michael">
            <h3>Dhruval Gupta</h3>
            <p>
              Michael Jojo Acquah Jojo Acquah, is an alumnus of Achimota School
              (Akora 1987) and a product of the famous Livingstone House. He is
              a lawyer and a Notary Public and is the senior partner of a
              corporate legal advisory practice and a company secretarial firm. <br />
              He also has business interests in the hospitality sector. Jojo has
              a passion for targeted charity initiatives and efforts to provide
              structured support to the needy.
            </p>
          </div>
        </div>

        <div className="details">
          <AboutUsImages
            src="./Images/Rect79.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "128px",
              top: "2135px",
            }}
          />
          <div className="Mark">
            <h3>Mohit Kumar</h3>
            <p>
              Mark Brookman-Amissah Mark Brookman-Amissah (OAA 1987) is a
              Geodetic Engineer by training and is currently a lecturer in Land
              Surveying/Geomatics at the Accra Technical University. He is very
              passionate about the intellectual and moral development of
              students and spends a lot of time outside the classroom mentoring
              students on how to develop their communication and project
              management skills. <br /> His hobbies include watching soccer and
              documentaries on world history. He loves jazz and reggae music and
              also spends some of his leisure time playing the drums.
            </p>
          </div>
        </div>
        <div className="details">
          <AboutUsImages
            src="./Images/Rect75.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "601px",
              top: "2435px",
              background: "#E5E5E5;",
              borderRadius: "200px",
            }}
          />
          <div className="Eric">
            <h3>Harsh Sharma</h3>
            <p>Eric Adjormi Boateng Bio Currently unavailable</p>
          </div>
        </div>
        <div className="details">
          <AboutUsImages
            src="./Images/Rect82.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "128px",
              top: "2735px",
              background: "#E5E5E5;",
              borderRadius: "200px",
            }}
          />
          <div className="Duke2">
            <h3>Isha Kumari</h3>
            <p>Duke Essiam Bio Currently unavailable</p>
          </div>
          
          <div className="Duke">
            <h3>Nivesh Rawat</h3>
            <p>Duke Essiam Bio Currently unavailable</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;