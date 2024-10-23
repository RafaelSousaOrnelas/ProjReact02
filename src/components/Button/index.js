import { ButtonContainer } from "./styles";

function Button({onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            buscar
        </ButtonContainer>
    )
}

export default Button;