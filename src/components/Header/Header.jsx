import logo from "../../assets/logo.svg";
import { Button } from "../Buttons/Button";
import { Input } from "../Inputs/Input";
import { Logo } from "../Logo/Logo";
import { DivHeader, FormStyle, HeaderStyle } from "./HeaderStyled";

export const Header = ({ filter, setSearch }) => {
  return (
    <HeaderStyle>
      <DivHeader>
        <Logo logo={logo} string={"Burguer kenzie"} />
        <FormStyle onSubmit={filter}>
          <Input
            type="seach"
            setSearch={setSearch}
            placeholder="Digitar Pesquisa"
          />
          <Button type={"submit"} nameButton="Pesquisar" />
        </FormStyle>
      </DivHeader>
    </HeaderStyle>
  );
};
