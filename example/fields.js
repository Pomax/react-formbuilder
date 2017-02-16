module.exports = {
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
            return false;
          }

          let err = value.trim().split(' ').length < 45;
          if (err) return new Error("value does not split into 45 words or more!");

          return false;
        },
        error: "Your notes must be at least 45 words."
      }
    ]
  }
};
