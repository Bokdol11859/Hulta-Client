import TextInput from "@components/atoms/TextInput";
import Card from "@components/Card";
import styled from "@emotion/styled";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import { colors } from "@constants/colors";

type Props = {};

const Temp = Array(50)
  .fill("")
  .map((arr) => ({
    image: "https://picsum.photos/200/300",
    title: "자기개발 책",
    author: "복돌복돌",
  }));

const Search = (props: Props) => {
  const [results, setResults] = useState(Temp);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchContainer>
      {/* <SearchBar placeholder="책 검색" ref={inputRef} /> */}
      <TextInput
        placeholder="책 검색"
        ref={inputRef}
        endAdornment={
          <MagnifyingGlassIcon width={30} height={30} color={colors.primary} />
        }
        inputStyle={{ fontSize: "1.1rem" }}
        wrapperStyle={{
          maxWidth: "450px",
          position: "fixed",
          backgroundColor: "white",
        }}
      />
      <SearchTitle>검색 결과</SearchTitle>
      <SearchResult>
        {results.map((result) => (
          <Card
            image={result.image}
            title={result.title}
            author={result.author}
          />
        ))}
      </SearchResult>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchTitle = styled.h1`
  padding: 1rem 0;
  width: 100%;
  text-align: center;
`;

const SearchResult = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-bottom: 2rem;
`;

export default Search;
