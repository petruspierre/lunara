import mongoose from '../index';

const CodeSchema = new mongoose.Schema({
  team: [String],
  content: [{ quantity: Number, item: String }],
})

interface CodeModel extends mongoose.Document {
  team: [string];
  content: [{
    quantity: number,
    item: string,
  }];
}

const Code = mongoose.model<CodeModel>('Code', CodeSchema);

export default Code;