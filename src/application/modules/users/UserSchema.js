import { schema } from 'normalizr';
import UserRecord from './UserRecord';

const definition = {};
const attributes = { idAttribute: x => x.id.value, processStrategy: x => new UserRecord(x) };

const userSchema = new schema.Entity('users', definition, attributes);

export default userSchema;
