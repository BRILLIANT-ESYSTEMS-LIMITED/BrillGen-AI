import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function AppLogo({ className, size = 200 }: { className?: string; size?: number }) {
	const { resolvedTheme, theme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	// A single BRILLGEN logo for both themes
	// For brand consistency, we're using the same logo for light and dark modes
	const logoSrc = "/groqlabs_logo-black.png"; // Continue using the existing file name for compatibility

	return (
		<div className={cn("flex flex-col items-center gap-2", className)}>
			<Image 
				src={logoSrc} 
				alt="BRILLGEN" 
				width={size} 
				height={size/2}
				style={{ width: 'auto', height: size/2 }}
				className="bg-black rounded-sm" // Always black background for consistent branding
				priority // Add priority loading for the logo
			/>
		</div>
	);
}
