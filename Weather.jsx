import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { WiCloud } from "react-icons/wi";
import { IconContext } from "react-icons";

const Weather = ({ temperature }) => {
  return (
    <div>
      <IconContext value={{ size: "4em" }}>
        <WiCloud></WiCloud>
        <Typography display="inline" variant="h5" />
      </IconContext>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
