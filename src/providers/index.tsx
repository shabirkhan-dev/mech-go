import { ThemeProvider } from "@/providers/theme-provider";
import type { ReactNode } from "react";

type ProvidersProps = {
	children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
