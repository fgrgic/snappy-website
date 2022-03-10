import React from 'react';
import styled from 'styled-components/native';
import { View } from '../../ui/primitives';

type SearchResultsProps = {
  children: React.ReactNode;
};

const SearchResults = ({ children }: SearchResultsProps) => {
  return <Container>{children}</Container>;
};

const Container = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export default SearchResults;
