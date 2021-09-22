import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      color is {color}
      <button onClick={onClick}>click me</button>
    </div>
  );
};

//this approach allows us to receive children prop without defining inside our interface
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      color is {color}
      <button onClick={onClick}>click me</button>
    </div>
  );
};
