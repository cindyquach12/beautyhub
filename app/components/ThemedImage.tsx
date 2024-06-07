import { useTheme } from "next-themes";
import { FunctionComponent } from "react";

type ThemedImageProps = {
    src: string;
};

export const ThemedImage: FunctionComponent<ThemedImageProps> = ({ src }) => {
    const { resolvedTheme } = useTheme();
    let invert;

    switch (resolvedTheme) {
        case "light":
            invert = "";
            break;
        case "dark":
            invert = "invert";
            break;
        default:
            src =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            break;
    }

    return <img src={src} className={`size-[2rem] ${invert}`} />;
};

export default ThemedImage;
