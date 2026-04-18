// constants/queryKeys.ts

interface QueryKeys {
  ourTour: {
    packageTourList: (params: any) => string[];
    packageTourDetail: (params: string) => string[];
  };
  tripHistory: {
    tripHistoryList: () => string[];
  };
  common: {
    paymentMethodList: () => string[];
  };
}

export const QUERY_KEYS_CONSTANTS: QueryKeys = {
  ourTour: {
    packageTourList: (params: any) => ["package-tour-list", params],
    packageTourDetail: (params: string) => ["package-tour-detail", params],
  },
  tripHistory: {
    tripHistoryList: () => ["trip-history-list"],
  },
  common: {
    paymentMethodList: () => ["payment-method-list"],
  },
};
