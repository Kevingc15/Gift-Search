import React from 'react'

export const GiftCard = ({title, url}) => {
  return (
    <li className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </li>
  );
}
