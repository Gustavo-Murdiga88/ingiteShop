import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  maxWidth: 1180,
  margin: "0 auto",
  gap: "4rem",

  alignItems: "stretch",
});
export const ImageProduct = styled("div", {
  background: "linear-gradient(to bottom, #1EA483 0%, #7465D4 100%)",
  height: 656,
  borderRadius: 8,
  padding: "1.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    objectFit: "cover",
  },
});
export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  "& :nth-child(1)": {
    color: "$gray100",
    fontSize: "$2xl",
    fontWeight: "bold",

    marginTop: "1rem",
    marginBottom: "1rem",
  },

  "& :nth-child(2)": {
    color: "$green500",
    fontSize: "$2xl",
    marginBottom: "2.5rem",
  },

  "& p": {
    color: "$gray100",
    fontSize: "$md",
    lineHeight: "1.6",
  },

  "& button": {
    marginTop: "auto",
    border: 0,
    padding: "1.5rem",
    borderRadius: 8,

    color: "$white",
    fontSize: "$md",
    fontWeight: "bold",

    backgroundColor: "$green500",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});
