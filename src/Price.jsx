import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PhotoIcon from "@mui/icons-material/Photo";
import InstagramIcon from "@mui/icons-material/Instagram";
import { PiTiktokLogo } from "react-icons/pi";
import CircleIcon from "@mui/icons-material/Circle";
import CallIcon from "@mui/icons-material/Call";

const pricingOptions = [
  {
    title: "Standard",
    price: "99€",
    features: ["30 min de shooting", "5 photos retouchées", "1 lieu au choix"],
    noFeatures: ["Mannequin inclus", "Accès aux photos brutes"],
    color: "#F15726",
  },
  {
    title: "Premium",
    price: "199€",
    features: [
      "1 heure de shooting",
      "15 photos retouchées",
      "2 lieux au choix",
    ],
    noFeatures: ["Mannequin inclus", "Accès aux photos brutes"],
    color: "#FFD700",
  },
  {
    title: "Luxe",
    price: "349€",
    features: [
      "2 heures de shooting",
      "30 photos retouchées",
      "3 lieux au choix",
      "Mannequin inclus",
      "Accès aux photos brutes",
    ],
    noFeatures: [],
    color: "#8A2BE2",
  },
];

export default function Price() {
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
        gap: 3,
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
        Tarifs des <span>shooting</span>
      </Typography>
      <Typography
        sx={{
          color: "#FFF",
          mt: -1,
          mb: 2,
          width: "70%",
          textAlign: "center",
        }}
      >
        Les tarifs sont modulables selon vos besoins. N&#39;hésitez pas à nous
        écrire pour nous faire part de vos attentes, et nous vous répondrons
        dans les plus brefs délais avec les meilleurs conseils. En cliquant sur
        le bouton &#34;Réserver&#34;, vous serez redirigé vers la page
        &#34;Contact&#34;. Pensez à préciser votre choix tarifaire dans votre
        message ou, si vous n’avez pas encore décidé, indiquez simplement vos
        besoins.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {pricingOptions.map((option) => (
          <Card
            key={option.title}
            sx={{
              width: 300,
              backgroundColor: "#222",
              color: "#FFF",
              padding: 1,
              textAlign: "left",
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: option.color,
                }}
              >
                {option.title}
              </Typography>
              <Typography
                sx={{ fontSize: "1.8rem", fontWeight: "bold", my: 1 }}
              >
                {option.price}
              </Typography>
              <Box sx={{ textAlign: "left", mt: 1 }}>
                {option.features.map((feature, index) => (
                  <Typography key={index} sx={{ fontSize: "0.9rem", my: 0.5 }}>
                    ✅ {feature}
                  </Typography>
                ))}
                {option.noFeatures.map((noFeature, index) => (
                  <Typography key={index} sx={{ fontSize: "0.9rem", my: 0.5 }}>
                    ❌ {noFeature}
                  </Typography>
                ))}
              </Box>
              <Button
                onClick={() => navigate("/contact")}
                sx={{
                  mt: 4,
                  backgroundColor: option.color,
                  color: "#FFF",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: option.color,
                  },
                }}
                variant="contained"
              >
                Réserver
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "70%",
        }}
      >
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
            onClick={() => navigate("/contact")}
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
            <CallIcon />
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
