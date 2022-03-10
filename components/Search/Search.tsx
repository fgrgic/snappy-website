import React from 'react';
import { Input } from '../../ui/primitives';

interface SearchProps {
  query: string;
  onChange: (newQuery: string) => void;
}

const Search = ({ query, onChange }: SearchProps) => {
  return (
    <Input
      clearButtonMode='always'
      autoFocus
      placeholder=''
      selectTextOnFocus
      value={query}
      onChangeText={onChange}
    />
  );
};

export default Search;
