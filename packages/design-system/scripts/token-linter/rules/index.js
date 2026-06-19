import { structuralRules } from './structural.js';
import { namingRules } from './naming.js';
import { referenceRules } from './references.js';
import { valueRules } from './values.js';
import { formattingRules } from './formatting.js';

/** Export an array of all rule groups for easy consumption by the lint runner. */
export const allRuleGroups = [
  structuralRules,
  namingRules,
  referenceRules,
  valueRules,
  formattingRules,
];
