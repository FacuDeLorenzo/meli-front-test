import MuiCard from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import { Product } from "types";
import { Link } from "react-router-dom";

interface IProductListItem {
  product: Product;
}

const ProductListItem = ({ product }: IProductListItem) => {
  return (
    <Card>
      <Link to={`/items/${product.id}`}>
        <PicBox>
          <img src="test.jpg" />
        </PicBox>
        <Description>
          <Typography>$999.999</Typography>
          <Typography>
            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!
          </Typography>
        </Description>
      </Link>
    </Card>
  );
};

const Card = styled(MuiCard)({
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
});
const Description = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});
const PicBox = styled("div")({
  maxWidth: 90,
  maxHeight: 90,
});
export default ProductListItem;
