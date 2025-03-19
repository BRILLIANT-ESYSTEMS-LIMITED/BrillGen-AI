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

	// Use white logo for dark theme, black logo for light theme
	const logoSrc = resolvedTheme === 'dark' ? "/groqlabs_logo-white.png.png" : "/groqlabs_logo-black.png.png";

	if (!mounted) {
		return null; // Prevent flash of wrong theme logo
	}

	return (
		<div className={cn("flex flex-col items-center gap-2", className)}>
			<Image 
				src={logoSrc} 
				alt="BRILLGEN" 
				width={size} 
				height={size/2}
				style={{ width: 'auto', height: size/2 }}
				className="rounded-sm"
				priority
			/>
		</div>
	);
}
