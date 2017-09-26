import {CustomInputField} from './app.js';

module.exports = {
  'avatar': {
    type: "image",
    label: "Select an avatar",
    fieldClassname: "avatar",
    prompt: "Pick image",
    reprompt: "Pick different image",
    helpText: "Looks best at 300px × 300px",
    defaultValue: "./photo_2017-09-25_17-02-26.jpg"
  },
  'full_name': {
    type: "text",
    label: "Participant name",
    placeholder: "Please use a full name...",
    validator: {
      error: "You must provide a full name."
    },
    multiplicity: 3,
    addLabel: "add another participant",
    removeLabel: "remove participant",
    defaultValue: [ "Philip", "Gary" ]
  },
  occupation: {
    type: "text",
    label: "Participant occupations",
    placeholder: "Student or professional at ...",
    validator: {
      error: "Please let us know what your occupation is."
    },
    defaultValue: "barista"
  },
  'email opt-in': {
    type: "choiceGroup",
    label: "Would you like to receive email updates?",
    options: [ "Yes", "No" ],
    validator: {
      error: "Please specify whether you would like to receive email updates or not."
    }
  },
  'email address': {
    type: "text",
    label: "Which email should we send update notifications to?",
    placeholder: "Your email address",
    controller: {
      name: "email opt-in",
      value: "Yes"
    },
    // this field does not count towards total form completion
    metered: false,
    validator: {
      error: "If you wish to receive update notifications, please specify your email address."
    }
  },
  'email choices': {
    type: "checkbox",
    label: "I would like to pick the emails you send me",
    metered: false,
    optional: true
  },
  'email cats': {
    type: "checkboxGroup",
    fieldClassname: "cats",
    label: "Which emails would you like to receive",
    options: [ "News", "Promotional", "All the spam we can think of" ],
    controller: {
      name: "email choices",
      value: true
    },
    metered: false,
    optional: true,
    colCount: 1
  },
  notes: {
    type: "textarea",
    label: "Specify additional notes",
    placeholder: "Additional notes",
    validator: [
      {
        error: "You must specify additional notes. For demonstration purposes."
      },
      {
        validate: function(value) {
          if (!value) {
            return undefined;
          }

          let err = value.trim().split(' ').length < 45;
          if (err) return new Error("value does not split into 45 words or more!");

          return undefined;
        },
        error: "Your notes must be at least 45 words."
      }
    ]
  },
  CustomField: {
    label: "Custom 51 char field",
    type: CustomInputField
  }
};
