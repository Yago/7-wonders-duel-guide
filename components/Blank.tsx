import React from 'react';

export type Props = {
  name: string;
};

const Blank = ({ name }: Props): JSX.Element => {
  const greeting = 'Hello';

  return (
    <div className="bg-amber-200">
      {greeting} {name}
    </div>
  );
};

Blank.defaultProps = {};

export default Blank;
