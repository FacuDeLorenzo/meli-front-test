import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MeliIcon from "assets/meliIcon.png";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

const Searcher = () => {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    let searchParam = searchParams.get("search");
    setSearch(searchParam ?? "");
  }, [searchParams]);

  const onSearch = () => {
    if (search && search.trim())
      navigate({
        pathname: "/items",
        search: createSearchParams({
          search: `${search.trim()}`,
        }).toString(),
      });
  };

  return (
    <SearchBar
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <Box sx={{ display: "flex", gap: 3, flex: 1, justifyContent: "center" }}>
        <img src={MeliIcon} alt="meliIcon" height={"32px"} />
        <SearchBox>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nunca dejes de buscar :)"
            inputProps={{ "aria-label": "search products" }}
          />
          <SearchButton
            type="button"
            aria-label="search"
            value="Submit"
            onClick={onSearch}
          >
            <SearchIcon height={"2rem"} />
          </SearchButton>
        </SearchBox>
      </Box>
    </SearchBar>
  );
};

const SearchBar = styled("div")({
  width: "100%",
  backgroundColor: "#FFF159",
  display: "flex",
  alignItems: "center",
  height: "2.5rem",
});

const SearchBox = styled("form")({
  display: "flex",
  flexGrow: 1,
  maxWidth: "80vw",
});

const SearchInput = styled(InputBase)({
  "& .MuiInputBase-input": {
    padding: "5px 8px",
  },
  flex: 1,
  minWidth: "200px",
  backgroundColor: "white",
});

const SearchButton = styled(IconButton)({
  height: "2rem",
  width: "2rem",
  borderRadius: 0,
  backgroundColor: "#EEEFF1",
});

export default Searcher;
