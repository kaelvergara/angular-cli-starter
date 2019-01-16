import { AbstractControl, ValidatorFn } from '@angular/forms';

export function sharedValidator() : ValidatorFn {
  return (control:  AbstractControl) => {
    return {shared: true};
  }
}
