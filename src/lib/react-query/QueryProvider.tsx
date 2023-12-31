// import React from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// import React from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       {process.env.NODE_ENV === "development" && (
//         <ReactQueryDevtools initialIsOpen={false} />
//       )}
//     </QueryClientProvider>
//   );
// };

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};


