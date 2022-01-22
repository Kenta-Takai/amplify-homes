/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="313px"
      height="327px"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="313px"
        height="219px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="128px"
        height="19px"
        position="absolute"
        left="13px"
        top="224px"
        padding="0px 0px 0px 0px"
        children={home?.address}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="128px"
        height="19px"
        position="absolute"
        left="13px"
        top="260px"
        padding="0px 0px 0px 0px"
        children={`${"Price: $"}${home?.price}${"/night"}`}
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
