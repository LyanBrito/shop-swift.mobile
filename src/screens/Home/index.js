import {Container, HighlightsSection, ProductsWrapper, Scroll, TextHighlight, TitleHighlight} from "./style";
import ShopSwiftLogo from "../../components/ShopSwiftLogo";
import {Image, View} from "react-native";
import destaque1 from "../../assets/destaque1.png"
import destaque2 from "../../assets/destaque2.png"
import destaque3 from "../../assets/destaque3.png"
import shoeIcon from "../../assets/shoe-icon.png"
import gamesIcon from "../../assets/games-icon.png"
import eletronicIcon from "../../assets/eletronic-icon.png"
import cloathsIcon from "../../assets/cloaths-icon.png"
import productPlaceholder from "../../assets/productPlacego.png"
import {CategoryCard} from "../../components/CategoryCard";
import {ProductCard} from "../../components/ProductCard";

export const Home = () => {
    return (
        <Container>
            <ShopSwiftLogo/>

            <HighlightsSection>
                <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>

                <Scroll horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={destaque1}/>
                    <Image source={destaque2}/>
                    <Image source={destaque3}/>
                </Scroll>
            </HighlightsSection>
            <HighlightsSection>
                <TitleHighlight>Nossas <TextHighlight>Categorias</TextHighlight></TitleHighlight>

                <Scroll horizontal showsHorizontalScrollIndicator={false}>
                    <CategoryCard image={shoeIcon} label="Shoes"/>
                    <CategoryCard image={gamesIcon} label="Games"/>
                    <CategoryCard image={eletronicIcon} label="Eletronics"/>
                    <CategoryCard image={cloathsIcon} label="Cloaths"/>
                </Scroll>
            </HighlightsSection>

            <ProductsWrapper>
                <ProductCard image={productPlaceholder} name="Nome" price="1450" />
                <ProductCard image={productPlaceholder} name="Nome" price="1450" />
                <ProductCard image={productPlaceholder} name="Nome" price="1450" />
                <ProductCard image={productPlaceholder} name="Nome" price="1450" />
                <ProductCard image={productPlaceholder} name="Nome" price="1450" />
                <ProductCard image={productPlaceholder} name="Nome" price="1450" />
            </ProductsWrapper>
        </Container>
    )
}