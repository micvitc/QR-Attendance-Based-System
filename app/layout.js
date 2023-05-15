// app/layout.tsx
import DrawerExample from "@/components/Nav";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DrawerExample />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
