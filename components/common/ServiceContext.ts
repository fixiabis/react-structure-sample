import React, { useContext } from 'react';

export type ServiceContextValue = Record<string, (...params: any[]) => any>;

const ServiceContext = React.createContext<ServiceContextValue>({});

export const useServiceContext = <T>(name: string, params: any[] = []): T => {
  const services = useContext(ServiceContext);

  if (!services.hasOwnProperty(name)) {
    throw new Error(`服務 "${name}" 未注入`);
  }

  const useService = services[name];
  return useService(...params);
};

export default ServiceContext;
