Survey.StylesManager.applyTheme("defaultV2");

var repairIFixit = `
  <div>
    <h2>A fixer upper!</h2>
    <p>Here is some help to get you started on fixing your own device!</p>
    <ul>
        <li>
            <a href='https://www.ifixit.com'>iFixit</a>
        </li>
    </ul>
    </div>
`;

var repairGoogleMap = `
  <div>
    <h2>Get it fixed locally!</h2>
    <p>Here's a map of the closest "Electronic Repair Stores" near you!</p>
    <iframe type="text/html" src="NewGoogleMap.html?topic=repair" width="600" height="400"></iframe>
  </div>
`;

var recycleGoogleMap = `
  <div>
    <h2>Get it recycled locally!</h2>
    <p>Here's a map of the closest "Electronics Recycling Locations" near you!</p>
    <iframe type="text/html" src="NewGoogleMap.html?topic=recycle" width="600" height="400"></iframe>
  </div>
`;

var recycleSIPickUp = `
  <div>
    <h2>Get your electronics picked up!</h2>
    <p>Here's how to get your e-waste picked up in Staten Island.</p>
    <ul>
        <li>
            <a href='https://www1.nyc.gov/assets/dsny/site/contact/e-waste-pickup-request'>Staten Island Pickup</a>
        </li>
    </ul>
  </div>
`;

var recycleDSNYDropOff = `
  <div>
    <h2>DSNY Drop off Locations</h2>
    <p>Here are some of the DSNY drop off locations.</p>
    <ul>
        <li>
            <a href='https://www1.nyc.gov/assets/dsny/site/services/electronics/electronics-drop-off-locations'>DSNY Drop Offs</a>
        </li>
    </ul>
  </div>
`;

var recyclePopUpropOff = `
  <div>
    <h2>LES EC Pop Up Events</h2>
    <p>Make a day out if it! Here is a schedule of the Pop Up events where you can take your e-waste to!</p>
    <ul>
        <li>
            <a href='https://www.lesecologycenter.org/e-waste-collection-is-back/'>LES EC Pop Up</a>
        </li>
    </ul>
  </div>
`;

var sellingSuggestions = `
  <div>
    <h2>Selling Your E-waste</h2>
    <p>If you think your e-waste is in a re-sellable state, we recommend the following marketplaces</p>
    <ul>
        <li>
            <a href='https://www.gizmogo.com/'>Gizmogo</a>
        </li>
        <li>
            <a href='https://www.backmarket.com/'>Back Market</a>
        </li>
    </ul>
  </div>
`;

var takebackSuggestions = `
  <div>
    <h2>Returning your E-waste to its Manufacturer</h2>
    <p>Some manufacturers will take your electronics back, perhaps even for some store credit!</p>
    <ul>
        <li>
            <a href='https://www.samsung.com/us/aboutsamsung/sustainability/environment/responsible-recycling/programs/'>Samsung</a>
        </li>
        <li>
            <a href='https://www.apple.com/shop/trade-in'>Sony</a>
        </li>
        <li>
            <a href='http://www.mrmrecycling.com/'>Panasonic</a>
        </li>
        <li>
            <a href='http://www.mrmrecycling.com/'>Hisense</a>
        </li>
        <li>
            <a href='http://www.mrmrecycling.com/'>Toshiba</a>
        </li>
        <li>
            <a href='http://www.mrmrecycling.com/'>Sharp</a>
        </li>
        <li>
            <a href='http://www.mrmrecycling.com/'>TCL</a>
        </li>
        <li>
            <a href='http://www.mrmrecycling.com/'>Hitachi</a>
        </li>
        <li>
            <a href='http://www.mrmrecycling.com/'>Sharp</a>
        </li>
        <li>
            <a href='https://www.apple.com/shop/trade-in'>Apple</a>
        </li>
    </ul>
  </div>
`;

var donationSuggestions = `
  <div>
    <h2>Donation Suggestions</h2>
    <ul>
        <li>
            <a href='https://www.goodwillnynj.org/donate-goods'>Goodwill NY/NJ</a>
        </li>
        <li>
            <a href='https://satruck.org/'>Salvation Army</a>
        </li>
    </ul>
  </div>
`;

var notsureSuggestions = `
  <div>
    <h2>Get more information</h2>
    <p>If you are not sure what to do with your e-waste, we recommend you visit DSNY</p>
    <ul>
        <li>
            <a href='https://www1.nyc.gov/assets/dsny/site/home'>DSNY</a>
        </li>
    </ul>
  </div>
`;

