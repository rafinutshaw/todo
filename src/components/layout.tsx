import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-auto justify-center h-full items-center bg-white-600">
      <div>
        <div className="text-8xl text-maroon-200 font-extralight text-center mb-3">
          todos
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
