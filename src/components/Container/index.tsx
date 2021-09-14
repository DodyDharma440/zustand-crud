import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="bg-gray-700 min-h-screen">
      <div className="max-w-lg mx-auto py-4 px-2">{children}</div>
    </main>
  );
};

export default Container;
