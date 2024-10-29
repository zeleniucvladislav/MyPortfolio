import { Loader } from "components";
import { Suspense, FC } from "react";

const withSuspense = <T extends object>(WrappedComponent: FC<T>) => {
  return (props: T) => (
    <Suspense fallback={<Loader />}>
      <WrappedComponent {...props} />
    </Suspense>
  );
};

export default withSuspense;
