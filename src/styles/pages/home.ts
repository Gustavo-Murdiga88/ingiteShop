import { styled } from "..";

export const ContainerProduct = styled("main", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
});

export const Product = styled("a", {
  padding: "5.5rem",
  borderRadius: 8,
  position: "relative",

  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  cursor: "pointer",
  overflow: "hidden",

  "&:hover": {
    "& footer":{
    transform: "translateY(0)",
    opacity: 0.9,
    }
  },

  '& img':{
    objectFit: 'cover',
    width: '100%',
  },

  "& footer": {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",

    backgroundColor: "$gray800",

    padding: "2rem",
    borderRadius: 8,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    transform: "translateY(200px)",
    opacity: 0,
    transition: "all 0.6s ease-in-out",
  },

  "& footer span": {
    fontSize: "$lg",
    fontWeight: "bold",
    color: "$white",
    letterSpacing: "0.5px",
  },

  "& footer span + span": {
    fontSize: "$xl",
    color: "$green500",
  },
});
