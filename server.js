const express = require('express');
const sequelize = require('./data_base/db');
const user_register = require('./routes/user_registerRoutes');
const user_profile = require('./routes/user_profileRoutes');
const user_notRegistered = require('./routes/user_notRegisteredRoutes')
const user_library = require('./routes/user_libraryRoutes');
//const borrowing = require('./routes/borrowingsRoutes');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/bibliotech', user_register);
app.use('/bibliotech', user_profile);
app.use('/bibliotech', user_library);
//app.use('/bibliotech', borrowing);
app.use('/bibliotech', user_notRegistered);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});