import React from "react";

const Jumbo = ({ logo, brand, slogan, tagline }) => (
  <div class="row">
    <div class="col-lg-12">
      <div id="branding" class="">
        <img src={logo} alt="DocuTest" />
        <h1>
          {brand}
          <br />
          <small>
            DocuTest helps you attest your documents on blockchain forever
          </small>
        </h1>

        {
          // <h4>{tagline}</h4>
        }

        <div id="actions" />
      </div>
    </div>
  </div>
);

export default Jumbo;
