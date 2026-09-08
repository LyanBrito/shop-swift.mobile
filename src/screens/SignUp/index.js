import ShopSwiftLogo from "../../components/ShopSwiftLogo";
import {
    ButtonText, FooterAnchor, FooterAnchorText, FooterText, FormContainer,
    HeroContainer,
    HeroText,
    HeroTextHighLight,
    Input,
    InputLabel,
    InputPassword,
    InputWrapper, SignUpContainer, SubmitButton
} from "../SignIn/style";
import {View} from "react-native";

export const SignUpPage = () => {
    return (
        <FormContainer>
            <ShopSwiftLogo/>
            <HeroContainer>
                <HeroText>Crie uma conta</HeroText>
                <HeroTextHighLight>e descubra...</HeroTextHighLight>
            </HeroContainer>

            <View>
                <InputWrapper>
                    <View>
                        <InputLabel>Email:</InputLabel>
                        <Input/>
                    </View>
                    <View>
                        <InputLabel>Senha:</InputLabel>
                        <InputPassword/>
                    </View>
                </InputWrapper>

                <SubmitButton>
                    <ButtonText>Criar</ButtonText>
                </SubmitButton>
            </View>

            <SignUpContainer>
                <FooterText>
                    Já tem conta?
                </FooterText>
                <FooterAnchor>
                    <FooterAnchorText>
                        Fazer login
                    </FooterAnchorText>
                </FooterAnchor>
            </SignUpContainer>
        </FormContainer>
    )
}