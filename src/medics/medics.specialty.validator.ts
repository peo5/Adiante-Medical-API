import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { MedicSpecialty } from './medics.specialty.enum';

@ValidatorConstraint({ async: true })
export class IsMedicSpecialtyArrayConstraint implements ValidatorConstraintInterface {

  validate(array: Array<MedicSpecialty>, args: ValidationArguments) {
		console.log(array);
		const specialties = Object.values(MedicSpecialty);	
		for(let item of array)
			if(!specialties.includes(item))
				return false;
		return true
  }

	defaultMessage(args: ValidationArguments) {
		console.log('args', args)
    return `${args.property} must contain only valid medical specialties`;
  }

}

export function IsMedicSpecialtyArray(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsMedicSpecialtyArrayConstraint,
    });
  };
}
