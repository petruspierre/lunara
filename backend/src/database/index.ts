import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:odjaEAFawLJz3ZTB@cluster0.impyd.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.Promise = global.Promise

export default mongoose