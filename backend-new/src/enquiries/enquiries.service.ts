import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Enquiry, EnquiryDocument } from "./schema/enquiries.schema";
import { Model } from "mongoose";
import { CreateEquiryDto } from "./dto/create-enquiries.dto";
import { sucessResponse } from "src/common/helpers/responses/success.helper";
import { CustomError, TypeExceptions } from "src/common/helpers/exceptions";
import { SOMETHING_WENT_WRNG } from "src/common/constants/response.constant";

@Injectable()
export class EnquiriesService {
  constructor(
    @InjectModel(Enquiry.name)
    private EnquiryModel: Model<EnquiryDocument>
  ) {}

  async addEquiry(body: CreateEquiryDto) {
    try {
      const enquiryObj = {
        userId: body.userId,
        properyId: body.properyId,
        message: body.message,
      };

      await this.EnquiryModel.create(enquiryObj);
      sucessResponse.CREATE_ENQUIRY.data = enquiryObj;
      return sucessResponse.CREATE_ENQUIRY;
    } catch (error) {
      console.log("error: ", error);
      if (error?.response?.error) {
        throw error;
      } else {
        throw CustomError.UnknownError(error?.message);
      }
    }
  }
}
