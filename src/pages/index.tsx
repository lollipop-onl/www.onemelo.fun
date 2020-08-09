import React, { FC } from 'react';

type Props = {
  className?: string;
};

const IndexPage: FC<Props> = ({ className }) => {
  return <div className={className}>Index page</div>;
};

export default IndexPage;
