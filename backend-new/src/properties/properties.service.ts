import { Injectable, NotFoundException } from "@nestjs/common";
import { Property, PropertyDocument } from "./schema/properties.schema";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { CreatePropertyDto } from "./dto/create-properties.dto";
import {
  PROPERTY_NOT_FOUND,
  SOMETHING_WENT_WRNG,
} from "src/common/constants/response.constant";
import { CustomError, TypeExceptions } from "src/common/helpers/exceptions";
import { sucessResponse } from "src/common/helpers/responses/success.helper";

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name)
    private PropertyModel: Model<PropertyDocument>
  ) {}

  async findAllProperty() {
    return this.PropertyModel.find().exec();
  }

  async findOneProperty(id: string) {
    return this.PropertyModel.findById(id).exec();
  }

  //Create Property
  async createProperty(body: CreatePropertyDto) {
    try {
      const propertiesObj = {
        title: body.title,
        description: body.description,
        address: body.address,
        city: body.city,
        state: body.state,
        pincode: body.pincode,
        propertytype: body.propertytype,
        price: body.price,
        image: body.image,
      };
      const createdJob = await this.PropertyModel.create(propertiesObj);
      if (createdJob) {
        sucessResponse.CREATE_PPROPERTIES.data = propertiesObj;
        return sucessResponse.CREATE_PPROPERTIES;
      } else {
        throw CustomError.UnknownError(SOMETHING_WENT_WRNG);
      }
    } catch (error) {
      throw error.response ? error : TypeExceptions.SomethingWentWrong();
    }
  }

  async updateProperty(id: string, body: CreatePropertyDto) {
    try {
      const existingProperty = await this.PropertyModel.findByIdAndUpdate(
        id,
        body,
        { new: true }
      ).exec();
      if (!existingProperty) {
        throw CustomError.UnknownError(PROPERTY_NOT_FOUND);
      }
      sucessResponse.PROPERTY_UPDATE.data = existingProperty;
      return sucessResponse.PROPERTY_UPDATE;
    } catch (error) {
      throw error.response ? error : TypeExceptions.SomethingWentWrong();
    }
  }

  async deleteProperty(id: string) {
    try {
      const propertyData = await this.PropertyModel.findByIdAndDelete(
        id
      ).exec();
      if (!propertyData) {
        throw CustomError.UnknownError(PROPERTY_NOT_FOUND);
      }
      // sucessResponse.PROPERTY_DELETE.data = propertyData;
      return sucessResponse.PROPERTY_DELETE;
    } catch (error) {
      throw error.response ? error : TypeExceptions.SomethingWentWrong();
    }
  }

  async getAllPropertyByAgent() {}
}
