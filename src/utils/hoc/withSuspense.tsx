import { Loader } from "components";
import React, { Suspense } from "react";

const withSuspense = (WrappedComponent: React.FC) => {
  return (
    <Suspense fallback={<Loader />}>
      <WrappedComponent />
    </Suspense>
  );
};

export default withSuspense;
