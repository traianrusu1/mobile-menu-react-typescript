import { createContext } from 'react';
import { MobileMenuConfig } from '../interfaces/MobileMenuConfig';

const ConfigContext = createContext<MobileMenuConfig | undefined>(undefined);

export default ConfigContext;
