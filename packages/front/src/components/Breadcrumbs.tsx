import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Category } from "types";

export interface IBreadcrumbChild {
  to: string;
  label: string;
}

interface IBreadcrumbs {
  childs: IBreadcrumbChild[];
}

const Breadcrumbs = ({ childs }: IBreadcrumbs) => {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      {childs.length === 0 && <Skeleton height={20} width={300} />}
      {childs.map((child, i) => (
        <Link
          key={`breadcrumb-${i}`}
          to={child.to}
          style={{ textDecoration: "none" }}
        >
          {child.label}
        </Link>
      ))}
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumbs = styled(MuiBreadcrumbs)({
  margin: "0.5rem 0",
  "& .MuiBreadcrumbs-ol": { display: "flex", flexDirection: "row" },
});

export default Breadcrumbs;

export const breadcrumbFromCategories = (
  categories?: Category[]
): IBreadcrumbChild[] => {
  return (
    categories?.map((x) => {
      return {
        to: `https://api.mercadolibre.com/categories/${x.id}`,
        label: x.name,
      };
    }) || []
  );
};
