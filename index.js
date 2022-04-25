Survey.StylesManager.applyTheme("defaultV2");

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

var repairUsedSuggestions = `
  <div>
    <h2>Get it fixed locally!</h2>
    <p>Here's a map of the closest "Electronic Repair Stores" near you!</p>
    <ul>
        <li>
            <a href='https://www1.nyc.gov/assets/dsny/site/home'>Map [NEEDS EDIT]</a>
        </li>
    </ul>
    </div>
`;
var repairLikeNewSuggestions = `
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
      // "colcount": 0
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
        "I'm not sure!",
      ],
      colcount: 0,
    },
    {
      type: "radiogroup",
      name: "device-condition",
      title: "What condition is the device in?",
      visibleIf: "{intended-action} == 'Repair'",
      choices: ["Like New", "Used", "Barely Working", "Not Working"],
    },
    {
      type: "html",
      html: donationSuggestions,
      visibleIf: "{intended-action} == 'Donate'",
    },
    {
      type: "radiogroup",
      name: "recycle-option-statenisland",
      title:
        "Do you hope to drop off your e-waste or get your e-waste picked up?",
      visibleIf:
        "{intended-action} == 'Recycle' and ({zipcode} == '10301' or {zipcode} == '10302' or {zipcode} == '10303' or {zipcode} == '10304' or {zipcode} == '10305' or {zipcode} == '10306' or {zipcode} == '10307' or {zipcode} == '10308' or {zipcode} == '10309' or {zipcode} == '10310' or {zipcode} == '10311' or {zipcode} == '10312' or {zipcode} == '10313' or {zipcode} == '10314')",
      choices: ["Drop off", "Pick up"],
    },
    {
      type: "radiogroup",
      name: "recycle-option-nonstatenisland",
      title: "Please see the following options to drop off your e-waste",
      visibleIf:
        "{intended-action} == 'Recycle' and ({zipcode} != '10301' and {zipcode} != '10302' and {zipcode} != '10303' and {zipcode} != '10304' and {zipcode} != '10305' and {zipcode} != '10306' and {zipcode} != '10307' and {zipcode} != '10308' and {zipcode} != '10309' and {zipcode} != '10310' and {zipcode} != '10311' and {zipcode} != '10312' and {zipcode} != '10313' and {zipcode} != '10314')",
      choices: [
        "Check out nearby recycling centers",
        "DSNY Drop off",
        "LES Ecology Center pop-up events",
      ],
    },
    {
      type: "radiogroup",
      name: "repair-fix-yourself",
      title: "Do you want to fix it yourself?",
      visibleIf: "{device-condition} == 'Like New'",
      choices: ["Yes", "No"],
    },
    {
      type: "html",
      html: donationSuggestions,
      visibleIf: "{intended-action} == 'Donate'",
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
      html: notsureSuggestions,
      visibleIf: "{intended-action} == 'I am not sure'",
    },
    {
      type: "html",
      html: repairUsedSuggestions,
      visibleIf:
        "{device-condition} == 'Used' or {device-condition} == 'Barely Working' or {repair-fix-yourself} == 'No'",
    },
    {
      type: "html",
      html: repairLikeNewSuggestions,
      visibleIf: "{repair-fix-yourself} == 'Yes'",
    },
  ],
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (sender) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});

$("#surveyElement").Survey({ model: survey });
