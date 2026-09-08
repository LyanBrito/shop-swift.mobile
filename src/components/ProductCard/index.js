import {
    AddProduct,
    AddText,
    CardContainer,
    ProductPreview,
    ProductPrice,
    ProductPriceContainer,
    ProductTitle
} from "./styes";

export const ProductCard = ({image, name, price}) => {
    return (<CardContainer>
            <ProductPreview source={image}/>
            <ProductTitle>{name}</ProductTitle>
            <ProductPriceContainer>
                <ProductPrice>R$ {price}</ProductPrice>
                <AddProduct>
                    <AddText>+</AddText>
                </AddProduct>
            </ProductPriceContainer>
        </CardContainer>)
}