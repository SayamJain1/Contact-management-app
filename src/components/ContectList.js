import React from 'react';
import ContectCard from './ContectCard';

function ContectList({ contact, handler }) {

    const deleteContactHandler = (id) => {
      handler(id);
    };
  return (
      <div className='ui celled list'>
          Contact list
      <ContectCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}  />
    </div>
  )
}

export default ContectList