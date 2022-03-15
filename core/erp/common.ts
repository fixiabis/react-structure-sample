export interface OptionOfSupplier {}

export interface OptionDataService {
  getAll: () => Promise<any>;
}

export interface NotificationService {
  notify: (content: React.ReactNode) => Promise<void>;
}

export interface ConfirmationService {
  getConfirmation: () => Promise<boolean>;
}
