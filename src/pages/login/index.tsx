import React, { FC } from 'react';

type Props = {
  className?: string;
};

const LoginPage: FC<Props> = ({ className }) => {
  return <div className={className}>Index page</div>;
};

export default LoginPage;
