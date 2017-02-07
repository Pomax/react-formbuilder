# A React Form Builder

This package provides a simple form building solution for single page as well as multi-page forms. Forms are defined in terms of field names, types, and validation rules, and the builder does everything else.

## Installation

Simply `npm` your way to victory:

```
$ npm install react-formbuilder --save
```

or if you like short codes:

```
$ npm i -S react-formbuilder
```

## Form definition data

The basic form data looks like this:

```
{
  fieldname1 : fieldDefinitionObject,
  fieldname2 : fieldDefinitionObject,
  ... : ...,
  ...
}
```

Where a field definition object takes the following form:

```
{
  type: ["text"|"textarea"|"choiceGroup"|"checkbox"|"checkboxGroup"|ReactComponentClass],
  label: String data,
  placeholder: String data (optional)
  metered: boolean (optional),
  optional: boolean (optional),
  colCount: number of columns to span, if choiceGroup or checkboxGroup type (optional),
  controller: controller object (optional) - see below,
  validator: Single instance of, or array of, validator object(s) - see below
}
```

Each field is built off of the supplied information, with additional functionality based on supplying optional definition properties.

Note that the `type` property can take a React component as value, in which case an instance of that component will be created. In this case, it is assumed the component has an "onChange" property, in line with React's way of handling change events for HTML form elements.

Validator objects look like this:

```
{
  error: String data to show when field does not validate,
  validate: function(value) {
    return true if 'value' passes validation, else false
  } (optional)
}
```

If a validator object has no custom validate(value) function, a default validator is used that tests whether (value) contains data or not, passing validation if it represents some kind of defined content.

To chain validators, simply use an array of validator objects and the field will not be considered valid unless each validator (including the implied default if only an error is supplied) passes.

Controller objects look like this:

```
{
  name: String matching the fieldname of the controlling field,
  value: value that the field with [controller.name] needs to match to reveal this field
}
```

Controllers are used for things like showing an input textfield when someone selects an "Other" value in a dropdown list, radio group, or checkbox group.

## Components

### `Form`

The `Form` component defines a form based on a form data object using the format explained above.

#### properties

- `fields`: form definition data (see above). This property is required.

#### Event handling
 
- `onProgress`: optional `function(ratio:number)` function that gets called every time the form is updated, reporting to its owner the fraction of metered components that pass validation as ratio of the total number of metered components. To convert this to percentages, simply compute `ratio * 100`.
- `onUpdate`: optional `function onUpdate(event, field, value)` where event is the change event for a form field element, `field` is the field object from the form definition, and `value` is the updated value for that field.


### `MultiPageForm`

...

### `MultiSectionedForm`

...
