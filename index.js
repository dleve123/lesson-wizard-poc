
Survey
.StylesManager
.applyTheme("defaultV2");

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

var json = {
"showQuestionNumbers": "off",
"elements": [
    {
        "type": "text",
        "name": "zipcode",
        "title": "What is your zipcode?",
        "isrequired": true,
        "inputMask": "9999",
        "placeHolder": "10024"
        // "colcount": 0
    },
    {
        "type": "radiogroup",
        "name": "intended-action",
        "title": "What do you think you should do with this e-waste?",
        "isrequired": true,
        "choices": [
            "Repair",
            "Recycle",
            "Sell",
            "Donate",
            "I am not sure"
        ],
        "colcount": 0
    },
    {
        "type": "radiogroup",
        "name": "device-condition",
        "title": "What condition is the device in?",
        "visibleIf": "{intended-action} == 'Repair'",
        "choices": [
            "Like new",
            "Used",
            "Barely Working",
            "Not working",
        ],

    },
    {
        "type": "radiogroup",
        "name": "recycle-option-statenisland",
        "title": "Do you hope to drop off your e-waste or get your e-waste picked up?",
        "visibleIf": "{intended-action} == 'Recycle' and ({zipcode} == '10301' or {zipcode} == '10302' or {zipcode} == '10303' or {zipcode} == '10304' or {zipcode} == '10305' or {zipcode} == '10306' or {zipcode} == '10307' or {zipcode} == '10308' or {zipcode} == '10309' or {zipcode} == '10310' or {zipcode} == '10311' or {zipcode} == '10312' or {zipcode} == '10313' or {zipcode} == '10314')",
        "choices": [
            "Drop off",
            "Pick up",
        ],

    },
    {
        "type": "radiogroup",
        "name": "recycle-option-nonstatenisland",
        "title": "Please see the following options to drop off your e-waste",
        "visibleIf": "{intended-action} == 'Recycle' and ({zipcode} != '10301' and {zipcode} != '10302' and {zipcode} !== '10303' and {zipcode} != '10304' and {zipcode} != '10305' and {zipcode} != '10306' and {zipcode} != '10307' and {zipcode} != '10308' and {zipcode} != '10309' and {zipcode} != '10310' and {zipcode} != '10311' and {zipcode} != '10312' and {zipcode} != '10313' and {zipcode} != '10314')",
        "choices": [
            "Check out nearby recycling centers",
            "DSNY Drop off",
            "LES Ecology Center pop-up events"
        ],

    },
    {
        "type": "html",
        "html": donationSuggestions,
        "visibleIf": "{intended-action} == 'Donate'"
    },
    {
        "type": "html",
        "html": sellingSuggestions,
        "visibleIf": "{intended-action} == 'Sell'"
    },
    {
        "type": "html",
        "html": notsureSuggestions,
        "visibleIf": "{intended-action} == 'I am not sure'"
    },
    // {
    //     "type": "radiogroup",
    //     "name": "havekids",
    //     "title": "do you have a kid(s)?",
    //     "isrequired": true,
    //     "choices": [
    //         "yes", "no"
    //     ],
    //     "colcount": 0
    // }, {
    //     "type": "dropdown",
    //     "name": "kids",
    //     "title": "How many kids do you have",
    //     "visibleIf": "{haveKids}='Yes'",
    //     "isRequired": true,
    //     "choices": [1, 2, 3, 4, 5]
    // }, {
    //     "type": "dropdown",
    //     "name": "kid1Age",
    //     "title": "The first kid age:",
    //     "visibleIf": "{haveKids}='Yes' and {kids} >= 1",
    //     "isRequired": true,
    //     "choicesMax": 18
    // }, {
    //     "type": "dropdown",
    //     "name": "kid2Age",
    //     "title": "The second kid age:",
    //     "visibleIf": "{haveKids}='Yes' and {kids} >= 2",
    //     "isRequired": true,
    //     "startWithNewLine": false,
    //     "choicesMax": 18
    // }, {
    //     "type": "dropdown",
    //     "name": "kid3Age",
    //     "title": "The third kid age:",
    //     "visibleIf": "{haveKids}='Yes' and {kids} >= 3",
    //     "isRequired": true,
    //     "startWithNewLine": false,
    //     "choicesMax": 18
    // }, {
    //     "type": "dropdown",
    //     "name": "kid4Age",
    //     "title": "The fourth kid age:",
    //     "visibleIf": "{haveKids}='Yes' and {kids} >= 4",
    //     "isRequired": true,
    //     "startWithNewLine": false,
    //     "choicesMax": 18
    // }, {
    //     "type": "dropdown",
    //     "name": "kid5Age",
    //     "title": "The fifth kid age:",
    //     "visibleIf": "{haveKids}='Yes' and {kids} >= 5",
    //     "isRequired": true,
    //     "startWithNewLine": false,
    //     "choicesMax": 18
    // }
]
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (sender) {
    document
        .querySelector('#surveyResult')
        .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});

$("#surveyElement").Survey({model: survey});
