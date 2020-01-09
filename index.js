var mongoose = require('mongoose');
mongoose
  .connect('mongodb://bleble/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 1000
  })
  .then(() => console.log('connected!'))
  .catch(error => console.error(error));