var json = {
  showQuestionNumbers: "off",
  elements: [
    {
      type: "text",
      name: "zipcode",
      title: "What is your zipcode?",
      isrequired: true,
      inputMask: "9999",
      placeHolder: "10024",
    },
    {
      type: "radiogroup",
      name: "intended-action",
      title: "What do you think you should do with this e-waste?",
      isrequired: true,
      choices: [
        "Repair",
        "Recycle",
        "Sell",
        "Take Back Programs",
        "Donate",
        "I am not sure",
      ],
      // colcount: 0,
    },
    {
      type: "radiogroup",
      name: "device-condition",
      title: "What condition is the device in?",
      visibleIf: "{intended-action} == 'Repair'",
      choices: ["Like New", "Used", "Barely Working", "Not Working"],
    },
    {
      type: "radiogroup",
      name: "recycle-option-statenisland",
      title:
        "Do you hope to drop off your e-waste or get your e-waste picked up?",
      visibleIf:
        "{intended-action} == 'Recycle' and ({zipcode} == '10301' or {zipcode} == '10302' or {zipcode} == '10303' or {zipcode} == '10304' or {zipcode} == '10305' or {zipcode} == '10306' or {zipcode} == '10307' or {zipcode} == '10308' or {zipcode} == '10309' or {zipcode} == '10310' or {zipcode} == '10311' or {zipcode} == '10312' or {zipcode} == '10313' or {zipcode} == '10314')",
      choices: ["Pick Up", "Drop Off"],
    },
    {
      type: "radiogroup",
      name: "recycle-option-nonstatenisland",
      title: "Please see the following options to drop off your e-waste",
      visibleIf:
        "{intended-action} == 'Recycle' and ({zipcode} != '10301' and {zipcode} != '10302' and {zipcode} != '10303' and {zipcode} != '10304' and {zipcode} != '10305' and {zipcode} != '10306' and {zipcode} != '10307' and {zipcode} != '10308' and {zipcode} != '10309' and {zipcode} != '10310' and {zipcode} != '10311' and {zipcode} != '10312' and {zipcode} != '10313' and {zipcode} != '10314')",
      choices: [
        "Check out nearby recycling centers",
        "DSNY Drop Off",
        "LES Ecology Center pop-up events",
      ],
    },
    {
      type: "radiogroup",
      name: "repair-fix-yourself",
      title: "Do you want to fix it yourself?",
      visibleIf:
        "{intended-action} == 'Repair' and {device-condition} == 'Like New'",
      choices: ["Yes", "No"],
    },
    {
      type: "radiogroup",
      name: "repair-not-working",
      title: "Are you sure you want to repair it??",
      visibleIf:
        "{intended-action} == 'Repair' and {device-condition} == 'Not Working'",
      choices: ["Yes", "No"],
    },
    {
      type: "html",
      html: sellingSuggestions,
      visibleIf: "{intended-action} == 'Sell'",
    },
    {
      type: "html",
      html: takebackSuggestions,
      visibleIf: "{intended-action} == 'Take Back Programs'",
    },
    {
      type: "html",
      html: donationSuggestions,
      visibleIf: "{intended-action} == 'Donate'",
    },
    {
      type: "html",
      html: notsureSuggestions,
      visibleIf: "{intended-action} == 'I am not sure'",
    },
    {
      type: "html",
      html: repairIFixit,
      visibleIf:
        "{intended-action} == 'Repair' and {device-condition} == 'Like New' and {repair-fix-yourself} == 'Yes'",
    },
    {
      type: "html",
      html: repairGoogleMap,
      visibleIf:
        "{intended-action} == 'Repair' and (({device-condition} == 'Like New' and {repair-fix-yourself} == 'No') or ({device-condition} == 'Used') or ({device-condition} == 'Barely Working') or ({device-condition} == 'Not Working' and {repair-not-working} == 'Yes')",
    },
    {
      type: "html",
      html: recycleSIPickUp,
      visibleIf:
        "{intended-action} == 'Recycle' and {recycle-option-statenisland} == 'Pick Up'",
    },
    {
      type: "html",
      html: recycleGoogleMap,
      visibleIf:
        "{intended-action} == 'Recycle' and ({recycle-option-statenisland} == 'Drop Off' or {recycle-option-nonstatenisland} == 'Check out nearby recycling centers')",
    },
    {
      type: "html",
      html: recycleGoogleMap,
      visibleIf:
        "{intended-action} == 'Repair' and {device-condition} == 'Not Working' and {repair-not-working} == 'No'",
    },
    {
      type: "html",
      html: recycleDSNYDropOff,
      visibleIf:
        "{intended-action} == 'Recycle' and {recycle-option-nonstatenisland} == 'DSNY Drop Off'",
    },
    {
      type: "html",
      html: recyclePopUpropOff,
      visibleIf:
        "{intended-action} == 'Recycle' and {recycle-option-nonstatenisland} == 'LES Ecology Center pop-up events'",
    },
  ],
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (sender) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});

$("#surveyElement").Survey({ model: survey });
