import React from "react";

function PaaS() {
  return (
    <div>
      <h4 className="headerstyle">PaaS Home</h4>
      <p>please select an action from the menu on the left</p>
      <br />
      <p>
        A few of them are live queries to PCF and may take a few minutes to
        complete. Please be patient and dont keep hitting refresh. if the page
        takes longer to load than ten minutes then the chances are the system
        being queried is busy at the moment and taking too long to respond. the
        sensible thing to do would be to try again later
      </p>
    </div>
  );
}

export default PaaS;
