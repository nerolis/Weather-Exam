import {SWITCH_LANGUAGE} from './types';
export function switchLanguage(language) {
  console.log('123')
 return {
    type: SWITCH_LANGUAGE,
    language
  }
}