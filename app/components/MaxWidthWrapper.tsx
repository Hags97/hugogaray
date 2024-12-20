import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div className={`container  mx-auto px-4 sm:px-6   ${className}`}>{children}</div>
  );
}