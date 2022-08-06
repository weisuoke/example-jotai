import React from 'react';
import { Provider, atom, useAtom } from 'jotai';

const textAtom = atom('hello');
const textLenAtom = atom((get) => get(textAtom).length);
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

const Input = () => {
  const [text, setText] = useAtom(textAtom);
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

const CharCount = () => {
  const [len] = useAtom(textLenAtom);
  return <div>Len: {len}</div>;
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

// NOTE: 这里 Provider 使用与否都不影响兄弟组件的改变
const Example2 = () => (
  <Provider>
    <Input />
    <CharCount />
    <Uppercase />
  </Provider>
);

export default Example2;
