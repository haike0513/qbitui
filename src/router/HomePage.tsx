import React, { lazy, Suspense } from 'react';
export const Home = lazy(() => import(/* webpackChunkName: "home" */'@qbitui/pages/Home'));