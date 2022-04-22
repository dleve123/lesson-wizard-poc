
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
            "I'm not sure!"
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
        "type": "html",
        "html": donationSuggestions,
        "visibleIf": "{intended-action} == 'Donate'"
    },
    {
        "type": "html",
        "html": sellingSuggestions,
        "visibleIf": "{intended-action} == 'Sell'"
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
