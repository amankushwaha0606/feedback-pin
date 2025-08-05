import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Pin from "./components/Pin";
import FeedbackModal from "./components/FeedbackModal";
import { sampleText } from "./utils/sampleData";
import { createPin, fetchPins, updatePin } from "./api/api";

function App() {
  const [pins, setPins] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [canvasClick, setCanvasClick] = useState(null);
  const [modalContent, setModalContent] = useState("");
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    fetchPins().then((res) => setPins(res.data));
  }, []);

  const handleCanvasClick = (e) => {
    // if you want to restrict clicks to a specific target, you can check e.target.id or similar
    // For example, if you want to allow clicks only on elements with a specific class:
    // if (e.target.className !== "feedback-canvas") or maybe a id check
    // if (e.target.id === "feedback-canvas")
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCanvasClick({ x, y, clientX: e.clientX, clientY: e.clientY });
    setModalContent("");
    setSelectedPin(null);
    setAnchorEl(null);
  };

  const handlePinClick = (pin, event) => {
    setSelectedPin(pin);
    setModalContent(pin.content);
    setAnchorEl(event.currentTarget);
    setCanvasClick(null);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSelectedPin(null);
    setCanvasClick(null);
  };

  const handleModalSave = async (e) => {
    e.preventDefault();
    try {
      if (selectedPin) {
        const res = await updatePin(selectedPin.id, modalContent);
        if (res?.data) {
          setPins((pins) =>
            pins.map((p) =>
              p.id === selectedPin.id ? { ...p, content: modalContent } : p
            )
          );
        }
      } else if (canvasClick) {
        const { x, y } = canvasClick;
        const res = await createPin({ x, y, content: modalContent });
        if (res?.data) {
          setPins((pins) => [...pins, res.data]);
        }
      }
      handlePopoverClose();
    } catch (error) {
      console.error("Failed to save feedback:", error);
    }
  };

  const isPopoverOpen = Boolean(anchorEl) || Boolean(canvasClick);

  return (
    <>
      <Box
        id="feedback-canvas"
        sx={{
          position: "relative",
          width: "100vw",
          overflowX: "hidden",
          overflowY: "auto",
          maxWidth: "100%",
          bgcolor: "#fff",
        }}
        onClick={handleCanvasClick}
      >
        {pins.map((pin) => (
          <Pin
            key={pin.id}
            x={`${pin.x}%`}
            y={`${pin.y}%`}
            onClick={(e) => {
              e.stopPropagation();
              handlePinClick(pin, e);
            }}
          />
        ))}
        <Box sx={{ color: "#000", padding: 2, whiteSpace: "pre-wrap" }}>
          {sampleText}
          {sampleText}
          {sampleText}
        </Box>
      </Box>

      {isPopoverOpen && (
        <FeedbackModal
          anchorEl={anchorEl}
          canvasClick={canvasClick}
          handleModalSave={handleModalSave}
          handlePopoverClose={handlePopoverClose}
          isPopoverOpen={isPopoverOpen}
          modalContent={modalContent}
          setModalContent={setModalContent}
        />
      )}
    </>
  );
}

export default App;
