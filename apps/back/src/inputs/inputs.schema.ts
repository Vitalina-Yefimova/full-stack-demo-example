import { Schema } from "mongoose";

export const InputsSchema = new Schema({
  label: String,
  type: String,
  placeholder: String,
  required: Boolean,
  order: Number,
}, { collection: 'inputs' })