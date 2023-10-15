import { IconBoxProps, Specialty } from "./Specialty";

type Props = {
    local: string;
    icon: IconBoxProps;
}

export const Location: React.FC<Props> = ({local, icon}) => {
    return (
        <Specialty 
            icon={icon}
            activeClick 
            professionalName={local} 
        />
    );
}