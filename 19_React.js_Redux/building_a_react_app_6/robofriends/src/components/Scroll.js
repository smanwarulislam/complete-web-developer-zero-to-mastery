import React from "react";

const Scroll = (props) => {
  // console.log(props);
  // return props.children;
  // return <h1>hi</h1>;
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
      {props.children}
    </div>
  );
};

export default Scroll;

/**
 * Note:
 * state
 * props
 * children
 * 
 * const Scroll = (props) => {};
 * - In here, every "props" object has children
 * 
 * console.log(props);
 * -> {children: {…}}
 *   -> children: {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}
 *     -> type: ({ robots }) => {…}
 *          length: 1
 *          name: "CardList"
 *          arguments: (...)
 *          caller: (...)
 *          [[FunctionLocation]]: CardList.js:5
 *       -> [[Prototype]]: ƒ ()
 *   -> [[Prototype]]: Object
 */