import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
      Link
      {childs.map((child) => (
        <Link to={child.to} style={{ textDecoration: "none" }}>
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
