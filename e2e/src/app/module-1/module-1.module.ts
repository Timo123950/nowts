import { basic, ModuleData } from '@nowts/core';

import { TotoController } from './toto.controller';

export const Module1Module: ModuleData = {
  controllerBindings: [basic.bindController('/totos', TotoController)],
  services: [TotoController],
};
