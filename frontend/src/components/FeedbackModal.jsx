import { Box, Button, Popover, TextField } from "@mui/material";

const FeedbackModal = ({
  isPopoverOpen,
  handlePopoverClose,
  anchorEl,
  canvasClick,
  handleModalSave,
  modalContent,
  setModalContent,
}) => {
  return (
    <Popover
      open={isPopoverOpen}
      onClose={handlePopoverClose}
      anchorEl={anchorEl}
      anchorReference={canvasClick ? "anchorPosition" : "anchorEl"}
      anchorPosition={
        canvasClick
          ? { top: canvasClick.clientY, left: canvasClick.clientX }
          : undefined
      }
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Box sx={{ p: 4, maxWidth: 300, bgcolor: "white" }}>
        <form onSubmit={handleModalSave}>
          <TextField
            label="Feedback"
            multiline
            fullWidth
            minRows={3}
            value={modalContent}
            onChange={(e) => setModalContent(e.target.value)}
            autoFocus
          />
          <Box mt={2} display="flex" gap={1} justifyContent="flex-end">
            <Button onClick={handlePopoverClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Popover>
  );
};

export default FeedbackModal;
