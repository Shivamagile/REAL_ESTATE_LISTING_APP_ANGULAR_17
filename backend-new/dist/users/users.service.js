"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const logger_service_1 = require("../common/logger/logger.service");
const user_schema_1 = require("./schemas/user.schema");
const exceptions_1 = require("../common/helpers/exceptions");
const success_helper_1 = require("../common/helpers/responses/success.helper");
let UsersService = UsersService_1 = class UsersService {
    constructor(UsersModel, myLogger, configService) {
        this.UsersModel = UsersModel;
        this.myLogger = myLogger;
        this.configService = configService;
        this.myLogger.setContext(UsersService_1.name);
    }
    async create(createUserDto) {
        var _a;
        try {
            if (await this.getUserByEmail(createUserDto.email)) {
                throw exceptions_1.TypeExceptions.UserAlreadyExists();
            }
            let passwordToHash;
            const userCount = await this.UsersModel.countDocuments();
            if (userCount === 0) {
                passwordToHash = this.configService.get("database.initialUser.password");
                console.log("Creating initial user with predefined password.");
            }
            else {
                passwordToHash = createUserDto.password;
                console.log("Creating user with provided password.");
            }
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(passwordToHash, salt);
            const params = Object.assign(Object.assign({}, createUserDto), { password: hash });
            const UserCreated = await this.UsersModel.create(params);
            success_helper_1.sucessResponse.CREATE_USER.data = UserCreated;
            return success_helper_1.sucessResponse.CREATE_USER;
        }
        catch (error) {
            if ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.error) {
                throw error;
            }
            else {
                throw exceptions_1.CustomError.UnknownError(error === null || error === void 0 ? void 0 : error.message);
            }
        }
    }
    async findAll() {
        return await this.UsersModel.find().lean();
    }
    async findOne(userId) {
        return await this.UsersModel.findOne({
            _id: userId,
        }).lean();
    }
    async createInitialUser() {
        try {
            const user = await this.getUserByEmail(this.configService.get("database.initialUser.email"));
            if (user) {
                this.myLogger.customLog("Initial user already loaded.");
            }
            else {
                let params = {
                    username: this.configService.get("database.initialUser.username"),
                    role: this.configService.get("database.initialUser.role"),
                    email: this.configService.get("database.initialUser.email"),
                    password: "",
                };
                let salt = bcrypt.genSaltSync(10);
                let hash = bcrypt.hashSync(this.configService.get("database.initialUser.password"), salt);
                params.password = hash;
                await this.UsersModel.create(params);
                this.myLogger.log("Initial user loaded successfully.");
            }
        }
        catch (error) {
            this.myLogger.error((error === null || error === void 0 ? void 0 : error.message) || error);
            throw exceptions_1.CustomError.UnknownError((error === null || error === void 0 ? void 0 : error.message) || "Something went wrong, Please try again later!");
        }
    }
    async login(params) {
        var _a;
        console.log("params: ", params);
        try {
            const user = await this.UsersModel.findOne({
                email: params.email,
            }).lean();
            console.log("user: ", user);
            if (!user) {
                throw exceptions_1.AuthExceptions.AccountNotexist();
            }
            const isPasswordValid = bcrypt.compareSync(params.password, user.password);
            if (!isPasswordValid) {
                throw exceptions_1.AuthExceptions.InvalidIdPassword();
            }
            if (!user.isActive) {
                throw exceptions_1.AuthExceptions.AccountNotActive();
            }
            const { password, __v } = user, response = __rest(user, ["password", "__v"]);
            return response;
        }
        catch (error) {
            if ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.error) {
                throw error;
            }
            else {
                throw exceptions_1.CustomError.UnknownError(error === null || error === void 0 ? void 0 : error.message);
            }
        }
    }
    async getUserByEmail(email) {
        return await this.UsersModel.findOne({
            email: email,
        }).lean();
    }
};
UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        logger_service_1.LoggerService,
        config_1.ConfigService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map