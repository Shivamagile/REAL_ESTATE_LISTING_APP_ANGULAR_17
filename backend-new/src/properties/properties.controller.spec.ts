import { Test, TestingModule } from "@nestjs/testing";
import { PropertiesController } from "./PropertiesController";

describe("PropertiesController", () => {
  let controller: PropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
    }).compile();

    controller = module.get<PropertiesController>(PropertiesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
