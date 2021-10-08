import React from "react";
import { Image, Grid } from "semantic-ui-react";
// import { Container } from "@material-ui/core";

const ImageCard = ({ image }) => {
  return image.map((unitimage) => (
    <Grid rows="three" divided>
      <Grid.Column>
        <Grid.Row>
          <Image src={unitimage.urls.small} alt="" size="medium" bordered />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  ));
};

export default ImageCard;
