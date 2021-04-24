import { IUser} from './types';
import casual from 'casual';

export const getUser = ():IUser => ({
    name: casual.name,
    gender: ():string => { return ['Ms.', 'Mrs.', 'Miss'].includes(casual.name_prefix) ? 'F':'M' },
    email: casual.email,
    address: {
      street: casual.street,
      city: casual.city,
      country: casual.country
    },
    phone: casual.phone
  });

  export const array_of = function(times: number, generator: () => IUser): IUser[] {
	var result = [];

	for (var i = 0; i < times; ++i) {
		result.push(generator());
	}

	return result;
};