import { IconButton } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const Pin = ({ x, y, onClick }) => {
  return (
    <IconButton
      size="small"
      sx={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -100%)",
        color: "red",
        padding: 0,
      }}
      onClick={onClick}
    >
      <PlaceIcon />
    </IconButton>
  );
};

export default Pin;
