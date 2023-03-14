const imageCropStyle = (theme) => ({
  imageCropUploader: {
    marginLeft: "auto",
    marginRight: "auto",
    "& img": {
      maxWidth: "100%",
      maxHeight: "300px",
    },
    textAlign: "center",
    '& [type="file"]': {
      height: 0,
      overflow: "hidden",
      width: 0,
    }
  },
  btn: {
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: "1rem",
    outline: "none",
    padding: "5px 50px",
    position: "relative",
    transition: "all 0.3s",
    verticalAlign: "middle",
    backgroundColor: "#2a1b42",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#662D91",
      "&::before": {
        right: "75%",
      },
    },
  },
});

export default imageCropStyle;
