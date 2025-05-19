import { Schema } from "mongoose";

export const TemplateSchema = new Schema(
  {
    type: String,
    color: String,
    text: String,
    label: String,
    placeholder: String,
    required: Boolean,
  },
  {
    collection: 'templates',
  },
);
