import styled from "styled-components/native";

export const FormContainer = styled.View`
    padding: 20px;
`;

export const HeroContainer = styled.View`
    padding: 70px 0 46px 0;
`;

export const HeroText = styled.Text`
    font-size: 40px;
    font-weight: 600;
`;

export const HeroTextHighLight = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: #375EE7;
`;

export const InputWrapper = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const InputLabel = styled.Text`
    font-size: 20px;
    padding-bottom: 6px;
`;

export const InputPassword = styled.TextInput.attrs({
    secureTextEntry: true
})`
    width: 100%;
    font-size: 18px;
    height: 50px;
    border: 1px solid black;
    border-radius: 7px;
`;

export const Input = styled.TextInput`
    width: 100%;
    font-size: 18px;
    height: 50px;
    border: 1px solid black;
    border-radius: 7px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 20px;
`

export const SubmitButton = styled.Pressable`
    background-color: #375EE7;
    margin-top: 60px;
    width: 100%;
    height: 64px;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
`

export const SignUpContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 4px;
    padding-top: 46px;
    margin: 0 auto;
`

export const FooterText = styled.Text`
    font-size: 16px;
    font-weight: 500;
`

export const FooterAnchor = styled.TouchableOpacity`
    align-items: center;
`

export const FooterAnchorText = styled.Text`
    color: #375EE7;
    font-weight: 500;
    font-size: 16px;
    text-decoration: underline;
`


