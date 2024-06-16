import { FunctionComponent } from "react";

type ThemedImageProps = {
    src: string;
};

export const ThemedImage: FunctionComponent<ThemedImageProps> = ({ src }) => {
    return <img src={src} className={`size-[1.7rem] md:size-[2rem]`} />;
};

export default ThemedImage;
