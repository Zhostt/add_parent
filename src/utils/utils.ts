/* eslint-disable import/prefer-default-export */
/*
import { defineEmits } from 'vue';

const emit = defineEmits();

export const emitChange = (newValue:any, _oldValue:any, emitName:string) => {
  console.log('emitting ', emitName);
  emit(emitName, newValue);
};
*/

export const getYearDescription = (year:number):string => {
  if (year >= 11 && year <= 14) {
    return `${year} лет`;
  }

  const lastDigit = year % 10;
  if (lastDigit === 1) {
    return `${year} год`;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${year} года`;
  }

  return `${year} лет`;
};
