import React from 'react'

const Study = () => {

    const name = '메시';
    const style = {
        fontSize: '32px',
        backgroundColor: 'red'
    };
  return (
    <>
    <div>{name === '메시' ? <h2>메시!</h2> : <h2>호날두!</h2>}</div>
    <div style={style}>인라인 css</div>
    <input value='Hello World'></input>
    </>
  )
}

export default Study