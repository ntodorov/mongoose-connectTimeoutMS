# mongoose-connectTimeoutMS

1 - After clonning run

npm insatll

2 - run the example with 

node index.js


~~it will show you that mongoose always waits for 30s ingnoring the passed param connectTimeoutMS set to 1 sec.~~

UPDATE: the correct property to use is serverSelectionTimeoutMS, so this is not a bug.

I'm keeping the example for reference.
