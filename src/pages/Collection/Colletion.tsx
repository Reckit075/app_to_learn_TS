import React, { FC } from 'react';
import ItemsContainer from 'components/ItemsContainer';
import { Redirect } from 'react-router-dom';
// logika do pobrania kolekcji

export const Collection: FC = () => {
 const token = !!localStorage.getItem('token');
 return token ? <ItemsContainer collectionTitle="siema" /> : <Redirect to="/login" />;
};
