import { ExtendedRequest, newExpressDecorator } from '@nowts/core';

export function retrictToAdmin() {
  return newExpressDecorator((req: ExtendedRequest, res, next) => {
    const user = req.user;
    if (!user) {
      throw new Error('You should use the @authenticate before');
    }
    if (user.roles.includes('admin')) {
      next();
    } else {
      res.sendStatus(403);
    }
  });
}
