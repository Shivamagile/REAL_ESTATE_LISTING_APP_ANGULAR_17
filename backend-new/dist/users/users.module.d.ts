import { OnModuleInit } from '@nestjs/common';
import { UsersService } from './users.service';
export declare class UsersModule implements OnModuleInit {
    private readonly userService;
    constructor(userService: UsersService);
    onModuleInit(): Promise<void>;
}
