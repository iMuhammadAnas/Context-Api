import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import { SiteContext } from "../context/SiteContext";

const AddNewSite = () => {
  const { siteList, setSiteList } = useContext(SiteContext);
  const [newSite, setNewSite] = useState({
    title: "",
    da: 0,
    url: "",
    contact: "",
  });

  const handleNewSite = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSite({ ...newSite, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSiteList([{ ...newSite, id: Math.random() }, ...siteList]);
    console.log("new site", newSite);
    console.log('sitelsit', siteList)
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Add / Edit Entry
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Title
          </Typography>
          <TextField
            fullWidth
            name="title"
            placeholder="Enter title"
            onChange={handleNewSite}
            value={newSite.title}
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Domain Authority (DA)
          </Typography>
          <TextField
            fullWidth
            name="da"
            type="number"
            placeholder="Enter DA"
            onChange={handleNewSite}
            value={newSite.da}
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            URL
          </Typography>
          <TextField
            fullWidth
            name="url"
            placeholder="Enter website URL"
            onChange={handleNewSite}
            value={newSite.url}
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Contact Details
          </Typography>
          <TextField
            fullWidth
            name="contact"
            multiline
            rows={3}
            placeholder="Enter contact details"
            onChange={handleNewSite}
            value={newSite.contact}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddNewSite;
