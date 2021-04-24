
import {getUser} from '../serverFunctions';

test('check user generator', () => {
    const user = getUser();
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('address');
    expect(user).toHaveProperty('phone');

    const address = user.address;
    expect(address).toHaveProperty('city');
    expect(address).toHaveProperty('street');
    expect(address).toHaveProperty('country');

})