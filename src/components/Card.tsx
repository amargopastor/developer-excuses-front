import React, { useState } from 'react';

const styleObject = (isActive: boolean) => ({
  border: `1px solid ${isActive ? 'green' : 'red'}`,
  padding: 10,
  marginTop: 10,
  marginLeft: '5px',
  marginRight: 5,
  width: '300px',
  display: 'inline-block',
  textAlign: 'center' as 'center',
});

const Card = (props: { ex: string; }) => {
  const { ex } = props;
  const image = 'https://preview.redd.it/0q9k35rs52461.jpg?width=1920&format=pjpg&auto=webp&s=28a96947814b6207c596c34b4e623bc6c9683692';

  const [isActive, setIsActive] = useState(false);

  const excuseHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <div style={styleObject(isActive)}>
      <img alt="demo" src={image} width="300" />
      <p>{ex}</p>
      <button type="button" onClick={excuseHandler}>Select</button>
      <p>
        status:
        {' '}
        {isActive ? 'true' : 'false'}
      </p>
      {isActive && <p>Excuse already used</p>}
      {!isActive && <p>excuse available</p>}
    </div>
  );
};

export default Card;
