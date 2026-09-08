import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        gap: 40
    }
})`
    padding: 20px;
`;

export const HighlightsSection = styled.View`
    gap: 12px;
`;

export const TitleHighlight = styled.Text`
    font-size: 25px;
    font-weight: 700;
`;

export const TextHighlight = styled.Text`
    color: #375EE7;
`;

export const Scroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        gap: 20
    }
})``;

export const ProductsWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px;
    padding-bottom: 20px;
`