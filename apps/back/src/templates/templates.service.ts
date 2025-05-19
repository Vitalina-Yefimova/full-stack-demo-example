import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class TemplateService {
  constructor(@InjectModel('Template') private model: Model<any>) {}

  findAll() {
    return this.model.find().exec();
  }

  create(data: any) {
    return this.model.create(data);
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}