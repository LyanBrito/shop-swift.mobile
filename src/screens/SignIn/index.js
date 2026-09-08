import ShopSwiftLogo from "../../components/ShopSwiftLogo";
import {
    ButtonText, FooterAnchor, FooterAnchorText, FooterText, FormContainer,
    HeroContainer,
    HeroText,
    HeroTextHighLight,
    Input,
    InputLabel, InputPassword, InputWrapper,
    SignUpContainer,
    SubmitButton
} from "./style";
import {View} from "react-native";

export const SignInPage = () => {
    return (
        <FormContainer>
            <ShopSwiftLogo/>
            <HeroContainer>
                <HeroText>
                    Faça login e se <HeroTextHighLight>surpreenda</HeroTextHighLight>
                </HeroText>
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
                    <ButtonText>Entrar</ButtonText>
                </SubmitButton>
            </View>

            <SignUpContainer>
                <FooterText>
                    Não tem conta?
                </FooterText>
                <FooterAnchor>
                    <FooterAnchorText>
                        Criar conta
                    </FooterAnchorText>
                </FooterAnchor>
            </SignUpContainer>
        </FormContainer>
    )
}