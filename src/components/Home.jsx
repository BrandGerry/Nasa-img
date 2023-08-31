import React, { useEffect, useState } from "react";
import axios from "axios";
import CardNasa from "./CardNasa";
import { Container, Grid, Typography, Pagination, Box, Input } from "@mui/material";
import Loading from "./Loading";

const Home = () => {
  const [imageData, setImageData] = useState([]);
  const [startDate, setStartDate] = useState(""); // Formato: YYYY-MM-DD
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6; // Número de imágenes por página

  const endDate = new Date().toISOString().split("T")[0]; // Fecha actual

  useEffect(() => {
    if (startDate) {
      fetchNasaImagesInRange();
    }
  }, [startDate]);

  useEffect(() => {
    // Resetear la página actual cuando cambia la fecha de inicio
    setCurrentPage(1);
  }, [startDate]);

  const fetchNasaImagesInRange = async () => {
    const apiKey = "8748FDsErVzaTR7yj6KyRYpsM50Wf10BnRM02Y3l";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;

    try {
      setIsLoading(true); // Iniciar carga
      const response = await axios.get(apiUrl);
      setImageData(response.data);
    } catch (error) {
      console.error("Error fetching NASA images:", error);
    }
    finally{
      setIsLoading(false);
    }
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageData.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2}>
        Images
      </Typography>
      <Input variant="solid" type="date" value={startDate} onChange={handleStartDateChange}/>
      {isLoading ? (
        <Loading /> // Mostrar componente de carga si isLoading es true
      ) : (
        <div>
          <Grid container spacing={1}>
            {currentImages.map((image, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <CardNasa img={image.url} title={image.title} explanation={image.explanation} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
            <Pagination
              count={Math.ceil(imageData.length / imagesPerPage)}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
            />
          </Box>
        </div>
      )}
    </Container>
  );
};

export default Home;
