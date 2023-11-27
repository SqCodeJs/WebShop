import { useDispatch } from "react-redux";
import { toggleFlag } from "../../../../state/actions/flagsActions";
import { Twirl as Hamburger } from 'hamburger-react';

interface Props {
    isOpenNav: boolean;
}
const NavToggle: React.FC<Props> = ({ isOpenNav }) => {
    const dispatch = useDispatch();

    return (
        <Hamburger color="white" size={20} toggled={isOpenNav} toggle={() => dispatch(toggleFlag('navigation'))} />
    );
};

export default NavToggle;
