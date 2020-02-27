import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { getRepository } from 'typeorm';
import { v1 as uuid } from 'uuid';
import FetchApp from '../src/app';
import { User } from '../src/models';
import UserService from '../src/services/user.service';
import { NotFoundError } from '../src/errors';

chai.use(chaiAsPromised);

describe('User Tests', () => {
  /**
     * Since the service layer is abstracted from anything
     * HTTP related, we can avoid using an Express object
     */
  describe('Service Tests', () => {
    const users = [];

    before(async () => {
      await new Promise((res, rej) => {
        // still fetch app though, so TypeORM can initialize
        FetchApp.then(() => { res(); }).catch((err) => rej(err));
      });

      users.push(await getRepository(User).save(User.createUser('John Doe', 30)));
      users.push(await getRepository(User).save(User.createUser('Jane Doe', 30)));
    });

    after(async () => {
      await getRepository(User).remove(users);
    });

    it('should return all users', async () => {
      const expected = await getRepository(User).find();
      const actual = await UserService.fetchUsers();
      expect(actual).to.deep.eq(expected);
    });

    it('should return a user', async () => {
      const expected = await getRepository(User).findOne();
      const actual = await UserService.fetchUser(expected.id);
      expect(actual).to.deep.eq(expected);
    });

    it('should throw a not found error', () => {
      expect(UserService.fetchUser(uuid())).to.eventually.be.rejectedWith(NotFoundError);
    });
  });
});
