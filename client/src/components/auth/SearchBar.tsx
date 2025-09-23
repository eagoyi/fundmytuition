import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: none;
  border: none;
  padding: 0 1rem;
  cursor: pointer;
`;


const SearchBar: React.FC = () => {
    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder="Search Here" />
            <SearchButton type="submit">Search</SearchButton>
        </SearchWrapper>
    )
}

export default SearchBar;
