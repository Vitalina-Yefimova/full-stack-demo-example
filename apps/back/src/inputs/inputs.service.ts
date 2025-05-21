import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class InputsService {
  constructor(@InjectModel('Input') private model: Model<any>) {}

  findAll(fields?: string) {
    const projection = fields // fields - это строка, которая содержит поля, которые нужно вернуть
      ? fields.split(',').reduce((acc, key) => ({ ...acc, [key]: 1 }), {}) // если fields передан, то возвращается только те поля, которые указаны в fields
      : {}; // если fields не передан, то возвращается все
    return this.model.find({}, projection).exec(); // projection - это объект, который содержит поля, которые нужно вернуть
  } 

  // e.g.: GET http://localhost:3000/inputs?fields=label,order

  insertOne(data: any) {
    return this.model.create(data);
  }

  insertMany(data: any[]) {
    return this.model.insertMany(data);
  }

  updateOne(id: string, data: any) {
    return this.model.updateOne({ _id: id }, { $set: data });
  }

  updateMany(filter: any, data: any) {
    return this.model.updateMany(filter, { $set: data });
  }

  replaceOne(id: string, data: any) {
    return this.model.replaceOne({ _id: id }, data);
  }

  deleteOne(id: string) {
    return this.model.deleteOne({ _id: id });
  }

  deleteMany(filter: any) {
    return this.model.deleteMany(filter);
  }
}
