import React, { useState } from "react";
import { Main } from "../../../components";
import { Space } from "../../../components";
import { MyCard } from "../../../components";
import CellGrid from "../../../components/net";
import {
  Alert,
  Snackbar,
  TextField,
  Button,
  Slider,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const Home = () => {
  const [directions, setDirections] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [snack, setSnack] = useState<{
    open: boolean;
    type: "success" | "error" | "warning" | "info";
    message: string;
  }>({ open: false, type: "info", message: "" });
  const [delay, setDelay] = useState<number>(1000);

  // Adjust allowedDirections to include 'O' and 'B'
  const allowedDirections = /^[LRUDOB]*$/i;

  // Function to optimize and expand command sequence
  const optimizeCommands = (commands: string) => {
    let optimized = "";
    let expanded = "";
    let count = 1;

    for (let i = 1; i <= commands.length; i++) {
      if (commands[i] === commands[i - 1]) {
        count++;
      } else {
        optimized += (count > 1 ? count : "") + commands[i - 1];
        expanded += commands[i - 1].repeat(count);
        count = 1;
      }
    }

    return { optimized, expanded };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toUpperCase();
    if (allowedDirections.test(newValue)) {
      setInputValue(newValue);
    } else {
      setSnack({
        open: true,
        type: "error",
        message: "Вы ввели неправильное значение",
      });
    }
  };

  const startMovement = () => {
    if (!inputValue.trim()) {
      setSnack({
        open: true,
        type: "error",
        message: "Введите значение",
      });
      return;
    }

    // Optimize and expand the sequence before setting directions
    const { optimized, expanded } = optimizeCommands(inputValue);
    setDirections(expanded.split("")); // Set expanded directions for movement
    setHistory((prevHistory) => [...prevHistory, optimized]); // Add optimized command to history
  };

  const handleMovementComplete = () => {
    setInputValue(""); // Clear input
    setSnack({
      open: true,
      type: "success",
      message: "Операция успешно завершена",
    });
  };

  const handleSnackClose = () => {
    setSnack({ open: false, type: "info", message: "" });
  };

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setDelay(newValue as number);
  };

  return (
    <Main className="grid gap-5 grid-cols-12 max-[600px]:gap-3">
      <MyCard className="col-span-12 p-5 max-[600px]:p-3">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Введите маршруты (L, R, U, D, O, B)"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              helperText="Пример: RRRRDDDLLUOB"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography gutterBottom sx={{ mt: { xs: 1, sm: 0 } }}>
            Скорость управления
            </Typography>
            <Slider
              aria-label="Speed"
              defaultValue={1000}
              valueLabelDisplay="auto"
              onChange={(_event, newValue) =>
                handleSliderChange(_event, 2000 - (newValue as number))
              }
              step={100}
              min={100}
              max={2000}
              sx={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={startMovement}
              fullWidth
              sx={{ mt: { xs: 1, sm: 0 } }}
            >
              Начать движение
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
            История направлений
            </Typography>
            <Box
              sx={{
                maxHeight: 150,
                overflowY: "auto",
                backgroundColor: "#f1f1f1",
                padding: 2,
                borderRadius: 1,
              }}
            >
              {history.map((item, index) => (
                <Typography key={index} variant="body2" color="black">
                  {index + 1}: {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={8} sx={{ ml: { md: 3 } }}>
            <CellGrid
              baseRows={10}
              baseColumns={20}
              directions={directions}
              delay={delay}
              onMovementComplete={handleMovementComplete}
            />
          </Grid>
        </Grid>
      </MyCard>
      <Space className="min-h-20" />
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={snack.type}
          variant="outlined"
          sx={{ width: "100%" }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Main>
  );
};

export default Home;