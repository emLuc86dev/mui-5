import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Card sx={{margin: "10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://www.google.com/imgres?imgurl=https%3A%2F%2Ftrucoslondres.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fplaya.jpg&imgrefurl=https%3A%2F%2Ftrucoslondres.com%2Faprender-ingles%2Fvocabulario%2Fplaya-ingles%2F&tbnid=JJyWXw5c0dlsRM&vet=12ahUKEwiSz5qas7r3AhWXPt8KHYWHBi4QMygBegUIARDgAQ..i&docid=crfr47keTLpt8M&w=1366&h=768&q=image%20playa&ved=2ahUKEwiSz5qas7r3AhWXPt8KHYWHBi4QMygBegUIARDgAQ"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
