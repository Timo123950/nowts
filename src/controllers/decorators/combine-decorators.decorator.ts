import { Decorator } from "../interfaces";

export function combineDecorators(decorators: Decorator[]): Decorator {
  return function combineDecorators(target: any, methodName?: string): void {
    decorators.reverse().forEach((decorator) => decorator(target, methodName));
  };
}
