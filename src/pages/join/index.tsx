import React, { FC } from 'react';

type Props = {
  className?: string;
};

const JoinPage: FC<Props> = ({ className }) => {
  return <div className={className}>Index page</div>;
};

export default JoinPage;
