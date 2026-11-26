import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
