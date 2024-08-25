import { DetailsPage } from 'pages/DetailsPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes{
MAIN='main',
CARD='card',
// last
NOT_FOUND='not_found',
}

export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CARD]: '/card',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CARD]: {
        path: `${RoutePath.card}/:id`,
        element: <DetailsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <MainPage />,
    },

};
