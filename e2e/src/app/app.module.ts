import { basic, logger, ModuleData, rest } from '@nowts/core';

import { Module1Module } from './/module-1/module-1.module';
import { MyController } from './services/my-controller.controller';
import { User } from './services/user.controller';

export const AppModule: ModuleData = {
  controllerBindings: [
    rest.bindController('/users', User),
    basic.bindController('/basic', MyController),
  ],
  // Use name: sharedControllerDecorators? or commonControllerDecorators
  controllerDecorators: [logger('AppModule'), logger('AppModule 2')],
  imports: [{ module: Module1Module, path: '/team2' }],
  services: [User, MyController],
};
