import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';

export const AppRouter = () => (
    <Suspense fallback={(
        <VStack
            justify="center"
            align="center"
        >
            <Skeleton
                width="90%"
                height="100vh"
            />
        </VStack>
    )}
    >
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            ))}
        </Routes>
    </Suspense>

);
