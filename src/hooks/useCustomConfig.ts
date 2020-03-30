import { useState, useEffect } from 'react';
import { MobileMenuConfig } from '../interfaces/MobileMenuConfig';
// import { MobileMenuConfig } from '../interfaces/MobileMenuConfig';

interface ConfigObject {
  [paramName: string]: string | undefined;
}

const useCustomConfig = (
  items: MobileMenuConfig | undefined,
  shouldContain: string[],
): ConfigObject | undefined => {
  const [customStyles, setCustomStyles] = useState<ConfigObject | undefined>();
  // debugger;

  // debugger;
  useEffect(() => {
    if (items) {
      const configObj = Object.entries(items).reduce((accum, [key, val]): ConfigObject => {
        if (shouldContain.includes(key)) {
          switch (key) {
            case 'primaryColor':
              return { ...accum, backgroundColor: val };
            case 'secondaryColor':
              // debugger;

              return { ...accum, backgroundColor: val };
            case 'fontColor':
              return { ...accum, color: val };
            default:
              return accum;
          }
        }

        return accum;
      }, {});

      setCustomStyles(configObj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return customStyles;
};

export default useCustomConfig;
