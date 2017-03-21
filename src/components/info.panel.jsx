import React from 'react';


const InfoPanel = (props) => {
  const style = {
    width: '40%',
    display: 'inline-block',
    verticalAlign: 'top',
    padding: '32px',
    fontFamily: "'Roboto Mono', Menlo, monospace",
    lineHeight: 1.5
  };
  return (
    <section className='info-panel'>
      <TextBlock text={props.about} style={style} />
      <TextBlock text={props.location} style={style} />
    </section>
  );
};


export default InfoPanel;


const TextBlock = (props) => {
  return (
    <div style={props.style}>
      <p className="text">{props.text}</p>
    </div>
  );
};