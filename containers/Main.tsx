import React from 'react';

type MainContainerProps = {
  children?: React.ReactNode;
};
function Main(props: MainContainerProps) {
  const { children } = props;
  return <main className="main-container">{children}</main>;
}

export default Main;
