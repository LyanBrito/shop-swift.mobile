import {Image, Text, View} from "react-native";
import {CardContainer} from "./styles";

export const CategoryCard = ({label, image}) => {
    return (
        <CardContainer>
            <Image source={image}/>
            <Text>
                {label}
            </Text>
        </CardContainer>
    )
}