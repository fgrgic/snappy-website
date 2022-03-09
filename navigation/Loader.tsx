import { View, Text } from "react-native";
import React from "react";
import useCachedResources from "../hooks/useCachedResources";

type LoaderProps = {
  children: React.ReactNode;
};

const Loader = ({ children }: LoaderProps) => {
  const loaded = useCachedResources();

  if (!loaded) return null;

  return <>{children}</>;
};

export default Loader;
