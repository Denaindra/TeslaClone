import Section from "./Section";
import HomeStyle from "../css/Home.module.css";
import React from "react";
import * as modleImage from "../constant/StaticImages";
import Header from "./Header";
import { useDispatch } from "react-redux";
import {addModelList} from "../actions/actions"

function Home() {
  const dispatch = useDispatch();
  dispatch(addModelList());

  return (
    <React.Fragment>
      <Header />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtn="custom Order"
        rightBtn="Exsiting inventory"
        backgroundImage={modleImage.models}
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtn="custom Order"
        rightBtn="Exsiting inventory"
        backgroundImage={modleImage.modely}
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtn="custom Order"
        rightBtn="Exsiting inventory"
        backgroundImage={modleImage.model3}
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtn="custom Order"
        rightBtn="Exsiting inventory"
        backgroundImage={modleImage.modelx}
      />

      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftBtn="Order Now"
        rightBtn="Learn More"
        backgroundImage={modleImage.solarPanelimg}
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        backgroundImage={modleImage.solarRoofimg}
      />

      <Section
        title="Solar Roof"
        leftBtn="Order Now"
        backgroundImage={modleImage.accesoriesimg}
      />
    </React.Fragment>
  );
}

export default Home;
