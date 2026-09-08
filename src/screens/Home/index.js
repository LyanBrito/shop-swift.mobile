import {Container, HighlightsSection, Scroll, TextHighlight, TitleHighlight} from "./style";
import ShopSwiftLogo from "../../components/ShopSwiftLogo";
import {Image} from "react-native";
import destaque1 from "../../assets/destaque1.png"
import destaque2 from "../../assets/destaque2.png"
import destaque3 from "../../assets/destaque3.png"

export const Home = () => {
    return (
        <Container>
            <ShopSwiftLogo/>

            <HighlightsSection>
                <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>

                <Scroll horizontal showsVerticalScrollIndicator={false}>
                    <Image source={destaque1}/>
                    <Image source={destaque2}/>
                    <Image source={destaque3}/>
                </Scroll>
            </HighlightsSection>
            <HighlightsSection>
                <TitleHighlight>Nossas <TextHighlight>Categorias</TextHighlight></TitleHighlight>

                <Scroll horizontal showsVerticalScrollIndicator={false}>

                </Scroll>
            </HighlightsSection>
        </Container>
    )
}