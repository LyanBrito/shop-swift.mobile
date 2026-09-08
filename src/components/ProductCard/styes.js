import styled from "styled-components/native";

export const CardContainer = styled.View`
    width: 179px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 15px;
    border-radius: 7px;
    border: 1px solid #375EE7;
`

export const ProductPreview = styled.Image`
    width: 155px;
    height: 155px;
    object-fit: cover;
`

export const ProductTitle = styled.Text`
    font-weight: 600;
    font-size: 16px;
`
export const ProductPriceContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

export const ProductPrice = styled.Text`
    font-weight: 600;
    font-size: 16px;
    color: #375EE7;
`
export const AddProduct = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #375EE7;
    border-radius: 100%;
    padding: 2px 8px;
`

export const AddText = styled.Text`
    font-weight: 300;
    font-size: 20px;
    color: #FFF;
`