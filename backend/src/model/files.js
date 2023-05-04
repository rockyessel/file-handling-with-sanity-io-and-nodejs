const Mongoose = require('mongoose')

const FileModel = new Mongoose.Schema({
  url: { type: String, unique:true, require: [true, 'This field is required'] },
  size: { type: Number, required: true },
  name: { type: String, require: [true, 'This field is required'] },
  mimeType: { type: String, require: [true, 'This field is required'] },
  extension: { type: String, require: [true, 'This field is required'] },
  cms_id: { type: String,unique:true,  require: [true, 'This field is required'] },
  createdAt: { type: String, require: [true, 'This field is required'] },
  updatedAt: { type: String, require: [true, 'This field is required'] },
});

const File = Mongoose.model('FileModel', FileModel);

module.exports = { File };
