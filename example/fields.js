import {CustomInputField} from './app.js';

module.exports = {
  'avatar': {
    type: "image",
    label: "Select an avatar",
    fieldClassname: "avatar",
    prompt: "Pick image",
    reprompt: "Pick different image",
    helpText: "Looks best at 300px × 300px"
  },
  'full_name': {
    type: "text",
    label: "Participant name",
    placeholder: "Please use a full name...",
    validator: {
      error: "You must provide a full name."
    },
    multiplicity: 2,
    addLabel: "add another participant",
    removeLabel: "remove participant"
  },
  occupation: {
    type: "text",
    label: "Participant occupations",
    placeholder: "Student or professional at ...",
    validator: {
      error: "Please let us know what your occupation is."
    }
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
    optional: true
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

          let vlen = value.trim().split(/\s+/).filter(v => v).length;
          let err = vlen > 100;
          if (err) {
            return new Error(`${vlen} words found where only 100 are accepted.`);
          }

          return undefined;
        },
        error: "Your notes must be 100 words at most."
      }
    ],
    wordLimit: 100
  },
  'custom field': {
    type: "text",
    label: "A text field for 51 characters max, but secretly accepting more",
    charLimit: 51
  }
};
