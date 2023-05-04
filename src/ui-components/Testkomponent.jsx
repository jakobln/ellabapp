/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MarketingPricing from "./MarketingPricing";
import { View } from "@aws-amplify/ui-react";
export default function Testkomponent(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="487px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Testkomponent")}
      {...rest}
    >
      <MarketingPricing
        display="flex"
        gap="24px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "MarketingPricing")}
      ></MarketingPricing>
    </View>
  );
}
