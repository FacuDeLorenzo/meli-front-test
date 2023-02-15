import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Searcher from "components/styled/Searcher";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <>
      <Searcher />
      <WhitePaper>
        <LeftColumn>
          <PicBox sx={{ height: 500 }}>
            <img src="test.jpg" />
          </PicBox>
          <Description>
            <Typography variant="h3">Descripcion del producto</Typography>
            <Typography variant="h4">Descripcion</Typography>
          </Description>
        </LeftColumn>
        <RightColumn>
            <Typography variant ="h4" sx={{marginBottom:"1rem"}}>Titulo</Typography>
            <Typography variant ="h3" sx={{marginBottom:"2rem"}}>$999.999<Sup>99</Sup></Typography>
            <Button variant="contained">Comprar</Button>
        </RightColumn>
      </WhitePaper>
      <div>Product {id}</div>
    </>
  );
};

const Description = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});
const PicBox = styled("div")({
  maxWidth: 400,
});
const LeftColumn = styled("div")({
  flex: 7,
});

const RightColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flex: 1,
});

const WhitePaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
});

const Sup = styled('sup')({
  fontSize: "24px"
})
export default Product;
