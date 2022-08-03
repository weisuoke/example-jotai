import { atom, useAtom } from 'jotai';
import React from 'react';

// Create your atoms and derivatives
const textAtom = atom('hello');
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

// Use them anywhere in your app
const Input = () => {
  const [text, setText] = useAtom(textAtom);
  const handleChange = (e: any) => setText(e.target.value);
  return <input value={text} onChange={handleChange} />;
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

// Now you have the components
const Example1 = () => {
  return (
    <>
      <Input />
      <Uppercase />
    </>
  );
};

export default Example1;
