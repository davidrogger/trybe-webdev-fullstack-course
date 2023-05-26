// ./src/index.ts

import { ReadOnlyConnector, ReadOnlyRedisConnector, RedisConnector } from "./Connectors";

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';

const redisAuth = { host: 'redisdb', port: 6379 };

const conn1 = new RedisConnector(redisAuth);

const conn2 = new ReadOnlyRedisConnector(redisAuth);

const incrCount = (connector: RedisConnector) => {
  connector.incrementCount(token);
}

const getCount = async (connector: ReadOnlyConnector) => {
  try {
    const count = await connector.getCount(token);
    console.log(count);
  } catch (err) {
    console.error(err);
  }
}

const cleanCount = async (connector: RedisConnector) => {
  connector.clearCount(token);
  connector.closeConnection();
}

const main = async () => {
  const logCount = async () => {
    await getCount(conn2);
  };

  const doSomeIncrements = () => {
    logCount();
    incrCount(conn1)
  };

  const incrementsInterval = setInterval(doSomeIncrements, 500);

  setTimeout(() => {
    clearInterval(incrementsInterval);
    logCount();
    cleanCount(conn1);
  }, 5500);

}

main();