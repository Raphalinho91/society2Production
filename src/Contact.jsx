import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhotoIcon from "@mui/icons-material/Photo";
import EuroIcon from "@mui/icons-material/Euro";
import InstagramIcon from "@mui/icons-material/Instagram";
import { PiTiktokLogo } from "react-icons/pi";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          "& span": {
            color: "#F15726",
          },
        }}
      >
        Réservez votre <span>shooting</span>
      </Typography>
      <Typography
        sx={{
          color: "#FFF",
          mt: 2,
          mb: 4,
          width: "70%",
          textAlign: "center",
        }}
      >
        Ecrivez nous un message en indiquant votre nom, le nombre de personnes
        qu&#39;il faudra prendre en photo, l&#39;occasion, le thème, la date que
        vous désirez et si vous avez un lieu précis, indiquez-le sinon on
        s&#39;en chargera.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "70%",
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          sx={{
            input: { color: "#FFF" },
            label: { color: "#FFF" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#F15726",
              },
              "&:hover fieldset": {
                borderColor: "#FF5722",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#F15726",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root:hover": {
              color: "#FFF",
            },
          }}
        />
        <TextField
          label="Nom"
          variant="outlined"
          fullWidth
          sx={{
            mt: 2,
            input: { color: "#FFF" },
            label: { color: "#FFF" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#F15726",
              },
              "&:hover fieldset": {
                borderColor: "#FF5722",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#F15726",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root:hover": {
              color: "#FFF",
            },
          }}
        />
        <TextField
          label="Prénom"
          variant="outlined"
          fullWidth
          sx={{
            mt: 2,
            input: { color: "#FFF" },
            label: { color: "#FFF" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#F15726",
              },
              "&:hover fieldset": {
                borderColor: "#FF5722",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#F15726",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root:hover": {
              color: "#FFF",
            },
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{
            mt: 2,
            input: { color: "#FFF" },
            "& .MuiInputBase-root": {
              color: "#FFF",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#F15726",
              },
              "&:hover fieldset": {
                borderColor: "#FF5722",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#F15726",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#FFF",
            },
            "& .MuiInputLabel-root:hover": {
              color: "#FFF",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            mt: 2,
            display: "flex",
            width: "50%",
            backgroundColor: "#F15726",
            color: "#FFF",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
        >
          Envoyer
        </Button>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "6px",
              color: "#F15726",
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#F15726",
              },
              transition: "all 0.3s ease",
            }}
          >
            <HomeIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <IconButton
            onClick={() => navigate("/picture")}
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "6px",
              color: "#F15726",
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#F15726",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PhotoIcon />
          </IconButton>
          <IconButton
            onClick={() => navigate("/price")}
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "6px",
              color: "#F15726",
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#F15726",
              },
              transition: "all 0.3s ease",
            }}
          >
            <EuroIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
          }}
        >
          <a
            href="https://www.instagram.com/2society.production/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "6px",
                color: "#F15726",
                "&:hover": {
                  backgroundColor: "#FFF",
                  color: "#F15726",
                },
                transition: "all 0.3s ease",
              }}
            >
              <InstagramIcon />
            </IconButton>
          </a>
          <IconButton
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "6px",
              color: "#F15726",
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#F15726",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PiTiktokLogo />
          </IconButton>
        </Box>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#F15726",
              borderRadius: "50%",
              color: "#FFF",
              "&:hover": {
                backgroundColor: "#F15726",
                color: "#FFF",
              },
              transition: "all 0.3s ease",
            }}
          >
            <CircleIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
