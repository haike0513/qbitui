import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route  } from 'react-router-dom';

const Home = lazy(() => import('@qbitui/pages/Home'));

export const RootRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>s</div>}>
        <Routes>
          <Route path='/' element={<Home/>}>
            
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default RootRouter;
