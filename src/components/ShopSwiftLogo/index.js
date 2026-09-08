import styled from "styled-components/native";
import logo from "../../assets/logo-icon.png";

const LogoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Logo = styled.Image`
    width: 63px;
    height: 63px;
`;

const LogoText = styled.Text`
    font-size: 25px;
    font-weight: 800;
`;

export default function ShopSwiftLogo() {
    return (
        <LogoContainer>
            <Logo source={logo}/>
            <LogoText>ShopSwift</LogoText>
        </LogoContainer>
    )
}