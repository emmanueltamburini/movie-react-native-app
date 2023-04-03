import React, {createContext, useState, useMemo} from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  dispatchColor: (currentColors: ImageColors) => void;
  dispatchPreviousColor: (currentColors: ImageColors) => void;
}

interface ImageColors {
  primary: string;
  secondary: string;
}

const providerValueDummy = {
  colors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
  prevColors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
  dispatchColor: () => {},
  dispatchPreviousColor: () => {},
};

export const GradientContext = createContext<ContextProps>({
  ...providerValueDummy,
});

export const GradientProvider = ({children}: Props) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'red',
    secondary: 'blue',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const dispatchColor = (currentColors: ImageColors) =>
    setColors(currentColors);

  const dispatchPreviousColor = (currentColors: ImageColors) =>
    setPrevColors(currentColors);

  const providerValue = useMemo(
    () => ({
      colors,
      prevColors,
      dispatchColor,
      dispatchPreviousColor,
    }),
    [colors, prevColors],
  );

  return (
    <GradientContext.Provider value={providerValue}>
      {children}
    </GradientContext.Provider>
  );
};
