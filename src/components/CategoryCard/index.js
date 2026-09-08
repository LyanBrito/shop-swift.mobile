import {Image, Text, View} from "react-native";
import {CardContainer, CardLabel} from "./styles";

export const CategoryCard = ({label, image}) => {
    return (
        <CardContainer>
            <Image source={image}/>
            <CardLabel>
                {label}
            </CardLabel>
        </CardContainer>
    )
}