import Routes, { RoutesModel } from '@/constants/Routes';
import { generatePath } from 'react-router-dom';

export const url = (path: string, params = {}) => {
  let lastRoute: RoutesModel | any;
  let url: string;

  path.split('.')?.map((p) => {
    if (!lastRoute) {
      lastRoute = Routes.find((r: RoutesModel) => r.name === p);
      url = lastRoute?.path;
    } else {
      lastRoute = lastRoute.children.find((r: RoutesModel) => r.name === p);
      url += `/${lastRoute.path}`;
    }
    return null;
  });
  return generatePath(url!.replace(/\/\//gi, '/'), params);
};
