export function cleanProps(props) {
  let cleaned = Object.assign({}, props);
  ['field','multiplicity', 'labelClass', 'onUpdate', 'checkValidation','key'].forEach(p => delete cleaned[p]);
  return cleaned;
};
