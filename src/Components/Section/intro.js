function Intro({displaytime}) {

    /*TITLE VALUES*/
      const location = "Fred Beans Automotive"
      const description = "Job Application Tracker"
      
        return (
          <div>
            <div className="main">
              <div className="page-header">
                <h1 className="date">{displaytime}</h1>
                <h2 className="store-name">{location}</h2>
                <h3 className="page-description">{description}
                </h3>
              </div>
            </div>
      
          </div>
        );
      }
      
      export default Intro;
      