const Redis = require('ioredis');
const redis = new Redis();
async function test() {
  try {
    await redis.incrbyfloat('test-key', NaN);
    console.log('Success!');
  } catch (e) {
    console.log('Error:', e.message);
  }
  process.exit(0);
}
test();
